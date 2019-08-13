using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using System.Diagnostics;
using Microsoft.AspNetCore.Authorization;

namespace DevSitesIndex.Pages.Jobs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class IndexModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public IList<Job> Job { get; set; }

        public async Task OnGetAsync()
        {
            // 04/08/2019 12:51 am - SSN - [20190407-2345] - TimeLog - Order
            Stopwatch sw = new Stopwatch();
            sw.Start();


            // 04/20/2019 11:15 am - SSN - [20190420-1109] - Add AsNoTracking to index pages

            List<Job> _Job = await _context.Job
                 .Include(j => j.project.company)
                 .Include(j => j.timelogs)
                 .AsNoTracking()
                 .ToListAsync();

            long delta1 = sw.ElapsedMilliseconds;

            Job = _Job.OrderByDescending(r => (r.MostRecentActivity)).ToList();

            sw.Stop();
            long delta2 = sw.ElapsedMilliseconds;


        }
    }
}
