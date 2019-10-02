using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;

namespace DevSitesIndex
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
            // 04/08/2019 12:11 am - SSN - [20190407-2345] - TimeLog

            Discipline = new Discipline
            {
                DateAdded = DateTime.Now
            };
            return Page();
        }

        [BindProperty]
        public Discipline Discipline { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Disciplines.Add(Discipline);

            // 09/24/2019 12:31 pm - SSN - [20190924-1134] - [009] - Removing date add/updated from create/edit pages
            Discipline.DateAdded = DateTime.Now;


            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}