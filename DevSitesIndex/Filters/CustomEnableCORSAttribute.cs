using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using SSN_GenUtil_StandardLib;
using System.Linq;
using System.Threading.Tasks;

// 04/07/2022 04:31 am - SSN
// https://devsitesindex20190127.azurewebsites.net/CodeReferences/Details?id=2203192

namespace DevSitesIndex.Filters
{
    public class CustomEnableCORSAttribute : ActionFilterAttribute
    {
        private ILogger_SSN logger;
        public CustomEnableCORSAttribute()
        {
            logger = (ILogger_SSN)GetMeSomeServiceLocator.Instance.GetService(typeof(ILogger_SSN));

        }

        public override void OnActionExecuted(ActionExecutedContext actionExecutedContext)
        {

            logger.TrackEvent("Testing-CORS-20220419-2027");


            if (actionExecutedContext.HttpContext.Response != null)
            {
                // 04/19/2022 06:06 pm - SSN - [20220419-1737] - [004] - Add list for authorized CORS host
                HttpRequest req = actionExecutedContext.HttpContext.Request;
                HttpResponse res = actionExecutedContext.HttpContext.Response;

                var origin2 = ((Microsoft.AspNetCore.Server.Kestrel.Core.Internal.Http.HttpRequestHeaders)req.Headers).HeaderOrigin;
                var origin3 = origin2.Count > 0 ? origin2[0] : "";

                logger.TrackEvent($"Testing-CORS-20220419-2027 origin3:  [{origin3}]");

                if (!string.IsNullOrEmpty(origin3))
                {

                    int recCount = 0;
                    bool foundMatch = false;

                    foreach (string url in Startup.sSN_CORS_Rules.Access_Control_Allow_Origin)
                    {
                        recCount++;

                        if (origin3.ToLower() == url.ToLower())
                        {

                            res.OnStarting(() =>
                            {
                                res.Headers.Add("Access-Control-Allow-Origin", url);
                                return Task.CompletedTask;
                            });

                            foundMatch = true;
                        }
                    }

                    logger.TrackEvent($"Testing-CORS-20220419-2027-C RecCount: [{recCount}] Match found? [{foundMatch}]");

                }


                // res.Headers.Add("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
                // 04/20/2022 07:10 am - SSN - Added methods methods: get,options,head
                // res.Headers.Add("Access-Control-Allow-Methods", "GET,OPTIONS,HEAD");

                res.OnStarting(() =>
                {
                    res.Headers.Add("Access-Control-Allow-Methods", "GET,OPTIONS,HEAD");
                    return Task.CompletedTask;
                });

                //actionExecutedContext.HttpContext.Response.Headers.Add("Access-Control-Allow-Headers", "content-type,Authorization");
                // actionExecutedContext.HttpContext.Response.Headers.Add("Access-Control-Allow-Headers", "x-ms-meta-abc,x-ms-meta-data*,x-ms-meta-target*");

            }
            base.OnActionExecuted(actionExecutedContext);
        }
    }
}
