using System;
using System.Collections.Generic;

// 06/20/2021 06:08 pm - SSN - [20210620-1053] - [003] - Add UserID to TimeLog table 

//namespace devsitesindex

namespace DevSitesIndex.Entities
{
    public partial class AspNetUserTokens
    {
        public string UserId { get; set; }
        public string LoginProvider { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }

        public virtual AspNetUsers User { get; set; }
    }
}
