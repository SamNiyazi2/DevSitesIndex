// 09/07/2019 01:51 am - SSN - [20190907-0018] - [006] - Entity Framework concurrency check
// using Microsoft.AspNetCore.Mvc;
// todo - clean up

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


// 07/29/2018 03:34 pm - SSN - Copied

namespace DevSitesIndex.Entities
{


    public class DevSite
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [DisplayName("Site Title")]
        public string SiteTitle { get; set; }

        [DisplayName("Site URL")]
        public string SiteUrl { get; set; }

        [Required]
        [DisplayName("Solution Name")]
        public string SolutionName { get; set; }

        [DisplayName("Detail")]
        public string Solution_Details { get; set; }

        [Required]
        [DisplayName("Project Software")]
        public int SoftwareCodeID { get; set; }



        // 03/18/2019 11:50 pm - SSN - [20190318-2350] Added
        [DisplayName("Can be launched")]
        public bool CanBeLaunched { get; set; }


        public SoftwareCode SoftwareCode { get; set; }

        // 08/24/2018 01:59 am - SSN
        // [DataType(DataType.Date)]
        // Does not work on date/time - Not tested on date only!
        // [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}", ApplyFormatInEditMode = true)]


        //  [DataType(DataType.DateTime)]
        //  [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [DisplayName("Date Added")]
        // 03/13/2019 09:29 am - SSN
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime DateAdded { get; set; }

        // 10/12/2018 03:52 pm - SSN - Added
        [DisplayName("Date Updated")]
        // 03/13/2019 09:29 am - SSN
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime? DateUpdated { get; set; }




        // 03/19/2019 09:17 pm - SSN - [20190319-2117] Added ForDemo
        // 03/19/2019 09:59 pm - SSN - [20190319-2117] ForDemo to ForDemo_v02
        [DisplayName("For Demo")]


        // 09/07/2019 01:51 am - SSN - [20190907-0018] - [006] - Entity Framework concurrency check
        // Temp out
        // [Remote(action: "isForDemo_v02_SelectionValid", controller: "RemoteDataValidation", HttpMethod = "POST")]


        // 05/18/2019 04L38 pm - SSN - Added
        [Range(1, 3, ErrorMessage = "Select an option please. (DemoSite-20190518-1638)")]
        public byte ForDemo_v02 { get; set; }

        // 03/19/2019 07:04 pm - SSN - [20190319-1904]
        // 08/14/2019 06:09 am - SSN - [20190814-0609] - [001] - Revise demo site index docAge
        [NotMapped]
        // public double docAge
        public string docAge
        {
            get
            { 

                DateTime selectedDate = LastActivityDate;

                TimeSpan age_timespan = DateTime.Now.Subtract(selectedDate);

                int totalMonths = ((DateTime.Now.Year - selectedDate.Year) * 12) + DateTime.Now.Month - selectedDate.Month;

                if (totalMonths > 0)
                    return totalMonths.ToString() + "m";

                if (age_timespan.Days > 0)
                    return age_timespan.Days.ToString() + "d";

                if (age_timespan.Hours > 0)
                    return age_timespan.Hours.ToString() + "h";

                return age_timespan.Minutes.ToString() + "n";

            }
        }

        [NotMapped]
        public string dateOfLastActivity_ToString
        {
            get
            {
                return LastActivityDate.ToLongDateString() + " " + LastActivityDate.ToShortTimeString();
            }
        }

        //[NotMapped]
        //public DateTime DateOfLastActivity
        //{
        //    get
        //    {
        //        return DateUpdated ?? DateAdded;
        //    }
        //}



        // 09/08/2019 09:29 pm - SSN - [20190908-2129] - [001] - Concurrency - DevSite
        [Timestamp]
        public byte[] RowVersion { get; set; }


        // 09/09/2019 12:33 am - SSN - [20190908-2129] - [004] - Concurrency - DevSite
        // Added - Replaced an unmapped property DateOfLastActivity
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        [DisplayName("Last activity")]
        public DateTime LastActivityDate { get; private set; }



        // 05/30/2019 05:06 pm - SSN - [20190530-0510]
        public virtual ICollection<DevSiteCodeReference> DevSiteCodeReferences { get; set; }

    }



}
