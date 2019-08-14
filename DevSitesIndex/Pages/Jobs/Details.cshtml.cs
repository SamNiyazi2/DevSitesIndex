using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;

namespace DevSitesIndex.Pages.Jobs
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

        public Job Job { get; set; }

        public List<TimeLog> job_Timesheet { get; set; }

        // 08/14/2019 05:00 am - SSN - [20190814-0433] - [003] - Add timesheet totals
        public int? TotalJobSeconds { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Job = await _context.Job
                .Include(j => j.project).SingleOrDefaultAsync(m => m.JobID == id);

            // 04/19/2019 04:28 pm - SSN - Filter on jobid

            job_Timesheet = _context.TimeLog.Where(r => r.JobId == id)
                                    .OrderByDescending(r2 => r2.StartTime)
                                    .Include(r => r.discipline)
                                    .ToList();

            // 08/14/2019 05:02 am - SSN - [20190814-0433] - [004] - Add timesheet totals

            TotalJobSeconds = job_Timesheet.Where(r => r.TotalSeconds.HasValue).Sum(r => r.TotalSeconds);

            if (Job == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
