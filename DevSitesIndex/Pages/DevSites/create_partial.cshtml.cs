using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

// 09/01/2018 02:41 pm - SSN

namespace DevSitesIndex.Pages.DevSites
{
    public class create_partialModel : DevSite_BasePageModel
    {

        private readonly DevSitesIndexContext _context;

        [BindProperty]
        public DevSite DevSite { get; set; }


        public create_partialModel(DevSitesIndexContext context)
        {
            _context = context;
        }
        

        public IActionResult OnGet()
        {
            Populate_softwareCodesSL(_context);
            DevSite = new DevSite
            {
                DateAdded = DateTime.Now
            };

            return Page();
        }
    }
}