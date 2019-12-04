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

namespace DevSitesIndex.Pages.DevSites
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class DeleteModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public DeleteModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        [BindProperty]
        public DevSite DevSite { get; set; }


        // 11/13/2019 08:08 pm - SSN - [20191113-1946] - [002] - ReturnToCaller
        public ReturnToCaller returnToCaller = new ReturnToCaller();

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            DevSite = await _context.DevSites.SingleOrDefaultAsync(m => m.Id == id);

            if (DevSite == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            DevSite = await _context.DevSites.FindAsync(id);

            if (DevSite != null)
            {
                _context.DevSites.Remove(DevSite);
                await _context.SaveChangesAsync();
            }

            // 11/13/2019 09:43 pm - SSN - [20191113-1946] - [008] - ReturnToCaller
            // return RedirectToPage("./Index");
            return Redirect(returnToCaller.getReturnToCallerUrl_Final(HttpContext));

        }
    }
}
