using DevSitesIndex.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

// 04/25/2022 07:38 pm - SSN

namespace DevSitesIndex.Models
{
    public class DevSite_DTO
    {

      
        public int Id { get; set; }

        [Required]
        [DisplayName("Site Title")]
        public string SiteTitle { get; set; }

        [DisplayName("Site URL")]
        public string SiteUrl { get; set; }

        [Required]
        [DisplayName("Solution Name")]
        public string SolutionName { get; set; }


















        [Required]
        [DisplayName("Project Software")]
        public int SoftwareCodeID { get; set; }



        [DisplayName("Can be launched")]
        public bool CanBeLaunched { get; set; }


        public SoftwareCode SoftwareCode { get; set; }


        [DisplayName("Date Added")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime DateAdded { get; set; }

        [DisplayName("Date Updated")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime? DateUpdated { get; set; }



        [DisplayName("For Demo")]
        public byte ForDemo_v02 { get; set; }












        [Timestamp]
        public byte[] RowVersion { get; set; }



        public DateTime LastActivityDate { get; private set; }



        //public virtual ICollection<DevSiteCodeReference> DevSiteCodeReferences { get; set; }


        public virtual ICollection<DevSiteTechnology_DTO> DevSiteTechnologies { get; set; }


        //public virtual ICollection<Job_DevSite> JobDevSites { get; set; }

    }
}
