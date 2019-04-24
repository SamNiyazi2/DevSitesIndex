using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;

namespace DevSitesIndex
{
    public class IndexModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        public IList<Discipline> Discipline { get;set; }

        public async Task OnGetAsync()
        {
            // 04/20/2019 11:16 am - SSN - [20190420-1109] - Add AsNoTracking to index pages

            Discipline = await _context.Discipline.AsNoTracking().ToListAsync();
        }
    }
}
