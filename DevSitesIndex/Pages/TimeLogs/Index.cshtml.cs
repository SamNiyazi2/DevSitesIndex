using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;

namespace DevSitesIndex.Pages.TimeLogs
{
    public class IndexModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public IList<TimeLog> TimeLog { get; set; }

        public async Task OnGetAsync()
        {
            // 04/19/2019 04:41 pm - SSN - Add sort
            // 04/20/2019 11:13 am - SSN - [20190420-1109] - Add AsNoTracking to index pages

            TimeLog = await _context.TimeLog
                .Include(t => t.discipline)
                .Include(t => t.job)
                .OrderByDescending(r => r.StartTime)
                .AsNoTracking()
                .ToListAsync();
        }
    }
}
