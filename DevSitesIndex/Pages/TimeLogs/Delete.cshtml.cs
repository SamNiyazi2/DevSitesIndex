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
    [Authorize]
    public class DeleteModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        // 11/04/2019 12:45 pm - SSN - [20191104-0844] - [014] - Prevent delete option on timesheet related forms 
        // Return to caller
        public ReturnToCaller returnToCaller = new ReturnToCaller();

        public DeleteModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        [BindProperty]
        public TimeLog TimeLog { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }


            returnToCaller.setup(HttpContext, "/timelog/Index");


            TimeLog = await _context.TimeLog
             .Include(t => t.discipline)

             // 03/25/2022 01:48 am - SSN - [20220325-0119] - [003] - Show page title
             //            .Include(t => t.job).ThenInclude(r => r.project)
             .Include(t => t.job_Lineitem).ThenInclude(r => r.job).ThenInclude(r => r.project)
             .SingleOrDefaultAsync(m => m.TimeLogId == id);


            if (TimeLog == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            TimeLog = await _context.TimeLog.FindAsync(id);

            if (TimeLog != null)
            {
                _context.TimeLog.Remove(TimeLog);
                await _context.SaveChangesAsync();
            }


            // 11/13/2019 09:43 pm - SSN - [20191113-1946] - [008] - ReturnToCaller
            // return RedirectToPage("./Index");
            return Redirect(returnToCaller.getReturnToCallerUrl_Final(HttpContext));

        }
    }
}
