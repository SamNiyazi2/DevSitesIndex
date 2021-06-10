
// 11/04/2019 10:20 am - SSN - [20191104-0844] - [009] - Prevent delete option on timesheet related forms 
// Refactor


using DevSitesIndex.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace DevSitesIndex.Pages
{
    public class Job_Timesheet
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public Job Job { get; set; }
        public List<TimeLog> job_Timesheet { get; set; }

        // 08/14/2019 05:00 am - SSN - [20190814-0433] - [003] - Add timesheet totals
        public int? TotalJobSeconds { get; set; }

        public Job_Timesheet(DevSitesIndex.Entities.DevSitesIndexContext context, int? id)
        {
            _context = context;
            doSetup(id);
        }


        void doSetup(int? id)
        {
            if (!id.HasValue) return;

            // 04/19/2019 04:28 pm - SSN - Filter on jobid

            Job = _context.Jobs.Include(j => j.project).SingleOrDefault(m => m.JobID == id);

            job_Timesheet = _context.TimeLog.Where(r => r.JobId == id)
                                        .OrderByDescending(r2 => r2.StartTime)
                                        .Include(r => r.discipline)
// 06/07/2021 03:46 pm - SSN - [20210606-0227] - [018] - Testng for deployment
                                        .Include(r => r.job_Lineitem)
                                        .ToList();

            // 08/14/2019 05:02 am - SSN - [20190814-0433] - [004] - Add timesheet totals

            TotalJobSeconds = job_Timesheet.Where(r => r.TotalSeconds.HasValue).Sum(r => r.TotalSeconds);
        }
    }
}
