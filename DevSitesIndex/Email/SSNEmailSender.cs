﻿using Microsoft.AspNetCore.Identity.UI.Services;
using SendGrid;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 08/29/2019 12:12 pm - SSN - [20190829-1212] - [001] - Adding email confirmation 

namespace DevSitesIndex.Email
{
    public class SSNEmailSender : IEmailSender
    {
        public async Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            var emailFrom = SSNSendGridStandardUtil.SendGridUtil.AddEmailAddress("sam2003@niyazi.com", "TestSam.com");
            var emailTo = SSNSendGridStandardUtil.SendGridUtil.AddEmailAddress(email, email);
            Response response = await SSNSendGridStandardUtil.SendGridUtil.SendMessage(emailFrom, emailTo, subject, htmlMessage);


        }
    }
}
