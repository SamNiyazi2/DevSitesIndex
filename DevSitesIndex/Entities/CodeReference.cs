using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

// 09/04/2018 05:29 am - SSN

namespace DevSitesIndex.Entities
{
    public class CodeReference
    {

        public int Id { get; set; }

        [DisplayName("Code Block")]
        [Required(ErrorMessage ="Input is required")]
        public string CodeBlock { get; set; }

        [DisplayName("Source Address")]
        public string SourceAddress { get; set; }

        // 03/13/2019 09:29 am - SSN
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [DisplayName("Date Added")]
        public DateTime DateAdded { get; set; }

        // 03/13/2019 09:29 am - SSN
        // 04/16/2019 05:59 pm - SSN - [20190416-1759] Nullify - NOT - We need it for order.  Very slow otherwise.
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [DisplayName("Date Updated")]
        public DateTime DateModified { get; set; }

        // 02/24/2019 05:16 - SSN - Added
        public string Title { get; set; }
    }
}
