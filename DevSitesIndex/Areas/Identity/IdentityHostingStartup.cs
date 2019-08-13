using System;
using DevSitesIndex.Areas.Identity.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(DevSitesIndex.Areas.Identity.IdentityHostingStartup))]
namespace DevSitesIndex.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<DevSitesIndexIdentityDbContext>(options =>
                    options.UseSqlServer(

                        // 08/12/2019 11:17 am - SSN - [20190812-0945] - [006] - Add identity

                        // DevSitesIndexIdentityDbContextConnection
                        context.Configuration.GetConnectionString("DevSitesIndexDBConnectionString")));

                services.AddDefaultIdentity<IdentityUser>()
                    .AddEntityFrameworkStores<DevSitesIndexIdentityDbContext>();
            });
        }
    }
}