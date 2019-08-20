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

            // 08/19/2019 03:56 pm - SSN - Combine days total with hours.
            // return new TimeSpan(0, 0, duration.Value).ToString("T");
            TimeSpan ts = new TimeSpan(0, 0, duration.Value);
            return string.Format("{0,5}:{1,2:00}:{2:00} ({3})", Math.Floor(ts.TotalHours), ts.Minutes, ts.Seconds, ts.ToString("T"));
        }


    }
}
