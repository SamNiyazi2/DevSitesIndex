using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

// 08/08/2018 11:51 am - SSN

namespace DevSitesIndex.Entities
{
    public class Company
    {

        public int CompanyID { get; set; }

        [DisplayName("Company Name")]

        [Required(ErrorMessage = "Company name is required")]
        // 09/13/2019 11:37 pm - SSN - Add remote
        // Todo: Are we done
        
        // 09/24/2019 12:40 pm - SSN - [20190924-1134] - [011] - Removing date add/updated from create/edit pages
        // Forgot AdditionalFields 
        [Remote(action: "CompanyName_IsDuplicate", controller: "RemoteDataValidation", AdditionalFields = "CompanyID", HttpMethod = "POST")]
        public string CompanyName { get; set; }

        // 03/13/2019 09:29 am - SSN
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [DisplayName("Date Added")]
        public DateTime DateAdded { get; set; }

    }
}
