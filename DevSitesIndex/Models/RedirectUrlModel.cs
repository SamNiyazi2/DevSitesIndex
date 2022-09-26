using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 09/22/2022 10:01 am - SSN

namespace DevSitesIndex.Models
{
    public class RedirectUrlModel
    {
        public string Url { get; set; }
        public string UrlText { get; set; }
        public string UrlDetail { get; set; }
        public string Message { get; set; }
        public string MessageClassName { get; set; }

        public bool HasExpired { get; set; }

        public bool DisplayBookmarkMessage { get; set; }

        public string WindowName { get; set; }
    }
}
