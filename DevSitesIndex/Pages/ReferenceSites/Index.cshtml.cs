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
            ReferenceSite = await _context.ReferenceSites.ToListAsync();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (string.IsNullOrEmpty(SearchText))
            {
                ReferenceSite = await _context.ReferenceSites.ToListAsync();
                return Page();
            }


            tempArray = SearchText.ToLower().Split().Where(r => r.Trim() != "").Select(r => r.Trim().ToLower()).ToArray();

            //string temp = SearchText.ToLower();
            //ReferenceSite = await _context.ReferenceSites.Where(r => r.SiteTitle.ToLower().Contains(SearchText.ToLower())).ToListAsync();


            ReferenceSite = await (from first in _context.ReferenceSites
                                   where check1(first)
                                    select first).ToListAsync();


            return Page();
        }
 
 

    // 09/06/2018 05:10 pm - SSN - Copied from CodeReference [20180906-1710]
    string[] tempArray = null;

        bool check1(ReferenceSite r2)
        {
            if (tempArray == null) return false;
            if (string.IsNullOrEmpty(r2.SiteTitle)) return false;

            int counter = r2.SiteTitle.Split().Count(r => tempArray.Any(y => y == r.ToLower()));
            return counter > 0;

        }

    }
}
