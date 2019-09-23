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
using Microsoft.AspNetCore.Identity;


// 08/12/2019 09:50 am - SSN - [20190812-0945] - [003] - Add identity


using Microsoft.AspNetCore.Identity.UI;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity.UI.Services;
using DevSitesIndex.Email;
using Microsoft.AspNetCore.Html;

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

        public static string SITE_NAME_STRING = "";
        public static HtmlString SITE_NAME_HTML => new HtmlString(SITE_NAME_STRING.Replace(".", "<span>.<span>"));// For email to prevent email client vendors from hyperlinking the domain name.

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {


            // services.AddMvc();


            // 06/03/2019 05:20 pm - SSN - [20190603-1427] - [007] - Error handling
            // Take out options

            //  services.AddMvc().AddRazorPagesOptions(options =>
            //  {
            //      options.RootDirectory = "/Pages";
            //      //options.Conventions.AddPageRoute("/Employees/Index", "");
            //      options.Conventions.AddPageRoute("/jobs", "");

            //  }
            //);




            //// 09/13/2019 01:32 pm - SSN - [20190913-0548] - [008] - Crate generic dropdown list directive
            //// Todo:  Need to take out after resolving problem posting form from DropdownListDirective.ts
            ////services.AddMvc();
            //services.AddMvc().AddRazorPagesOptions(o =>
            //{
            //    o.Conventions.ConfigureFilter(new IgnoreAntiforgeryTokenAttribute());
            //});




            //  // 04/12/2019 04:18 pm - SSN - [20190412-1126] - Timelog - save data -- Copied from:
            //// Copied from: C:\Sams_Projects\PluralSight\angularjs-forms-bootstrap-mvc5\Work2\PS_AngularForMVC\PS_AngularForMVC\Global.asax.cs
            //.AddJsonOptions(options =>
            // {
            //     options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            // })

            // 04/29/2019 07:02 pm - SSN - [20190429-1748] - [004] - Angular clock out popup

            //.AddJsonOptions(options =>
            // {
            //     // options.SerializerSettings.Converters.Add(new IsoDateTimeConverter());
            //     // options.SerializerSettings.DateFormatHandling = Newtonsoft.Json.DateFormatHandling.MicrosoftDateFormat;

            //     //options.SerializerSettings.DateFormatHandling = Newtonsoft.Json.DateFormatHandling.IsoDateFormat;
            //     //options.SerializerSettings.DateTimeZoneHandling = Newtonsoft.Json.DateTimeZoneHandling.Local; 
            //     // 04/29/2019 07:26 pm - SSN - [20190429-1748] - [005] - Angular clock out popup
            //     // No benfit
            // });



            // 08/29/2019 12:25 pm - SSN - [20190829-1212] - [001] - Adding email confirmation 
            // Project didn't include email
            services.AddTransient<IEmailSender, SSNEmailSender>();
            string SendGrid_APIKey = Configuration["SendGrid:API_Key"];
            SSNSendGridStandardUtil.SendGridUtil.APIKey = SendGrid_APIKey;
            SSNSendGridStandardUtil.SendGridUtil.BCC_Default = Configuration["SendGrid:BBC_Default"];



            // 07/29/2018 03:37 pm - SSN - Copied in
            var connectionString = Startup.Configuration["connectionStrings:DevSitesIndexDBConnectionString"];
            services.AddDbContext<DevSitesIndexContext>(o => o.UseSqlServer(connectionString));

            services.AddScoped<IDevSitesIndexRepository, DevSitesIndexRepository>();



            // 09/06/2019 11:45 pm - SSN - [20190906-2040] - [002] - Logger

            //services.AddSingleton<Util.ILogger_SSN, Util.SSN_Logger>();
            services.AddTransient<Util.ILogger_SSN, Util.SSN_Logger>();




            // 08/13/2019 08:41 am - SSN - Added
            // https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity-configuration?view=aspnetcore-2.2
            services.Configure<IdentityOptions>(options =>
            {
                // Default Lockout settings.
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
                options.Lockout.MaxFailedAccessAttempts = 5;
                options.Lockout.AllowedForNewUsers = true;

                // 09/04/2019 10:26 pm - SSN - [20190904-1845] - [007] - Enforce email confirmation
                options.SignIn.RequireConfirmedEmail = true;

            });

            // https://stackoverflow.com/questions/45875601/cookie-expiry-in-asp-net-core-2-0-with-identity
            services.AddAuthentication().AddCookie(options =>
            {
                options.Cookie.Expiration = TimeSpan.FromDays(6);
                options.Cookie.SameSite = Microsoft.AspNetCore.Http.SameSiteMode.Strict;
                options.Cookie.Name = "DevSites";
                // options.LoginPath = "/Account/Login";
                // options.AccessDeniedPath = "/Account/Forbidden";
            });

            services.Configure<IdentityOptions>(options =>
            {
                //// Default Password settings.
                //options.Password.RequireDigit = true;
                //options.Password.RequireLowercase = true;
                //options.Password.RequireNonAlphanumeric = true;
                //options.Password.RequireUppercase = true;
                options.Password.RequiredLength = 8;
                //options.Password.RequiredUniqueChars = 1;

                // 08/29/2019 12:06 pm - SSN - [20190829-1212] - [001] - Adding email confirmation 
                options.User.RequireUniqueEmail = true;

            });
            services.ConfigureApplicationCookie(options =>
            {

                options.Cookie.HttpOnly = true;
                options.Cookie.Expiration = TimeSpan.FromMinutes(40);
                options.ExpireTimeSpan = TimeSpan.FromMinutes(40);
                //options.LoginPath = "/Account/Login";
                //options.LogoutPath = "/Account/Logout";
                //options.AccessDeniedPath = "/Account/AccessDenied";
                options.SlidingExpiration = true;
            });





            // 08/12/2019 09:45 am - SSN - [20190812-0945] - [001] - Add identity


            //services.AddDbContext<ApplicationDbContext>(options =>
            // options.UseSqlServer(
            //     Configuration.GetConnectionString("DefaultConnection")));


            //services.AddDefaultIdentity<IdentityUser>()
            //    .AddDefaultUI(UIFramework.Bootstrap4)
            //    .AddEntityFrameworkStores<ApplicationDbContext>();

            //services.AddDefaultIdentity<IdentityUser>()
            //             .AddDefaultUI(UIFramework.Bootstrap4)
            //             .AddEntityFrameworkStores<DevSitesIndexContext>();




            // 09/26/2018 01:38 pm - SSN - Adding

            ApprovedRemoteSites approvedRemoteSites = new ApprovedRemoteSites();
            Configuration.GetSection("ApprovedRemoteSites").Bind(approvedRemoteSites);


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {

            // 09/14/2019 07:39 am - SSN - [20190914-0227] - [009] - Creating dynamic process to process data in the catch block
            GetMeSomeServiceLocator.Instance = app.ApplicationServices;



            // 08/08/2018 02:16 pm - SSN - Added
            // 06/03/2019 05:20 pm - SSN - [20190603-1427] - [007] - Error handling
            // Turn off
            // loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                // 08/12/2019 10:12 am - SSN - [20190812-0945] - [004] - Add identity
                // We lost this when trying to add identity
                //  app.UseBrowserLink();

                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }



            // 09/06/2019 07:16 am - SSN - 

            bool firstRequest = true;
            app.Use(async (context, next) =>
            {
                if (firstRequest)
                {
                    SITE_NAME_STRING = context.Request.Host.Host.ToString();
                    firstRequest = false;
                }
                await next();
            });




            app.UseStaticFiles();


            // 08/12/2019 11:24 am - SSN - [20190812-0945] - [007] - Add identity

            app.UseAuthentication();



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


    // 09/14/2019 07:38 am - SSN - [20190914-0227] - [008] - Creating dynamic process to process data in the catch block
    // https://stackoverflow.com/questions/46383377/how-to-instantiate-an-iloggerfactory-without-using-dependency-injection
    public static class GetMeSomeServiceLocator
    {
        public static IServiceProvider Instance { get; set; }
    }


    public class ApprovedRemoteSites
    {
        public string[] Site { get; set; }
    }
}
