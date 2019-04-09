﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;

namespace DevSitesIndex.Pages.Jobs
{
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

            Job = await _context.Job
                .Include(j => j.project)
                .OrderByDescending(r => r.DateUpdated ?? r.DateAdded)
                .ToListAsync();
        }
    }
}
