using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;

namespace DevSitesIndex.Pages.Projects
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class DetailsModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public DetailsModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public Project Project { get; set; }

        // 04/19/2019 02:05 pm - SSN - [20190419-1405] - Move to Project detail - Correct as we move job_timesheet to project_jobs

        public List<Job> project_Jobs { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Project = await _context.Projects
                .Include(p => p.company).SingleOrDefaultAsync(m => m.ProjectID == id);

            // 04/19/2019 02:05 pm - SSN - [20190419-1405] - Move to Project detail

            project_Jobs = _context.Jobs.Where(r => r.ProjectID == id).ToList();


            // 08/20/2019 01:10 pm - SSN - [20190820-1252] - [002] - Added

            var Jobs_Timesheet_Totals = _context.Jobs.Where(r => r.ProjectID == id)
                            .GroupJoin(_context.TimeLog, m => m.JobID, c => c.JobId, (j, t) =>
                              new
                              {
                                  JobId = j.JobID,
                                  TotalSeconds = t.Sum(r => r.TotalSeconds)
                              }).ToList();

            foreach (var r in project_Jobs)
            {
                r.TotalSeconds = Jobs_Timesheet_Totals.Where(r2 => r2.JobId == r.JobID).Sum(r3 => r3.TotalSeconds);
            }


            if (Project == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
