using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;
using DevSitesIndex.Pages.Jobs;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Util;

namespace DevSitesIndex.Pages.Projects
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class CreateModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;


        // 11/04/2019 02:00 pm - SSN - [20191104-0844] - [022] - Prevent delete option on timesheet related forms 
        // Return to caller
        public ReturnToCaller returnToCaller = new ReturnToCaller();

        public SelectList companiesSL { get; set; }

        public CreateModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;

        }

        public IActionResult OnGet()
        {

            returnToCaller.setup(HttpContext, "/projects/Index");

            setupPageRequirements();

            return Page();
        }

        private void setupPageRequirements()
        {
            companiesSL = new SelectList(_context.Companies, "CompanyID", "CompanyName");
            if (Project == null)
                Project = new Project();
            Project.DateAdded = DateTime.Now;
        }

        [BindProperty]
        public Project Project { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {

            setupPageRequirements();


            if (!ModelState.IsValid)
            {
                return Page();
            }


            //_context.Projects.Add(Project);
            //await _context.SaveChangesAsync();


            // 09/24/2019 08:51 am - SSN - [20190924-0731] - [004] - Project search option
            // Apply

            if (Project.ProjectID <= 0)
            {
                _context.Projects.Add(Project);
                Project.DateAdded = DateTime.Now;
            }
            else
            {
                Project.DateModified = DateTime.Now;
                _context.Entry(Project).Property(x => x.DateAdded).IsModified = false;
            }

            //////////////////////////////////////////// _context.Attach(Project).State = EntityState.Modified;

            List<ConcurrencyValidationRecord> validationList = new List<ConcurrencyValidationRecord>();
            validationList.Add(new ConcurrencyValidationRecord { PropertyName = "JobTitle", ModelErrorEntryName = "Job.JobTitle" });

            if (!await SaveValidations.saveRecord<Project>(Project, _context, ModelState))
            {
                return Page();
            }



            // 11/13/2019 09:43 pm - SSN - [20191113-1946] - [008] - ReturnToCaller
            // return RedirectToPage("./Index");
            return Redirect(returnToCaller.getReturnToCallerUrl_Final(HttpContext));

        }
    }
}