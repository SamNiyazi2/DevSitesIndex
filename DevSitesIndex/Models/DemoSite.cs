using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 07/29/2018 10:14 am - SSN - Adding

namespace DevSitesIndex.Models
{
    public enum SoftwareCode
    {
        VS
    }

    public class DemoSite
    {
        public string SiteTitle { get; set; }
        public string SiteUrl { get; set; }

        public string SolutionName { get; set; }

        public SoftwareCode Software { get; set; }
    }
}
