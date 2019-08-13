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

            Project = await _context.Project
                .Include(p => p.company).SingleOrDefaultAsync(m => m.ProjectID == id);

            // 04/19/2019 02:05 pm - SSN - [20190419-1405] - Move to Project detail

             project_Jobs = _context.Job.Where (r=>r.ProjectID== id).ToList();


            if (Project == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
