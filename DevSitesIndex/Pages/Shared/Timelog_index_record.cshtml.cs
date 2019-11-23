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
        Timelog = 1,
        Job_Timelog = 2,
        Projects_Search = 3


    }

    public class Timelog_index_record
    {

        private TimeLog _timelog;

        public TimeLog timelog
        {
            get
            {
                return _timelog;
            }
            set
            {
                _timelog = value;
                tr_1_id = $"model_{value.TimeLogId}_1";
                tr_2_id = $"model_{value.TimeLogId}_2";
            }
        }

        public ServingPage servingPage { get; set; }
        public string tr_1_id { get; set; }
        public string tr_2_id { get; set; }
        public string html { get; set; }
    }


    public class Project_Search_index_record
    {
        private Services.Project_Search_Record _project_Search_Record;

        public Services.Project_Search_Record project_Search_Record
        {
            get
            {
                return _project_Search_Record;
            }
            set
            {
                _project_Search_Record = value;
                tr_1_id = $"model_{value.ProjectID}_{value.JobId}_{value.TimelogId}_1";
                tr_2_id = $"model_{value.ProjectID}_{value.JobId}_{value.TimelogId}_2";
            }
        }

        public ServingPage servingPage { get; set; }
        public string tr_1_id { get; set; }
        public string tr_2_id { get; set; }
        public string html { get; set; }
    }

}
