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
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json.Converters;

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

            }
          )
            //  // 04/12/2019 04:18 pm - SSN - [20190412-1126] - Timelog - save data -- Copied from:
            //// Copied from: C:\Sams_Projects\PluralSight\angularjs-forms-bootstrap-mvc5\Work2\PS_AngularForMVC\PS_AngularForMVC\Global.asax.cs
            //.AddJsonOptions(options =>
            // {
            //     options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            // })

            // 04/29/2019 07:02 pm - SSN - [20190429-1748] - [004] - Angular clock out popup

            .AddJsonOptions(options =>
             {
                 // options.SerializerSettings.Converters.Add(new IsoDateTimeConverter());
                 // options.SerializerSettings.DateFormatHandling = Newtonsoft.Json.DateFormatHandling.MicrosoftDateFormat;
                 
                 //options.SerializerSettings.DateFormatHandling = Newtonsoft.Json.DateFormatHandling.IsoDateFormat;
                 //options.SerializerSettings.DateTimeZoneHandling = Newtonsoft.Json.DateTimeZoneHandling.Local; 
                 // 04/29/2019 07:26 pm - SSN - [20190429-1748] - [005] - Angular clock out popup
                 // No benfit
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

                // 04/12/2019 05:31 pm - SSN - [20190412-1126] - Timelog - save data - TESTING

                //routes.MapRoute(
                //        name: "API Default",
                //        template: "api/{controller}/{id?}");

            });

        }
    }


    public class ApprovedRemoteSites
    {
        public string[] Site { get; set; }
    }
}
