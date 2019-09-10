using Microsoft.AspNetCore.Html;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 01/28/2019 04:56 pm - SSN

namespace DevSitesIndex.Util
{
    public class Odds
    {

        public static HtmlString showCopyright()
        {
            return new HtmlString($"<p>&copy; 2018 - {Startup.SITE_NAME_STRING}</p>");
        }
    }
}
