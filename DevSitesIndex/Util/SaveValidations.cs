using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

// 09/24/2019 09:17 am - SSN - [20190924-0731] - [006] - Project search option

// Moved from jobs\edit.cshtml.cs

namespace DevSitesIndex.Util
{
    // 09/14/2019 01:01 am - SSN - Generic commit change
    // Renamed from testSave
    public class SaveValidations
    {



        public static async Task<bool> saveRecord<T>(T entity, DevSitesIndexContext _context, ModelStateDictionary ModelState)
        {
            // 09/15/2019 09:47 pm - SSN - Added
            ILogger_SSN logger = (ILogger_SSN)GetMeSomeServiceLocator.Instance.GetService(typeof(ILogger_SSN));

            try
            {
                // 09/24/2019 09:06 am - SSN - [20190924-0731] - [005] - Project search option

                int results = await _context.SaveChangesAsync();

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
                    if (ex.InnerException is SqlException)
                    {
                        SqlException ex_sql = (SqlException)ex.InnerException;
                        if (ex_sql.Message.Contains("Cannot insert duplicate key row") && ex_sql.Number == 2601)
                        {
                            if (ex_sql.Message.ToLower().Contains("project_id"))
                            {
                                ModelState.AddModelError("Job.ProjectID", "Duplicate project title.");
                                postedMessageToUser = true;
                            }
                            else
                            {
                                ModelState.AddModelError(string.Empty, "Duplicate entry. (2)");
                                postedMessageToUser = true;

                            }

                        }
                    }
                    else
                    {
                        if (ex.Message.Contains("Cannot insert duplicate key row"))
                        {
                            ModelState.AddModelError(string.Empty, "Duplicate entry. (1)");
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
    public class ConcurrencyValidationRecord
    {

        public string PropertyName { get; set; }
        public string ModelErrorEntryName { get; set; }
    }

}

