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
            TelemetryClient telemetry = new TelemetryClient();
            telemetry.TrackEvent("DemoSite-20190828-0802: Timelog Index");
            telemetry.TrackPageView("DemoSite-20190828-0818: Timelog Index");

        }

        public async Task<IActionResult> OnPostAsync(string returnUrl = null)
        {
            returnUrl = returnUrl ?? Url.Content("~/");

            // 08/28/2019 08:20 am - SSN - [20190828-0819] - [002] - Adding Application Insights
            TelemetryClient telemetry = new TelemetryClient();


            if (ModelState.IsValid)
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true


                // 09/04/2019 06:45 pm - SSN - [20190904-1845] - [001] - Enforce email confirmation
                var identityUser = new IdentityUser(Input.Email);
                bool canSignIN = await _signInManager.CanSignInAsync(identityUser);


                if (canSignIN)
                {

                    if (!await _signInManager.UserManager.IsEmailConfirmedAsync(identityUser))
                    {
                        ModelState.AddModelError("", "Email not confirmed.");

                        telemetry.TrackEvent("DemoSite-20190904-1851 - Email not confirmed");

                        string message = @"
<p>You have not confirmed your email address.&nbsp; Please click <a href='/'>here</a> to restart the process.</p>
<p>Thank you!</p>
";
                        int messageIndex = ErrorModel.AddMessage(message);
                         

                        return RedirectToPage("/Error", new { ErrorModelIndex = messageIndex });


                    }

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
                    return RedirectToPage("./LoginWith2fa", new { ReturnUrl = returnUrl, RememberMe = Input.RememberMe });
                }
                if (result.IsLockedOut)
                {
                    try
                    {
                        telemetry.TrackEvent($"DemoSite-20190828-0821: Login failure.  Lockedout {Input.Email}");
                    }
                    catch (Exception)
                    {
                    }

                    _logger.LogWarning("User account locked out.");
                    return RedirectToPage("./Lockout");
                }
                else
                {
                    try
                    {
                        telemetry.TrackEvent($"DemoSite-20190828-0821: Login failure.  Invalid login. {Input.Email}");
                    }
                    catch (Exception)
                    {
                    }

                    ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                    return Page();
                }
            }

            // If we got this far, something failed, redisplay form
            return Page();
        }
    }
}
