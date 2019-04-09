using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using DevSitesIndex.Entities;

namespace DevSitesIndex
{
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

            Discipline= new Discipline();
            Discipline.DateAdded = DateTime.Now;
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

            _context.Discipline.Add(Discipline);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}