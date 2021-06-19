using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DevSitesIndex.Entities
{
    public class Technology
    {

        public int Id { get; set; }
        public string Description { get; set; }

        // 03/13/2019 09:29 am - SSN
        [EFCoreShadowProperty.Models.DateAdded]
        [Display(Name = "Date Added")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime DateAdded { get; set; }

        [EFCoreShadowProperty.Models.DateUpdated]
        [Display(Name = "Date Updated")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime? DateModified { get; set; }


        // 06/13/2021 07:41 am - SSN - [20210613-0452] - [007] - Adding tags to DevSite
        public virtual ICollection<DevSiteTechnology> DevSiteTechnologies { get; set; }
    }
}
