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
            Original = 1,
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
            // 09/29/2019 09:26 pm - SSN - Adding back in.    







            .include_UseApplicationInsights()






            .UseStartup<Startup>()

            .ConfigureLogging((hostingContext, logging) =>
            {



                // 09/27/2019 02:19 pm - SSN - [20190927-0634] - [022] - Testing
                #region Moving a copy to SSN_GenUtil_StandardLib 


                // 10/31/2019 10:55 - SSN - Take out.

                //logging.AddProvider(
                //    new Util.SSN_LoggerProvider_ov_01(
                //                                new Util.SSN_LoggerProviderConfiguration_ov_01
                //                                {
                //                                    Color = ConsoleColor.Yellow,
                //                                    LogLevel = LogLevel.Information

                //                                }
                //                        ));

                //logging.AddSSN_Logger_ov_01((r) =>
                //{
                //    r.Color = ConsoleColor.Red;
                //    r.LogLevel = LogLevel.Debug;

                //});


                // 06/23/2021 10:48 pm - SSN - Added clearProviders to reduce logging from ASP.NET Core
                // https://weblog.west-wind.com/posts/2018/Dec/31/Dont-let-ASPNET-Core-Default-Console-Logging-Slow-your-App-down
                logging.ClearProviders();

                
                IConfigurationSection temp =  hostingContext.Configuration.GetSection("Logging");
                logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
                logging.AddDebug();
                logging.AddEventSourceLogger();

                if ( Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == EnvironmentName.Development)
                {
                    logging.AddConsole();
                }


                logging.AddProvider(
                   new SSN_GenUtil_StandardLib.SSN_LoggerProvider(
                                               new SSN_GenUtil_StandardLib.SSN_LoggerProviderConfiguration
                                               {
                                                   Color = ConsoleColor.Yellow,
                                                   LogLevel = LogLevel.Warning
                                               }
                                       ));

                logging.AddSSN_Logger((r) =>
                {
                    r.Color = ConsoleColor.Red;
                    r.LogLevel = LogLevel.Debug;
                    
                });


                // 06/23/2021 10:01 pm - SSN - Added to reduce noise.
                // https://stackoverflow.com/questions/42079956/suppress-sql-queries-logging-in-entity-framework-core
                // https://docs.microsoft.com/en-us/ef/core/logging-events-diagnostics/simple-logging
                logging.AddFilter("Microsoft.EntityFrameworkCore.Database.Command", LogLevel.Warning);



                #endregion Moving a copy to SSN_GenUtil_StandardLib 



            })


            // 12/03/019 04:20 am - SSN 
            //.ConfigureAppConfiguration((hostinContext, config) =>
            //{

            ////    config.AddEnvironmentVariables();

            //})

                .Build();
    }


    public static class ext101
    {
        public static IWebHostBuilder include_UseApplicationInsights(this IWebHostBuilder x)
        {

            // 03/21/2022 01:22 pm - SSN - From warnings
            x.UseApplicationInsights();
            //AddApplicationInsights();

            return x;
        }
    }
}

