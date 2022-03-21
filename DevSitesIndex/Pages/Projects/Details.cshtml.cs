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
    // 03/10/2022 02:19 pm - SSN - [20220310-1358] - [010] - Allow anonymous 
    // [Authorize]
    public class DetailsModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;


        // 11/04/2019 09:57 am - SSN - [20191104-0844] - [007] - Prevent delete option on timesheet related forms 
        // Return to caller
        public ReturnToCaller returnToCaller = new ReturnToCaller();



        public DetailsModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public Project Project { get; set; }

        // 11/04/2019 11:44 am - SSN - [20191104-0844] - [012] - Prevent delete option on timesheet related forms 
        // Refactor while addressing preventing delete and ReturnToCaller
        public Project_Jobs project_Jobs { get; set; }

        // 04/19/2019 02:05 pm - SSN - [20190419-1405] - Move to Project detail - Correct as we move job_timesheet to project_jobs

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }


            returnToCaller.setup(HttpContext, "/projects/Index");


            Project = await _context.Projects
                .Include(p => p.company).SingleOrDefaultAsync(m => m.ProjectID == id);

            project_Jobs = new Project_Jobs(_context, id);




            if (Project == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
