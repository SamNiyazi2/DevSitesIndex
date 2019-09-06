using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.ApplicationInsights;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;

namespace DevSitesIndex.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class LoginModel : PageModel
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly ILogger<LoginModel> _logger;
        private readonly IConfiguration configuration;
        private readonly IHostingEnvironment env;

        // 08/28/2019 08:19 am - SSN - [20190828-0819] - [001] - Adding Application Insights
        TelemetryClient telemetry = new TelemetryClient();


        // 09/01/2019 03:26 pm - SSN - [20190901-1225] - [006] - Add Job_DevSite table - Adding username_temp and pass

        public LoginModel(SignInManager<IdentityUser> signInManager, ILogger<LoginModel> logger, IConfiguration configuration, IHostingEnvironment env)
        {
            this.configuration = configuration;
            this.env = env;
            _signInManager = signInManager;
            _logger = logger;
        }

        [BindProperty]
        public InputModel Input { get; set; }

        public IList<AuthenticationScheme> ExternalLogins { get; set; }

        public string ReturnUrl { get; set; }

        [TempData]
        public string ErrorMessage { get; set; }

        public class InputModel
        {
            [Required]
            [EmailAddress]
            public string Email { get; set; }

            [Required]
            [DataType(DataType.Password)]
            public string Password { get; set; }

            [Display(Name = "Remember me?")]
            public bool RememberMe { get; set; }

            public string Password_Temp { get; set; }
        }




        public async Task OnGetAsync(string returnUrl = null)
        {
            if (!string.IsNullOrEmpty(ErrorMessage))
            {
                ModelState.AddModelError(string.Empty, ErrorMessage);
            }

            // 09/01/2019 03:26 pm - SSN - [20190901-1225] - [006] - Add Job_DevSite table - Adding usernamex and password

            Input = new InputModel();
            if (env.IsDevelopment())
            {
                Input.Email = configuration["UserNamex"]; ;
                Input.Password_Temp = configuration["Password"];
            }


            returnUrl = returnUrl ?? Url.Content("~/");

            // Clear the existing external cookie to ensure a clean login process
            await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);

            ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();

            ReturnUrl = returnUrl;

            // 08/28/2019 08:19 am - SSN - [20190828-0819] - [001] - Adding Application Insights
      
            telemetry.TrackEvent("DemoSite-20190828-0802: Timelog Index");
            telemetry.TrackPageView("DemoSite-20190828-0818: Timelog Index");

        }

        public async Task<IActionResult> OnPostAsync(string returnUrl = null)
        {
            returnUrl = returnUrl ?? Url.Content("~/");

            // 08/28/2019 08:20 am - SSN - [20190828-0819] - [002] - Adding Application Insights
            // TelemetryClient telemetry = new TelemetryClient();


            if (!ModelState.IsValid)
            {
                ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                return Page();
            }


            // This doesn't count login failures towards account lockout
            // To enable password failures to trigger account lockout, set lockoutOnFailure: true


            // 09/04/2019 06:45 pm - SSN - [20190904-1845] - [001] - Enforce email confirmation

            IdentityUser identityUser = await _signInManager.UserManager.FindByEmailAsync(Input.Email);

            if (identityUser == null)
            {
                ModelState.AddModelError(string.Empty, "Invalid email or password.");
                telemetry.TrackEvent($"DemoSite-20190905-0517 - Invalid email [{Input.Email}]");
                return Page();

            }


            bool hasValidCredentials = await _signInManager.UserManager.CheckPasswordAsync(identityUser, Input.Password);


            if (!hasValidCredentials)
            {
                ModelState.AddModelError(string.Empty, "Invalid email  or password.");
                telemetry.TrackEvent($"DemoSite-20190905-0539 - Invalid email or password [{Input.Email}]");
                return Page();

            }



            if (!await _signInManager.UserManager.IsEmailConfirmedAsync(identityUser))
            {
                ModelState.AddModelError("", "Email not confirmed.");

                telemetry.TrackEvent("DemoSite-20190904-1851 - Email not confirmed");


                #region  Message to user when they click the link to resend their confirmation email
                Feedbackw_util.PageContent pageContent2 = new Feedbackw_util.PageContent();

                pageContent2.AddTheKey(identityUser.Id.ToString());

                pageContent2.AddTitle("Confirmation Email Request Sent");
                pageContent2.AddMessage(@"<p>Confirmation email was sent.&nbsp;  Please check your email</p>");
                pageContent2.AddMessage(@"<p>Thank you!</p>");

                #endregion


                #region Message to use on this page.

                string message = "<p>You have not confirmed your email address.&nbsp; Please " +
                                "<a href='/Identity/account/resendemailconfirmationrequest?id=" + pageContent2.PageID + "' >get a new confirmation request</a>.</p>" +
                                "<p>Thank you!</p>";


                Feedbackw_util.PageContent pageContent = new Feedbackw_util.PageContent();

                pageContent.AddTitle("Email Not Confirmed");
                pageContent.AddMessage(message);

                #endregion



                return RedirectToPage("/Feedbackv", new { ErrorModelIndex = pageContent.PageID });


            }




            var result = await _signInManager.PasswordSignInAsync(Input.Email, Input.Password, Input.RememberMe, lockoutOnFailure: true);
            if (result.Succeeded)
            {

                _logger.LogInformation("User logged in.");


                telemetry.TrackEvent($"DemoSite-20190828-0821: Login successful {Input.Email}");

                return LocalRedirect(returnUrl);
            }


            if (result.RequiresTwoFactor)
            {
                return RedirectToPage("./LoginWith2fa", new
                {
                    ReturnUrl = returnUrl,
                    RememberMe = Input.RememberMe
                });
            }


            if (result.IsLockedOut)
            {
                telemetry.TrackEvent($"DemoSite-20190828-0821: Login failure.  Lockedout {Input.Email}");

                _logger.LogWarning("User account locked out.");
                return RedirectToPage("./Lockout");
            }
            else
            {
                telemetry.TrackEvent($"DemoSite-20190828-0821: Login failure.  Invalid login. {Input.Email}");

                ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                return Page();
            }


            // If we got this far, something failed, redisplay form
            return Page();
        }





    }
}
