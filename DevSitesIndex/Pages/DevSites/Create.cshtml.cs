using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using DevSitesIndex.Entities;


namespace DevSitesIndex.Pages.DevSites
{
    public class CreateModel : DevSite_BasePageModel
    {
        private readonly  DevSitesIndexContext _context;

        public CreateModel( DevSitesIndexContext context)
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
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}