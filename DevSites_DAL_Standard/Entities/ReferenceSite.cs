using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;


// 09/02/2018 08:43 am - SSN

namespace DevSitesIndex.Entities
{
    public class ReferenceSite
    {
        // 05/31/2019 02:55 pm - SSN - Add DisplayName

        public int Id { get; set; }

        [Required]
        [DisplayName("Site Title")]
        // 09/04/2018 10:05 am - SSN - Added remote validation
        [Remote(action: "DoesReferenceSites_SiteTitleExist", controller: "RemoteDataValidation", AdditionalFields = "Id", HttpMethod = "POST")]

        public string SiteTitle { get; set; }

        [Required]
        [DisplayName("Site URL")]
        // 09/04/2018 09:00 am - SSN - Added remote validation
        [Remote(action: "DoesReferenceSites_SiteUrlExist", controller: "RemoteDataValidation", AdditionalFields = "Id", HttpMethod = "POST")]
        public string SiteURL { get; set; }

        // 03/13/2019 09:29 am - SSN
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [DisplayName("Date Added")]
        public DateTime DateAdded { get; set; }

    }
}
