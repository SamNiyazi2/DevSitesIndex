using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 08/14/2019 04:42 am - SSN - [20190814-0433] - [002] - Add timesheet totals

namespace DevSitesIndex
{
    public static class DateTimeExtensions
    {
        public static string SecondsToTimeDuration(this int? duration)
        {
            if (!duration.HasValue) return "";
            
            return new TimeSpan(0, 0, duration.Value).ToString("T");
        }
 

    }
}
