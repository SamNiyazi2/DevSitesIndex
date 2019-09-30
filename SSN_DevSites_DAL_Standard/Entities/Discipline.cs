using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

// 04/07/2019 11:48 pm - SSN - [20190407-2345] - TimeLog
// 09/30/2019 09:18 am - SSN - [20190930-0818] - [005] - Added dateadded/dateupdated attributes to entity models

namespace DevSitesIndex.Entities
{
    public class Discipline
    {

        public int DisciplineId { get; set; }

        [Display(Name = "Discipline")]
        [Required]  // 09/13/2019 11:21 pm

        // 09/24/2019 12:42 pm - SSN - [20190924-1134] - [012] - Removing date add/updated from create/edit pages
        // Added
        [Remote(action: "Discipline_IsDuplicate", controller: "RemoteDataValidation", AdditionalFields = "DisciplineId", HttpMethod = "POST")]
        public string DisciplineShort { get; set; }

        [Display(Name = "Date Added")]
        [EFCoreShadowProperty.Models.DateAdded]
        public DateTime DateAdded { get; set; }

        [Display(Name = "Date Updated")]
        [EFCoreShadowProperty.Models.DateUpdated]
        public DateTime? DateModified { get; set; }

    }
}
