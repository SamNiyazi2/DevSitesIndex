
// 11/04/2019 11:41 am - SSN - [20191104-0844] - [011] - Prevent delete option on timesheet related forms 
// Refactor wile addressing issue with preventing delete and ReturnToCaller

using DevSitesIndex.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DevSitesIndex.Pages
{
    public class Project_Jobs
    {

        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public Project project { get; set; }

        public List<Job> project_Jobs { get; set; }


        public Project_Jobs(DevSitesIndexContext context, int? id)
        {
            if (!id.HasValue) return;

            _context = context;

            // 04/19/2019 02:05 pm - SSN - [20190419-1405] - Move to Project detail

            project = _context.Projects.Include(p => p.company).SingleOrDefaultAsync(m => m.ProjectID == id).Result;

            project_Jobs = _context.Jobs.Where(r => r.ProjectID == id).ToList();


            // 08/20/2019 01:10 pm - SSN - [20190820-1252] - [002] - Added

            var Jobs_Timesheet_Totals = _context.Jobs.Where(r => r.ProjectID == id)
                            .GroupJoin(_context.TimeLog, m => m.JobID, c => c.JobId, (j, t) =>
                              new
                              {
                                  JobId = j.JobID,
                                  TotalSeconds = t.Sum(r => r.TotalSeconds)
                              }).ToList();


            // 03/20/2022 05:48 pm - SSN - [20220320-1726] - [003] - 03 - Update jobs related objects to show total hours
            // Take out
            //foreach (var r in project_Jobs)
            //{
            //    r.TotalSeconds = Jobs_Timesheet_Totals.Where(r2 => r2.JobId == r.JobID).Sum(r3 => r3.TotalSeconds);
            //}

        }
    }


}
