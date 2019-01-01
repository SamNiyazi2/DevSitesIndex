using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;

namespace DevSitesIndex.Pages.DevSites
{
    public class IndexModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public IList<DevSite> DevSite { get; set; }

        public async Task OnGetAsync()
        {
            // 10/12/2018 03:53 pm - SSN - Added OrderByDescending (r=>r.DateUpdated 
            DevSite = await _context.DevSites.OrderByDescending(r => r.DateUpdated ?? r.DateAdded).ToListAsync();
        }
    }
}
