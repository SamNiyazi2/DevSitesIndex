using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

// 04/07/2019 11:48 pm - SSN - [20190407-2345] - TimeLog

namespace DevSitesIndex.Entities
{
    public class Discipline
    {

        public int DisciplineId { get; set; }

        [Display(Name = "Discipline")]
        public string DisciplineShort { get; set; }

        [Display(Name = "Date Added")]
        public DateTime DateAdded { get; set; }

        [Display(Name = "Date Updated")]
        public DateTime? DateModified { get; set; }

    }
}
