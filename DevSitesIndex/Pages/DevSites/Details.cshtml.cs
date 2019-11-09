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
    public class DetailsModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public DetailsModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public DevSite DevSite { get; set; }

        // 11/09/2019 06:54 am - SSN - [20191109-0654] - [001] - ReturnToIndex from demosite index
        public ReturnToCaller returnToCaller = new ReturnToCaller();


        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }


            returnToCaller.setup(Request, "./Index");


            DevSite = await _context.DevSites.SingleOrDefaultAsync(m => m.Id == id);

            if (DevSite == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
