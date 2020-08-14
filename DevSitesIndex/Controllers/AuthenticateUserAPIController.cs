using DevSitesIndex.Areas.Identity.Pages.Account;
using DevSitesIndex.Util;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;



// C:\Sams\DevSitesIndex\DevSitesIndex\Controllers\IdentitySupportController.cs
// C:\Sams\DevSitesIndex\DevSitesIndex\Controllers\IdentitySupportController.cs
// C:\Sams\DevSitesIndex\DevSitesIndex\Controllers\IdentitySupportController.cs
// C:\Sams\DevSitesIndex\DevSitesIndex\Controllers\IdentitySupportController.cs
// C:\Sams\DevSitesIndex\DevSitesIndex\Controllers\IdentitySupportController.cs
// C:\Sams\DevSitesIndex\DevSitesIndex\Controllers\IdentitySupportController.cs
// C:\Sams\DevSitesIndex\DevSitesIndex\Controllers\IdentitySupportController.cs

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


        public AuthenticateUserAPIController(SignInManager<IdentityUser> signInManager, ILogger_SSN logger, IConfiguration configuration, IHostingEnvironment env)
        {
            this.configuration = configuration;
            this.env = env;
            _signInManager = signInManager;
            _logger = logger;
        }

        public class AuthResult_v02
        {
            public bool isAuthenticated { get; set; }
            public string email { get; set; }
            public string firstName { get; set; }
            public string lastName { get; set; }

            public DataBag<string> dataBag { get; set; }

        }




        // 10/11/2019 06:56 pm - SSN - Testing     [ValidateAntiForgeryToken]
        [ValidateAntiForgeryToken]
        // 11/07/2019 01:02 pm - SSN - [20191107-1213] - [008] - Login -  Test run after working with newly added register option
        // Replace AuthResult with DataBag
        // public AuthResult OnPost([FromBody] TempUser Input) // Input replaces form Input variable from code copied here

        // public DataBag<LoginModel.InputModel> OnPost([FromBody] TempUser Input) // Input replaces form Input variable from code copied here
        public async Task<AuthResult_v02> OnPostAsync([FromBody] LoginModel.InputModel Input) // Input replaces form Input variable from code copied here
        {

            Login_SharedCode login_SharedCode = new Login_SharedCode(_signInManager, _logger, configuration, env);

            //LoginModel.InputModel result = authenticateUser(Input).Result;
            Login_SharedCode.Login_Result result_1 = await login_SharedCode.loginUser(Input);

            AuthResult_v02 result = new AuthResult_v02();
            result.dataBag = result_1.dataBag;
            result.dataBag.pageContent = PageContent.GetPageData(result.dataBag.pageContent.PageID);

            if (result_1.signInResult.Succeeded)
            {
                AuthResult_setEmail_and_Authorize(Input.Email, result);
            }




            return result;
        }



        private static void AuthResult_setEmail_and_Authorize(string email, AuthResult_v02 result)
        {

            try
            {
                result.email = email;
                result.isAuthenticated = true;

                if (email.IndexOf("@") > 0)
                {
                    result.firstName = email.Substring(0, email.IndexOf("@"));
                    result.lastName = email.Substring(email.IndexOf("@") + 1);
                }
                else
                {
                    result.firstName = "no @";
                }


            }
            catch (Exception ex)
            {
                result.firstName = ex.Message;
            }
        }


        // 10/08/2019 07:10 pm - SSN - [20191008-1232] - [013] - X-XSRF-TOKEN

        [Route("isLoggedIn")]
        //    [ValidateAntiForgeryToken]
        // 11/07/2019 02:37 pm - SSN - [20191107-1213] - [013] - Login -  Test run after working with newly added register option


        public AuthResult_v02 isLoggedIn()
        {
            AuthResult_v02 result = new AuthResult_v02();

            if (User.Identity.IsAuthenticated)
            {
                string userID = _signInManager.UserManager.GetUserId(User);
                IdentityUser identityUser = _signInManager.UserManager.FindByIdAsync(userID).Result;

                AuthResult_setEmail_and_Authorize(identityUser.Email, result);
            }

            return result;
        }

        // 10/08/2019 08:08 pm - SSN - [20191008-1232] - [014] - X-XSRF-TOKEN

        [Route("forgeryToken")]
        [Produces("text/html")]
        public PartialViewResult forgeryToken()
        {

            PartialViewResult view = new PartialViewResult { ViewName = "AntiForgeryTokenView" };
            view.ContentType = "text/html";

            return PartialView("AntiForgeryTokenView");

        }



        // 10/08/2019 01:55 pm - SSN - [20191008-1232] - [003] - X-XSRF-TOKEN

        [Route("logout")]
        [ValidateAntiForgeryToken]
        public AuthResult_v02 logout(string returnUrl = null)
        {

            AuthResult_v02 result = new AuthResult_v02();
            if (User.Identity.IsAuthenticated)
            {
                Task t = logout_local(returnUrl);
                t.Wait();
            }
            return result;

        }



        private async Task logout_local(string returnUrl = null)
        {
            await _signInManager.SignOutAsync();
            _logger.TrackEvent("DemoSite-2019108-1404 - User logged out.");

            //return LocalRedirect(returnUrl);

        }



    }

}

