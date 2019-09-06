using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;

// 09/05/2019 06:43 pm - SSN - [20190905-1835] - [003] - Resetting password process

namespace DevSitesIndex.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class ForgotPasswordConfirmation : PageModel
    {
        TelemetryClient telemetry = new TelemetryClient();


        public void OnGet()
        {
            telemetry.TrackPageView("DemoSite-20190905-1842 - ForgotPasswordConfirmation");
        }
    }
}
