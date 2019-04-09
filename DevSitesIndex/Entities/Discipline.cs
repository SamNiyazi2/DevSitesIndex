using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 04/07/2019 11:48 pm - SSN - [20190407-2345] - TimeLog

namespace DevSitesIndex.Entities
{
    public class Discipline
    {

        public int DisciplineId { get; set; }
        public string DisciplineShort { get; set; }

        public DateTime DateAdded { get; set; }
        public DateTime? DateModified { get; set; }

    }
}
