using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

// 09/05/2019 06:44 pm - SSN - [20190905-1835] - [004] - Resetting password process

namespace DevSitesIndex.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class ForgotPasswordModel : PageModel
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IEmailSender _emailSender;

        public ForgotPasswordModel(UserManager<IdentityUser> userManager, IEmailSender emailSender)
        {
            _userManager = userManager;
            _emailSender = emailSender;
        }

        [BindProperty]
        public InputModel Input { get; set; }


        TelemetryClient telemetry = new TelemetryClient();

        public class InputModel
        {
            [Required]
            [EmailAddress]
            public string Email { get; set; }
        }

        public async Task<IActionResult> OnPostAsync()
        {

            telemetry.TrackEvent("DemoSite-20190905-1844 - ForgotPassword");

            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(Input.Email);


                if (user == null || !(await _userManager.IsEmailConfirmedAsync(user)))
                {
                    // Don't reveal that the user does not exist or is not confirmed
                    telemetry.TrackEvent($"DemoSite-20190905-1845 - ************** ForgotPassword invalid user {Input.Email}");
                    return RedirectToPage("./ForgotPasswordConfirmation");
                }



                // For more information on how to enable account confirmation and password reset please 
                // visit https://go.microsoft.com/fwlink/?LinkID=532713

                // 09/05/2019 06:36 pm - SSN - [20190905-1835] - [002] - Resetting password process

                await Email.EmailSenders.SendForgotPasswordResetRequest(_userManager, _emailSender, user, this);

                telemetry.TrackEvent($"DemoSite-20190905-1850 - ForgotPassword - Sending email {Input.Email}");

                return RedirectToPage("./ForgotPasswordConfirmation");
            }
            else
            {
                telemetry.TrackEvent($"DemoSite-20190905-1849 - ************** ForgotPassword - Invalid request {Input.Email}");

            }


            return Page();
        }

    }
}
