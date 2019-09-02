﻿using System;
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

        public async Task OnGetAsync(string sortOrder, string desc, int? pageIndex)
        {

            TelemetryClient telemetry = new TelemetryClient();
            telemetry.TrackPageView("DemoSite-20190829-1257: Jobs Index");


            pageUtil = new PageUtil();

            pageUtil.AddColumns("ProjectTitle_ForActivity");
            pageUtil.AddColumns("JobTitle");
            pageUtil.AddColumns("DateAdded");
            pageUtil.AddColumns("LastActivityDate");
            pageUtil.AddColumns("ActivityAge");


            sortOrder = sortOrder ?? "ActivityAge";
            desc = desc ?? "false";

            pageUtil.SetupHeaders<Job>("/jobs/", sortOrder, desc);

            // 08/29/2019 01:00 pm - SSN - [20190829-1253] - [004] - Adding paging and sorting to jobs index

            //// 04/20/2019 11:15 am - SSN - [20190420-1109] - Add AsNoTracking to index pages


            IQueryable<Job> _Jobs = _context.Jobs.FromSql("exec DemoSites.Jobs_Index_WithLastActivityDate");

            Job = await PaginatedList<Job>.GetSourcePage(_Jobs, sortOrder, desc, pageIndex, 50);

            pageUtil.SetupButtons<Job>(Job, "/jobs", sortOrder, desc);


        }
    }


}
