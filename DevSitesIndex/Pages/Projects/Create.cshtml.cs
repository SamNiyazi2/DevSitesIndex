using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using DevSitesIndex.Entities;

namespace DevSitesIndex.Pages.Projects
{
    public class CreateModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public SelectList companiesSL { get; set; }

        public CreateModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;

        }

        public IActionResult OnGet()
        {
            setupPageRequirements();

            return Page();
        }

        private void setupPageRequirements()
        {
            companiesSL = new SelectList(_context.Company, "CompanyID", "CompanyName");
            if (Project == null)
                Project = new Project();
            Project.DateAdded = DateTime.Now;
        }

        [BindProperty]
        public Project Project { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                setupPageRequirements();
                return Page();
            }

            _context.Project.Add(Project);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}