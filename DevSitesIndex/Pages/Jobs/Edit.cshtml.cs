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

            Job = await _context.Jobs
                .Include(j => j.project).SingleOrDefaultAsync(m => m.JobID == id);

            if (Job == null)
            {
                return NotFound();
            }

            DoPageSetup();

            return Page();
        }


        private void DoPageSetup()
        {
            // ViewData["ProjectID"] = new SelectList(_context.Project, "ProjectID", "ProjectID");
            // 05/03/2019 05:35 am - SSN - Add order
            projectsSL = new SelectList(_context.Projects.OrderBy(r => r.ProjectTitle), "ProjectID", "ProjectTitle");
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            DoPageSetup();

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


            catch (DbUpdateConcurrencyException ex)
            {
                var entry = ex.Entries.Single();

                var clientValues = (Job)entry.Entity;

                var databaseEntry = entry.GetDatabaseValues();

                if (databaseEntry == null)
                {
                    ModelState.AddModelError(string.Empty,
                        "Unable to save changes. The job was deleted by another user.");
                }
                else
                {


                    var databaseValues = (Job)databaseEntry.ToObject();

                    if (databaseValues.JobTitle != clientValues.JobTitle)

                        ModelState.AddModelError("Job.JobTitle", "Current value: "
                            + databaseValues.JobTitle);

                    if (databaseValues.ProjectID != clientValues.ProjectID)
                    {

                        Project project = _context.Projects.Where(r => r.ProjectID == databaseValues.ProjectID).FirstOrDefault();

                        ModelState.AddModelError("Job.ProjectID", "Current value: "
                                     + project?.ProjectTitle);
                    }



                    ModelState.AddModelError(string.Empty, "The record you attempted to edit "
                        + "was modified by another user after you got the original value. The "
                        + "edit operation was canceled and the current values in the database "
                        + "have been displayed. If you still want to edit this record, click "
                        + "the Save button again. Otherwise click the 'Back to List' hyperlink.");

                    Job.RowVersion = databaseValues.RowVersion;
                }

                return Page();


            }

            return RedirectToPage("./Index");
        }


    }
}
