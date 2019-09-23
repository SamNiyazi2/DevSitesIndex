using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Linq.Expressions;



// 08/08/2018 12:46 pm - SSN 

namespace DevSitesIndex.Entities
{
    public class Job
    {

        public int JobID { get; set; }
        [Display(Name = "Job Title", Prompt = "Enter job title")]  // 09/14/2019 12:46 am - SSN Added prompt
        [Required] // 09/13/2019 11:23 pm - SSN - Forgotten

        // 09/13/2019 05:21 am - SSN - [20190913-0517] - [002] - Job title duplicate check

// 09/18/2019 09:29 am - SSN - Corrected earlier the proper name of the additioanl field. Must match model. It is posted as a form field.
        [Remote(action: "Job_duplicate_Check", controller: "RemoteDataValidation", AdditionalFields = "JobID", HttpMethod = "POST")]
        public string JobTitle { get; set; }


        // 03/13/2019 09:29 am - SSN
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [Display(Name = "Date Added")]
        public DateTime DateAdded { get; set; }

        // 04/08/2019 12:53 am - SSN - [20190407-2345] - TimeLog - Added
        [Display(Name = "Date Updated")]
        public DateTime? DateUpdated { get; set; }

        [Display(Name = "Project Title", Prompt = "Select a project")] // 09/14/2019 12:40 am - SSN - Added prompt (PlaceHolder?)
        [Required]  // 09/13/2019 12:19 am - SSN - Added
        public int ProjectID { get; set; }

        [Display(Name = "Project Title")]
        public Project project { get; set; }


        // 09/06/2019 07:09 pm - SSN - [20190906-0518] - [009] - Angular - edit div content - Adding timestamp

        [Timestamp]
        public byte[] RowVersion { get; set; }


        // 09/16/2019 11:27 am - SSN - [20190916-1123] - [002] - Adding job status
        [DefaultValue(1)] // 1 = Open
        [Display(Name = "Job Status", Prompt = "Select job status")]
        public int Job_StatusID { get; set; }
        
        public virtual Job_Status job_Status { get; set; }



        #region NotMapped properties

        // 04/19/2019 06:52 pm - SSN - MostRecentActivity
        // 08/31/2019 06:59 pm - SSN - Change MostRecentActivity oo database Jobs_Index_WithLastActivityDate.LastActivityDate
        #region Determine job latest activity




        public DateTime _LastActivityDate;


        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        [DisplayName("Most Recent Activity (1)")]
        public DateTime LastActivityDate { get; private set; }



        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        [DisplayName("Project Title (A)")]
        public string ProjectTitle_ForActivity { get; private set; }



        [NotMapped]
        [DisplayName("Most Recent Activity (2)")]
        public double ActivityAge
        {
            get
            {
                return (DateTime.Now - LastActivityDate).TotalDays;
            }

        }



        [NotMapped]
        [DisplayName("Most Recent Activity (3)")]
        public string ActivityAge_ToString
        {
            get
            {
                return (DateTime.Now - LastActivityDate).ToString(@"d\-hh\:mm\:ss");
            }


        }



        #endregion Determine job latest activity


        // 08/20/2019 12:52 pm - SSN - [20190820-1252] - [001] - Added

        [DisplayName("Total Hours")]
        [NotMapped]
        public int? TotalSeconds { get; set; }


        [NotMapped]
        [Display(Name = "Duration")]
        public string TotalSeconds_ToTimeSpanFormat_T
        {
            get
            {
                return TotalSeconds.SecondsToTimeDuration();
            }
        }


        #endregion NotMapped properties




        // 04/19/2019 06:26 pm - SSN - [20190419-1826] - Adding timelog to job's model
        // 09/16/2019 11:27 am - SSN - Added virtual
        public virtual ICollection<TimeLog> timelogs { get; set; }

        
        
    }


}
