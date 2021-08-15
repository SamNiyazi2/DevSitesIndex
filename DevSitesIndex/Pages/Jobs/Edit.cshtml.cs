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
using Microsoft.AspNetCore.Mvc.ModelBinding;
using static DevSitesIndex.Util.SaveValidations;
using SSN_GenUtil_StandardLib;

namespace DevSitesIndex.Pages.Jobs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class EditModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;
        private readonly ILogger_SSN logger;

        // 08/14/2021 11:26 pm - SSN - [20210814-2328] - Added
        private readonly IValidationSharedUtil validationSharedUtil;



        // 11/04/2019 09:41 am - SSN - [20191104-0844] - [005] - Prevent delete option on timesheet related forms 
        // Return to caller

        public ReturnToCaller returnToCaller = new ReturnToCaller();


        public EditModel(DevSitesIndex.Entities.DevSitesIndexContext context, ILogger_SSN logger, IValidationSharedUtil _validationSharedUtil)
        {
            _context = context;

            validationSharedUtil = _validationSharedUtil;

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


            returnToCaller.setup(HttpContext, "/jobs/Index");


            Job = await _context.Jobs
                .Include(j => j.project).SingleOrDefaultAsync(m => m.JobID == id);

            if (Job == null)
            {
                return NotFound();
            }


            logger.TrackPageView("DemoSite-20190915-0941");


            setupPageRequirements();




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



        // 08/14/2021 11:25 pm - SSN - [20210814-2328] - Renamed 
        // private void DoPageSetup()
        private void setupPageRequirements()
        {
            // ViewData["ProjectID"] = new SelectList(_context.Project, "ProjectID", "ProjectID");
            // 05/03/2019 05:35 am - SSN - Add order
            projectsSL = new SelectList(_context.Projects.OrderBy(r => r.ProjectTitle), "ProjectID", "ProjectTitle");

            // 09/18/2019 08:17 am - SSN - [20190918-0817] - [001] - Adding paging for angular lists
            job_statusSL = new SelectList(_context.Job_Statuses, "ID", "Status");

        }

        public async Task<IActionResult> OnPostAsync()
        {
            setupPageRequirements();


            // 08/14/2021 11:25 pm - SSN - [20210814-2328] - Update

            //if (!ModelState.IsValid)
            //{
            //    return Page();
            //}
            if (!ModelState.IsValid)
            {
                validationSharedUtil.RemoveErrorsForValidFields(Job, ModelState);

                if (!ModelState.IsValid)
                {

                    setupPageRequirements();

                    Job.project = _context.Projects.Find(Job.ProjectID) ?? new Project();

                    return Page();

                }
            }


            // 08/14/2021 11:25 pm - SSN - [20210814-2328] - Update
            Job.project = null;


            _context.Attach(Job).State = EntityState.Modified;

            // 09/24/2019 12:53 pm - SSN - [20190924-1134] - [015] - Removing date add/updated from create/edit pages
            _context.Entry(Job).Property(x => x.DateAdded).IsModified = false;



            // 04/19/2019 01:35 pm - SSN - Update date modified
            if (Job.JobID > 0)
            {
                Job.DateUpdated = DateTime.Now;
            }

            List<ConcurrencyValidationRecord> validationList = new List<ConcurrencyValidationRecord>();
            validationList.Add(new ConcurrencyValidationRecord { PropertyName = "JobTitle", ModelErrorEntryName = "Job.JobTitle" });

            if (!await SaveValidations.saveRecord<Job>(Job, _context, ModelState))
            {
                return Page();
            }


            // 11/13/2019 09:39 pm - SSN - [20191113-1946] - [007] - ReturnToCaller
            // return RedirectToPage("./Index");
            return Redirect(returnToCaller.getReturnToCallerUrl_Final(HttpContext));

        }


    }




}
