using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevSitesIndex.Models
{

    // 10/21/2019 08:15 am - SSN - [20191021-0444] - [009] - M12 - Creating directives and advanced components in Angular.
    public class Timelog_Search_Record
    {

        public string ProjectTitle { get; set; }
        public string JobTitle { get; set; }
        public string DisciplineShort { get; set; }
        public int ProjectID { get; set; }
        public int JobId { get; set; }
        public int TimelogId { get; set; }
        public DateTime StartTime { get; set; }
        public int? TotalSeconds { get; set; }


    }

}
