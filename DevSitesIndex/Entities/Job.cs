using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

// 08/08/2018 12:46 pm - SSN 

namespace DevSitesIndex.Entities
{
    public class Job
    {

        public int JobID { get; set; }

        public string JobTitle { get; set; }


        // 03/13/2019 09:29 am - SSN
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime DateAdded { get; set; }

        public int ProjectID { get; set; }

        public Project project { get; set; }

    }
}
