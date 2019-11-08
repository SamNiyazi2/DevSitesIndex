using DevSitesIndex.Util;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


// 11/07/2019 01:09 pm - SSN - [20191107-1213] - [009] - Login -  Test run after working with newly added register option
// Copied back from AuthenticateUserAPIController

namespace DevSitesIndex.Areas.Identity.Pages.Account
{
    public class Login_SharedCode
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly ILogger_SSN _logger;
        private readonly IConfiguration configuration;
        private readonly IHostingEnvironment env;


        public Login_SharedCode(SignInManager<IdentityUser> signInManager, ILogger_SSN logger, IConfiguration configuration, IHostingEnvironment env)
        {
            this.configuration = configuration;
            this.env = env;
            _signInManager = signInManager;
            _logger = logger;
        }

        public class Login_Result
        {
            public SignInResult signInResult { get; set; } = new SignInResult();
            public DataBag<string> dataBag { get; set; } = new DataBag<string>();

        }

        public async Task<Login_Result> loginUser(LoginModel.InputModel Input)
        {
            Login_Result Login_Result = new Login_Result();



            // 08/28/2019 08:20 am - SSN - [20190828-0819] - [002] - Adding Application Insights
            // TelemetryClient telemetry = new TelemetryClient();


            // This doesn't count login failures towards account lockout
            // To enable password failures to trigger account lockout, set lockoutOnFailure: true


            // 09/04/2019 06:45 pm - SSN - [20190904-1845] - [001] - Enforce email confirmation


            IdentityUser identityUser = await _signInManager.UserManager.FindByEmailAsync(Input.Email);

            if (identityUser == null)
            {
                //ModelState.AddModelError(string.Empty, "Invalid email or password.");
                Login_Result.dataBag.addToBagModelError(string.Empty, "Invalid email or password.");
                _logger.TrackEvent($"DemoSite-20190905-0517 - Invalid email [{Input.Email}]");
                return Login_Result;

            }


            bool hasValidCredentials = await _signInManager.UserManager.CheckPasswordAsync(identityUser, Input.Password);


            if (!hasValidCredentials)
            {
                // ModelState.AddModelError(string.Empty, "Invalid email  or password.");
                Login_Result.dataBag.addToBagModelError(string.Empty, "Invalid email or password.");
                _logger.TrackEvent($"DemoSite-20190905-0539 - Invalid email or password [{Input.Email}]");
                return Login_Result;

            }



            if (!await _signInManager.UserManager.IsEmailConfirmedAsync(identityUser))
            {
                // ModelState.AddModelError("", "Email not confirmed.");
                // Should not be treated as an error.
                // Should not be treated as an error.
                // Should not be treated as an error.
                // Login_Result.dataBag.addToBagModelError("", "Email not confirmed.");
                _logger.TrackEvent("DemoSite-20190904-1851 - Email not confirmed");


                #region  Message to user when they click the link to resend their confirmation email

                // Feedbackw_util.PageContent pageContent2 = new Feedbackw_util.PageContent();
                PageContent pageContent2 = new PageContent();

                pageContent2.AddUserID(identityUser.Id);

                pageContent2.AddTitle("Confirmation Email Request Sent");
                pageContent2.AddMessage(@"<p>Confirmation email was sent.&nbsp;  Please check your email</p>");
                pageContent2.AddMessage(@"<p>Thank you!</p>");

                #endregion


                #region Message to use on this page.

                string message = "<p>You have not confirmed your email address.&nbsp; Please " +
                                "<a href='/Identity/account/resendemailconfirmationrequest?id=" + pageContent2.PageID + "' >get a new confirmation request</a>.</p>" +
                                "<p>Thank you!</p>";


                Login_Result.dataBag.pageContent = new PageContent();

                Login_Result.dataBag.pageContent.AddTitle("Email Not Confirmed");
                Login_Result.dataBag.pageContent.AddMessage(message);

                #endregion



                // return RedirectToPage("/Feedbackv", new { ErrorModelIndex = pageContent.PageID });
                return Login_Result;

            }




            Login_Result.signInResult = await _signInManager.PasswordSignInAsync(Input.Email, Input.Password, Input.RememberMe, lockoutOnFailure: true);

            if (Login_Result.signInResult.Succeeded)
            {

                //_logger.LogInformation("User logged in.");
                //_logger.TrackEvent($"DemoSite-20190828-0821: Login successful (2) {Input.Email} [{returnUrl}]");

                // return LocalRedirect(returnUrl);
                return Login_Result;
            }


            if (Login_Result.signInResult.RequiresTwoFactor)
            {
                //return RedirectToPage("./LoginWith2fa", new
                //{
                //    ReturnUrl = returnUrl,
                //    RememberMe = Input.RememberMe
                //});

                return Login_Result;
            }


            if (Login_Result.signInResult.IsLockedOut)
            {
                _logger.TrackEvent($"DemoSite-20190828-0821: Login failure.  Lockedout {Input.Email}");

                //_logger.LogWarning("User account locked out.");

                //return RedirectToPage("./Lockout");
                return Login_Result;

            }
            else
            {
                _logger.TrackEvent($"DemoSite-20190828-0821: Login failure.  Invalid login. {Input.Email}");

                // ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                Login_Result.dataBag.addToBagModelError(string.Empty, "Invalid login attempt.");
                //return Page();
                return Login_Result;
            }

        }


    }
}
