using Microsoft.AspNetCore.Html;
using System;

namespace DevSitesIndex.Models
{
    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

        // 09/04/2019 07:25 pm - SSN - [20190904-1845] - [002] - Enforce email confirmation
        public string FeedbackToUser { get; set; }

        public HtmlString FeedbackToUser_AsHtml => new HtmlString(FeedbackToUser);

        public bool HasFeedbackToUser => !string.IsNullOrWhiteSpace(FeedbackToUser);
    }
}
