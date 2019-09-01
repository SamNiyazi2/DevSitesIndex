using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

// 08/24/2018 03:48 am - SSN - Created

namespace DevSitesIndex.Pages.DevSites
{
    public class DevSite_BasePageModel: PageModel
    {

        // 08/24/2018 12:37 pm - SSN - Added

        public SelectList softwareCodesSL { get; set; }


        public void Populate_softwareCodesSL(DevSitesIndexContext _context, object selectedValue = null)
        {
            var softwareCodes = _context.SoftwareCodes;

            softwareCodesSL = new SelectList(softwareCodes.AsNoTracking(),
                        "ID", "SoftwareTitle", selectedValue);
        }

    }
}
