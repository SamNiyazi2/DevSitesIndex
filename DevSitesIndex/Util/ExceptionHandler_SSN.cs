using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// 09/07/2019 06:26 am - SSN - [20190907-0018] - [009] - Entity Framework concurrency check

namespace DevSitesIndex.Util
{
    public class ExceptionHandler_SSN
    {
        // 09/15/2019 11:32 am - SSN

        public static async Task writeExcelptionToConsole(Exception ex)
        {
            await Task.Factory.StartNew((Object obj) =>
            {
                Console.WriteLine("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
                Console.WriteLine("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

                Console.WriteLine("Started task.");

                Exception ex1 = obj as Exception;
                if (ex1 == null)
                {
                    Console.WriteLine("*********************************** Task failed to pickup exception [20190915-1126]");
                    return;
                }

                // data.ThreadNum = Thread.CurrentThread.ManagedThreadId;
                Util.ExceptionHandler_SSN eu = new ExceptionHandler_SSN();
                StringBuilder sb = eu.HandleException_GetExAsSB(ex1);

                Console.WriteLine(sb.ToString());


                Console.WriteLine("Completed task.");

                Console.WriteLine("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
                Console.WriteLine("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");


            }, ex);
        }




        public StringBuilder HandleException_GetExAsSB(Exception ex, int innerExceptionSeqNumber = 0)
        {
            // 09/15/2019 10:48 am - SSN - Updating

            StringBuilder sb = new StringBuilder();

            if (innerExceptionSeqNumber == 0)
                sb.AppendLine("00000000000000000000000000000000000000000000000000000");
            else
                sb.AppendLine(string.Format(">>>>>> {0}", "".PadLeft(30, (char)(innerExceptionSeqNumber + 65))));



            sb.AppendLine(string.Format("1)    Message: {0}", ex.Message));
            sb.AppendLine(string.Format("2)     Source: {0}", ex.Source));
            sb.AppendLine(string.Format("3) StackTrace: {0}", ex.StackTrace));
            sb.AppendLine(string.Format("4)       Data: {0}", ex.Data));


            if (ex.InnerException != null)
            {
                sb.AppendLine("-----------------------------------------------------");
                sb.AppendLine("Inner exception:");
                innerExceptionSeqNumber++;
                sb.Append(HandleException_GetExAsSB(ex.InnerException, innerExceptionSeqNumber));
                innerExceptionSeqNumber--;
            }

            sb.AppendLine("88888888888888888888888888888888888888888888888888888");
            sb.AppendLine("=====================================================");

            return sb;

        }
    }
}
