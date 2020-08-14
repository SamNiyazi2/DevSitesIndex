﻿using DevSitesIndex.Util;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// 11/06/2019 07:10 am - SSN - [20191104-0607] - [019] - Registration - Client 
//using Microsoft.Extensions.Logging;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 11/05/2019 06:44 pm - SSN - [20191104-0607] - [014] - Registration - Client 

namespace DevSitesIndex.Areas.Identity.Pages.Account
{
    public class Register_SharedCode
    {

        private readonly UserManager<IdentityUser> _userManager;
        private readonly ILogger<RegisterModel> _logger;
        private readonly IEmailSender _emailSender;
        private readonly IHostingEnvironment env;

        public Register_SharedCode(UserManager<IdentityUser> userManager, ILogger<RegisterModel> logger, IEmailSender emailSender, IHostingEnvironment env)
        {
            _userManager = userManager;
            _logger = logger;
            _emailSender = emailSender;
            this.env = env;
        }


        // 11/06/2019 04:02 pm - SSN - [20191104-0607] - [025] - Registration - Client 

        public class Regiseration_Result
        {
            public IdentityResult identityResult { get; set; }
            public PageContent pageContent { get; set; }

        }

        TelemetryClient telemetry = new TelemetryClient();

        public async Task<Regiseration_Result> createUser(IUrlHelper urlHelper, RegisterModel.InputModel Input)
        {

            Regiseration_Result regiseration_Result = new Regiseration_Result();

            var user = new IdentityUser { UserName = Input.Email, Email = Input.Email };
            regiseration_Result.identityResult = await _userManager.CreateAsync(user, Input.Password);

            if (regiseration_Result.identityResult.Succeeded)
            {
                _logger.LogInformation("User created a new account with password.");

                telemetry.TrackEvent($"DemoSite-20191105-1913 - New registration  ");

                //  Feedbackw_util.PageContent pageContent = new Feedbackw_util.PageContent();
                regiseration_Result.pageContent = new PageContent();
                regiseration_Result.pageContent.AddTitle("Registration Confirmation");
                regiseration_Result.pageContent.AddMessage("Please confirm your email address.&nbsp;  Check your email.");
                regiseration_Result.pageContent.AddMessage("Thank you for taking the time to review the site.");


                Email.EmailSenders es = new Email.EmailSenders(_userManager, _emailSender, env);
                await es.SendEmailConfirmationRequest(urlHelper, user);

            }

            return regiseration_Result;
        }


    }
}

