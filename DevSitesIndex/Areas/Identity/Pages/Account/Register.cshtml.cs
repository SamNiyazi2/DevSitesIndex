using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using DevSitesIndex.Util;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace DevSitesIndex.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class RegisterModel : PageModel
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly ILogger<RegisterModel> _logger;
        private readonly IEmailSender _emailSender;
        private readonly IHostingEnvironment env;

        // 09/05/2019 05:29 am - SSN - [20190904-1845] - [011] - Enforce email confirmation
        // Added IHostingEnvironment

        public RegisterModel(
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager,
            ILogger<RegisterModel> logger,
            IEmailSender emailSender,
            IHostingEnvironment env)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            _emailSender = emailSender;
            this.env = env;
        }

        // 09/04/2019 10:41 pm - SSN - [20190904-1845] - [009] - Enforce email confirmation
        TelemetryClient telemetry = new TelemetryClient();


        [BindProperty]
        public InputModel Input { get; set; }

        public string ReturnUrl { get; set; }

        public class InputModel
        {
            [Required]
            [EmailAddress]
            [Display(Name = "Email")]
            public string Email { get; set; }

            [Required]
            [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = Startup.PASSWORD_MINIMUM_LENGTH)]
            [DataType(DataType.Password)]
            [Display(Name = "Password")]
            public string Password { get; set; }

            [DataType(DataType.Password)]
            [Display(Name = "Confirm password")]
            [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
            public string ConfirmPassword { get; set; }
        }

        public void OnGet(string returnUrl = null)
        {
            ReturnUrl = returnUrl;
        }

        public async Task<IActionResult> OnPostAsync(string returnUrl = null)
        {
            returnUrl = returnUrl ?? Url.Content("~/");
            if (ModelState.IsValid)
            {
                var user = new IdentityUser { UserName = Input.Email, Email = Input.Email };
                var result = await _userManager.CreateAsync(user, Input.Password);
                if (result.Succeeded)
                {
                    _logger.LogInformation("User created a new account with password.");

                    //////////////////////////////var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    //////////////////////////////var callbackUrl = Url.Page(
                    //////////////////////////////    "/Account/ConfirmEmail",
                    //////////////////////////////    pageHandler: null,
                    //////////////////////////////    values: new { userId = user.Id, code = code },
                    //////////////////////////////    protocol: Request.Scheme);



                    // 09/04/2019 10:33 pm - SSN - [20190904-1845] - [008] - Enforce email confirmation

                    ////////await _emailSender.SendEmailAsync(Input.Email, "Confirm your email",
                    ////////    $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");


                    //await _signInManager.SignInAsync(user, isPersistent: false);
                    //return LocalRedirect(returnUrl);

                    telemetry.TrackEvent($"DemoSite-20190904-2242 - New registration   ");



                    string message = @"
<p>Please confirm your email address.&nbsp;  Check your email.</p>
<p>Thank you for joining in!</p>
";
                    PageContent pageContent = new PageContent();

                    pageContent.AddTitle("Registration Confirmation");
                    pageContent.AddMessage(message);

                    ////////////////////geturl(user);

                    Email.EmailSenders es = new Email.EmailSenders(_userManager, _emailSender, env);

                    // 11/05/2019 06:59 pm - SSN - [20191104-0607] - [017] - Registration - Client 
                    // await es.SendEmailConfirmationRequest( this.Url ,Request,  user);
                    await es.SendEmailConfirmationRequest(this.Url, user);

                    return RedirectToPage("/Feedbackv", new { ErrorModelIndex = pageContent.PageID });





                }
                foreach (var error in result.Errors)
                {
                    if (!error.Code.ToLower().Contains("username"))
                    {
                        ModelState.AddModelError(string.Empty, error.Description);
                    }
                }
            }

            // If we got this far, something failed, redisplay form
            return Page();
        }




    }
}
