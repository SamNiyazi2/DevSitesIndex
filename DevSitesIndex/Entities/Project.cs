using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 08/08/2018 02:34 pm - SSN

namespace DevSitesIndex.Entities
{
    public class Project
    {

        public int ProjectID { get; set; }
        public string ProjectTitle { get; set; }

        public int CompanyID { get; set; }

        public DateTime DateAdded { get; set; }


        public Company company { get; set; }

    }
}
