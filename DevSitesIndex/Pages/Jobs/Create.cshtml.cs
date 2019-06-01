using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using DevSitesIndex.Entities;

namespace DevSitesIndex.Pages.Jobs
{
    public class CreateModel : PageModel
    {

        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        // 08/08/2018 04:02 pm - SSN
        public SelectList projectsSL { get; set; }


        public CreateModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            // ViewData["ProjectID"] = new SelectList(_context.Project, "ProjectID", "ProjectID");
            // 05/03/2019 05:35 am - SSN - Add order

            setupPageRequirements();
            Job = new Job();
            Job.DateAdded = DateTime.Now;

            return Page();
        }

        // 05/31/2019 11:01 pm - SSN - Added to rerun on validation failure.
        private void setupPageRequirements()
        {
            projectsSL = new SelectList(_context.Project.OrderBy(r => r.ProjectTitle), "ProjectID", "ProjectTitle");
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

            _context.Job.Add(Job);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}