using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DevSitesIndex.Pages.Error
{
    public class ErrorModel : PageModel
    {
        // 09/04/2019 07:25 pm - SSN - [20190904-1845] - [002] - Enforce email confirmation
        public string FeedbackToUser { get; set; }

        public HtmlString FeedbackToUser_AsHtml => new HtmlString(FeedbackToUser);

        public bool HasFeedbackToUser => string.IsNullOrWhiteSpace(FeedbackToUser);

        public void OnGet()
        {

        }
    }
}