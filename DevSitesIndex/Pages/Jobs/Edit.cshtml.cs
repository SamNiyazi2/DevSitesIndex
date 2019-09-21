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
using DevSitesIndex.Util;
using System.Data.SqlClient;

namespace DevSitesIndex.Pages.Jobs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class EditModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;
        private readonly ILogger_SSN logger;

        public EditModel(DevSitesIndex.Entities.DevSitesIndexContext context, ILogger_SSN logger)
        {
            _context = context;
            this.logger = logger;
        }

        [BindProperty]
        public Job Job { get; set; }


        // 08/08/2018 03:58 pm - SSN

        public SelectList projectsSL { get; set; }

        // 09/18/2019 08:17 am - SSN - [20190918-0817] - [001] - Adding paging for angular lists

        public SelectList job_statusSL { get; set; }


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


            logger.TrackPageView("DemoSite-20190915-0941");


            DoPageSetup();




            // 09/14/2019 04:52 am - SSN - [20190914-0227] - [004] - Creating dynamic process to process data in the catch block
            // Testing
            ExpressionBuilderResults_SSN<Job> result1 = Util.ExpressionBuilder_SSN.CreateExpression<Job>(_context.Jobs, Job, "", "JobTitle", "==", "Test  222");
            ExpressionBuilderResults_SSN<Job> result2 = Util.ExpressionBuilder_SSN.CreateExpression<Job>(_context.Jobs, Job, "or", "JobTitle", "==", "Test", result1.func);




            //    Project project = _context.Projects.Where(r => r.ProjectID == databaseValues.ProjectID).FirstOrDefault();

            //    ModelState.AddModelError("Job.ProjectID", "Current value: "
            //                 + project?.ProjectTitle);
            //}
            Project proj = new Project();
            Util.ExpressionBuilder_SSN.CreateExpression<Project>(_context.Projects, proj, "", "ProjectID", "==", 1);

            return Page();
        }


        private void DoPageSetup()
        {
            // ViewData["ProjectID"] = new SelectList(_context.Project, "ProjectID", "ProjectID");
            // 05/03/2019 05:35 am - SSN - Add order
            projectsSL = new SelectList(_context.Projects.OrderBy(r => r.ProjectTitle), "ProjectID", "ProjectTitle");

            // 09/18/2019 08:17 am - SSN - [20190918-0817] - [001] - Adding paging for angular lists
            job_statusSL = new SelectList(_context.Job_Statuses, "ID", "Status");

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
            // 09/15/2019 09:47 pm - SSN - Added
            ILogger_SSN logger = (ILogger_SSN)GetMeSomeServiceLocator.Instance.GetService(typeof(ILogger_SSN));

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
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
                    string modelErrorName = "Job.JobTitle";

                    var databaseValue = entity.GetType().GetProperty(propertyName).GetValue(databaseValues, null);
                    var clientValue = entity.GetType().GetProperty(propertyName).GetValue(clientValues, null);
                    if (databaseValue != clientValue)
                    {

                        //ModelState.AddModelError("Job.JobTitle", "Current value: "
                        //    + databaseValues.JobTitle);

                        ModelState.AddModelError(modelErrorName, "Current value: " + databaseValue);
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

                    await logger.PostException(ex, "DemoSite-20190915-0939", "Concurrency failure");

                }

                return false;


            }

            catch (SqlException ex)
            {

                await logger.PostException(ex, "DemoSite-20190915-0957", "SqlException");
                return false;
            }


            catch (DbUpdateException ex)
            {
                // "Cannot insert duplicate key row in object 'DemoSites.Jobs' with unique index 'Job_ProjectID_Title_Unique'. The duplicate key value is (9, test).\r\nThe statement has been terminated."

                bool postedMessageToUser = false;

                if (ex.InnerException != null)
                {
                    if ( ex.InnerException is SqlException)
                    {
                        SqlException ex_sql = (SqlException)ex.InnerException;
                        if (ex_sql.Message.Contains("Cannot insert duplicate key row") && ex_sql.Number == 2601)
                        {
                            if (ex_sql.Message.ToLower().Contains("project_id"))
                            {
                                ModelState.AddModelError("Job.ProjectID", "Duplicate project title.");
                                postedMessageToUser = true;
                            }

                        }
                    }
                    else
                    {
                        if (ex.Message.Contains("Cannot insert duplicate key row"))
                        {
                            ModelState.AddModelError(string.Empty, "Duplicate entry.");
                            postedMessageToUser = true;
                        }

                    }

                }
                else
                {

                }

                if (!postedMessageToUser)
                {
                    ModelState.AddModelError(string.Empty, "Invalid entry.");
                }

                await logger.PostException(ex, "DemoSite-20190915-0958", "DbUpdateException - Not showing proper error message.");

                return false;

            }

            catch (Exception ex)
            {
                await logger.PostException(ex, "DemoSite-20190915-0940", "Exception");
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
