using System;
using System.Collections.Generic;

// 06/20/2021 06:08 pm - SSN - [20210620-1053] - [003] - Add UserID to TimeLog table 

//namespace devsitesindex

namespace DevSitesIndex.Entities
{
    public partial class AspNetRoleClaims
    {
        public int Id { get; set; }
        public string RoleId { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }

        public virtual AspNetRoles Role { get; set; }
    }
}
