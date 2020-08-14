using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 11/21/2019 12:42 am - SSN - [20191121-0042] - Added

namespace DevSitesIndex.Util
{
    public class ExceptionHandling_MessageToUser
    {
        public static string getBasicMessage_asHtml( string callSource, Exception ex)
        {

            return string.Format($"System Error: ({callSource}) <br/><br/>{ex.Message}");

        }

    }
}
