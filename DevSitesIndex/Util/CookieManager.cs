using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 12/04/2019 02:49 am - SSN - [20191204-0249] - [001] - CookieManager
// http://www.binaryintellect.net/articles/abdd3209-f1a5-4799-b5e1-3dacec0931ef.aspx

namespace DevSitesIndex.Util
{
    public class CookieManager
    {
        public static string GetOrCreateCookie(HttpContext context, string cookieName = "", bool isPersistent = true)
        {
            if (string.IsNullOrWhiteSpace(cookieName)) cookieName = Startup.SITE_COOKIE_NAME;

            string cookie = context.Request.Cookies[cookieName];

            if (string.IsNullOrWhiteSpace(cookie))
            {

                string cookieValue = Guid.NewGuid().ToString();

                if (isPersistent)
                {
                    CookieBuilder cb = new CookieBuilder();
                    cb.Expiration = TimeSpan.FromDays(1);
                    cb.HttpOnly = false;
                    cb.Name = cookieName;
                    cb.SameSite = SameSiteMode.Strict;
                    CookieOptions cookieOptions = cb.Build(context);
                    context.Response.Cookies.Append(cookieName, cookieValue, cookieOptions);
                }
                else
                {
                    context.Response.Cookies.Append(cookieName, cookieValue);
                }

                cookie = cookieValue;

            }

            return cookie;
        }
    }
}
