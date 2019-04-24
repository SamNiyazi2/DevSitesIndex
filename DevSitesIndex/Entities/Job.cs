using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;



// 08/08/2018 12:46 pm - SSN 

namespace DevSitesIndex.Entities
{
    public class Job
    {

        public int JobID { get; set; }
        [Display(Name = "Title")]
        public string JobTitle { get; set; }


        // 03/13/2019 09:29 am - SSN
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [Display(Name = "Date Added")]
        public DateTime DateAdded { get; set; }

        // 04/08/2019 12:53 am - SSN - [20190407-2345] - TimeLog - Added
        [Display(Name = "Date Updated")]
        public DateTime? DateUpdated { get; set; }

        [Display(Name = "Project Title")]
        public int ProjectID { get; set; }

        [Display(Name = "Project Title (2)")]
        public Project project { get; set; }

        // 04/19/2019 06:26 pm - SSN - [20190419-1826] - Adding timelog to job's model
        public ICollection<TimeLog> timelogs { get; set; }


        // 04/19/2019 06:52 pm - SSN - MostRecentActivity

        #region Determine job latest activity

        [NotMapped]
        public DateTime MostRecentActivity
        {
            get
            {
                DateTime? y = null;
                if (timelogs == null) return default(DateTime);

                if (timelogs.Count > 0)
                    y = timelogs.Max(r => r.DateModified ?? r.DateAdded);

                DateTime x = lastDate(y, DateUpdated ?? DateAdded);
                //// DateTime x = lastDate(timelogs?.Max(r => r.DateAdded), DateAdded);
                // DateTime x = lastDate(DateAdded,  DateAdded);
                return x;
            }
        }


        DateTime lastDate(DateTime? timelogDate, DateTime jobDate)
        {
            if (!timelogDate.HasValue) return jobDate;
            return timelogDate.Value > jobDate ? timelogDate.Value : jobDate;
        }

        #endregion Determine job latest activity



    }
}
