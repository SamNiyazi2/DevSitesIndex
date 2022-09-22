using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

// 09/22/2022 08:23 am - SSN - Added for Azure dynamic IPs

namespace DevSitesIndex.Entities
{
    public class RedirectUrl
    {

        public Guid ID { get; set; }


        [Required]
        public string Url { get; set; }

        public string UrlText { get; set; }

        public string UrlDetail { get; set; }

        public DateTime? DateDisabled { get; set; }


        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [Display(Name = "Date Added")]
        [EFCoreShadowProperty.Models.DateAdded]
        public DateTime DateAdded { get; set; }


        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [Display(Name = "Date Updated")]
        [EFCoreShadowProperty.Models.DateUpdated]
        public DateTime? DateUpdated { get; set; }

    }
}
