﻿using System;
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

        // 09/01/2019 11:36 pm - SSN - Adding switch Test_20190901_2333

        public bool Test_20190901_2333 { get; set; }



        public EditModel(DevSitesIndex.Entities.DevSitesIndexContext context, IConfiguration configuration)
        {

            _context = context;
            this.configuration = configuration;

            bool _Test_20190901_2333 = false;
            bool.TryParse(configuration["CodeReferences_Test_20190901_2333"], out _Test_20190901_2333);
            Test_20190901_2333 = _Test_20190901_2333;

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

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CodeReferenceExists(CodeReference.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
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
