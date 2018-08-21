using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 07/29/2018 10:14 am - SSN - Adding

namespace DevSitesIndex.Models
{
    public enum SoftwareCode
    {
        VS = 1
    }

    // Todo - 07/29/2018 04:07 pm - SSN - Replacing with DevSite
    public class DemoSite_Hold4Delete
    {
        public string SiteTitle { get; set; }
        public string SiteUrl { get; set; }

        public string SolutionName { get; set; }

        public SoftwareCode SoftwareCode { get; set; }
    }
}
