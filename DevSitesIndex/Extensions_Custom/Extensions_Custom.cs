using Microsoft.AspNetCore.Html;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

 


// 09/27/2019 11:36 am - SSN - [20190927-0634] - [016] - Testing
// Created yesterday.  
namespace Microsoft.AspNetCore.Mvc.Rendering
{
    //
    // Summary:
    //     Display-related extensions for Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper
    //     and Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper`1.
    public static class HtmlHelperDisplayExtensions
    {
        /// <summary>
        /// LinkFor_SSN( "Caption", "http://SomeDomain.com/{0}/{1}?somequery={2}", key1, key2, keyN)
        /// </summary>
        /// <param name="htmlHelper"></param>
        /// <param name="caption"></param>
        /// <param name="formattedUrl"></param>
        /// <param name="keys"></param>
        /// <returns></returns>
        public static IHtmlContent Linkfor_SSN(this IHtmlHelper htmlHelper, string caption, string formattedUrl, params object[] keys)
        {
            HtmlContentBuilder c = new HtmlContentBuilder();

            c.AppendHtml(string.Format("<a href=\"{1}\">{0}</a>", caption, string.Format(formattedUrl, keys)));
            return c;

        }
    }
}


