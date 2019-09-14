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




            // 09/14/2019 04:52 am - SSN - [20190914-0227] - [004] - Creating dynamic process to process data in the catch block
            // Testing
            var job2 = Util.ExpressionBuilder_SSN.CreateExpression<Job>(_context.Jobs, Job, "", "JobTitle", "==", "Test  222");
            var job3 = Util.ExpressionBuilder_SSN.CreateExpression<Job>(_context.Jobs, Job, "or", "JobTitle", "==", "Test", job2);




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

            List<ConcurrencyValidationRecord> validationList = new List<ConcurrencyValidationRecord>();
            validationList.Add(new ConcurrencyValidationRecord { PropertyName = "JobTitle", ModelErrorEntryName = "Job.JobTitle" });

            if (!await testSave.saveRecord<Job>(Job, _context, ModelState))
            {
                return Page();
            }

            return RedirectToPage("./Index");
        }


    }


    // 09/14/2019 01:01 am - SSN - Generic commit change
    public static class testSave
    {

        public static async Task<bool> saveRecord<T>(T entity, DevSitesIndexContext _context, Microsoft.AspNetCore.Mvc.ModelBinding.ModelStateDictionary ModelState)
        {
            try
            {
                await _context.SaveChangesAsync();
            }


            catch (DbUpdateConcurrencyException ex)
            // catch (Exception ex2)
            {
                var entry = ex.Entries.Single();

                var clientValues = (T)entry.Entity;

                var databaseEntry = entry.GetDatabaseValues();

                if (databaseEntry == null)
                {
                    ModelState.AddModelError(string.Empty,
                        "Unable to save changes. The job was deleted by another user.");
                }
                else
                {


                    var databaseValues = (T)databaseEntry.ToObject();



                    // todo 09/14/2019
                    // 09/14/2019 02:27 am - SSN - [20190914-0227] - [001] - Creating dynamic process to process data in the catch block


                    //if (databaseValues.JobTitle != clientValues.JobTitle)
                    string propertyName = "JobTitle";

                    var databaseValue = entity.GetType().GetProperty(propertyName).GetValue(databaseValues, null);
                    var clientValue = entity.GetType().GetProperty(propertyName).GetValue(clientValues, null);
                    if (databaseValue != clientValue)
                    {
                        string modelErrorName = "Job.JobTitle";

                        //ModelState.AddModelError("Job.JobTitle", "Current value: "
                        //    + databaseValues.JobTitle);

                        ModelState.AddModelError(modelErrorName, "Current value: "
                            + databaseValue);
                    }

                    //if (databaseValues.ProjectID != clientValues.ProjectID)
                    //{

                    //    Project project = _context.Projects.Where(r => r.ProjectID == databaseValues.ProjectID).FirstOrDefault();

                    //    ModelState.AddModelError("Job.ProjectID", "Current value: "
                    //                 + project?.ProjectTitle);
                    //}



                    ModelState.AddModelError(string.Empty, "The record you attempted to edit "
                        + "was modified by another user after you got the original value. The "
                        + "edit operation was canceled and the current values in the database "
                        + "have been displayed. If you still want to edit this record, click "
                        + "the Save button again. Otherwise click the 'Back to List' hyperlink.");





                    // todo 09/14/2019
                    ////////////////////////                    Job.RowVersion = databaseValues.RowVersion;



                }

                return false;


            }

            return true;

        }
    }

    // 09/14/2019 02:47 am - SSN - [20190914-0227] - [002] - Creating dynamic process to process data in the catch block
    // Added
    class ConcurrencyValidationRecord
    {

        public string PropertyName { get; set; }
        public string ModelErrorEntryName { get; set; }
    }





}
