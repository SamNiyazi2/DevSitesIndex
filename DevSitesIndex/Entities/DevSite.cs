using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

// 07/29/2018 03:34 pm - SSN - Copied

namespace DevSitesIndex.Entities
{
    public enum SoftwareCode
    {
        VS = 1
    }

    public class DevSite
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string SiteTitle { get; set; }
        public string SiteUrl { get; set; }

        public string SolutionName { get; set; }
        public string Solution_Details { get; set; }

        public SoftwareCode SoftwareCode { get; set; }

        public DateTime DateAdded { get; set; }
    }

}
