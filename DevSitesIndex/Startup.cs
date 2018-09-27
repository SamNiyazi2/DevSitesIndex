using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Services;
using Microsoft.Extensions.Logging;

namespace DevSitesIndex
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // 07/29/2018 03:37 pm - SSN _ Changed to static
        // public  IConfiguration Configuration { get; }
        public static IConfiguration Configuration { get; private set; }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {


            // services.AddMvc();

            services.AddMvc().AddRazorPagesOptions(options =>
            {
                options.RootDirectory = "/Pages";
                //options.Conventions.AddPageRoute("/Employees/Index", "");
                options.Conventions.AddPageRoute("/jobs", "");

            });

            // 07/29/2018 03:37 pm - SSN - Copied in
            var connectionString = Startup.Configuration["connectionStrings:DevSitesIndexDBConnectionString"];
            services.AddDbContext<DevSitesIndexContext>(o => o.UseSqlServer(connectionString));

            services.AddScoped<IDevSitesIndexRepository, DevSitesIndexRepository>();


            // 09/26/2018 01:38 pm - SSN - Adding

            ApprovedRemoteSites approvedRemoteSites = new ApprovedRemoteSites();
            Configuration.GetSection("ApprovedRemoteSites").Bind(approvedRemoteSites);
          

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            // 08/08/2018 02:16 pm - SSN - Added
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=demosites}/{action=Index}/{id?}");

            });

        }
    }


    public class ApprovedRemoteSites
    {
        public string[] Site { get; set; }
    }
}
