
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

        // 06/20/2021 09:32 pm - SSN - [20210620-2108] - [004] - Update TimeLog create option to use DrowndownListDirective
        public TimeLog()
        {
            discipline = new Discipline();
            job = new Job();
            job_Lineitem = new Job_Lineitem();
        }


        // 09/28/2019 11:18 am - SSN - [20190927-0634] - [1005] - Testing
        // Adding key for save method lookup
        [Key]
        public int TimeLogId { get; set; }

        [Display(Name = "Job Title")]
        [Required(ErrorMessage = "Job title is required")] // 09/13/2019 11:26 pm - SSN - Forgotten
        public int JobId { get; set; }

        [Display(Name = "Discipline")]
        [Required(ErrorMessage = "{0} is required")] // 09/13/2019 11:26 pm - SSN - Forgotten
        public int DisciplineID { get; set; }

        [Display(Name = "Start Time")]
        [Required(ErrorMessage = "{0} is required")] // 09/13/2019 11:26 pm - SSN - Forgotten
        // 09/28/2019 11:18 am - SSN - [20190927-0634] - [1005] - Testing
        // Adding key for save method lookup
        public DateTime StartTime { get; set; }


        [Display(Name = "Duration (Sec.)")]
        public int? TotalSeconds { get; set; }


        // 09/26/2019 10:15 pm - SSN - [20190926-1242] - [019] - Search projects
        // Added DateFormatString         [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")] to DateAdded and DateModified
        // 09/28/2019 12:57 pm - SSN - [20190928-1256] - [002] - Adding Entity Framework model attribute
        [EFCoreShadowProperty.Models.DateAdded]
        [Display(Name = "Date Added")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime DateAdded { get; set; }


        // 09/28/2019 12:57 pm - SSN - [20190928-1256] - [002] - Adding Entity Framework model attribute
        [EFCoreShadowProperty.Models.DateUpdated]
        [Display(Name = "Date Updated")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime? DateModified { get; set; }


        [Display(Name = "Work Detail")]
        public string WorkDetail { get; set; }


        [Display(Name = "Work Detail Pre-LineItem")]
        public string WorkDetail_PreLineItem { get; set; }

        [Display(Name = "Work Detail Post-LineItem")]
        public string WorkDetail_PostLineItem { get; set; }


        // 12/10/2020 09:08 am - SSN - [20201210-0618] - [009] - Adding Job_LineItems table

        [Display(Name = "Line item ID")]
        ////////////////////////////////////////////////////// [Required]
        public int? LineItemID { get; set; }


        // 06/20/2021 10:53 am - SSN - [20210620-1053] - [001] - Add UserID to TimeLog table 
        [Required(ErrorMessage = "User ID is required (222)")]
        public int FK_UserID { get; set; }


        // 11/16/2019 02:20 pm - SSN - [20191116-1419] - [001] - Add RowVersion  to Timelog.
        [Timestamp]
        public byte[] RowVersion { get; set; }





        [Display(Name = "Discipline")]
        public virtual Discipline discipline { get; set; }


        [Display(Name = "Job Title")]
        public virtual Job job { get; set; }


        // 12/10/2020 08:57 am - SSN - [20201210-0618] - [007] - Adding Job_LineItems table

        [Display(Name = "Line item")]
        public virtual Job_Lineitem job_Lineitem { get; set; }




        [NotMapped]
        [Display(Name = "Duration")]
        public string TotalSeconds_ToTimeSpanFormat_T
        {
            get
            {
                return TotalSeconds.SecondsToTimeDuration();
            }
        }


        // 09/26/2019 09:27 pm - SSN - [20190926-1242] - [018] - Search projects

        [NotMapped]
        [Display(Name = "Stop Time")]
        public DateTime? StopTime
        {
            get
            {
                return TotalSeconds.StopTime(StartTime);
            }
        }

        [NotMapped]
        [Display(Name = "Stop Time")]
        public string StopTime_AsString
        {
            get
            {
                return TotalSeconds.StopTime_AsString(StartTime);
            }
        }





    }
}
