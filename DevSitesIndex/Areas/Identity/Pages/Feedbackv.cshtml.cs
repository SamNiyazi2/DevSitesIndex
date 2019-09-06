using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Linq;
using System.Text;


// 09/04/2019 09:16 pm - SSN - [20190904-1845] - [003] - Enforce email confirmation


namespace DevSitesIndex.Areas.Identity
{
    public class ErrorModel : PageModel
    {


        static TelemetryClient telemetry = new TelemetryClient();

        public Feedbackw_util.PageContent pageContent = new Feedbackw_util.PageContent();


        public void OnGet()
        {
            Guid pageID = Guid.Empty;

            if (Request.QueryString.HasValue)
            {
                string pageIDAsObj = Request.Query["ErrorModelIndex"];

                if (pageIDAsObj != null)
                {
                    if (Guid.TryParse(pageIDAsObj.ToString(), out pageID))
                    {
                        pageContent = Feedbackw_util.PageContent.GetPageData(pageID);

                    }

                }

            }

        }





    }
}