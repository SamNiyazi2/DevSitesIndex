using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;
using SSN_GenUtil_StandardLib;
using System.ComponentModel.DataAnnotations;
using DevSitesIndex.Util;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding;

// 04/08/2019 12:43 am - SSN - [20190407-2345] - TimeLog

namespace DevSitesIndex.Pages.TimeLogs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class CreateModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;
        private readonly ILogger_SSN logger;
        private readonly IEntityRepository<AspNetUsers> aspNetUsersRepository;



        // 11/04/2019 02:04 pm - SSN - [20191104-0844] - [023] - Prevent delete option on timesheet related forms 
        // Return to caller
        public ReturnToCaller returnToCaller = new ReturnToCaller();


        [BindProperty]
        public TimeLog TimeLog { get; set; }

        public IValidationSharedUtil validationSharedUtil { get; }


        // 09/27/2019 02:48 pm - SSN - [20190927-0634] - [025] - Testing
        // Added SSN_GenUtil_StandardLib.logger
        // 06/21/2021 02:31 am - SSN - [20210620-2108] - [011] - Update TimeLog create option to use DrowndownListDirective
        // Added SignInManager<IdentityUser> signInManager to get PK_UserID
        // Added IEntityRepository<AspNetUsers> aspNetUsersRepository
        public CreateModel(DevSitesIndex.Entities.DevSitesIndexContext context, ILogger_SSN logger, IValidationSharedUtil _validationSharedUtil)
        {
            _context = context;
            this.logger = logger;
            validationSharedUtil = _validationSharedUtil;

            this.aspNetUsersRepository = new AspNetUsersRepository(context, logger);

        }

        public IActionResult OnGet()
        {


            returnToCaller.setup(HttpContext, "/timelog/Index");


            setupPageRequirements();

            TimeLog = new TimeLog();
            DateTime d = DateTime.Now;

            TimeLog.DateAdded = new DateTime(d.Year, d.Month, d.Day, d.Hour, d.Minute, 0);
            TimeLog.StartTime = new DateTime(d.Year, d.Month, d.Day, d.Hour, d.Minute, 0);


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



        public async Task<IActionResult> OnPostAsync()
        {
            // 06/21/2021 01:28 am - SSN - [20210620-2108] - [009] - Update TimeLog create option to use DrowndownListDirective

            if (!ModelState.IsValid)
            {
                setupPageRequirements();

                validationSharedUtil.RemoveErrorsForValidFields(TimeLog, ModelState);

                // If still invalid...
                if (!ModelState.IsValid)
                {
                    return Page();
                }
            }


            TimeLog.job = null;
            TimeLog.discipline = null;
            TimeLog.job_Lineitem = null;




            try
            {
                string userName = User.Identity.Name;
                string friendlyErrorMessage = "Failed to save record. ";
                string exceptionMesssage = $"demosites-20210621-0302 - Timelog record user id mismatch [{TimeLog.FK_UserID }] <> [[[currentUser_PkUserId]]]  TimelogID [{TimeLog.TimeLogId}]";
                string callSource = "demosites-20210621-0301";

                TimeLog.FK_UserID = await validationSharedUtil.getCurrentUser_PK_UserID(aspNetUsersRepository, userName, TimeLog.FK_UserID, friendlyErrorMessage, exceptionMesssage, callSource);

                TimeLogRepository timeLogRepository = new TimeLogRepository(_context, logger, validationSharedUtil);

                timeLogRepository.Update(TimeLog,User);
                timeLogRepository.Save();

            }
            catch (Exception ex)
            {
                //SSN_GenUtil_StandardLib.ExceptionHandler_SSN eh = new SSN_GenUtil_StandardLib.ExceptionHandler_SSN();

                //SSN_GenUtil_StandardLib.ExceptionsList el = eh.HandleException_GetExAsSB_v02(ex);

                //string message = el.Message_ToStringBuilder_v02(ExceptionsList.Enum_OutputFormat.HTML).ToString();

                ModelState.AddExceptions(ex);

                await logger.PostException(ex, "20210621-0212", "Failed to save timelog record (mvc)");

                TimeLog.job = TimeLog.JobId > 0 ? _context.Jobs.Find(TimeLog.JobId) : new Job();

                return Page();

            }



            // 11/13/2019 09:43 pm - SSN - [20191113-1946] - [008] - ReturnToCaller
            // return RedirectToPage("./Index");
            return Redirect(returnToCaller.getReturnToCallerUrl_Final(HttpContext));

        }

    }


}