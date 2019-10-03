using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 10/02/2019 03:44 pm - SSN - [20191002-1118] - [009] - Adding Angular 7 test app
// Options the handling of a url by MVC.

namespace DevSitesIndex.Util
{
    public class ServerRouteConstraint : IRouteConstraint
    {

        public readonly Func<Uri, bool> _predict;

        public ServerRouteConstraint(Func<Uri, bool> predict)
        {
            _predict = predict;

        }

        public bool Match(HttpContext httpContext, IRouter route, string routeKey, RouteValueDictionary values, RouteDirection routeDirection)
        {
            UriBuilder uri = new UriBuilder { Host = httpContext.Request.Host.Host, Path = httpContext.Request.Path, Scheme = httpContext.Request.Scheme };
            if (httpContext.Request.Host.Port.HasValue)
            {
                uri.Port = httpContext.Request.Host.Port.Value;
            }

            return this._predict(uri.Uri);
        }
    }
}
