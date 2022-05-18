using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 05/12/2022 12:58 pm - SSN - Creatin 

namespace DevSitesIndex.Filters
{
    public class CustomAuthorizeAPIAttribute : ActionFilterAttribute
    {
        public override void OnResultExecuting(ResultExecutingContext filterContext)
        {

        }

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            base.OnActionExecuting(filterContext);

            if (!filterContext.HttpContext.User.Identity.IsAuthenticated)
            {
                filterContext.Result = new JsonResult(new
                {
                    StatusCode = StatusCodes.Status401Unauthorized,
                    Value = new
                    {
                        APIErrorMessage = "Login is required",
                        APIErrorSource = "DevSites-Filter-20220512-1301",
                        RequestLogin_101 = true
                    }
                }); ;

            }

        }
    }

}
