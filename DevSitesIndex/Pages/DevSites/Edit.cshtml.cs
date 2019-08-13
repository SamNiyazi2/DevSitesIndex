using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;

namespace DevSitesIndex.Pages.DevSites
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class EditModel : DevSite_BasePageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public EditModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        [BindProperty]
        public DevSite DevSite { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            DevSite = await _context.DevSites.SingleOrDefaultAsync(m => m.Id == id);

            // 08/24/2018 03:51 am - SSN - Added SelectList and default date.
            Populate_softwareCodesSL(_context, DevSite.SoftwareCodeID);


            if (DevSite == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(DevSite).State = EntityState.Modified;
            // 10/12/2018 04{27 pm - SSN - Added
            _context.Entry(DevSite).Property(x => x.DateAdded).IsModified = false;


            try
            {
                // 10/12/2018 04:19 pm - SSN - Added
                DevSite.DateUpdated = DateTime.Now;

                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DevSiteExists(DevSite.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool DevSiteExists(int id)
        {
            return _context.DevSites.Any(e => e.Id == id);
        }
    }
}
