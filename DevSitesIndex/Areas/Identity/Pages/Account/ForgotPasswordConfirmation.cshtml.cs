using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SSN_GenUtil_StandardLib;

// 09/05/2019 06:43 pm - SSN - [20190905-1835] - [003] - Resetting password process

namespace DevSitesIndex.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class ForgotPasswordConfirmation : PageModel
    {
        private readonly ILogger_SSN logger;

        // 03/21/2022 03:18 pm - SSN - [20220321-1408] - [015] - Takeout TelemetryClient - Use logger
        // TelemetryClient telemetry = new TelemetryClient();
        // Add logger

        public ForgotPasswordConfirmation(ILogger_SSN _logger)
        {
            logger = _logger;
        }

        public void OnGet()
        {
            // telemetry.TrackPageView("DemoSite-20190905-1842 - ForgotPasswordConfirmation");
            logger.TrackPageView("DemoSite-20190905-1842-B - ForgotPasswordConfirmation");
        }
    }
}
