using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevSitesIndex.Models
{
    // 09/27/2022 12:33 pm - SSN - Moved from DemoSitesAPIController

    // 08/12/2019 06:10 am - SSN - [20190812-0515] - [008] - Apply fulltext search
    // Add SearchText
    public class SearchObj
    {
        public string SearchText { get; set; }
        // 09/27/2022 12:29 pm - SSN - Prep for paging
        public int RecordsPerPage { get; set; }
        public int CurrentPage { get; set; }
    }
}
