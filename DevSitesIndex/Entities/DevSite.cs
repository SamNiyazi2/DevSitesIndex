using System;
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


        // 03/19/2019 07:04 pm - SSN - [20190319-1904]
        [NotMapped]
        public double docAge
        {
            get
            {
                return Math.Round(DateTime.Now.Subtract((DateUpdated ?? DateAdded)).TotalHours);
            }
        }

    }

}
