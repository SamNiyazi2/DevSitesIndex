﻿using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

// 09/05/2019 09:16 am - SSN - [20190904-1845] - [014] - Enforce email confirmation


namespace DevSitesIndex.Email
{
    public class EmailSenders
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IEmailSender _emailSender;
        private readonly IHostingEnvironment _env;
        private readonly ILogger_SSN logger;

        // 03/21/2022 02:23 pm - SSN - [20220321-1408] - [005] - Takeout TelemetryClient - Use logger
        // Added logger

        // TelemetryClient telemetry = new TelemetryClient();

        public EmailSenders(
            UserManager<IdentityUser> userManager,
            IEmailSender emailSender,
            IHostingEnvironment env,
            ILogger_SSN logger)
        {
            _userManager = userManager;
            _emailSender = emailSender;
            _env = env;
            this.logger = logger;
        }


        // 11/05/2019 06:58 pm - SSN - [20191104-0607] - [016] - Registration - Client 
        // public async Task SendEmailConfirmationRequest(IUrlHelper urlHelper, HttpRequest request, IdentityUser user)
        // Remove request
        public async Task SendEmailConfirmationRequest(IUrlHelper urlHelper, IdentityUser user)
        {

            if (user == null || string.IsNullOrWhiteSpace(user.Email))
            {
                //  [20220321-1408] - [005]

                // telemetry.TrackEvent($"DemoSite-20190905-0950 - Calling SendEmailConfirmationRequest with null or empty values [{user?.Email}]");
                logger.TrackPageView($"DemoSite-20190905-0950-B - Calling SendEmailConfirmationRequest with null or empty values [{user?.Email}]");

                return;
            }

            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            // 11/05/2019 06:58 pm - SSN - [20191104-0607] - [016] - Registration - Client 
            // Remove request
            //    string confirmationEmail = CreateEmailLink(urlHelper, request, user.Email, token);
            string confirmationEmail = CreateEmailLink_v02(user.Email, token);

            if (_env.IsDevelopment())
            {
                // 12/15/2022 02:59 am - SSN - Added for Azure try/catch when in dev mode
                string fileName = "ConfirmationLink_20190825a_A.txt";
                try
                {
                    System.IO.File.WriteAllText(fileName, confirmationEmail);
                }
                catch (Exception ex)
                {

                    logger.PostException(ex, $"DemoSite-20221215-0256", $"Failed to write to file [{fileName}]");
                }
            }

            string emailSubject = "Email Confirmation Request";

            string emailBodyText = System.IO.File.ReadAllText("./EmailTemplates/RegistrationConfirmationMessage_20190828_2357.html");

            emailBodyText = emailBodyText.Replace("{{EMAIL_LINK}}", confirmationEmail);

            emailBodyText = ReplaceGenericVariables(emailBodyText);

            await _emailSender.SendEmailAsync(user.Email, emailSubject, emailBodyText);

        }


