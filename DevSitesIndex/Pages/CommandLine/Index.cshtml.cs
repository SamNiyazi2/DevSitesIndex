using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

// 09/12/2018 03:34 pm - SSN - Adding

namespace DevSitesIndex.Pages.CommandLine
{
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


        public void OnGet()
        {
        }
        public async Task<IActionResult> OnPostAsync()
        {
            if (AccessKey != "SamIamSamIam")
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