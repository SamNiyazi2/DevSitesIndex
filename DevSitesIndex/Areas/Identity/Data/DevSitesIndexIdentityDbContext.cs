using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace DevSitesIndex.Areas.Identity.Data
{
    public class DevSitesIndexIdentityDbContext : IdentityDbContext<IdentityUser>
    {

        // 08/12/2019 07:54 pm - SSN - [20190812-0945] - [019] - Add identity
        // IConfiguration configuration & do_database_Migration
        public DevSitesIndexIdentityDbContext(DbContextOptions<DevSitesIndexIdentityDbContext> options, IConfiguration configuration)
            : base(options)
        {



            bool do_database_Migration = false;
            bool.TryParse(configuration["Database_Migration"], out do_database_Migration);


            if (do_database_Migration)
            {
                try
                {
                    Database.SetCommandTimeout(6000);
                    Database.Migrate();
                }
                catch (Exception)
                {
                    // Do nothing here.
                }
            }

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