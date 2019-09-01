using Microsoft.AspNetCore.Html;
using System.Text;

// 09/01/2019 03:00 pm - SSN - [20190901-1225] - [005] - Add Job_DevSite table  - Adding paging and sorting to DevSite index

namespace DevSitesIndex.Util
{
    public class FormHtmlUtil
    {
        internal static string GetFormActionUrl(string path, string sortColumn, string desc, int? pageIndex)
        {
            StringBuilder sb = new StringBuilder();

            sb.Append($"sortOrder={sortColumn}&desc={desc}");

            if (pageIndex.HasValue) sb.Append($"&pageIndex={pageIndex}");

            string queryString = System.Web.HttpUtility.UrlEncode(sb.ToString());

            string final = $"{path}?{queryString }";
            return "/DevSites/index";
            return final;

            // return new HtmlString(  sb.ToString());
        }
    }
}
