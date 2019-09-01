using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;
using DevSitesIndex.Models;
using Microsoft.AspNetCore.Html;

namespace DevSitesIndex.Pages.DevSites
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
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


        // 09/01/2019 01:12 pm - SSN - [20190901-1225] - [003] - Add Job_DevSite table - Adding sorting and paging

        // public IList<DevSite> DevSite { get; set; }
        public PaginatedList<DevSite> DevSites { get; set; }
        public HeaderWithSortLinks headerWithSortLinks { get; set; }
        public TablePager tablePager { get; set; }

        public string FormActionUrl { get; set; }


        public async Task OnGetAsync(string sortOrder, string desc, int? pageIndex)
        {

            sortOrder = sortOrder ?? "DateAdded";
            desc = desc ?? "false";


            // 10/12/2018 03:53 pm - SSN - Added OrderByDescending (r=>r.DateUpdated 
            // 06/01/2019 11:22 am - SSN - Include


            // DevSite = await _context.DevSites.Include(r => r.SoftwareCode).OrderByDescending(r => r.DateUpdated ?? r.DateAdded).ToListAsync();

            headerWithSortLinks = new HeaderWithSortLinks();
            headerWithSortLinks.TestMessageForDebugging = "This is a call from project index page";
            headerWithSortLinks.AddColumns("SiteTitle");
            headerWithSortLinks.AddColumns("SoftwareCode.SoftwareTitle");
            headerWithSortLinks.AddColumns("DateAdded");
            headerWithSortLinks.AddColumns("DateUpdated");

            tablePager = new TablePager();

            await GetData(sortOrder, desc, pageIndex);
        }




        // 12/31/2018 09:34 pm - SSN

        public async Task<IActionResult> OnPostAsync(string sortOrder, string desc, int? pageIndex)
        {
            pageIndex = 1;

            if (string.IsNullOrEmpty(SearchText))
            {
                await GetData(sortOrder, desc, pageIndex);
                return Page();
            }

            // 08/12/2019 04:48 am - SSN - [20190812-0345] - [005] - Apply fulltext search
            // DevSite = await GetData();
            await GetData(sortOrder, desc, pageIndex);

            return Page();
        }




        // 08/12/2019 04:37 am - SSN - [20190812-0345] - [004] - Apply fulltext search

        // 09/01/2019 01:12 pm - SSN - [20190901-1225] - [003] - Add Job_DevSite table - Adding sorting and paging
        // async Task<IList<DevSite>> GetData()
        async Task GetData(string sortOrder, string desc, int? pageIndex)
        {

            try
            {


                IQueryable<DevSite> _DevSites;

                if (string.IsNullOrWhiteSpace(SearchText))
                {
                    _DevSites = _context.DevSites.Include(r => r.SoftwareCode).OrderByDescending(r => r.DateUpdated ?? r.DateAdded);
                }
                else
                {
                    _DevSites = _context.DevSites.FromSql("DemoSites.DevSites_FullTextSearch {0}", SearchText).AsNoTracking();
                }

                DevSites = await PaginatedList<DevSite>.GetSourcePage(_DevSites, sortOrder, desc, pageIndex, 20);




                FormActionUrl = Util.FormHtmlUtil.GetFormActionUrl("/DevSites", sortOrder, desc, pageIndex);

                headerWithSortLinks.SetupHeaders<DevSite>("/DevSites/", sortOrder, desc);

                tablePager.SetupButtons<DevSite>(DevSites, "/DevSites", sortOrder, desc);



                if (DevSites == null || DevSites != null && DevSites.Count == 0)
                {
                    ModelState.AddModelError("SearchText", "No match.");
                }

            }
            catch (Exception ex)
            {
                ModelState.AddModelError("SearchText", "Invalid syntax (SQL Server fulltext)");
            }




        }


    }
}