        // 11/05/2019 06:55 pm - SSN - [20191104-0607] - [015] - Registration - Client 
        // Remove requesst
        // private string CreateEmailLink(IUrlHelper urlHelper, HttpRequest request, string Email, string token)
        private string CreateEmailLink_v02(string Email, string token)
        {

            string token_Encoded = System.Web.HttpUtility.UrlEncode(token);

            string confirmationEmail = string.Format("{0}{1}?code={2}&email={3}", Startup.SITE_FULL_WEB_ADDRESS, "/identity/account/ConfirmEmail", token_Encoded, Email);

            if (_env.IsDevelopment())
            {
                // 12/15/2022 02:59 am - SSN - Added for Azure try/catch when in dev mode
                string fileName = "ConfirmationLink_20190825a_B.txt";

                try
                {
                    System.IO.File.WriteAllText(fileName, confirmationEmail);
                }
                catch (Exception ex)
                {
                    logger.PostException(ex, $"DemoSite-20221215-0258", $"Failed to write to file [{fileName}]");
                }
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


            emailBodyText = emailBodyText.Replace("{{EMAIL_LINK}}", HtmlEncoder.Default.Encode(callbackUrl));

            emailBodyText = ReplaceGenericVariables(emailBodyText);

            //  $"Please reset your password by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.")

            await _emailSender.SendEmailAsync(user.Email, emailSubject, emailBodyText);
        }



        #region Shared Utilities


        private static string ReplaceGenericVariables(string emailBodyText)
        {
            emailBodyText = emailBodyText.Replace("{{SITE_TITLE}}", Startup.SITE_NAME_HTML.ToString());
            emailBodyText = emailBodyText.Replace("{{CSS_BODY}}", CSS_BODY);
            emailBodyText = emailBodyText.Replace("{{CSS_TITLEBLOCK}}", CSS_TITLEBLOCK);
            emailBodyText = emailBodyText.Replace("{{CSS_CONTAINER}}", CSS_CONTAINER);
            return emailBodyText;
        }


        #endregion Shared Utilities




        #region CSS Constants


        static string CSS_BODY => myCssHelper.GetDefinitionFor(ENUM_CSS_CLASS_NAMES.CSS_BODY);

        static string CSS_TITLEBLOCK => myCssHelper.GetDefinitionFor(ENUM_CSS_CLASS_NAMES.CSS_TITLEBLOCK);

        static string CSS_CONTAINER => myCssHelper.GetDefinitionFor(ENUM_CSS_CLASS_NAMES.CSS_CONTAINER);



        static CSS_Helper myCssHelper = new CSS_Helper();



        internal enum ENUM_CSS_CLASS_NAMES
        {
            CSS_BODY,
            CSS_TITLEBLOCK,
            CSS_CONTAINER
        }


        class CSS_Helper
        {

            static List<CSS_Record> CSS_Class_List = new List<CSS_Record>();





            public CSS_Helper()
            {
                SetupListOfDefinitions();
            }


            internal string GetDefinitionFor(ENUM_CSS_CLASS_NAMES option)
            {
                CSS_Record classDefinition = CSS_Class_List.Where(r => r.ClassName == option).FirstOrDefault();

                if (classDefinition == null) return "";

                return Regex.Replace(classDefinition.Class_Definition, "\\s", "");
            }





            class CSS_Record
            {
                public ENUM_CSS_CLASS_NAMES ClassName { get; set; }
                public string Class_Definition { get; set; }
            }


            static void SetupListOfDefinitions()
            {
                CSS_Class_List = new List<CSS_Record> {
                    new CSS_Record
                    {
                        ClassName = ENUM_CSS_CLASS_NAMES.CSS_BODY,
                        Class_Definition = CSS_DEFINITIONS.CSS_BODY
                    },

                    new CSS_Record
                    {
                        ClassName = ENUM_CSS_CLASS_NAMES.CSS_CONTAINER,
                        Class_Definition = CSS_DEFINITIONS.CSS_CONTAINER
                    },

                    new CSS_Record
                    {
                        ClassName = ENUM_CSS_CLASS_NAMES.CSS_TITLEBLOCK,
                        Class_Definition = CSS_DEFINITIONS.CSS_TITLEBLOCK
                    }

                               };
            }






            struct CSS_DEFINITIONS
            {

                public const string CSS_BODY = @"

    font-family: ""Helvetica Neue"", Helvetica, Arial, sans-serif;
        font-size: 14px; 
    width:100%;max-width:600px;
    margin:auto;

";






                public const string CSS_TITLEBLOCK = @"

    background-color: #222;
    border-color: #080808;
    padding: 15px;

    color: #9d9d9d;
    margin: 0px;
    font-size: 18px;

";




                public const string CSS_CONTAINER = @"

    padding: 20px;


";

            }

        }

        #endregion CSS Constants



    }
}
