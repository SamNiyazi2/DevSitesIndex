using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;
using DevSitesIndex.Util;

namespace DevSitesIndex.Pages.Jobs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class CreateModel : PageModel
    {

        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        // 11/04/2019 01:45 pm - SSN - [20191104-0844] - [020] - Prevent delete option on timesheet related forms 
        // Return to caller
        public ReturnToCaller returnToCaller = new ReturnToCaller();


        // 08/08/2018 04:02 pm - SSN
        public SelectList projectsSL { get; set; }


        // 09/18/2019 09:20 am - SSN - [20190918-0817] - [004] - Adding paging for angular lists
        public SelectList job_statusSL { get; set; }


        public CreateModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public IActionResult OnGet(int? id)
        {
            // ViewData["ProjectID"] = new SelectList(_context.Project, "ProjectID", "ProjectID");
            // 05/03/2019 05:35 am - SSN - Add order


            returnToCaller.setup(Request, "./Index");


            setupPageRequirements();
            Job = new Job();
            Job.DateAdded = DateTime.Now;

            // 09/01/2019 11:41 am - SSN - [20190901-1141] - [001] - Add job create option to project detail page 

            if (id.HasValue)
            {
                Job.ProjectID = id.Value;
            }
            return Page();
        }

        // 05/31/2019 11:01 pm - SSN - Added to rerun on validation failure.
        private void setupPageRequirements()
        {
            projectsSL = new SelectList(_context.Projects.OrderBy(r => r.ProjectTitle), "ProjectID", "ProjectTitle");

            // 09/18/2019 09:21 am - SSN - [20190918-0817] - [005] - Adding paging for angular lists
            job_statusSL = new SelectList(_context.Job_Statuses, "ID", "Status");
        }



        [BindProperty]
        public Job Job { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                setupPageRequirements();
                return Page();
            }

            _context.Jobs.Add(Job);

            // 09/24/2019 01:08 pm - SSN - [20190924-1134] - [016] - Removing date add/updated from create/edit pages
            Job.DateAdded = DateTime.Now;

            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}