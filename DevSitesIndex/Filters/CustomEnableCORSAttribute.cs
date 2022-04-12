using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 04/07/2022 04:31 am - SSN
// https://devsitesindex20190127.azurewebsites.net/CodeReferences/Details?id=2203192

namespace DevSitesIndex.Filters
{
    public class CustomEnableCORSAttribute:ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext actionExecutedContext)
        {
            if (actionExecutedContext.HttpContext.Response != null)
            {
                actionExecutedContext.HttpContext.Response.Headers.Add("Access-Control-Allow-Origin", "http://p3203.nonbs.org:3203");
 
                  // actionExecutedContext.HttpContext.Response.Headers.Add("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");

                  // actionExecutedContext.HttpContext.Response.Headers.Add("Access-Control-Allow-Headers", "content-type,Authorization");
            }
            base.OnActionExecuted(actionExecutedContext);
        }
    }
}
