using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

// 09/04/2018 05:29 am - SSN
// 09/30/2019 08:20 am - SSN - [20190930-0818] - [001] - Added dateadded/dateupdated attributes to entity models

namespace DevSitesIndex.Entities
{
    public class CodeReference
    {
        // 11/08/2019 06:20 pm - SSN - Copied form DevSite
        SSN_GenUtil_StandardLib.RegularExpression_Utility RE_Util = new SSN_GenUtil_StandardLib.RegularExpression_Utility();


        public int Id { get; set; }

        [DisplayName("Code Block")]
        [Required(ErrorMessage ="Input is required")]
        public string CodeBlock { get; set; }


        // 11/08/2019 06:20 pm - SSN - Copied form DevSite
        [NotMapped]
        public string CodeBlock_Encoded => RE_Util.EncodeContentOfPreTag(CodeBlock);



        [DisplayName("Source Address")]
        public string SourceAddress { get; set; }

        // 03/13/2019 09:29 am - SSN
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [DisplayName("Date Added")] 
        [EFCoreShadowProperty.Models.DateAdded]
        public DateTime DateAdded { get; set; }

        // 03/13/2019 09:29 am - SSN
        // 04/16/2019 05:59 pm - SSN - [20190416-1759] Nullify - NOT - We need it for order.  Very slow otherwise.
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [DisplayName("Date Updated")]
        [EFCoreShadowProperty.Models.DateUpdated]
        public DateTime DateModified { get; set; }

        // 02/24/2019 05:16 - SSN - Added
        [Required(ErrorMessage ="Title is required")]
        public string Title { get; set; }


        // 05/30/2019 05:06 pm - SSN - [20190530-0510]
        public virtual ICollection<DevSiteCodeReference> DevSiteCodeReferences { get; set; }

    }
}
