using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;

namespace DevSitesIndex.Pages.Projects
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

        public IList<Project> Project { get; set; }

        public async Task OnGetAsync()
        {
            // 04/19/2019 11:58 am - SSN - Add sort
            // 04/20/2019 11:14 am - SSN - [20190420-1109] - Add AsNoTracking to index pages

            Project = await _context.Project
            .OrderByDescending(r => r.DateModified ?? r.DateAdded)
                .Include(p => p.company).AsNoTracking().ToListAsync();
        }
    }
}
