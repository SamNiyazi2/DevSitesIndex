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
using Microsoft.ApplicationInsights.Channel;
using Microsoft.ApplicationInsights;

namespace DevSitesIndex.Pages.TimeLogs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize
    [Authorize]
    public class IndexModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }


        // 08/28/2019 04:29 am - SSN - [20190828-0427] - [002] - Apply sorting and paging to timelogs index
        //public IList<TimeLog> TimeLog { get; set; }
        public PaginatedList<TimeLog> TimeLog { get; set; }
        public HeaderWithSortLinks headerWithSortLinks { get; set; }
        public TablePager tablePager { get; set; }



        // 08/28/2019 04:32 am - SSN - [20190828-0427] - [003] - Apply sorting and paging to timelogs index
        public async Task OnGetAsync(string sortOrder, string desc, int? pageIndex)
        {
            sortOrder = sortOrder ?? "StartTime";
            desc = desc ?? "true";

            headerWithSortLinks = new HeaderWithSortLinks();
            headerWithSortLinks.TestMessageForDebugging = "This is a call from project index page";
            headerWithSortLinks.AddColumns("StartTime");
            headerWithSortLinks.AddColumns("TotalSeconds");
            headerWithSortLinks.AddColumns("Job");
            headerWithSortLinks.AddColumns("discipline");
            headerWithSortLinks.AddColumns("DateAdded");
            headerWithSortLinks.AddColumns("DateModified");
            headerWithSortLinks.SetupHeaders<TimeLog>("/timelogs/", sortOrder, desc);

            tablePager = new TablePager();

            // 08/28/2019 08:19 am - SSN - [20190828-0819] - [001] - Adding Application Insights

            TelemetryClient telemetry = new TelemetryClient();
            //throw new Exception("DevSitesIndex_Test_Debug_20190828-0748:  Testing posting record.");
            telemetry.TrackEvent("DemoSite-20190828-0802: Timelog Index");
            telemetry.TrackPageView("DemoSite-20190828-0818: Timelog Index");


            try
            {
                throw new Exception("DemoSite-20190828-0830: Testing exception");
            }
            catch (Exception ex)
            {
                Dictionary<string, string> dic = new Dictionary<string, string>();
                dic.Add("ErrorCode", "DemoSite-20190828-0839");
                dic.Add("ErrorMessage", "DevSiteIndexContext Timelog index page test");

                telemetry.TrackException(ex);
            }


            // 04/19/2019 04:41 pm - SSN - Add sort
            // 04/20/2019 11:13 am - SSN - [20190420-1109] - Add AsNoTracking to index pages

            //TimeLog = await _context.TimeLog
            //    .Include(t => t.discipline)
            //    .Include(t => t.job)
            //    .OrderByDescending(r => r.StartTime)
            //    .AsNoTracking()
            //    .ToListAsync();


            // 08/28/2019 04:38 am - SSN - [20190828-0427] - [004] - Apply sorting and paging to timelogs index


            IQueryable<TimeLog> _timelog = _context.TimeLog
                .Include(t => t.discipline)
                .Include(t => t.job);

            TimeLog = await PaginatedList<TimeLog>.GetSourcePage(_timelog, sortOrder, desc, pageIndex, 10);

            tablePager.SetupButtons<TimeLog>(TimeLog, "/timelogs", sortOrder, desc);



        }
    }
}
