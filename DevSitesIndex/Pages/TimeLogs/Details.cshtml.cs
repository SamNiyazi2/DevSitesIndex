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

namespace DevSitesIndex.Pages.TimeLogs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    // 03/10/2022 08:38 pm - SSN - [20220310-1358] - [016] - Allow anonymous
    // [Authorize]

    public class DetailsModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        // 11/04/2019 12:43 pm - SSN - [20191104-0844] - [013] - Prevent delete option on timesheet related forms 
        // Return to caller
        public ReturnToCaller returnToCaller = new ReturnToCaller();


        public DetailsModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public TimeLog TimeLog { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }



            returnToCaller.setup(HttpContext, "/timelog/Index");


            // 09/21/2019 11:06 am - SSN - Included projct and updated form to display project and job titles.
            TimeLog = await _context.TimeLog
                .Include(t => t.discipline)
                .Include(t => t.job_Lineitem)
                .Include(t => t.job).ThenInclude(r => r.project)
                .SingleOrDefaultAsync(m => m.TimeLogId == id);

            if (TimeLog == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
