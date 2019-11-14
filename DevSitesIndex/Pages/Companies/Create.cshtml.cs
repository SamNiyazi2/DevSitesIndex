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

namespace DevSitesIndex.Pages.Companies
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class CreateModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;


        // 11/04/2019 01:35 pm - SSN - [20191104-0844] - [015] - Prevent delete option on timesheet related forms 
        // Return to caller
        public ReturnToCaller returnToCaller = new ReturnToCaller();

        public CreateModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            
            returnToCaller.setup(Request, "/companies/Index");


            // 03/13/2019 10:55 am - SSN - Init dateadded.
            Company = new Company
            {
                DateAdded = DateTime.Now
            };

            return Page();
        }

        [BindProperty]
        public Company Company { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Companies.Add(Company);

            // 09/24/2019 11:42 am - SSN - [20190924-1134] - [004] - Removing date add/updated from create/edit pages
            Company.DateAdded = DateTime.Now;

            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}