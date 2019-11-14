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


        // 11/04/2019 02:04 pm - SSN - [20191104-0844] - [023] - Prevent delete option on timesheet related forms 
        // Return to caller
        public ReturnToCaller returnToCaller = new ReturnToCaller();


        // 09/27/2019 02:48 pm - SSN - [20190927-0634] - [025] - Testing
        // Added SSN_GenUtil_StandardLib.logger
        public CreateModel(DevSitesIndex.Entities.DevSitesIndexContext context, ILogger_SSN logger)
        {
            _context = context;
            this.logger = logger;
        }

        public IActionResult OnGet()
        {


            returnToCaller.setup(Request, "/timelog/Index");


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

        [BindProperty]
        public TimeLog TimeLog { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                setupPageRequirements();
                return Page();
            }



            // 09/27/2019 02:47 pm - SSN - [20190927-0634] - [024] - Testing
            // Replaced
            //_context.TimeLog.Add(TimeLog);
            //await _context.SaveChangesAsync();


            //  Exception ex = await SharedUtil.save_v02(_context, TimeLog, logger);

            //if (ex != null)
            //{
            //    ModelState.AddModelError("", "Failed to save record.");
            //    ModelState.AddModelError("", ex.Message);
            //    Exception iex = ex.InnerException;
            //    while (iex != null)
            //    {
            //        ModelState.AddModelError("", iex.Message);
            //        iex = iex.InnerException;
            //    }
            //    return Page();
            //}

            // 09/28/2019 02:37 pm - SSN - [20190928-1256] - [004] - Adding Entity Framework model attribute

            _context.TimeLog.Add(TimeLog);
            await _context.SaveChangesAsync();


            // 11/13/2019 09:43 pm - SSN - [20191113-1946] - [008] - ReturnToCaller
            // return RedirectToPage("./Index");
            return Redirect(returnToCaller.getReturnToCallerUrl_Final(Request));

        }


    }


}