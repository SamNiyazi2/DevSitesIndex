using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SSN_GenUtil_StandardLib;

namespace DevSitesIndex.Areas.Identity.Data
{
    public class DevSitesIndexIdentityDbContext : IdentityDbContext<IdentityUser>
    {

        // 03/21/2022 02:14 pm - SSN - [20220321-1408] - [002] - Takeout TelemetryClient - Use logger
        // Added logger

        private readonly ILogger_SSN logger;

        // 08/12/2019 07:54 pm - SSN - [20190812-0945] - [019] - Add identity
        // IConfiguration configuration & do_database_Migration
        public DevSitesIndexIdentityDbContext(DbContextOptions<DevSitesIndexIdentityDbContext> options, IConfiguration configuration, ILogger_SSN _logger)
            : base(options)
        {



            bool.TryParse(configuration["Database_Migration"], out bool do_database_Migration);


            if (do_database_Migration)
            {
                try
                {
                    Database.SetCommandTimeout(6000);
                    Database.Migrate();
                }
                catch (Exception ex)
                {
                    // 08/28/2019 08:59 am - SSN - [20190828-0819] - [004] - Adding Application Insights

                    // 03/21/2022 02:14 pm - SSN - [20220321-1408] - [002] - Takeout TelemetryClient - Use logger
                    // TelemetryClient telemetry = new TelemetryClient();

                    try
                    {
                        //Dictionary<string, string> dic = new Dictionary<string, string>
                        //{
                        //    { "ErrorCode", "DemoSite-20190828-0901" },
                        //    { "ErrorMessage", "DevSiteIndexIdentityDbContext Migration failed" }
                        //};

                        // telemetry.TrackException(ex, dic);
                        logger.PostException(ex, "DemoSite-20190828-0901-B", "DevSiteIndexIdentityDbContext Migration failed");

                    }
                    catch (Exception)
                    {
                        // Do nothing
                    }
                }
            }
            logger = _logger;
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

        }


    }
}
