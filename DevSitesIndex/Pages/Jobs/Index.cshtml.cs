using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using System.Diagnostics;
using Microsoft.AspNetCore.Authorization;
using DevSitesIndex.Models;
using Microsoft.ApplicationInsights;
using System.Text;
using System.Linq.Expressions;

namespace DevSitesIndex.Pages.Jobs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class IndexModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        // 08/29/2019 12:54 pm - SSN - [20190829-1253] - [002] - Adding paging and sorting to jobs index
        //public IList<Job> Job { get; set; }
        public PaginatedList<Job> Job { get; set; }
        public HeaderWithSortLinks headerWithSortLinks { get; set; }
        public TablePager tablePager { get; set; }



        // 08/29/2019 12:57 pm - SSN - [20190829-1253] - [003] - Adding paging and sorting to jobs index

        public async Task OnGetAsync(string sortOrder, string desc, int? pageIndex)
        {
            sortOrder = sortOrder ?? "StartTime";
            desc = desc ?? "true";

            headerWithSortLinks = new HeaderWithSortLinks();
            headerWithSortLinks.TestMessageForDebugging = "This is a call from project index page";
            headerWithSortLinks.AddColumns("project.ProjectTitle");
            headerWithSortLinks.AddColumns("JobTitle");
            headerWithSortLinks.AddColumns("DateAdded");
            headerWithSortLinks.AddColumns("MostRecentActivity");
            headerWithSortLinks.AddColumns("ActivityAge");

            headerWithSortLinks.SetupHeaders<Job>("/jobs/", sortOrder, desc);

            tablePager = new TablePager();

            TelemetryClient telemetry = new TelemetryClient();
            telemetry.TrackPageView("DemoSite-20190829-1257: Jobs Index");

            

            // 08/29/2019 01:00 pm - SSN - [20190829-1253] - [004] - Adding paging and sorting to jobs index

            //// 04/20/2019 11:15 am - SSN - [20190420-1109] - Add AsNoTracking to index pages

            ////List<Job> _Job = await _context.Job
            ////     .Include(j => j.project.company)
            ////     .Include(j => j.timelogs)
            ////     .AsNoTracking()
            ////     .ToListAsync();
            

            IQueryable<Job> _Jobs = _context.Job
                .Include(j => j.project)
                .Include(j => j.timelogs);
            
            Job = await PaginatedList<Job>.GetSourcePage(_Jobs, sortOrder, desc, pageIndex, 50);
            
            tablePager.SetupButtons<Job>(Job, "/jobs", sortOrder, desc);

            


        }
    }
}
