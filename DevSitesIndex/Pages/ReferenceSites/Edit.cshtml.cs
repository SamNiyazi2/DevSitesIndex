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
using System.ComponentModel.DataAnnotations;
using SSN_GenUtil_StandardLib;

namespace DevSitesIndex.Pages.ReferenceSites
{



    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class EditModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public EditModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        [BindProperty]
        public ReferenceSite ReferenceSite { get; set; }



        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            ReferenceSite = await _context.ReferenceSites.SingleOrDefaultAsync(m => m.Id == id);

            if (ReferenceSite == null)
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

            _context.Attach(ReferenceSite).State = EntityState.Modified;

            if (ReferenceSite.DateAdded.Date != DateTime.Today && ReferenceSite.DateAdded.Date < new DateTime(2018, 8, 1))
            {
                DateTime d = ReferenceSite.DateAdded;
                ReferenceSite.DateAdded = new DateTime(d.Year, d.Month, d.Day);
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!ReferenceSiteExists(ReferenceSite.Id))
                {
                    return NotFound();
                }
                else
                {
                    await ExceptionHandler_SSN.writeExcelptionToConsole_v02(ex);
                    throw;
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;

                await ExceptionHandler_SSN.writeExcelptionToConsole_v02(ex);

                return Page();


            }

            return RedirectToPage("./Index");
        }

        private bool ReferenceSiteExists(int id)
        {
            return _context.ReferenceSites.Any(e => e.Id == id);
        }

    }
}
