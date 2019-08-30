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

        [Display(Name = "Project Title")]
        public Project project { get; set; }

        // 04/19/2019 06:26 pm - SSN - [20190419-1826] - Adding timelog to job's model
        public ICollection<TimeLog> timelogs { get; set; }


        // 04/19/2019 06:52 pm - SSN - MostRecentActivity

        #region Determine job latest activity



        [NotMapped]
        [DisplayName("Most Recent Activity (1)")]
        public DateTime MostRecentActivity
        {
            get
            {

            DateTime? y = null;

            // 08/29/2019 01:22 pm - SSN - [20190829-1253] - [005] - Adding paging and sorting to jobs index
            // Why?
            // if (timelogs == null) return default(DateTime);

            if (timelogs != null && timelogs.Count > 0)
            {
                // y = timelogs.Max(r => r.DateModified ?? r.DateAdded);
                y = timelogs.Max(r => r.StartTime);
            }

            DateTime x = LinqExtensions.lastDate(y, DateUpdated ?? DateAdded);
            //// DateTime x = lastDate(timelogs?.Max(r => r.DateAdded), DateAdded);
            // DateTime x = lastDate(DateAdded,  DateAdded);
            return x;

            }


        }



        //        [NotMapped]
        //        [DisplayName("Most Recent Activity (2)")]
        //        public double ActivityAge
        //        {
        //            get
        //            {
        //                return 0;
        ////                return (DateTime.Now - MostRecentActivity()).TotalDays;
        //            }

        //        }




        //       [NotMapped]
        [DisplayName("Most Recent Activity (3)")]
        public string ActivityAge_ToString()
        {
            //            get
            {
                return (DateTime.Now - MostRecentActivity).ToString(@"d\-hh\:mm\:ss");
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



    }


    public static class LinqExtensions
    {

       // public static Expression<Func<Job,double>> ActivityAge = (job) =>
       //{
       //    Console.WriteLine("**********************************************");
       //    //return 1;
       //    Expression<Func<Job, double>> fff = (j) =>
       //     {
       //         return 1;
       //     };
       //    return fff;


       //    //DateTime? y = null;

       //    //DateTime x = lastDate(y, jobDateUpdated ?? jobDateAdded);
       //    ////// DateTime x = lastDate(timelogs?.Max(r => r.DateAdded), DateAdded);
       //    //// DateTime x = lastDate(DateAdded,  DateAdded);
       //    //return (DateTime.Now - x).TotalDays;
       //};




        public static DateTime lastDate(DateTime? timelogDate, DateTime jobDate)
        {
            if (!timelogDate.HasValue) return jobDate;
            return timelogDate.Value > jobDate ? timelogDate.Value : jobDate;
        }

    }
}
