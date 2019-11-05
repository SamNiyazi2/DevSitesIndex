using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;
using DevSitesIndex.Util;

namespace DevSitesIndex.Pages.Projects
{


    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class DeleteModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        // 11/04/2019 08:14 am - SSN - Prevent deleting projects with job reocrds 
        public int jobCount { get; set; }
        public Project_Jobs project_Jobs { get; set; }


        // 11/04/2019 08:44 am - SSN - [20191104-0844] - [001] - Prevent delete option on timesheet related forms 
        // Save referrer link
        // 11/04/2019 09:47 am - SSN - [20191104-0844] - [006] - Prevent delete option on timesheet related forms 
        // Return to caller

        public ReturnToCaller returnToCaller = new ReturnToCaller();


        public DeleteModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Project Project { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        { 
            if (id == null)
            {
                return NotFound();
            }


            returnToCaller.setup(Request, "./Index");


            Project = await _context.Projects
                .Include(p => p.company).SingleOrDefaultAsync(m => m.ProjectID == id);

            if (Project == null)
            {
                return NotFound();
            }

            // 11/04/2019 08:25 am - SSN - [20191104-0825] Adding detailsModel
            this.jobCount = _context.Jobs.Count(r => r.ProjectID == id);

            project_Jobs = new Project_Jobs(_context, id);
             

            return Page();
        }


        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Project = await _context.Projects.FindAsync(id);

            if (Project != null)
            {
                _context.Projects.Remove(Project);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }




    }


}
