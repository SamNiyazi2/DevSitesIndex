using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;

namespace DevSitesIndex.Pages.ReferenceSites
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class CreateModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public CreateModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            ReferenceSite = new ReferenceSite();
            ReferenceSite.DateAdded = DateTime.Now;
            return Page();
        }

        [BindProperty]
        public ReferenceSite ReferenceSite { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.ReferenceSites.Add(ReferenceSite);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}