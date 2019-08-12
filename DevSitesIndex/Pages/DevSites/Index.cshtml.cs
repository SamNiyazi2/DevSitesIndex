using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;

namespace DevSitesIndex.Pages.DevSites
{
    public class IndexModel : PageModel
    {

        // 12/31/2018 09:28 pm - SSN

        [BindProperty]
        public string SearchText { get; set; }



        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public IList<DevSite> DevSite { get; set; }

        public async Task OnGetAsync()
        {
            // 10/12/2018 03:53 pm - SSN - Added OrderByDescending (r=>r.DateUpdated 
            // 06/01/2019 11:22 am - SSN - Include
            DevSite = await _context.DevSites.Include(r => r.SoftwareCode).OrderByDescending(r => r.DateUpdated ?? r.DateAdded).ToListAsync();
        }


        // 12/31/2018 09:34 pm - SSN

        public async Task<IActionResult> OnPostAsync()
        {
            if (string.IsNullOrEmpty(SearchText))
            {
                DevSite = await _context.DevSites.OrderByDescending(r => r.DateUpdated ?? r.DateAdded).ToListAsync();
                return Page();
            }

            // 08/12/2019 04:48 am - SSN - [20190812-0345] - [005] - Apply fulltext search
            // DevSite = await GetData();
            await GetData();

            return Page();
        }


        async Task<IList<DevSite>> GetData_v01()
        {

            IEnumerable<string> tempList = SearchText.ToLower().Split().Where(r => r.Trim() != "").Select(r => r.Trim().ToLower());
            return await (_context.DevSites

                                .SelectMany(
                                x => tempList,
                                  (a1, b1) => new { a1, b1 })
                                .Where(z =>
                              (z.a1.SiteTitle ?? "").ToLower().Contains(z.b1)
                              ||
                              (z.a1.SolutionName ?? "").ToLower().Contains(z.b1)
                              ||
                              (z.a1.Solution_Details ?? "").ToLower().Contains(z.b1)
                                )

                                .Select(y => y.a1)
                                .OrderByDescending(r => r.DateUpdated ?? r.DateAdded)
                                .ToListAsync());
        }


        async Task<IList<DevSite>> GetData_v02()
        {

            IEnumerable<string> tempList = SearchText.ToLower().Split().Where(r => r.Trim() != "").Select(r => r.Trim().ToLower());
            return await (_context.DevSites
                            .Where(z =>
                              (
                                tempList.Any(x => (z.SiteTitle ?? "").ToLower().Contains(x))
                                ||
                                tempList.Any(x => (z.SolutionName ?? "").ToLower().Contains(x))
                                ||
                                tempList.Any(x => (z.Solution_Details ?? "").ToLower().Contains(x))
                              )
                              )
                             .OrderByDescending(r => r.DateUpdated ?? r.DateAdded)
                             .ToListAsync());
        }


        // 08/12/2019 04:37 am - SSN - [20190812-0345] - [004] - Apply fulltext search
        // Replaced GetData_v02

        // async Task<IList<DevSite>> GetData()
        async Task GetData()
        {

            try
            {
                DevSite = await _context.DevSites.FromSql("DemoSites.DevSites_FullTextSearch {0}", SearchText).AsNoTracking().ToListAsync<DevSite>();
                if (DevSite == null || DevSite != null && DevSite.Count == 0)
                {
                    ModelState.AddModelError("SearchText", "No match.");
                }

            }
            catch (Exception)
            {
                ModelState.AddModelError("SearchText", "Invalid syntax");
                // return await _context.DevSites.Where(r => r.Id == -1).AsNoTracking().ToListAsync<DevSite>(); ;
            }

        }


    }
}
