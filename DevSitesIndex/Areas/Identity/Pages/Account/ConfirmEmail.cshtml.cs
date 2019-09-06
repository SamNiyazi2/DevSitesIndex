using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DevSitesIndex.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class ConfirmEmailModel : PageModel
    {
        private readonly UserManager<IdentityUser> _userManager;

        public ConfirmEmailModel(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }

        public string FeedbackToUser { get; set; }

        public async Task<IActionResult> OnGetAsync(string email, string code)
        {
            if (email == null || code == null)
            {
                return RedirectToPage("/Index");
            }


            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
            {

                FeedbackToUser = "Confirmation failed.";

                TelemetryClient telemetry = new TelemetryClient();
                telemetry.TrackEvent($"DemoSite-20190904-0901: Failed confirm email - Invalid email [{email}] code [{code}]- Message to user [{FeedbackToUser}]");

            }
            else
            {

                var result = await _userManager.ConfirmEmailAsync(user, code);
                if (!result.Succeeded)
                {

                    // 09/04/2019 08:54 am - SSN - [20190904-0203] - [007] - M07-06 - Demo: Multi-factor Authentication using an authenticator device

                    // throw new InvalidOperationException($"Error confirming email for user with ID '{userId}':");
                    FeedbackToUser = "Confirmation failed.";

                    TelemetryClient telemetry = new TelemetryClient();
                    telemetry.TrackEvent($"DemoSite-20190904-0854: Failed confirm email  email [{email}] code [{code}] - Message to user [{FeedbackToUser}]  Result [{result}]");
                }
            }

            return Page();
        }
    }
}
