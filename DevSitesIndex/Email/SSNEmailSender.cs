using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.Configuration;
using SendGrid;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 08/29/2019 12:12 pm - SSN - [20190829-1212] - [001] - Adding email confirmation 

namespace DevSitesIndex.Email
{
    public class SSNEmailSender : IEmailSender
    {
        private readonly ILogger_SSN logger;
        bool dontSendEmail = false;

        public SSNEmailSender(IConfiguration configuration, ILogger_SSN logger)
        {

            bool.TryParse(configuration["DontSendEmail"], out dontSendEmail);
            this.logger = logger;
        }


        public async Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            var emailFrom = SSNSendGridStandardUtil.SendGridUtil.AddEmailAddress("sam2003@niyazi.com", Startup.SITE_NAME_STRING);
            var emailTo = SSNSendGridStandardUtil.SendGridUtil.AddEmailAddress(email, email);

            logger.TrackEvent($"SSNEmailSender - 20191107-2348 dontSendEmail [{dontSendEmail}]");

            if (!dontSendEmail)
            {
                Response response = await SSNSendGridStandardUtil.SendGridUtil.SendMessage(emailFrom, emailTo, subject, htmlMessage);
            }


        }
    }
}
