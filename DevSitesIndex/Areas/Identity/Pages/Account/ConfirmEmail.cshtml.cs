using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SSN_GenUtil_StandardLib;

namespace DevSitesIndex.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class ConfirmEmailModel : PageModel
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly SSN_Logger logger;


        // 03/21/2022 03:25 pm - SSN - [20220321-1408] - [016] - Takeout TelemetryClient - Use logger
        // Add logger
        public ConfirmEmailModel(UserManager<IdentityUser> _userManager, SSN_Logger _logger)
        {
            userManager = _userManager;
            logger = _logger;
        }

        public string FeedbackToUser { get; set; }

        public async Task<IActionResult> OnGetAsync(string email, string code)
        {
            if (email == null || code == null)
            {
                return RedirectToPage("/Index");
            }


            var user = await userManager.FindByEmailAsync(email);

            if (user == null)
            {

                FeedbackToUser = "Confirmation failed.";

                // 03/21/2022 03:27 pm - SSN - [20220321-1408] - [017] - Takeout TelemetryClient - Use logger
                //TelemetryClient telemetry = new TelemetryClient();
                //telemetry.TrackEvent($"DemoSite-20190904-0901: Failed confirm email - Invalid email [{email}] code [{code}]- Message to user [{FeedbackToUser}]");
                logger.TrackEvent($"DemoSite-20190904-0901-B: Failed confirm email - Invalid email [{email}] code [{code}]- Message to user [{FeedbackToUser}]");

            }
            else
            {

                var result = await userManager.ConfirmEmailAsync(user, code);
                if (!result.Succeeded)
                {

                    // 09/04/2019 08:54 am - SSN - [20190904-0203] - [007] - M07-06 - Demo: Multi-factor Authentication using an authenticator device

                    // throw new InvalidOperationException($"Error confirming email for user with ID '{userId}':");
                    FeedbackToUser = "Confirmation failed.";


                    // 03/21/2022 03:25 pm - SSN - [20220321-1408] - [016] - Takeout TelemetryClient - Use logger

                    //TelemetryClient telemetry = new TelemetryClient();
                    //telemetry.TrackEvent($"DemoSite-20190904-0854: Failed confirm email  email [{email}] code [{code}] - Message to user [{FeedbackToUser}]  Result [{result}]");
                    logger.TrackEvent($"DemoSite-20190904-0854-B: Failed confirm email  email [{email}] code [{code}] - Message to user [{FeedbackToUser}]  Result [{result}]");

                }
            }

            return Page();
        }
    }
}
