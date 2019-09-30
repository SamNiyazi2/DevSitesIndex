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
        public PageUtil pageUtil { get; set; }



        // 08/29/2019 12:57 pm - SSN - [20190829-1253] - [003] - Adding paging and sorting to jobs index

        public async Task OnGetAsync(string columnName, string desc, int? pageIndex)
        {

            List<Job_Status> js = _context.Job_Statuses.ToList();

            TelemetryClient telemetry = new TelemetryClient();
            telemetry.TrackPageView("DemoSite-20190829-1257: Jobs Index");


            pageUtil = new PageUtil();

            pageUtil.AddColumns("ProjectTitle_ForActivity");
            pageUtil.AddColumns("JobTitle");
            pageUtil.AddColumns("DateAdded");
            pageUtil.AddColumns("LastActivityDate");
            pageUtil.AddColumns("ActivityAge");


            columnName = columnName ?? "ActivityAge";
            desc = desc ?? "false";

            pageUtil.SetupHeaders<Job>("/jobs/", columnName, desc);



        }
    }


}
