
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

// 04/07/2019 11:45 pm - SSN - [20190407-2345] - TimeLog

namespace DevSitesIndex.Entities
{
    public class TimeLog : IBaseEntity
    {
        public int TimeLogId { get; set; }

        [Display(Name = "Job Title")] 
        public int JobId { get; set; }

        [Display(Name = "Discipline")]
        public int DisciplineID { get; set; }

        [Display(Name = "Start Time")]
        public DateTime StartTime { get; set; }

        [Display(Name = "Duration (Seconds)")]
        public int? TotalSeconds { get; set; }

        [Display(Name = "Date Added")]
        public DateTime DateAdded { get; set; }

        [Display(Name = "Date Updated")]
        public DateTime? DateModified { get; set; }

        [Display(Name = "Work Detail")]
        public string WorkDetail { get; set; }

        [Display(Name = "Job Title")]
        public Job job { get; set; }

        [Display(Name = "Discipline")]
        public Discipline discipline { get; set; }

        [NotMapped]
        [Display(Name = "Duration")]
        public string TotalSeconds_ToTimeSpanFormat_T
        {
            get
            {
                if (!TotalSeconds.HasValue) return "";
                long totalSecondsLong = (long)TotalSeconds;
                long nanosecond = 10000000;
                return new TimeSpan(totalSecondsLong * nanosecond).ToString("T");
            }
        }
    }
}
