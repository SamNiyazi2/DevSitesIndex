using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using System.Text;
using Microsoft.AspNetCore.Html;

namespace DevSitesIndex.Pages.CodeReferences
{
    // 09/05/2018 03:31 pm - SSN - Use SearchPromptModel
    public class IndexModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        [BindProperty]
        public string SearchText { get; set; }


        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public IList<CodeReference> CodeReference { get; set; }

        // 09/26/2018 08:01 am - SSN - Adding passing in SearchText
        public async Task OnGetAsync(string searchText)
        {
            // 09/26/2018 08:15 am - SSN - Revised to include search
            if (string.IsNullOrEmpty(searchText))
            {
                // CodeReference = await _context.CodeReferences.Take(50).ToListAsync();

                // 01/28/2019 10:42 am - SSN - Performance issue on azure
                //CodeReference = await _context.CodeReferences.OrderByDescending( r=> r.DateModified>r.DateAdded?r.DateModified:r.DateAdded).Take(50).ToListAsync();

                CodeReference = await _context.CodeReferences.OrderByDescending( r=> r.DateModified).ThenByDescending(r=>r.DateAdded).Take(50).ToListAsync();
            }
            else
            {
                SearchText = searchText;
                await getPageWithSearchText();
            }
        }


        // 09/05/2018 07:02 pm - SSN
        public async Task<IActionResult> OnPostAsync()
        {
            // [20180906-1710]

            if (string.IsNullOrEmpty(SearchText))
            {
                CodeReference = await _context.CodeReferences.Take(50).ToListAsync();
                return Page();
            }

            return await getPageWithSearchText();
        }

        public async Task<IActionResult> getPageWithSearchText()
        {
            tempArray = SearchText.ToLower().Split().Where(r => r.Trim() != "").Select(r => r.Trim().ToLower()).ToArray();

            //if ( false )
            //{


            //// CodeReference = await _context.CodeReferences.ToListAsync();

            //CodeReference = await (from first in _context.CodeReferences
            //                           //                 from second in tempArray
            //                       where check1(first.CodeBlock)
            //                       // where second.Count ( r=>  false) > 0
            //                       select new CodeReference
            //                       {
            //                           CodeBlock = HighlightText(first.CodeBlock),
            //                           DateAdded = first.DateAdded,
            //                           DateModified = first.DateModified,
            //                           Id = first.Id,
            //                           SourceAddress = first.SourceAddress
            //                       }).Take(50).ToListAsync();

            //}

            //  var q = from o in _context.CodeReferences where "CONTAINS({0},{1})".SQL<bool>(o.CodeBlock, SearchText) select o;

            var entities = await _context.CodeReferences
           .FromSql("DemoSites.CodeReferences_FullTextSearch {0}", SearchText).ToListAsync();


            CodeReference = (from first in entities
                             select new CodeReference
                             {
                                 CodeBlock = HighlightText(first.CodeBlock),
                                 DateAdded = first.DateAdded,
                                 DateModified = first.DateModified,
                                 Id = first.Id,
                                 SourceAddress = first.SourceAddress
                             }).ToList();


            return Page();
        }

        // [20180906-1710]
        string[] tempArray = null;


        //bool check1(string s)
        //{
        //    if (tempArray == null) return false;
        //    if (string.IsNullOrEmpty(s)) return false;

        //    int counter = s.Split().Count(r => tempArray.Any(y => y == r.ToLower()));
        //    return counter > 0;

        //}

        string HighlightText(string s)
        {
            if (tempArray == null) return "";
            if (string.IsNullOrEmpty(s)) return "";

            string[] allText = s.ToLower().Split().Select(r4 => r4.Trim()).ToArray();

            s = s.Replace("<", "&lt;");

            foreach (string w in tempArray)
            {
                s = s.Replace(w, $"<i>{w}</i>", StringComparison.CurrentCultureIgnoreCase);
            }

            return s;


        }


        public HtmlString searchResultsfeedbackMessage()
        {
            StringBuilder sb = new StringBuilder();

            if (!string.IsNullOrEmpty(SearchText))
            {
                int recordsFound = CodeReference.Count;
                string s = recordsFound > 1 ? "s" : "";

                if (recordsFound > 0)
                {
                    sb.Append($"<p class='alert alert-info'>Search results found {recordsFound} record{s}.</p>");

                    if (recordsFound == 50)
                    {
                        sb.Append($"<p class='alert alert-warning'>Only the top 50 records will be shown.</p>");
                    }
                }
                else
                {
                    sb.Append($"<p class='alert alert-danger'>No records were found.</p>");
                }
            }

            return new HtmlString(sb.ToString());
        }
    }
}
