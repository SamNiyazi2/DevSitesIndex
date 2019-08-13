using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 08/12/2019 07:27 pm - SSN - Added for testing.  

namespace DevSitesIndex.Filters
{
    public class CustomAuthorizeAttribute : ActionFilterAttribute
    {
        public override void OnResultExecuting(ResultExecutingContext filterContext)
        {

        }

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            base.OnActionExecuting(filterContext);

            //if (filterContext.HttpContext.Session.GetString("email") == null)
            //{
            //    filterContext.Result = new RedirectToRouteResult(
            //        new RouteValueDictionary { { "controller", "Account" }, { "action", "Login" } });
            //    return;
            //}

            //var menus = JsonConvert.DeserializeObject<List<Menus>>(filterContext.HttpContext.Session.GetString("menus"));
            //var controllerName = filterContext.RouteData.Values["controller"];
            //var actionName = filterContext.RouteData.Values["action"];
            //string url = "/" + controllerName + "/" + actionName;

            //if (!menus.Where(s => s.Url == url).Any())

            //{
            //    filterContext.Result = new RedirectToRouteResult(
            //        new RouteValueDictionary { { "controller", "Account" }, { "action", "Login" } });
            //    return;
            //}
        }
    }

}
