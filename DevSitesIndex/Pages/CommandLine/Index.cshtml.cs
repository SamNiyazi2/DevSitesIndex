using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;

// 09/12/2018 03:34 pm - SSN - Adding

namespace DevSitesIndex.Pages.CommandLine
{
    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class IndexModel : PageModel
    {

        [BindProperty]
        public string AccessKey { get; set; }

        [BindProperty]
        public bool WaitForExit { get; set; }

        [BindProperty]
        public string CommandText { get; set; }

        public string Results_Output { get; set; }
        public string Results_Error { get; set; }



        // 08/13/2019 10:57 am - SSN - Added
        public IConfiguration configuration { get; set; }

        public IndexModel(IConfiguration _configuration)
        {
            configuration = _configuration;
        }

        public void OnGet()
        {

        }
        public async Task<IActionResult> OnPostAsync()
        {

            // 08/13/2019 10:57 am - SSN - Added

            string commandWindowPassword = configuration["CommandWindowPassword"];


            if (AccessKey != commandWindowPassword)
            {
                Results_Error = "Invalid key.";
            }
            else
            {


                RunCommand_v2 runCommand = new RunCommand_v2(AppContext.BaseDirectory, WaitForExit);

                StringBuilder sb = new StringBuilder(CommandText);

                runCommand.Run(sb);

                Results_Error = "Disabled-20180913-1631";

                Results_Error = runCommand.strError;
                Results_Output = runCommand.strOutput;

            }


            return Page();
        }
    }
}