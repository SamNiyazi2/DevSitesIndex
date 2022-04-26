using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;
using DevSitesIndex.Util;
using DevSitesIndex.Models;
using AutoMapper;

namespace DevSitesIndex.Pages.DevSites
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel

    // 03/10/2022 02:03 pm - SSN - [20220310-1358] - [003] - Allow anonymous 
    
    // [Authorize]

    public class DetailsModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;
        private readonly IMapper mapper;

        public DetailsModel(DevSitesIndex.Entities.DevSitesIndexContext context, IMapper _mapper)
        {
            _context = context;
            mapper = _mapper;
        }

        public DevSite DevSite { get; set; }

        public DevSite_DTO devSite_DTO { get; set; }

        // 11/09/2019 06:54 am - SSN - [20191109-0654] - [001] - ReturnToIndex from demosite index
        public ReturnToCaller returnToCaller = new ReturnToCaller();


        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }


            returnToCaller.setup(HttpContext, "/devsites/Index");

            // 04/24/2022 08:36 am - SSN - Include devSiteTechnologies
             DevSite = await _context.DevSites.Include(r=>r.DevSiteTechnologies).ThenInclude(r=>r.Technology).SingleOrDefaultAsync(m => m.Id == id);

            // 04/25/2022 07:43 pm - SSN - Add AutoMapper
             devSite_DTO = mapper.Map<DevSite, DevSite_DTO>(DevSite);

            if (DevSite == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
