using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;

namespace DevSitesIndex.Pages.Jobs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class EditModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public EditModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Job Job { get; set; }


        // 08/08/2018 03:58 pm - SSN

        public SelectList projectsSL { get; set; }


        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Job = await _context.Job
                .Include(j => j.project).SingleOrDefaultAsync(m => m.JobID == id);

            if (Job == null)
            {
                return NotFound();
            }


            // ViewData["ProjectID"] = new SelectList(_context.Project, "ProjectID", "ProjectID");
            // 05/03/2019 05:35 am - SSN - Add order
            projectsSL = new SelectList(_context.Project.OrderBy(r => r.ProjectTitle), "ProjectID", "ProjectTitle");


            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(Job).State = EntityState.Modified;

            // 04/19/2019 01:35 pm - SSN - Update date modified

            if (Job.JobID > 0)
            {
                Job.DateUpdated = DateTime.Now;
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobExists(Job.JobID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool JobExists(int id)
        {
            return _context.Job.Any(e => e.JobID == id);
        }
    }
}
