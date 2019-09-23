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

                .UseApplicationInsights()
                // 09/26/2018 01:22 pm - SSN - Adding
                // No clear benefit.  reloadOnChange does not appear to work.
                //.ConfigureAppConfiguration((hostcontext, config) =>
                //{
                //    config.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
                //})
                .UseStartup<Startup>()

                .ConfigureLogging((hostingContext, logging) =>
                {
                    logging.AddProvider(
                        new Util.SSN_LoggerProvider(
                                                    new Util.SSN_LoggerProviderConfiguration
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
                })
                .Build();
    }


}

