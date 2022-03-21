using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;
using DevSitesIndex.Util;

namespace DevSitesIndex.Pages.Jobs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    // 03/10/2022 02:18 pm - SSN - [20220310-1358] - [009] - Allow anonymous 
    // [Authorize]
    public class DetailsModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        // 11/04/2019 09:36 am - SSN - [20191104-0844] - [004] - Prevent delete option on timesheet related forms 
        // Return to caller

        public ReturnToCaller returnToCaller = new ReturnToCaller();

        public DetailsModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public Job Job { get; set; }

        public Job_Timesheet job_Timesheet { get; set; }



        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            returnToCaller.setup(HttpContext, "/jobs/Index");

            Job = await _context.Jobs
                .Include(j => j.project).SingleOrDefaultAsync(m => m.JobID == id);



            if (Job == null)
            {
                return NotFound();
            }

            job_Timesheet = new Job_Timesheet(_context, id);

            return Page();
        }
    }
}
