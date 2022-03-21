using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
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
using SSN_GenUtil_StandardLib;

namespace DevSitesIndex.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class RegisterModel : PageModel
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IEmailSender _emailSender;
        private readonly IHostingEnvironment env;
        private readonly SSN_Logger logger2;

        // 09/05/2019 05:29 am - SSN - [20190904-1845] - [011] - Enforce email confirmation
        // Added IHostingEnvironment


        private readonly ILogger<RegisterModel> _logger;
        // 03/21/2022 02:38 pm - SSN - [20220321-1408] - [012] - Takeout TelemetryClient - Use logger


        public RegisterModel(
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager,
            ILogger<RegisterModel> logger,
            IEmailSender emailSender,
            IHostingEnvironment env,
            SSN_Logger logger2)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _emailSender = emailSender;
            this.env = env;


            _logger = logger;
            this.logger2 = logger2;


        }

        // 09/04/2019 10:41 pm - SSN - [20190904-1845] - [009] - Enforce email confirmation

        // 03/21/2022 02:37 pm - SSN - [20220321-1408] - [011] - Takeout TelemetryClient - Use logger

        // TelemetryClient telemetry = new TelemetryClient();


        [BindProperty]
        public InputModel Input { get; set; }

        public string ReturnUrl { get; set; }

        // 03/20/2022 11:17 pm - SSN - [20220320-2236] - [002] - Add ReCaptcha to the registration page

        public string ReCaptchaKey
        {
            get
            {
                string reCaptchaKey = Startup.Configuration["ReCaptcha:key"];
                return reCaptchaKey;

            }
        }


        [BindProperty]
        public string ReCaptcha_ReturnedToken { get; set; }



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


            bool isValidReCaptcha = validateReCaptcha();


            if (ModelState.IsValid && isValidReCaptcha)
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

                    //  [20220321-1408] - [011]

                    // telemetry.TrackEvent($"DemoSite-20190904-2242 - New registration   ");
                    logger2.TrackEvent($"DemoSite-20190904-2242-B - New registration   ");



                    string message = @"
<p>Please confirm your email address.&nbsp;  Check your email.</p>
<p>Thank you for joining in!</p>
";
                    PageContent pageContent = new PageContent();

                    pageContent.AddTitle("Registration Confirmation");
                    pageContent.AddMessage(message);

                    ////////////////////geturl(user);

                    Email.EmailSenders es = new Email.EmailSenders(_userManager, _emailSender, env, logger2);

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




        // 03/20/2022 11:31 pm - SSN - [20220320-2236] - [003] - Add ReCaptcha to the registration page
        // Testing

        #region ReCaptcha validation

        class GoogleResponse
        {
            public bool success { get; set; }
            public string challenge_ts { get; set; }
            public string hostname { get; set; }
            public string action { get; set; }

            [JsonPropertyName("error-codes")]
            public string[] errorCodes { get; set; } = { };

        }

        private bool validateReCaptcha()
        {
            bool isValid = false;

            using (HttpClient client = new HttpClient())
            {

                var url2 = string.Format("{0}?secret={1}&response={2}", "https://www.google.com/recaptcha/api/siteverify", Startup.Configuration["ReCaptcha:secret"], ReCaptcha_ReturnedToken);

                HttpResponseMessage response = client.PostAsync(url2, null).Result;

                if (response.IsSuccessStatusCode)
                {
                    string contentString = response.Content.ReadAsStringAsync().Result;

                    var stringReader = new System.IO.StringReader(contentString);
                    GoogleResponse googleResponse = JsonSerializer.Deserialize<GoogleResponse>(stringReader.ReadToEnd());
                    isValid = googleResponse.success;


                    Dictionary<string, string> bag = new Dictionary<string, string>();
                    bag.Add("action", googleResponse.action);
                    bag.Add("challenge_ts", googleResponse.challenge_ts);
                    bag.Add("hostname", googleResponse.hostname);
                    bag.Add("success", googleResponse.success.ToString());
                    int errorCount = 0;
                    foreach (string errorMessage in googleResponse.errorCodes)
                    {
                        errorCount++;
                        bag.Add($"Error {errorCount}", errorMessage);
                    }


                    // telemetry.TrackEvent($"DemoSite-20220321-1253 - New registration  - ReCaptcha ", bag);
                    logger2.TrackEvent($"DemoSite-20220321-1253-B - New registration  - ReCaptcha ", bag);

                }
                else
                {
                    // telemetry.TrackEvent($"DemoSite-20220321-1258 - New registration  - ReCaptcha response failed {response.StatusCode }");
                    logger2.TrackEvent($"DemoSite-20220321-1258-B - New registration  - ReCaptcha response failed {response.StatusCode }");
                }
            }

            return isValid;
        }

        #endregion ReCaptcha validation

    }
}
