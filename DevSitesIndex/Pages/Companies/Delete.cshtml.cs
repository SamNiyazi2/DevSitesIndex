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

namespace DevSitesIndex.Pages.Companies
{
    // 11/04/2019 08:07 am - SSN - Disable delete for companies with project records.


    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class DeleteModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        // 11/04/2019 01:37 pm - SSN - [20191104-0844] - [016] - Prevent delete option on timesheet related forms 
        // Return to caller
        public ReturnToCaller returnToCaller = new ReturnToCaller();


        public int projcetCount { get; set; }

        public DeleteModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Company Company { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }


            returnToCaller.setup(HttpContext, "/companies/Index");


            Company = await _context.Companies.SingleOrDefaultAsync(m => m.CompanyID == id);

            if (Company == null)
            {
                return NotFound();
            }

            this.projcetCount = _context.Projects.Count(r => r.CompanyID == id);

            return Page();
        }


        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Company = await _context.Companies.FindAsync(id);

            if (Company != null)
            {
                _context.Companies.Remove(Company);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
