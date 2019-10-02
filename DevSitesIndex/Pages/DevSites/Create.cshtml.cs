using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;

namespace DevSitesIndex.Pages.DevSites
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class CreateModel : DevSite_BasePageModel
    {
        private readonly DevSitesIndexContext _context;

        public CreateModel(DevSitesIndexContext context)
        {
            _context = context;
        }


        public IActionResult OnGet()
        {
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

            return RedirectToPage("./Index");
        }
    }
}