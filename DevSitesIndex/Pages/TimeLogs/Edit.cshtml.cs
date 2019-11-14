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

        // 11/04/2019 10:11 am - SSN - [20191104-0844] - [008] - Prevent delete option on timesheet related forms 
        // Return to caller
        public ReturnToCaller returnToCaller = new ReturnToCaller();

        // 09/13/2019 06:22 am - SSN - [20190913-0548] - [007] - Crate generic dropdown list directive - IConfiguration configuration

        // 09/27/2019 02:06 pm - SSN - [20190927-0634] - [018] - Testing
        // Added logger
        public EditModel(DevSitesIndex.Entities.DevSitesIndexContext context, IConfiguration configuration, ILogger_SSN logger)
        {
            _configuration = configuration;
            this.logger = logger;
            _context = context;


            // 09/13/2019 06:22 am - SSN - [20190913-0548] - [007] - Crate generic dropdown list directive

            bool _Timesheet_Dropdown_20190913_0624 = false;
            bool.TryParse(configuration["Timesheet_Dropdown_20190913_0624"], out _Timesheet_Dropdown_20190913_0624);
            Timesheet_Dropdown_20190913_0624 = _Timesheet_Dropdown_20190913_0624;


        }

        [BindProperty]
        public TimeLog TimeLog { get; set; }

        // 09/13/2019 06:21 am - SSN - [20190913-0548] - [006] - Crate generic dropdown list directive
        public bool Timesheet_Dropdown_20190913_0624 { get; set; }


        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }


            returnToCaller.setup(Request, "/timelogs/Index");


            // 09/21/2019 11:08 am - SSN - Added include job and project to display titles on form.
            TimeLog = await _context.TimeLog
                .Include(t => t.discipline)
                .Include(t => t.job).ThenInclude(j => j.project)
                .Include(t => t.job).SingleOrDefaultAsync(m => m.TimeLogId == id);

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
            setupRequiredData();
            setupRequiredData_OnFailure();

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

            // 04/20/2019 09:31 am - SSN - [20190420-0931] - Return exception

            // 09/27/2019 02:06 pm - SSN - [20190927-0634] - [019] - Testing
            // Renamed v02 and added logger





            // 09/28/2019 03:10 pm - SSN - [20190928-1256] - [006] - Adding Entity Framework model attribute

            //  Exception ex = await SharedUtil.save_v02(_context, TimeLog, logger);
            //if (ex != null)
            //            {
            //                ModelState.AddModelError("", "Failed to save record.");
            //                ModelState.AddModelError("", ex.Message);
            //                Exception iex = ex.InnerException;
            //                while (iex != null)
            //                {
            //                    ModelState.AddModelError("", iex.Message);
            //                    iex = iex.InnerException;
            //                }
            //                return Page();
            //            }

            try
            {

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

                return Page();
            }



            // 11/13/2019 09:43 pm - SSN - [20191113-1946] - [008] - ReturnToCaller
            // return RedirectToPage("./Index");
            return Redirect(returnToCaller.getReturnToCallerUrl_Final(Request));

        }

        private bool TimeLogExists(int id)
        {
            return _context.TimeLog.Any(e => e.TimeLogId == id);
        }
    }
}
