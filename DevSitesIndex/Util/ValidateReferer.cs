using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 10/23/2018 07:02 am - SSN - Moved from DisplayCodeController.cs

namespace DevSitesIndex.Util
{
    public class ValidateReferer
    {

        //// 09/26/2018 01:38 pm - SSN - Adding

       static ApprovedRemoteSites approvedRemoteSites = new ApprovedRemoteSites();
        public ValidateReferer(IConfiguration configuration)
        {

            //// 09/26/2018 01:38 pm - SSN - Adding

            configuration.GetSection("ApprovedRemoteSites").Bind(approvedRemoteSites);
        }


        public   void validateReferer(Microsoft.AspNetCore.Http.HttpRequest request, HttpResponse response)
        {
            string approvedReferer = null;

            string currentReferer = request.Headers["Referer"].ToString().ToLower();
            int indexOfSlash = currentReferer.IndexOf('/', 8);
            if (indexOfSlash > 0)
                currentReferer = currentReferer.Substring(0, indexOfSlash);

            if (approvedRemoteSites != null && approvedRemoteSites.Site != null)
            {
                foreach (string s in approvedRemoteSites.Site)
                    {
                    if (currentReferer == s.ToLower())
                    {
                        // 11/09/2018 08:30 am - SSN - ToLower
                        approvedReferer = s.ToLower();
                        break;
                    }
                }
            }

            if (!string.IsNullOrEmpty(approvedReferer))
            {
                if (approvedReferer.EndsWith("/"))
                {
                    approvedReferer = approvedReferer.Substring(0, approvedReferer.Length - 1);
                }
                response.Headers.Add("Access-Control-Allow-Origin", approvedReferer);
            }

            //     Response.Headers.Add("Access-Control-Allow-Origin", "http://af.nonbs.org");
        }
 
    }
}
