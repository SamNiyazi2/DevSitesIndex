using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevSitesIndex.Util
{




    // 09/17/2019 11:55 am - SSN - [20190917-0929] - [006] - Adding paging for angular lists
    // 10/21/2019 09:19 am - SSN - [20191021-0444] - [011] - M12 - Creating directives and advanced components in Angular.
    // Revised for validation and defaults;

    public class SqlStatsRecord
    {


        public int RecordsPerPage_Default = 10;

        private int recordsPerPage;
        public int RecordsPerPage
        {
            get
            {
                return recordsPerPage <= 0 ? RecordsPerPage_Default : recordsPerPage;

            }
            set
            {
                recordsPerPage = value;
            }
        }

        private int currentPageNo;
        public int CurrentPageNo
        {
            get
            {
                if (TotalRecordCount > 0 && currentPageNo > TotalRecordCount)
                    return 1;

                return currentPageNo <= 0 ? 1 : currentPageNo;

            }
            set
            {
                currentPageNo = value;
            }
        }

        public int TotalRecordCount { get; set; }
        public string columnName { get; set; }
        public string columnNameSelected { get; set; }
        public bool desc { get; set; }

        // 09/22/2019 08:25 am - SSN - [20190922-0822] - [002] - Plug in job status filter on job's index - update data source
        public string job_statuses_selected { get; set; }


        // 10/21/2019 10:35 pm - SSN - [20191021-2033] - [006] - Revise timelog search returned result
        private string _searchTerm;
        public string searchTerm
        {
            get
            {
                return string.IsNullOrWhiteSpace(_searchTerm) ? "" : _searchTerm;
            }
            set
            {
                _searchTerm = value;
            }
        }


        // 08/14/2020 09:16 am - SSN - Added fk_filter
        public int fk_filter { get; set; }
    }


}
