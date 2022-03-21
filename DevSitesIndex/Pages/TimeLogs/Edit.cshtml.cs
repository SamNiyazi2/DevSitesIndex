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
using Microsoft.Extensions.Configuration;
using SSN_GenUtil_StandardLib;
using DevSitesIndex.Util;
using DevSitesIndex.Services;


// 04/08/2019 12:43 am - SSN - [20190407-2345] - TimeLog 

namespace DevSitesIndex.Pages.TimeLogs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    [ValidateAntiForgeryToken]
    public class EditModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;
        private readonly IConfiguration _configuration;
        private readonly ILogger_SSN logger;

        // Todo-SSN - 06/23/2021 03:25 am - SSN - [20210623-0158] - [004] - Limit user access to their timesheet records
// Todo: Take out
        private readonly IEntityRepository<AspNetUsers> aspNetUsersRepository;

        // 11/04/2019 10:11 am - SSN - [20191104-0844] - [008] - Prevent delete option on timesheet related forms 
        // Return to caller
        public ReturnToCaller returnToCaller = new ReturnToCaller();

        // 09/13/2019 06:22 am - SSN - [20190913-0548] - [007] - Create generic dropdown list directive - IConfiguration configuration

        // 09/27/2019 02:06 pm - SSN - [20190927-0634] - [018] - Testing
        // Added logger

        [BindProperty]
        public TimeLog TimeLog { get; set; }

        // 09/13/2019 06:21 am - SSN - [20190913-0548] - [006] - Create generic dropdown list directive
        // Todo-SSN - 06/23/2021 03:24 am - SSN - [20210623-0158] - [003] - Limit user access to their timesheet records
// Todo: Take out
        public IValidationSharedUtil _validationSharedUtil { get; }



        public EditModel(DevSitesIndex.Entities.DevSitesIndexContext context, IConfiguration configuration, ILogger_SSN logger, IValidationSharedUtil validationSharedUtil)
        {
            _configuration = configuration;
            this.logger = logger;
            _validationSharedUtil = validationSharedUtil;
            _context = context;

            // Todo-SSN - 06/23/2021 03:24 am - SSN - [20210623-0158] - [003] - Limit user access to their timesheet records
            // Todo : take out
            this.aspNetUsersRepository = new AspNetUsersRepository(context, logger);
        }


        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }


            returnToCaller.setup(HttpContext, "/timelogs/Index");


            // 09/21/2019 11:08 am - SSN - Added include job and project to display titles on form.
            TimeLog = await _context.TimeLog
                .Include(t => t.discipline)
                .Include(t => t.job).ThenInclude(j => j.project)
                .Include(t => t.job_Lineitem)
                .SingleOrDefaultAsync(m => m.TimeLogId == id);

            if (TimeLog == null)
            {
                return NotFound();
            }
            setupRequiredData();
            return Page();
        }

        // 04/20/2019 10:57 am - SSN - [20190420-1057] - Refactor to correct problem with postback on failed validation


        private void setupRequiredData()
        {
            // 05/04/2019 09:50 am - SSN - Add order

            ViewData["DisciplineID"] = new SelectList(_context.Disciplines.OrderBy(r => r.DisciplineShort), "DisciplineId", "DisciplineShort");
            // 04/08/2019 12:43 am - SSN - [20190407-2345] - TimeLog 
            // ViewData["JobId"] = new SelectList(_context.Job, "JobID", "JobID");
            // 09/13/2019
            ViewData["JobId"] = new SelectList(_context.Jobs.Where(r => r.ProjectID == TimeLog.job.ProjectID).OrderBy(r => r.JobTitle), "JobID", "JobTitle");
        }


        // 09/28/2019 03:33 pm - SSN - [20190928-1256] - [007] - Adding Entity Framework model attribute
        private void setupRequiredData_OnFailure()
        {
            TimeLog.job = _context.Jobs.Where(r => r.JobID == TimeLog.JobId).FirstOrDefault();
        }


        // 04/20/2019 10:57 am - SSN - [20190420-1057] - Refactor to correct problem with postback on failed validation
        //public async Task<IActionResult> OnPostAsync()
        public async Task<IActionResult> OnPost()
        {

            TimeLog temp = TimeLog;

            if (!ModelState.IsValid)
            {

                _validationSharedUtil.RemoveErrorsForValidFields(TimeLog, ModelState);

                if (!ModelState.IsValid)
                {
                    setupRequiredData();
                    setupRequiredData_OnFailure();

                    return Page();
                }
            }


            try
            {

                TimeLog.discipline = null;
                TimeLog.job = null;
                TimeLog.job_Lineitem = null;

                string userName = User.Identity.Name;
                string friendlyErrorMessage = "Failed to save record. ";
                string exceptionMesssage = $"demosites-20210621-1417 - Timelog record user id mismatch [{TimeLog.FK_UserID }] <> [[[currentUser_PkUserId]]]  TimelogID [{TimeLog.TimeLogId}]";
                string callSource = "demosites-20210621-0301";

                TimeLog.FK_UserID = await _validationSharedUtil.getCurrentUser_PK_UserID(aspNetUsersRepository, userName, TimeLog.FK_UserID, friendlyErrorMessage, exceptionMesssage, callSource);


                _context.Attach(TimeLog).State = EntityState.Modified;

                int result = await _context.SaveChangesAsync();
            }
            catch (Exception iex)
            {
                while (iex != null)
                {
                    ModelState.AddModelError("", iex.Message);
                    iex = iex.InnerException;
                }

                TimeLog.discipline = TimeLog.DisciplineID > 0 ? _context.Disciplines.Find(TimeLog.DisciplineID) : new Entities.Discipline();
                TimeLog.job = TimeLog.JobId> 0 ? _context.Jobs.Find(TimeLog.JobId) : new Job();
                TimeLog.job_Lineitem = TimeLog.LineItemID> 0 ? _context.Job_Lineitems.Find(TimeLog.LineItemID) : new Job_Lineitem();

                return Page();
            }



            // 11/13/2019 09:43 pm - SSN - [20191113-1946] - [008] - ReturnToCaller
            // return RedirectToPage("./Index");
            return Redirect(returnToCaller.getReturnToCallerUrl_Final(HttpContext));

        }

        private bool TimeLogExists(int id)
        {
            return _context.TimeLog.Any(e => e.TimeLogId == id);
        }
    }
}
