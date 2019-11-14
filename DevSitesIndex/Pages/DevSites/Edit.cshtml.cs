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
using DevSitesIndex.Services;
using SSN_GenUtil_StandardLib;
using DevSitesIndex.Util;

namespace DevSitesIndex.Pages.DevSites
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class EditModel : DevSite_BasePageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        // 09/06/2019 06:47 pm - SSN - [20190906-0518] - [007] - Angular - edit div content - Adding _devSitesIndexRepository
        private readonly IDevSitesIndexRepository _devSitesIndexRepository;
        private readonly ILogger_SSN _logger;

        // 11/13/2019 07:46 pm - SSN - [20191113-1946] - [001] - ReturnToCaller
        public ReturnToCaller returnToCaller = new ReturnToCaller();


        public EditModel(DevSitesIndex.Entities.DevSitesIndexContext context, IDevSitesIndexRepository devSitesIndexRepository, ILogger_SSN logger)
        {
            _context = context;
            _devSitesIndexRepository = devSitesIndexRepository;
            _logger = logger;
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

            returnToCaller.setup(Request, "/devsites/Index");

            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            Populate_softwareCodesSL(_context, DevSite.SoftwareCodeID);

            if (!ModelState.IsValid)
            {
                return Page();
            }

            // 09/06/2019 06:35 pm - SSN - [20190906-0518] - [005] - Angular - edit div content
            // Refactored orginal code and replace with 
            // await temp.saveRecord(_context, DevSite);

            await _devSitesIndexRepository.UpdateDevSiteAsync(DevSite);

            // 09/30/201+ 09:07 am - SSN - book to exception.
            Exception ex = _devSitesIndexRepository.Save();

            if (ex != null)
            {
                ModelState.AddModelError("", "Failed to save record.");
                ModelState.AddModelError("", ex.Message);
                return Page();
            }


            // 11/13/2019 08:10 pm - SSN - [20191113-1946] - [003] - ReturnToCaller
            //return RedirectToPage("./Index");
            return Redirect(returnToCaller.getReturnToCallerUrl_Final(Request));
        }

        // 09/06/2019 06:41 pm - SSN - [20190906-0518] - [006] - Angular - edit div content

        class temp
        {

            public static async Task saveRecord(DevSitesIndexContext _context, DevSite DevSite)
            {


                // 10/12/2018 04{27 pm - SSN - Added -

                _context.Attach(DevSite).State = EntityState.Modified;

                _context.Entry(DevSite).Property(x => x.DateAdded).IsModified = false;


                try
                {
                    // 10/12/2018 04:19 pm - SSN - Added
                    DevSite.DateUpdated = DateTime.Now;

                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException ex)
                {
                    string message = ex.Message;

                    if (!DevSiteExists(_context, DevSite.Id))
                    {
                        ////////////////////////////////////////////////////////////////////// return NotFound();

                        throw;
                    }
                    else
                    {
                        throw;
                    }
                }
                catch (Exception ex2)
                {

                    string message = ex2.Message;

                }

            }


            private static bool DevSiteExists(DevSitesIndexContext _context, int id)
            {
                return _context.DevSites.Any(e => e.Id == id);
            }
        }

    }
}
