using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;

namespace DevSitesIndex.Pages.CodeReferences
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
            // 09/05/2018 03:23 pm - SSN
            CodeReference = new CodeReference();
            CodeReference.DateAdded = DateTime.Now;

            // 04/16/2019 05:59 pm - SSN - [20190416-1759] Take out.
            // Too slow on Azure if we try to check for nulls
            CodeReference.DateModified = DateTime.Now;

            return Page();
        }

        [BindProperty]
        public CodeReference CodeReference { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.CodeReferences.Add(CodeReference);

            // 09/24/2019 11:34 am - SSN - [20190924-1134] - [001] - Removing date add/updated from create/edit pages

            CodeReference.DateAdded = DateTime.Now;
            CodeReference.DateModified = DateTime.Now;


            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}