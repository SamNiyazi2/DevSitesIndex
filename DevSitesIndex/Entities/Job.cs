using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

// 08/08/2018 12:46 pm - SSN 

namespace DevSitesIndex.Entities
{
    public class Job
    {

        public int JobID { get; set; }
        [Display(Name ="Title")]
        public string JobTitle { get; set; }


        // 03/13/2019 09:29 am - SSN
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [Display(Name = "Date Added")]
        public DateTime DateAdded { get; set; }

        // 04/08/2019 12:53 am - SSN - [20190407-2345] - TimeLog - Added
        [Display(Name = "Date Updated")]
        public DateTime? DateUpdated{ get; set; }

        [Display(Name = "Project Title")]
        public int ProjectID { get; set; }

        [Display(Name = "Project Title (2)")]
        public Project project { get; set; }

    }
}
