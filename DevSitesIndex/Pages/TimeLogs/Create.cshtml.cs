using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;

// 04/08/2019 12:43 am - SSN - [20190407-2345] - TimeLog

namespace DevSitesIndex.Pages.TimeLogs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class CreateModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public CreateModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            setupPageRequirements();

            TimeLog = new TimeLog();
            DateTime d = DateTime.Now;

            TimeLog.DateAdded = new DateTime(d.Year, d.Month, d.Day, d.Hour, d.Minute, 0);


            return Page();
        }

        // 06/01/2019 05:28 pm - SSN - Refactor to reload on validation failure.
        private void setupPageRequirements()
        {
            // 05/04/2019 09:54 am - SSN - Add order

            ViewData["DisciplineID"] = new SelectList(_context.Disciplines.OrderBy(r => r.DisciplineShort), "DisciplineId", "DisciplineShort");
            // 04/08/2019 12:43 am - SSN - [20190407-2345] - TimeLog 
            // ViewData["JobId"] = new SelectList(_context.Job, "JobID", "JobID");
            ViewData["JobId"] = new SelectList(_context.Jobs.OrderBy(r => r.JobTitle), "JobID", "JobTitle");
        }

        [BindProperty]
        public TimeLog TimeLog { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                setupPageRequirements();
                return Page();
            }

            _context.TimeLog.Add(TimeLog);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }


    }
}