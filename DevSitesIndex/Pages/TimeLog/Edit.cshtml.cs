using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;

// 04/08/2019 12:43 am - SSN - [20190407-2345] - TimeLog 

namespace DevSitesIndex.Pages.TimeLogs
{
    public class EditModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public EditModel(DevSitesIndex.Entities.DevSitesIndexContext context)
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

            TimeLog = await _context.TimeLog
                .Include(t => t.discipline)
                .Include(t => t.job).SingleOrDefaultAsync(m => m.TimeLogId == id);

            if (TimeLog == null)
            {
                return NotFound();
            }
            ViewData["DisciplineID"] = new SelectList(_context.Discipline, "DisciplineId", "DisciplineShort");
            // 04/08/2019 12:43 am - SSN - [20190407-2345] - TimeLog 
            // ViewData["JobId"] = new SelectList(_context.Job, "JobID", "JobID");
            ViewData["JobId"] = new SelectList(_context.Job, "JobID", "JobTitle");
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            //_context.Attach(TimeLog).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!TimeLogExists(TimeLog.TimeLogId))
            //    {
            //        return NotFound();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            await SharedUtil.save(_context, TimeLog);

            return RedirectToPage("./Index");
        }

        private bool TimeLogExists(int id)
        {
            return _context.TimeLog.Any(e => e.TimeLogId == id);
        }
    }
}
