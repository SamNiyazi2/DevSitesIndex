using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 08/08/2018 12:46 pm - SSN 

namespace DevSitesIndex.Entities
{
    public class Job
    {

        public int JobID { get; set; }

        public string JobTitle { get; set; }

        public DateTime DateAdded { get; set; }

        public int ProjectID { get; set; }

        public Project project{ get; set; }

        // 02/24/2019 12:59 pm - SSN - Testing Azure migration
        public string Test_0224a { get; set; }

    }
}
