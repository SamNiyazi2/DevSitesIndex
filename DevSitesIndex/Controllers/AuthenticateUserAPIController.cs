using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Util;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Configuration;

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
   
    public class AuthenticateUserAPIController : Controller
    {
        private IConfiguration configuration;
        private IHostingEnvironment env;
        private SignInManager<IdentityUser> _signInManager;
        private ILogger_SSN _logger;


        // 10/07/2019 10:31 am - SSN - [20191007-1020] - [004] - Adding Angular 7 - Collecting data with Angular forms and validations - Authenticate user
        // Copied from C:\Sams\DevSitesIndex\DevSitesIndex\Areas\Identity\Pages\Account\Login.cshtml.cs
        //     public async Task<IActionResult> OnPostAsync(string returnUrl = null)


        public AuthenticateUserAPIController(SignInManager<IdentityUser> signInManager, Util.ILogger_SSN logger, IConfiguration configuration, IHostingEnvironment env)
        {
            this.configuration = configuration;
            this.env = env;
            _signInManager = signInManager;
            _logger = logger;
        }

        public class AuthResult
        {
            public bool isAuthenticated { get; set; }
            public string email { get; set; }


            public List<String> FeedbackMessages { get; set; }

            public void addMessage(string message)
            {
                if ( FeedbackMessages == null ) FeedbackMessages = new List<string>();
                FeedbackMessages.Add(message);
            }

            public void copyModelError(ModelStateDictionary pageModelState)
            {
                if (pageModelState == null) return;

                foreach (KeyValuePair<string, ModelStateEntry> e in pageModelState)
                {
                    string key = e.Key;
                    foreach (ModelError me in e.Value.Errors)
                    {
                        string em = me.ErrorMessage;
                        addMessage(em);
                    }

                }

            }

        }

        public class TempUser
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public  AuthResult OnPost( [FromBody] TempUser Input) // Input replaces form Input variable from code copied here
        {
            string temp = "Tesint";

            AuthResult result = authenticateUser(Input).Result;
            result.copyModelError(ModelState);
            return result;
        }


        private async Task<AuthResult> authenticateUser(TempUser Input) // Input replaces form Input variable from code copied here
        {

            AuthResult result = new AuthResult { };

            IdentityUser identityUser = await _signInManager.UserManager.FindByEmailAsync(Input.Email);

            if (identityUser == null)
            {
                ModelState.AddModelError(string.Empty, "Invalid email or password.");
                _logger.TrackEvent($"DemoSite-20191007-1039 - Invalid email [{Input.Email}]");
                return result;
            }


            bool hasValidCredentials = await _signInManager.UserManager.CheckPasswordAsync(identityUser, Input.Password);


            if (!hasValidCredentials)
            {
                ModelState.AddModelError(string.Empty, "Invalid email  or password.");
                _logger.TrackEvent($"DemoSite-20191007-1044 - Invalid email or password [{Input.Email}]");
                return result;

            }



            if (!await _signInManager.UserManager.IsEmailConfirmedAsync(identityUser))
            {
                ModelState.AddModelError("", "Email not confirmed.");

                _logger.TrackEvent("DemoSite-20191007-1045 - Email not confirmed");


                //#region  Message to user when they click the link to resend their confirmation email
                //Feedbackw_util.PageContent pageContent2 = new Feedbackw_util.PageContent();

                //pageContent2.AddTheKey(identityUser.Id.ToString());

                //pageContent2.AddTitle("Confirmation Email Request Sent");
                //pageContent2.AddMessage(@"<p>Confirmation email was sent.&nbsp;  Please check your email</p>");
                //pageContent2.AddMessage(@"<p>Thank you!</p>");

                //#endregion


                #region Message to use on this page.

                //string message = "<p>You have not confirmed your email address.&nbsp; Please " +
                //                "<a href='/Identity/account/resendemailconfirmationrequest?id=" + pageContent2.PageID + "' >get a new confirmation request</a>.</p>" +
                //                "<p>Thank you!</p>";


                //Feedbackw_util.PageContent pageContent = new Feedbackw_util.PageContent();

                //pageContent.AddTitle("Email Not Confirmed");
                //pageContent.AddMessage(message);

                result.addMessage("Email Not Confirmed");

                #endregion



                // return RedirectToPage("/Feedbackv", new { ErrorModelIndex = pageContent.PageID });

            }

            bool rememberMe = false; //Input.RememberMe
            var result2 = await _signInManager.PasswordSignInAsync(Input.Email, Input.Password, rememberMe , lockoutOnFailure: true);
            if (result2.Succeeded)
            {

                _logger.TrackEvent($"DemoSite-20191007-1401 : Login successful {Input.Email} ");

                result.isAuthenticated = true;
                result.email = Input.Email;
                return result;
            }


            //if (result2.RequiresTwoFactor)
            //{
            //    return RedirectToPage("./LoginWith2fa", new
            //    {
            //        ReturnUrl = returnUrl,
            //        RememberMe = Input.RememberMe
            //    });
            //}


            if (result2.IsLockedOut)
            {
                _logger.TrackEvent($"DemoSite-20191007-1402 : Login failure.  Lockedout {Input.Email}");

                _logger.TrackEvent("User account locked out.");

                result.addMessage("User account is locked out.");
            }
            else
            {
                _logger.TrackEvent($"DemoSite-20191007-1403: Login failure.  Invalid login. {Input.Email}");

                ModelState.AddModelError(string.Empty, "Invalid login attempt.");
            }




            return result;

        }
    }



}