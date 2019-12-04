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

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class DetailsModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;


        // 11/04/2019 01:38 pm - SSN - [20191104-0844] - [017] - Prevent delete option on timesheet related forms 
        // Return to caller
        public ReturnToCaller returnToCaller = new ReturnToCaller();


        public DetailsModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

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
            return Page();
        }
    }
}
