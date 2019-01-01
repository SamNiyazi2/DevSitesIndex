using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;

namespace DevSitesIndex.Pages.ReferenceSites
{
    public class IndexModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        [BindProperty]
        public string SearchText { get; set; }



        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public IList<ReferenceSite> ReferenceSite { get; set; }

        public async Task OnGetAsync()
        {
            await getDefaultList();
        }

        private async Task getDefaultList()
        {
            ReferenceSite = await _context.ReferenceSites
                                               .OrderByDescending(r => r.DateAdded).ToListAsync();
        }

        List<string> tempArray2 = null;


        public async Task<IActionResult> OnPostAsync()
        {
            if (string.IsNullOrEmpty(SearchText))
            {
                await getDefaultList();

                return Page();
            }

            tempArray2 = SearchText.ToLower().Split().Where(r => r.Trim() != "").Select(r => r.Trim().ToLower()).ToList();

            // 11/24/2018 03:41 pm - SSN - Revised
            ReferenceSite = await (from first in _context.ReferenceSites
                                   where check2(first)
                                   select first)
                                   .OrderByDescending(r => r.DateAdded).ToListAsync();


            return Page();


        }


        // 11/24/2018 03:42 pm - SSN - Added
        bool check2(ReferenceSite r2)
        {
            if (tempArray2 == null) return false;

            bool f1 = tempArray2.Any(r => r2.SiteTitle.ToLower().Contains(r.ToLower()));
            bool f2 = tempArray2.Any(r => r2.SiteURL.ToLower().Contains(r.ToLower()));
            return f1 || f2;

        }

    }
}
