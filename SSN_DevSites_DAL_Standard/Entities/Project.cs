

// 09/07/2019 01:31 am - SSN - [20190907-0018] - [003] - Entity Framework concurrency check
// using Microsoft.AspNetCore.Mvc.ModelBinding;




using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

// 08/08/2018 02:34 pm - SSN
// 09/30/2019 08:28 am - SSN - [20190930-0818] - [002] - Added dateadded/dateupdated attributes to entity models

namespace DevSitesIndex.Entities
{
    // 04/19/2019 11:58 am - SSN - Add sort - inherit IBaseEntity
    public class Project : IBaseEntity
    {

        public int ProjectID { get; set; }


        [DisplayName("Project Title")]
        [Required(ErrorMessage = "Title is required")]
        public string ProjectTitle { get; set; }

        [DisplayName("Company")]
        [Required(ErrorMessage = "Selection is required")]

        public int CompanyID { get; set; }


        // 03/13/2019 09:29 am - SSN
        [DisplayName("Date Added")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [EFCoreShadowProperty.Models.DateAdded]
        public DateTime DateAdded { get; set; }

        // 04/19/2019 11:58 am - SSN - Add sort
        [DisplayName("Date Updated")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [EFCoreShadowProperty.Models.DateUpdated]
        public DateTime? DateModified { get; set; }


        [DisplayName("Company")]
        public Company company { get; set; }


        // 10/09/2019 01:49 pm - SSN - [20191009-1302] - [006] - M09 - Reusing components with content projection

        public virtual ICollection<Job> jobs{ get; set; }

    }
}
