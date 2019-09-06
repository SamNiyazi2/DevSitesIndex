using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

// 09/05/2019 09:16 am - SSN - [20190904-1845] - [014] - Enforce email confirmation


namespace DevSitesIndex.Email
{
    public class EmailSenders
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IEmailSender _emailSender;
        private readonly IHostingEnvironment _env;

        TelemetryClient telemetry = new TelemetryClient();

        public EmailSenders(
            UserManager<IdentityUser> userManager,
            //SignInManager<IdentityUser> signInManager,
            //ILogger<RegisterModel> logger,
            IEmailSender emailSender,
            IHostingEnvironment env)
        {
            _userManager = userManager;
            _emailSender = emailSender;
            _env = env;
        }


        public async Task SendEmailConfirmationRequest(IUrlHelper urlHelper, HttpRequest request, IdentityUser user)
        {
            if (user == null || string.IsNullOrWhiteSpace(user.Email))
            {

                telemetry.TrackEvent($"DemoSite-20190905-0950 - Calling SendEmailConfirmationRequest with null or empty values [{user?.Email}]");

                return;
            }

            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);


            // var confirmationEmail = Url.Action("/identity/account/ConfirmEmail", "Home", new { token, email = user.Email }, Request.Scheme);
            // var confirmationEmail = Url.Action("account/ConfirmEmail", "Identity",  new { token, email = user.Email }, Request.Scheme);

            //string confirmationEmail_1 = this.Url.Page("", "", new { code = token, email = user.Email }, Request.Scheme);
            //string confirmationEmail_2 = this.Url.Page("");

            //string confirmationEmail = confirmationEmail_1.Replace(confirmationEmail_2, "/identity/account/ConfirmEmail");

            //if (env.IsDevelopment())
            //{
            //    System.IO.File.WriteAllText("ConfirmationLink_20190825a.txt", confirmationEmail);
            //}


            string confirmationEmail = CreateEmailLink(urlHelper, request, user.Email, token);



            string emailSubject = "Email Confirmation Request";

            string emailBodyText = System.IO.File.ReadAllText("./EmailTemplates/RegistrationConfirmationMessage_20190828_2357.html");
            string css_Context = System.IO.File.ReadAllText("./EmailTemplates/default.css");

            emailBodyText = emailBodyText.Replace("{{EMAIL_LINK}}", confirmationEmail);
            emailBodyText = emailBodyText.Replace("{{CSS_CONTENT}}", css_Context);


            /////  // Response response = await sendEmail(userName, emailSubject, emailBodyText);

            await _emailSender.SendEmailAsync(user.Email, emailSubject, emailBodyText);
        }


        private string CreateEmailLink(IUrlHelper urlHelper, HttpRequest request, string Email, string token)
        {


            string confirmationEmail_1 = urlHelper.Page("", "", new { code = token, email = Email }, request.Scheme);
            string confirmationEmail_2 = urlHelper.Page("");

            string confirmationEmail = confirmationEmail_1.Replace(confirmationEmail_2, "/identity/account/ConfirmEmail");

            if (_env.IsDevelopment())
            {
                System.IO.File.WriteAllText("ConfirmationLink_20190825a.txt", confirmationEmail);
            }

            return confirmationEmail;

        }


        // 09/05/2019 06:36 pm - SSN - [20190905-1835] - [001] - Resetting password process

        public static async Task SendForgotPasswordResetRequest(UserManager<IdentityUser> _userManager, IEmailSender _emailSender, IdentityUser user, PageModel pageModel)
        {
            // For more information on how to enable account confirmation and password reset please 
            // visit https://go.microsoft.com/fwlink/?LinkID=532713

            var code = await _userManager.GeneratePasswordResetTokenAsync(user);
            var callbackUrl = pageModel.Url.Page(
                "/Account/ResetPassword",
                pageHandler: null,
                values: new { code },
                protocol: pageModel.Request.Scheme);


            string emailSubject = "Reset Password Request";

            string emailBodyText = System.IO.File.ReadAllText("./EmailTemplates/ResetPasswordMessage_20190829_0129.html");
            string css_Context = System.IO.File.ReadAllText("./EmailTemplates/default.css");

            emailBodyText = emailBodyText.Replace("{{EMAIL_LINK}}", HtmlEncoder.Default.Encode(callbackUrl));
            emailBodyText = emailBodyText.Replace("{{CSS_CONTENT}}", css_Context);

            //  $"Please reset your password by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.")

            await _emailSender.SendEmailAsync( user.Email, emailSubject, emailBodyText);
        }



    }
}
