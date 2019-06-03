using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

// 06/03/2019 06:52 pm - SSN - [20190603-1427] - [009] - Error handling

namespace DevSitesIndex.Pages
{
    public class throw2Model : PageModel
    {
        public void OnGet()
        {
            string x = null;
            string y = x.Substring(1, 1);
        }
    }
}