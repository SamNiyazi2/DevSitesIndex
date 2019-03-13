using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;


// 09/02/2018 08:43 am - SSN

namespace DevSitesIndex.Entities
{
    public class ReferenceSite
    {
        public int Id { get; set; }

        [Required]
        // 09/04/2018 10:05 am - SSN - Added remote validation
        [Remote(action: "DoesReferenceSites_SiteTitleExist", controller: "home", AdditionalFields = "Id", HttpMethod = "POST")]

        public string SiteTitle { get; set; }

        [Required]
        // 09/04/2018 09:00 am - SSN - Added remote validation
        [Remote(action: "DoesReferenceSites_SiteUrlExist", controller: "home", AdditionalFields = "Id", HttpMethod = "POST")]
        public string SiteURL { get; set; }

        // 03/13/2019 09:29 am - SSN
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime DateAdded { get; set; }

    }
}
