using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 09/04/2018 05:29 am - SSN

namespace DevSitesIndex.Entities
{
    public class CodeReference
    {

        public int Id { get; set; }
        public string CodeBlock { get; set; }
        public string SourceAddress { get; set; }
        public DateTime DateAdded { get; set; }
        public DateTime DateModified { get; set; }

    }
}
