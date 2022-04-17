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
using Microsoft.Extensions.Configuration;

namespace DevSitesIndex.Pages.CodeReferences
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class EditModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;
        private readonly IConfiguration configuration;

        // 09/04/2020 05:56 am - SSN - [20200904-0540] - [005] - Ading save-and-stay option to codereference
        public Models.SaveAndStayModel SaveAndStayModel = new Models.SaveAndStayModel { ko__fieldName_prefix = "CodeReference.", ko__inputFormId = "codeReferenceFormId", ko__API_URL = "/api/codereference_temp/" };


        public EditModel(DevSitesIndex.Entities.DevSitesIndexContext context, IConfiguration configuration)
        {

            _context = context;
            this.configuration = configuration;

        }

        // 09/26/2018 07:39 am - SSN - Added to restore search after save.
        [BindProperty]
        public string SearchText { get; set; }


        [BindProperty]
        public CodeReference CodeReference { get; set; }




        // 09/26/2018 07:50 am - SSN - Adding SearchText to restore list
        public async Task<IActionResult> OnGetAsync(int? id, string SearchText)
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

        public async Task<IActionResult> OnPostAsync()
        {
            CodeReference.DevSiteCodeReferences = null;


            // 09/05/2018 03:23 pm - SSN
            CodeReference.DateModified = DateTime.Now;

            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(CodeReference).State = EntityState.Modified;


            // 09/24/2019 11:44 am - SSN - [20190924-1134] - [005] - Removing date add/updated from create/edit pages
            _context.Entry(CodeReference).Property(x => x.DateAdded).IsModified = false;

            try
            {
                await _context.SaveChangesAsync();
            }
            // 04/16/2022 11:15 pm - SSN - [20220416-2223] - [003] - Add RowVersion to CodeReferences table

            catch (DbUpdateConcurrencyException ex)
            {
                if (!CodeReferenceExists(CodeReference.Id))
                {
                    return NotFound();
                }
                else
                {
                    // 04/16/2022 11:16 pm - SSN - [20220416-2223] - [004] - Add RowVersion to CodeReferences table
                    ModelState.AddModelError("", "Failed to save record.");
                    ModelState.AddModelError("", ex.Message);
                    return Page();
                }
            }

            return RedirectToPage("./Index", new { SearchText = SearchText });
        }

        private bool CodeReferenceExists(int id)
        {
            return _context.CodeReferences.Any(e => e.Id == id);
        }
    }
}
