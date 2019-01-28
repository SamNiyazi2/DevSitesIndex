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

        // 01/01/2019 10:51 pm - SSN - Added check
        // static ApprovedRemoteSites approvedRemoteSites = new ApprovedRemoteSites();
        static ApprovedRemoteSites approvedRemoteSites = null;

        public ValidateReferer(IConfiguration configuration)
        {

            //// 09/26/2018 01:38 pm - SSN - Adding
            // 01/01/2019 10:51 pm - SSN - Added check
            if (approvedRemoteSites == null)
            {
                approvedRemoteSites = new ApprovedRemoteSites();
                configuration.GetSection("ApprovedRemoteSites").Bind(approvedRemoteSites);
            }
        }



        public void validateReferer(Microsoft.AspNetCore.Http.HttpRequest request, HttpResponse response)
        {

            // response.Headers.Add("Access-Control-Allow-Origin", "http://af.nonbs.org");
            // response.Headers.Add("Access-Control-Allow-Origin", "https://nodejsexpressrest.nonbs.org");
            // return 

            string approvedReferer = null;

            string currentReferer_Original = request.Headers["Referer"].ToString().ToLower();
            int indexOfSlash = currentReferer_Original.IndexOf('/', 8);
            if (indexOfSlash > 0)
                currentReferer_Original = currentReferer_Original.Substring(0, indexOfSlash);

            string refererDomainNameOnly = "";

            int indexOfDoubleSlassh = currentReferer_Original.IndexOf("//");

            if (indexOfDoubleSlassh > 0)
                refererDomainNameOnly = currentReferer_Original.Substring(indexOfDoubleSlassh + 2);

            if (approvedRemoteSites != null && approvedRemoteSites.Site != null)
            {
                foreach (string s in approvedRemoteSites.Site)
                {
                    if (refererDomainNameOnly == s.ToLower())
                    {
                        // 11/09/2018 08:30 am - SSN - ToLower
                        // approvedReferer = s.ToLower();
                        // 01/01/2019 10:02 pm - SSN - Replaced
                        approvedReferer = currentReferer_Original;
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


        }

    }
}
