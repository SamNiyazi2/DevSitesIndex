using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

// 06/13/2021 07:19 am - SSN - [20210613-0452] - [006] - Adding tags to DevSite

namespace DevSitesIndex.Entities
{
    public partial class DevSiteTechnology
    {

        public int Id { get; set; }
        public int DevSiteId { get; set; }
        public int TechnologyId { get; set; }


        [EFCoreShadowProperty.Models.NoDateUpdated]
        [EFCoreShadowProperty.Models.DateAdded]
        [Display(Name = "Date Added")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime DateAdded { get; set; }

        public virtual DevSite DevSite { get; set; }
        public virtual Technology Technology { get; set; }
    }
}
