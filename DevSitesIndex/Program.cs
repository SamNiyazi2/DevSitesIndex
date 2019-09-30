using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace DevSitesIndex
{
    public class Program
    {
        // 09/20/2019 01:03 pm - SSN - Added babel_only

        public enum whatJavaScriptVersion
        {
            Original= 1,
            Webpack = 2,
            Babel_Only = 3
        }
        
        public static whatJavaScriptVersion RunWhatJavaScriptVersion { get; set; } = whatJavaScriptVersion.Webpack;


        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)


                // 09/27/2019 02:21 pm - SSN - [20190927-0634] - [023] - Testing
                // While moving some code to SSN_GenUtil_StandardLib, we had to replace some packages with version 3.0.0 with 2.2.0
                // it may have impacted this.  Comment out
                // .UseApplicationInsights()


                .UseStartup<Startup>()

                .ConfigureLogging((hostingContext, logging) =>
                {



                    // 09/27/2019 02:19 pm - SSN - [20190927-0634] - [022] - Testing
                    #region Moving a copy to SSN_GenUtil_StandardLib 


                    logging.AddProvider(
                        new Util.SSN_LoggerProvider_ov_01(
                                                    new Util.SSN_LoggerProviderConfiguration_ov_01
                                                    {
                                                        Color = ConsoleColor.Yellow,
                                                        LogLevel = LogLevel.Information

                                                    }
                                            ));

                    logging.AddSSN_Logger_ov_01((r) =>
                    {
                        r.Color = ConsoleColor.Red;
                        r.LogLevel = LogLevel.Debug;

                    });




                    logging.AddProvider(
                       new SSN_GenUtil_StandardLib.SSN_LoggerProvider(
                                                   new SSN_GenUtil_StandardLib.SSN_LoggerProviderConfiguration
                                                   {
                                                       Color = ConsoleColor.Yellow,
                                                       LogLevel = LogLevel.Information

                                                   }
                                           ));

                    logging.AddSSN_Logger((r) =>
                    {
                        r.Color = ConsoleColor.Red;
                        r.LogLevel = LogLevel.Debug;

                    });


                    #endregion Moving a copy to SSN_GenUtil_StandardLib 



                })
                .Build();
    }


}

