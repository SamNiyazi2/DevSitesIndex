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
        public string SiteTitle { get; set; }

        public string SiteUrl { get; set; }

        [Required]
        public string SolutionName { get; set; }

        public string Solution_Details { get; set; }

        [Required]
        public int SoftwareCodeID { get; set; }


        public SoftwareCode SoftwareCode { get; set; }

        // 08/24/2018 01:59 am - SSN
        // [DataType(DataType.Date)]
        // [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}", ApplyFormatInEditMode = true)]


      //  [DataType(DataType.DateTime)]
      //  [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [DisplayName("Date added")]

        public DateTime DateAdded { get; set; } 
    }

}
