using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 09/01/2019 12:25 pm - SSN - [20190901-1225] - [001] - Add Job_DevSite table

namespace DevSitesIndex.Entities
{
    public class Job_DevSite
    {
        public int Job_DevSiteId { get; set; }
        public int JobId { get; set; }
        public int DevSiteId { get; set; }

        public Job Job { get; set; }
        public DevSite DevSite { get; set; }
    }
}
