using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using DevSitesIndex.Entities;

// 11/20/2019 06:07 am - SSN - [20191120-0532] - [003] - Job Timelog index - update on change

namespace DevSitesIndex.Pages.Shared
{
    public enum ServingPage
    {
        Timelog,
        Job
    }
    public class Timelog_index_record
    {
        public TimeLog timelog { get; set; }
        public ServingPage servingPage { get; set; }
    }

}
