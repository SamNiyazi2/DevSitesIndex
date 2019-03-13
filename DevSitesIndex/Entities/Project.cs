using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

// 08/08/2018 02:34 pm - SSN

namespace DevSitesIndex.Entities
{
    public class Project
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
        public DateTime DateAdded { get; set; }


        public Company company { get; set; }

    }
}
