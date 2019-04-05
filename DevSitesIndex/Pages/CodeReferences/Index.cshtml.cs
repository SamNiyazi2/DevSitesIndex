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
using System.Text.RegularExpressions;

namespace DevSitesIndex.Pages.CodeReferences
{
    // 09/05/2018 03:31 pm - SSN - Use SearchPromptModel
    public class IndexModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        [BindProperty]
        public string SearchText { get; set; }

        // 02/07/2019 02:41 pm - SSN - Adding doHeightlight_v02  and doDecodeHtml 
        [BindProperty]
        public bool doHeightlight_v02 { get; set; } = true;


        // 02/07/2019 04:51 pm - SSN - Adding searchOptionCustomClassName and refactoring searchOptionFeedbackMessage
        public string searchOptionCustomClassName { get; set; }

        public HtmlString searchOptionFeedbackMessage { get; set; }



        [BindProperty]
        public bool doDecodeHtml { get; set; }


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

                CodeReference = await _context.CodeReferences.OrderByDescending(r => r.DateModified).ThenByDescending(r => r.DateAdded).Take(50).ToListAsync();
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
                // 02/08/2019 03:14 am - SSN - Added order
                // CodeReference = await _context.CodeReferences.Take(50).ToListAsync();
                CodeReference = await _context.CodeReferences.OrderByDescending(r => r.DateModified).ThenByDescending(r => r.DateAdded).Take(50).ToListAsync();

                return Page();
            }

            return await getPageWithSearchText();
        }


        // 03/27/2019 04:23 am - SSN - Adding
        string cleanseSearchString(string inputText)
        {
            // Take out any non alphanumeric character
            string pattern = @"(\w*)(\W*)";
            string replacement = " $1 ";
            string result = Regex.Replace(inputText, pattern, replacement);

            return result;
        }

        // 03/27/2019 04:23 am - SSN - Adding
        bool includeWord(string word)
        {
            if (string.IsNullOrEmpty(word) || string.IsNullOrWhiteSpace(word)) return false;
            return !"near,and,or,".Contains(word.ToLower());
        }


        public async Task<IActionResult> getPageWithSearchText()
        {
            // 03/27/2019 03:33 pm - SSN - Clean up search text of commands and punctuation.
            string tempSearchString = cleanseSearchString(SearchText);
            tempArray = tempSearchString.ToLower().Split().Where(r => includeWord(r)).Select(r => r.Trim().ToLower()).ToArray();

            string temp2 = "";

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



            var x = (doDecodeHtml);

            // 03/22/2019 09:32 pm - SSN - Replaced - ToListAsync<CodeReference>
            // 04/03/2019 08:55 pm - SSN - Adding validation

            try
            {
                CodeReference = await _context.CodeReferences
                        .FromSql("DemoSites.CodeReferences_FullTextSearch {0}", SearchText).ToListAsync<CodeReference>();

            }
            catch (Exception)
            {
                ModelState.AddModelError("SearchText", "Invalid syntax");
            }

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

        public string HighlightText(string s)
        {
            // 02/08/2019 02:27 am - SSN - Correct logic - return s;
            if (tempArray == null) return s;
            if (string.IsNullOrEmpty(s)) return s;

            string[] allText = s.ToLower().Split().Select(r4 => r4.Trim()).ToArray();

            s = s.Replace("<", "&lt;");

            foreach (string w in tempArray)
            {
                s = s.Replace(w, $"<i>{w}</i>", StringComparison.CurrentCultureIgnoreCase);
            }

            return s;


        }


        // 02/07/2019 05:03 pm - SSN - Revise so we can set a custom class name for the containing div. 
        public void searchResultsfeedbackMessage_prep()
        {
            // 04/03/2019 08:58 pm - SSN - Adding validation

            if (CodeReference == null) return;


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

            if (sb.Length > 0)
            {
                searchOptionCustomClassName = "searchOption_tall";
            }


            searchOptionFeedbackMessage = new HtmlString(sb.ToString());

        }

        // 02/08/2019 02:36 pm - SSN - Adding for debugging
        public bool doShowPos { get; set; } = false;
        public HtmlString ShowPos(string message)
        {
            if (!doShowPos) return null;
            return new HtmlString(string.Format("<h6>[H-{0}]</h6>", message));
        }
    }
}
