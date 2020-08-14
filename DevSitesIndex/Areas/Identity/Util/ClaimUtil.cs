using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

// 12/13/2019 07:05 am - SSN - Adding claims

namespace DevSitesIndex.Areas.Identity.Util
{
    public static class ClaimUtil
    {

        public static bool hasClaim(HttpContext context, string claimType ,  string claimValue)
        {
            if (context.User == null) return false;
            return context.User.HasClaim((r) => r.Type == claimType && r.Value == claimValue );

        }

    }
}
