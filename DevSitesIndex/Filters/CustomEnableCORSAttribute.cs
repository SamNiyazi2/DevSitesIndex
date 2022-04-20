using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Linq;

// 04/07/2022 04:31 am - SSN
// https://devsitesindex20190127.azurewebsites.net/CodeReferences/Details?id=2203192

namespace DevSitesIndex.Filters
{
    public class CustomEnableCORSAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext actionExecutedContext)
        {
            if (actionExecutedContext.HttpContext.Response != null)
            {
                // 04/19/2022 06:06 pm - SSN - [20220419-1737] - [004] - Add list for authorized CORS host
                HttpRequest req = actionExecutedContext.HttpContext.Request;
                var origin2 = ((Microsoft.AspNetCore.Server.Kestrel.Core.Internal.Http.HttpRequestHeaders)req.Headers).HeaderOrigin;
                var origin3 = origin2.Count > 0 ? origin2[0] : "";

                if (!string.IsNullOrEmpty(origin3))
                {

                    foreach (string url in Startup.sSN_CORS_Rules.Access_Control_Allow_Origin)
                    {
                        if (origin3.ToLower() == url.ToLower())
                        {
                            actionExecutedContext.HttpContext.Response.Headers.Add("Access-Control-Allow-Origin", url);
                        }
                    }
                }

                // actionExecutedContext.HttpContext.Response.Headers.Add("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");

                // actionExecutedContext.HttpContext.Response.Headers.Add("Access-Control-Allow-Headers", "content-type,Authorization");
            }
            base.OnActionExecuted(actionExecutedContext);
        }
    }
}
