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

namespace DevSitesIndex.Pages.DevSites
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class CreateModel : DevSite_BasePageModel
    {
        private readonly DevSitesIndexContext _context;
        
        
        // 12/06/2019 02:26 am - SSN -  X [20191104-0844] - [022] - Prevent delete option on timesheet related forms 
        // Return to caller
        public ReturnToCaller returnToCaller = new ReturnToCaller();



        public CreateModel(DevSitesIndexContext context)
        {
            _context = context;
        }


        public IActionResult OnGet()
        {


            returnToCaller.setup(HttpContext, "/devsites/Index");



            // 08/24/2018 02:04 am - SSN - Added SelectList and default date.
            Populate_softwareCodesSL(_context);
            DevSite = new DevSite();
            DevSite.DateAdded = DateTime.Now;

            return Page();
        }

        [BindProperty]
        public DevSite DevSite { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                // 06/28/2019 12:07 pm - SSN - Added
                Populate_softwareCodesSL(_context);
                return Page();
            }

            _context.DevSites.Add(DevSite);

            // 09/24/2019 01:30 pm - SSN - [20190924-1134] - [022] - Removing date add/updated from create/edit pages
            DevSite.DateAdded = DateTime.Now;

            await _context.SaveChangesAsync();



            // 12/06/2019 02:28 am - SSN -  X [20191113-1946] - [008] - ReturnToCaller
            // return RedirectToPage("./Index");
            return Redirect(returnToCaller.getReturnToCallerUrl_Final(HttpContext));


        }
    }
}