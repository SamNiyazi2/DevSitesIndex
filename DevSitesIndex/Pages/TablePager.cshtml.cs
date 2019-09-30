using DevSitesIndex.Entities;
using DevSitesIndex.Models;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text;

// 08/28/2019 03:50 am - SSN - [20190828-0350] - [001] - Refactor pager


namespace DevSitesIndex.Pages
{


    public class TablePager : PageModel
    {

        public HtmlString ReturnedHTML { get; set; } = new HtmlString("");

        string Path;

        // 09/27/2019 03:07 pm - SSN - [20190927-0634] - [026] - Testing
        // sortOrder to columnName

        public void SetupButtons<T>(PaginatedList<T> source, string _path, string columnName, string sortDirectionDescRequested, UrlMaker urlMaker = null)
        {
            if (urlMaker == null) return;

            Path = _path;

            StringBuilder sb = new StringBuilder();

            string previousDisabled = source.HasPreviousPage ? "" : "disabled";
            string nextDisabled = source.HasNextPage ? "" : "disabled";

            string url = urlMaker.MakeUrl(Path, columnName, sortDirectionDescRequested);

            sb.Append($"<a class=\"btn btn-default {previousDisabled}\" href=\"{url}&pageIndex={source.PageIndex - 1}\" >");
            sb.Append("Previous");
            sb.Append("</a>");


            sb.Append($"<a class=\"btn btn-default {nextDisabled}\" href=\"{url}&pageIndex={source.PageIndex + 1}\" >");
            sb.Append("Next");
            sb.Append("</a>");


            ReturnedHTML = new HtmlString(sb.ToString());

        }




    }
}