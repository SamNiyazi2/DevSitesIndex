using DevSitesIndex.Entities;
using DevSitesIndex.Models;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text;

// 08/28/2019 03:50 am - SSN - [20190828-0350] - [001] - Refactor pager


namespace DevSitesIndex.Pages
{


    public class TablePager : PageModel
    {

        public string TestMessageForDebugging { get; set; }
        public HtmlString ReturnedHTML { get; set; }

        IBaseEntity Entity { get; set; }

        string Path;


        public void SetupButtons<T>(PaginatedList<T> source, string _path, string sortOrder, string sortDirectionDescRequested)
        {
            Path = _path;

            StringBuilder sb = new StringBuilder();

            string previousDisabled = source.HasPreviousPage ? "" : "disabled";
            string nextDisabled = source.HasNextPage ? "" : "disabled";

            sb.Append($"<a class=\"btn btn-default {previousDisabled}\" href=\"{Path}?sortOrder={sortOrder}&pageIndex={source.PageIndex - 1}\" >");
            sb.Append("Previous");
            sb.Append("</a>");
            sb.Append($"<a class=\"btn btn-default {nextDisabled}\" href=\"{Path}?sortOrder={sortOrder}&pageIndex={source.PageIndex + 1}\" >");
            sb.Append("Next");
            sb.Append("</a>");


            ReturnedHTML = new HtmlString(sb.ToString());

        }




    }
}