using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

// 09/05/2019 06:31 am - SSN - [20190904-1845] - [013] - Enforce email confirmation

namespace DevSitesIndex.Areas.Identity.Pages.Account
{
    public class ResendEmailConfirmationRequestModel : PageModel
    {

        TelemetryClient telemetry = new TelemetryClient();


        public Feedbackw_util.PageContent pageContent = new Feedbackw_util.PageContent();

        private readonly UserManager<IdentityUser> _userManager;
        private readonly IEmailSender _emailSender;
        private readonly IHostingEnvironment _env;


        public ResendEmailConfirmationRequestModel(
         UserManager<IdentityUser> userManager,
         IEmailSender emailSender,
         IHostingEnvironment env)
        {
            _userManager = userManager;
            _emailSender = emailSender;
            _env = env;
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

                        pageContent = Feedbackw_util.PageContent.GetPageData(pageID);

                        IdentityUser user = await _userManager.FindByIdAsync(pageContent.TheKey.ToString());

                        Email.EmailSenders es = new Email.EmailSenders(_userManager, _emailSender, _env);

                        await es.SendEmailConfirmationRequest(this.Url, Request, user);


                    }

                }

            }

            telemetry.TrackEvent($"DemoSite-20190905-0625 - Resend email confirmation request [{pageIDAsObj }]");


            //await SendEmailConfirmationRequest(user);

            //return RedirectToPage("/Feedbackv", new { ErrorModelIndex = pageContent.PageID });

        }


    }


}

