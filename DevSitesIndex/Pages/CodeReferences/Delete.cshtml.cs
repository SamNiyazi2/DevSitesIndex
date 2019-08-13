using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;

namespace DevSitesIndex.Pages.CodeReferences
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
        public CodeReference CodeReference { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            CodeReference = await _context.CodeReferences.SingleOrDefaultAsync(m => m.Id == id);

            if (CodeReference == null)
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

            CodeReference = await _context.CodeReferences.FindAsync(id);

            if (CodeReference != null)
            {
                _context.CodeReferences.Remove(CodeReference);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
