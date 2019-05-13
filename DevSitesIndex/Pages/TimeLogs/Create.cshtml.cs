using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using DevSitesIndex.Entities;

// 04/08/2019 12:43 am - SSN - [20190407-2345] - TimeLog

namespace DevSitesIndex.Pages.TimeLogs
{
    public class CreateModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public CreateModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {

            // 05/04/2019 09:54 am - SSN - Add order

            ViewData["DisciplineID"] = new SelectList(_context.Discipline.OrderBy(r => r.DisciplineShort), "DisciplineId", "DisciplineShort");
            // 04/08/2019 12:43 am - SSN - [20190407-2345] - TimeLog 
            // ViewData["JobId"] = new SelectList(_context.Job, "JobID", "JobID");
            ViewData["JobId"] = new SelectList(_context.Job.OrderBy(r => r.JobTitle), "JobID", "JobTitle");

            TimeLog = new TimeLog();
            DateTime d = DateTime.Now;

            TimeLog.DateAdded = new DateTime(d.Year, d.Month, d.Day, d.Hour, d.Minute, 0);


            return Page();
        }

        [BindProperty]
        public TimeLog TimeLog { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.TimeLog.Add(TimeLog);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }


    }
}