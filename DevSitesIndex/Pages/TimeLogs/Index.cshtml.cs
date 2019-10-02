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
        public PageUtil pageUtil { get; set; }



        // 08/28/2019 04:32 am - SSN - [20190828-0427] - [003] - Apply sorting and paging to timelogs index
        public async Task OnGetAsync(string columnName, string desc, int? pageIndex)
        {

            Microsoft.AspNetCore.Http.HttpRequest r = Request;


            // 08/28/2019 08:19 am - SSN - [20190828-0819] - [001] - Adding Application Insights

            TelemetryClient telemetry = new TelemetryClient();
            // Removed 08/29/2019 12:58 pm - telemetry.TrackEvent("DemoSite-20190828-0802: Timelog Index");
            telemetry.TrackPageView("DemoSite-20190828-0818: Timelog Index");



            columnName = columnName ?? "StartTime";
            desc = desc ?? "true";

            pageUtil = new PageUtil();
            pageUtil.AddColumns("StartTime");
            pageUtil.AddColumns("TotalSeconds");
            pageUtil.AddColumns("job.JobTitle");
            pageUtil.AddColumns("discipline");
            pageUtil.AddColumns("DateAdded");
            pageUtil.AddColumns("DateModified");
            pageUtil.SetupHeaders<TimeLog>("/timelogs/", columnName, desc);




            // 04/19/2019 04:41 pm - SSN - Add sort


            // 08/28/2019 04:38 am - SSN - [20190828-0427] - [004] - Apply sorting and paging to timelogs index


            IQueryable<TimeLog> _timelog = _context.TimeLog
                .Include(t => t.discipline)
                .Include(t => t.job);

            TimeLog = await PaginatedList<TimeLog>.GetSourcePage(_timelog, columnName, desc, pageIndex, 10);

            pageUtil.SetupButtons<TimeLog>(TimeLog, "/timelogs", columnName, desc);



        }
    }
}
