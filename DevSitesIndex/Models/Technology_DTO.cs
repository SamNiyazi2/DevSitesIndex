using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

// 04/25/2022 08:49 pm - SSN 

namespace DevSitesIndex.Models
{
    public class Technology_DTO
    {
        public int Id { get; set; }
        public string Description { get; set; }
         
        [Display(Name = "Date Added")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime DateAdded { get; set; }
         
        [Display(Name = "Date Updated")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime? DateModified { get; set; }


        
    }
}
