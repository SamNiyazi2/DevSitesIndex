using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

// 05/30/2019 05:06 pm - SSN - [20190530-0510]
// https://entityframework.net/many-to-many-relationship

namespace DevSitesIndex.Entities
{
    public class DevSiteCodeReference
    {
        
        public int DevSiteId { get; set; }
        
        public int CodeReferenceId { get; set; }
        
        public DevSite DevSite { get; set; }
        
        public CodeReference CodeReference { get; set; }

    }
}
