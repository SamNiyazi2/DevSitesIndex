using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Util;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SSN_GenUtil_StandardLib;

// 09/05/2019 06:31 am - SSN - [20190904-1845] - [013] - Enforce email confirmation

namespace DevSitesIndex.Areas.Identity.Pages.Account
{
    public class ResendEmailConfirmationRequestModel : PageModel
    {
        // 03/21/2022 02:28 pm - SSN - [20220321-1408] - [008] - Takeout TelemetryClient - Use logger
        // Add logger

        // TelemetryClient telemetry = new TelemetryClient();

        public PageContent pageContent = new PageContent();

        private readonly UserManager<IdentityUser> _userManager;
        private readonly IEmailSender _emailSender;
        private readonly IHostingEnvironment _env;
        private readonly SSN_Logger logger;

        public ResendEmailConfirmationRequestModel(
         UserManager<IdentityUser> userManager,
         IEmailSender emailSender,
         IHostingEnvironment env,
         SSN_Logger logger)
        {
            _userManager = userManager;
            _emailSender = emailSender;
            _env = env;
            this.logger = logger;
        }



        public async Task<IActionResult> OnGetAsync()
        {
            await RunProcess();
            return Page();
        }



        private async Task RunProcess()
        {
            Guid pageID = Guid.Empty;
            string pageIDAsObj = "NotSet";

            if (Request.QueryString.HasValue)
            {
                pageIDAsObj = Request.Query["id"];

                if (pageIDAsObj != null)
                {
                    if (Guid.TryParse(pageIDAsObj.ToString(), out pageID))
                    {

                        pageContent = PageContent.GetPageData(pageID);

                        // IdentityUser user = await _userManager.FindByIdAsync(pageContent.TheKey.ToString());
                        IdentityUser user = await _userManager.FindByIdAsync(pageContent.UserID.ToString());

                        Email.EmailSenders es = new Email.EmailSenders(_userManager, _emailSender, _env, logger);

                        // 11/05/2019 06:59 pm - SSN - [20191104-0607] - [018] - Registration - Client 
                        // await es.SendEmailConfirmationRequest(this.Url, Request, user);
                        await es.SendEmailConfirmationRequest(this.Url, user);


                    }

                }

            }


            // [20220321-1408] - [008] 
            // telemetry.TrackEvent($"DemoSite-20190905-0625 - Resend email confirmation request [{pageIDAsObj }]");
            logger.TrackEvent($"DemoSite-20190905-0625-B - Resend email confirmation request [{pageIDAsObj }]");


            //await SendEmailConfirmationRequest(user);

            //return RedirectToPage("/Feedbackv", new { ErrorModelIndex = pageContent.PageID });

        }


    }


}

