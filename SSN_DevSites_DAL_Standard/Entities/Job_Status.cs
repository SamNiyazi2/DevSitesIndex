using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text;

// 09/16/2019 11:24 am - SSN - [20190916-1123] - [001] - Adding job status

namespace DevSitesIndex.Entities
{
    public class Job_Status
    {
        public int ID { get; set; }


        [DisplayName("Job Status")]
        public string Status { get; set; }

        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [DisplayName("Date Added")]
        public DateTime DateAdded { get; set; }


    }
}
