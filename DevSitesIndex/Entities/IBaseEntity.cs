using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 04/08/2019 01:12 am - SSN - [20190407-2345] - TimeLog

namespace DevSitesIndex.Entities
{
    public interface IBaseEntity
    {
        DateTime DateAdded { get; set; }
        DateTime? DateModified { get; set; }
    }
}
