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
            // 03/20/2022 06:19 pm - SSN - [20220320-1726] - [009] - 03 - Update jobs related objects to show total hours
            // return string.Format("{0,5}:{1,2:00}:{2:00} ({3})", Math.Floor(ts.TotalHours), ts.Minutes, ts.Seconds, ts.ToString("T"));
            // return ts.ToString("T");
            string returnValue =  ts.ToString("T").PadLeft(13,'.');
            return returnValue;

        }



        // 09/26/2019 08:12 pm - SSN - [20190926-1242] - [017] - Search projects
        // Update Timelog detail form.
        public static DateTime? StopTime(this int? duration_In_Seconds, DateTime startTime)
        {
            if (!duration_In_Seconds.HasValue) return null;
            return startTime.AddSeconds(duration_In_Seconds.Value);
        }


        public static string StopTime_AsString(this int? duration_In_Seconds, DateTime startTime)
        {
            if (!duration_In_Seconds.HasValue) return "";
            return StopTime(duration_In_Seconds, startTime).Value.ToString("{0:hh:mm:ss tt}");

        }


        public static DateTime lastDate(DateTime? timelogDate, DateTime jobDate)
        {
            if (!timelogDate.HasValue) return jobDate;
            return timelogDate.Value > jobDate ? timelogDate.Value : jobDate;
        }

    }
}
