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
using Microsoft.ApplicationInsights;
using SSN_GenUtil_StandardLib;

namespace DevSitesIndex.Pages.TimeLogs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize
    // 03/10/2022 02:12 pm - SSN - [20220310-1358] - [006] - Allow anonymous 
    // [Authorize]
    public class IndexModel : PageModel
    {

        // 03/21/2022 02:21 pm - SSN - [20220321-1408] - [004] - Takeout TelemetryClient - Use logger

        private readonly DevSitesIndex.Entities.DevSitesIndexContext context;
        private readonly ILogger_SSN logger;

        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext _context, ILogger_SSN _logger)
        {
            this.context = _context;
            this.logger = _logger;
        }


        // 08/28/2019 04:29 am - SSN - [20190828-0427] - [002] - Apply sorting and paging to timelogs index
        //public IList<TimeLog> TimeLog { get; set; }
        public PaginatedList<TimeLog> TimeLog { get; set; }
        public PageUtil pageUtil { get; set; }


        // 06/25/2021 11:17 am - SSN - Filter properties
        [BindProperty]
        public string startDate { get; set; }

        [BindProperty]
        public string endDate { get; set; }

        [BindProperty]
        public int projectID { get; set; }

        [BindProperty]
        public int jobID { get; set; }



        // 08/28/2019 04:32 am - SSN - [20190828-0427] - [003] - Apply sorting and paging to timelogs index
        public async Task OnGetAsync(string columnName, string desc, int? pageIndex, string startDate_q, string endDate_q, string projectId_q, string jobId_q)
        {
            await processAsync(columnName, desc, pageIndex, startDate_q, endDate_q, projectId_q, jobId_q);
        }


        // 06/25/2021 04:03 am - SSN - Testing setting date range
        public async Task OnPostAsync(string columnName, string desc, int? pageIndex)
        {
            await processAsync(columnName, desc, pageIndex);
        }












        // 06/25/2021 04:03 am - SSN - Testing setting date range
        public async Task processAsync(string columnName, string desc, int? pageIndex, string startDate_q = null, string endDate_q = null, string projectId_q = null, string jobId_q = null)
        {

            Microsoft.AspNetCore.Http.HttpRequest r = Request;


            // 08/28/2019 08:19 am - SSN - [20190828-0819] - [001] - Adding Application Insights

            // 03/21/2022 02:19 pm - SSN - [20220321-1408] - [003] - Takeout TelemetryClient - Use logger

            //TelemetryClient telemetry = new TelemetryClient();
            //// Removed 08/29/2019 12:58 pm - telemetry.TrackEvent("DemoSite-20190828-0802: Timelog Index");
            //telemetry.TrackPageView("DemoSite-20190828-0818: Timelog Index");

            logger.TrackPageView("DemoSite-20190828-0818-B: Timelog Index");


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

            DateTime startDate_filter = DateTime.MinValue;
            DateTime endDate_filter = DateTime.MaxValue;

            if (!DateTime.TryParse(startDate_q, out startDate_filter))
            {
                DateTime.TryParse(startDate, out startDate_filter);
            }
            else
            {
                startDate = startDate_filter.ToString("yyyy-MM-dd");
            }


            if (!DateTime.TryParse(endDate_q, out endDate_filter))
            {
                if (!DateTime.TryParse(endDate, out endDate_filter))
                {
                    endDate_filter = DateTime.MaxValue;
                }
            }
            else
            {
                endDate = endDate_filter.ToString("yyyy-MM-dd");
            }



            if (startDate_filter != DateTime.MinValue && endDate_filter != DateTime.MaxValue)
            {
                pageUtil.AddOtherHtmlInputToSave("startDate_q", startDate_filter.ToString("yyyy-MM-dd"));
                pageUtil.AddOtherHtmlInputToSave("endDate_q", endDate_filter.ToString("yyyy-MM-dd"));
            }







            // 06/25/2021 10:34 am - SSN - [20210625-1034] - [001] - Timelog index page filter option - Project
            int projectId_filter = 0;
            if (!int.TryParse(projectId_q, out projectId_filter))
            {
                projectId_filter = projectID;
            }
            else
            {
                projectID = projectId_filter;
            }


            if (projectId_filter > 0)
            {
                pageUtil.AddOtherHtmlInputToSave("projectId_q", projectId_filter.ToString());
            }





            // 06/25/2021 11:18 am - SSN - [20210625-1118] - [001] - Timelog index page filter option - Job
            int jobId_filter = 0;
            if (!int.TryParse(jobId_q, out jobId_filter))
            {
                jobId_filter = jobID;
            }
            else
            {
                jobID = jobId_filter;
            }


            if (jobId_filter > 0)
            {
                pageUtil.AddOtherHtmlInputToSave("jobId_q", jobId_filter.ToString());
            }









            IQueryable<TimeLog> _timelog = context.TimeLog
                .Include(t => t.discipline)

                // 06/06/2021 02:27 am - SSN - [20210606-0227] - [001] - Testng for deployment
                // 11/26/2022 04:16 pm - SSN - Needed to display link to devSite
                // .Include(t => t.job_Lineitem)
                
                .Include( r=>r.job_Lineitem).ThenInclude(r=>r.DevSite_Job_LineItems)


                .Include(t => t.job).ThenInclude(t => t.project);






            // 06/24/2021 11:10 pm - SSN - [20210624-2221] - [003] - Timelog index page filter option - date range
            // Todo Testing
            if (startDate_filter != DateTime.MinValue && endDate_filter != DateTime.MaxValue)
            {
                _timelog = _timelog.Where(t => t.StartTime > startDate_filter && t.StartTime.AddSeconds(t.TotalSeconds ?? 0) <= endDate_filter);

            }

            if (projectId_filter > 0)
            {
                _timelog = _timelog.Where(t => t.job.ProjectID == projectId_filter);
            }



            if (jobId_filter > 0)
            {
                _timelog = _timelog.Where(t => t.JobId == jobId_filter);
            }


            TimeLog = await PaginatedList<TimeLog>.GetSourcePage(_timelog, columnName, desc, pageIndex, 10);

            pageUtil.SetupButtons<TimeLog>(TimeLog, "/timelogs", columnName, desc);



        }


    }
}
