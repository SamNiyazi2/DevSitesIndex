using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

// 04/25/2022 08:46 pm - SSN 

namespace DevSitesIndex.Models
{
    public class DevSiteTechnology_DTO
    {

        public int Id { get; set; }
        public int DevSiteId { get; set; }
        public int TechnologyId { get; set; }

 
        [Display(Name = "Date Added")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime DateAdded { get; set; }

        public virtual Technology_DTO Technology { get; set; }
    }
}
