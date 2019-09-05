using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;


// 09/04/2019 09:16 pm - SSN - [20190904-1845] - [003] - Enforce email confirmation


namespace DevSitesIndex.Areas.Identity
{
    public class ErrorModel : PageModel
    {

        public string FeedbackToUser { get; set; }

        public HtmlString FeedbackToUser_AsHtml => new HtmlString(FeedbackToUser);

        public bool HasFeedbackToUser => !string.IsNullOrWhiteSpace(FeedbackToUser);

        static List<string> ErrorModelList = new List<string>();


        static TelemetryClient telemetry = new TelemetryClient();


        public HtmlString getErrorModelList()
        {
            StringBuilder sb = new StringBuilder();

            foreach (string s in ErrorModelList)
            {
                sb.AppendLine(string.Format("<p>{0}</p>", s));
            }

            return new HtmlString(sb.ToString());
        }


        public void OnGet()
        {
            var x = this;
            int index = -1;
            if (Request.QueryString.HasValue)
            {
                object indexAsObj = Request.Query.Keys.Where(r => r == "ErrorModelIndex");

                if (indexAsObj != null)
                {

                    if (int.TryParse(indexAsObj.ToString(), out index))
                    {

                        FeedbackToUser = ErrorModelList[index];
                        FeedbackToUser = ErrorModelList[index];
                        ErrorModelList.RemoveAt(index);
                    }
                }

            }

        }


        internal static int AddMessage(string message)
        {
            try
            {
                lock (ErrorModelList)
                {
                    ErrorModelList.Add(message);
                    return ErrorModelList.Count - 1;
                }

            }
            catch (Exception ex)
            {

                telemetry.TrackEvent("DemoSite-20190904-2114-A - Failed to post error message");
                telemetry.TrackEvent(string.Format("DemoSite-20190904-2114-B - {0} ", ex.Message));
                telemetry.TrackEvent(string.Format("DemoSite-20190904-2114-B - {0} ", ex.StackTrace));
            }

            return -1;
        }
    }
}