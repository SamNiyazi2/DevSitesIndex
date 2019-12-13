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


using Microsoft.AspNetCore.SpaServices.AngularCli;


using Microsoft.AspNetCore.Routing;
using System.Security.Claims;

namespace DevSitesIndex
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }


        // 11/25/2019 10:03 pm - SSN - [20191125-2153] - [003] - Job create - Replace dropdown with dropdownListDirective
        // Refactor applicablePaths_Site_Only

        public class ApplicablePaths_Site_Only
        {
            public string[] path { get; set; }
            public bool isApplicable(string _path)
            {
                return (path.Any(r => _path == r.ToLower()));
            }

        }


        // http://p3013.nonbs.net:3013/Jobs/Create?id=9

        public class ApplicablePaths_temp_support
        {
            public string[] path { get; set; }
            public bool isApplicable(string _path)
            {
                return (path.Any(r => _path == r.ToLower()));
            }

        }





        // 11/25/2019 10:03 pm - SSN - [20191125-2153] - [003] - Job create - Replace dropdown with dropdownListDirective
        // Refactor applicablePaths_Site_Only




        // 11/24/2019 07:36 pm - SSN 
        public static ApplicablePaths_temp_support applicablePaths_temp_support = new ApplicablePaths_temp_support();


        // 11/25/2019 10:03 pm - SSN - [20191125-2153] - [003] - Job create - Replace dropdown with dropdownListDirective
        // Refactor applicablePaths_Site_Only
        public static ApplicablePaths_Site_Only applicablePaths_Site_Only = new ApplicablePaths_Site_Only();



        //                                                                                                                                                            "/timelogs/" trailing slash to avoid including index.



        // 07/29/2018 03:37 pm - SSN _ Changed to static
        // public  IConfiguration Configuration { get; }
        public static IConfiguration Configuration { get; private set; }


        // 12/04/2019 02:29 am - SSN - Add SITE_COOKIE_NAME 
        public static string SITE_COOKIE_NAME = "DevSiteSIndex02";

        public static string SITE_NAME_STRING = "";
        public static string SITE_FULL_WEB_ADDRESS = ""; // 11/07/2019 04:31 pm - SSN

        public static HtmlString SITE_NAME_HTML => new HtmlString(SITE_NAME_STRING.Replace(".", "<span>.<span>"));// For email to prevent email client vendors from hyperlinking the domain name.

        // 09/27/2019 06:34 am - SSN - [20190927-0634] - [001] - Testing
        // Adding to flag out work envionment - local vs Azure
        public static string SITE_ALERT_CSS_NAME { get; set; }


        public const int PASSWORD_MINIMUM_LENGTH = 8;

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {





            // 08/29/2019 12:25 pm - SSN - [20190829-1212] - [001] - Adding email confirmation 
            // Project didn't include email

            // 11/07/2019 08:20 pm - SSN - make Singleton
            // services.AddTransient<IEmailSender, SSNEmailSender>();
            services.AddSingleton<IEmailSender, SSNEmailSender>();


            string SendGrid_APIKey = Configuration["SendGrid:API_Key"];
            SSNSendGridStandardUtil.SendGridUtil.APIKey = SendGrid_APIKey;
            SSNSendGridStandardUtil.SendGridUtil.BCC_Default = Configuration["SendGrid:BBC_Default"];













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



            // 07/29/2018 03:37 pm - SSN - Copied in
            var connectionString = Startup.Configuration["connectionStrings:DevSitesIndexDBConnectionString"];
            services.AddDbContext<DevSitesIndexContext>(o => o.UseSqlServer(connectionString));

            services.AddScoped<IDevSitesIndexRepository, DevSitesIndexRepository>();








            // 09/06/2019 11:45 pm - SSN - [20190906-2040] - [002] - Logger

            //services.AddSingleton<Util.ILogger_SSN, Util.SSN_Logger>();

            // 10/31/2019 10:56 am - SSN - Take out
            //services.AddTransient<Util.ILogger_SSN, Util.SSN_Logger>();


            // 09/27/2019 02:08 pm - SSN - [20190927-0634] - [020] - Testing
            // Made a copy in SSN_GenUtil_StandardLib
            // Todo - Singleton ????



            // 11/07/2019 08:20 pm - SSN - make Singleton
            // services.AddTransient<SSN_GenUtil_StandardLib.ILogger_SSN, SSN_GenUtil_StandardLib.SSN_Logger>();
            services.AddSingleton<SSN_GenUtil_StandardLib.ILogger_SSN, SSN_GenUtil_StandardLib.SSN_Logger>();








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
                options.Password.RequiredLength = PASSWORD_MINIMUM_LENGTH;
                //options.Password.RequiredUniqueChars = 1;

                // 08/29/2019 12:06 pm - SSN - [20190829-1212] - [001] - Adding email confirmation 
                options.User.RequireUniqueEmail = true;

            });


            // 12/13/2019 06:32 am - SSN - Add claims
            services.AddAuthorization(options =>
            {
                options.AddPolicy("Managers", policy =>
                                  policy.RequireClaim( ClaimTypes.Role,"Manager"));

                options.AddPolicy("EmployeeOnly", policy =>
                                  policy.RequireClaim(ClaimTypes.Role, "Employee"));
            });


            if (!int.TryParse(Configuration["Session_Duration"], out int session_Duration))
            {
                session_Duration = 40;
            }


            services.ConfigureApplicationCookie(options =>
            {
                options.Cookie.HttpOnly = true;
                options.Cookie.Expiration = TimeSpan.FromMinutes(session_Duration);
                options.ExpireTimeSpan = TimeSpan.FromMinutes(session_Duration);
                //options.LoginPath = "/Account/Login";
                //options.LogoutPath = "/Account/Logout";
                //options.AccessDeniedPath = "/Account/AccessDenied";
                options.SlidingExpiration = true;
            });



            // 12/03/2019 04:49 am - SSN - [20191202-2353] - [018] - DisplayCode - Adding
            // https://docs.microsoft.com/en-us/aspnet/core/fundamentals/http-requests?view=aspnetcore-3.0
            services.AddHttpClient();



            // 09/26/2018 01:38 pm - SSN - Adding

            ApprovedRemoteSites approvedRemoteSites = new ApprovedRemoteSites();
            Configuration.GetSection("ApprovedRemoteSites").Bind(approvedRemoteSites);



            // 11/24/2019 07:36 pm - SSN 
            Configuration.GetSection("ApplicablePaths_temp_support").Bind(applicablePaths_temp_support);


            // 11/25/2019 10:03 pm - SSN - [20191125-2153] - [003] - Job create - Replace dropdown with dropdownListDirective
            // Refactor applicablePaths_Site_Only
            Configuration.GetSection("ApplicablePaths_Site_Only").Bind(applicablePaths_Site_Only);


            // 10/02/2019 01:45 pm - SSN - [20191002-1118] - [008] - Adding Angular 7 test app


            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot/dist/timesheetsSupport7";
            });











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


            // 10/09/2019 02:27 pm - SSN - [20191009-1302] - [008] - M09 - Reusing components with content projection

            services
                       .AddMvc()
                       .AddJsonOptions(opt =>
                       {
                           //opt.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects;
                           opt.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.None;
                           opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                       });



            // 11/06/2019 08:22 am - SSN - [20191104-0607] - [020] - Registration - Client 
            // https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.apibehavioroptions?view=aspnetcore-3.0
            // Gets or sets a value that determines if the filter that returns an BadRequestObjectResult when ModelState is invalid is suppressed.
            services.Configure<ApiBehaviorOptions>(options =>
                {
                    options.SuppressModelStateInvalidFilter = true;
                });


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

                    string port = "";
                    if (context.Request.Host.Port.HasValue)
                    {
                        port = ":" + context.Request.Host.Port.ToString();
                    }

                    SITE_FULL_WEB_ADDRESS = string.Format("{0}://{1}{2}", context.Request.Scheme, context.Request.Host.Host, port);

                    if (!SITE_NAME_STRING.ToLower().Contains("testsam"))
                    {
                        SITE_ALERT_CSS_NAME = "site_alert_css_name";
                    }
                    firstRequest = false;
                }
                await next();



                //After going down the pipeline check if we 404'd. 
                if (context.Response.StatusCode == StatusCodes.Status404NotFound)
                {
                    // await context.Response.WriteAsync("Woops! We 404'd");
                  
                    context.Response.Redirect($"/home/error/{context.Response.StatusCode}");
                }




            });

            


            app.UseStaticFiles();





            // 10/02/2019 01:44 pm - SSN - [20191002-1118] - [007] - Adding Angular 7 test app

            app.UseSpaStaticFiles();




            // 08/12/2019 11:24 am - SSN - [20190812-0945] - [007] - Add identity

            app.UseAuthentication();



            app.UseMvc(routes =>
            {


                routes.MapRoute(
                    name: "default",
                    template: "{controller=home}/{action=about}/{id?}");




                #region Testing

                // 10/03/2019 10:01 am - SSN - [20191002-1118] - [017] - Adding Angular 7 test app
                // https://stackoverflow.com/questions/35527842/mvc6-routing-to-single-page-application-without-losing-404

                //            routes.MapRoute("app", "{*anything}",
                //new { controller = "Home", action = "Index" },
                //new { anything = new Microsoft.AspNetCore.Routing.Constraints.RegexRouteConstraint("^(?!test\\/).+") });



                //////// 10/02/2019 03:51 pm - SSN - [20191002-1118] - [010] - Adding Angular 7 test app
                //////// Testing
                //////routes.MapRoute(
                //////    name: "default2",

                //////    template: "{controller}/{action}/{id?}",
                //////    defaults: new { Controller = "demosites", Action = "index" }, //, id = UrlParameter.Optional},
                //////    constraints: new { name = new Util.ServerRouteConstraint(uri => !uri.PathAndQuery.ToLower().StartsWith("/test")) });


                ////////////////////////routes.MapSpaFallbackRoute(
                ////////////////////////        name: "spa-fallback",
                ////////////////////////        defaults: new { controller = "timesheetssupport7", action = "test3" });


                // 10/02/2019 11:55 am - SSN - [20191002-1118] - [003] - Adding Angular 7 test app
                // Testing
                //routes.MapSpaFallbackRoute(
                //        name: "spa-fallback",
                //        defaults: new { controller = "Home", action = "Index", });


                // 10/03/2019 10:59 am - SSN - [20191002-1118] - [018] - Adding Angular 7 test app
                // This does serve SPA and MVC requests
                //routes.MapRoute(
                //   "Default_angx", // Route name
                //   "{*catchall}", // URL with parameters
                //   new { controller = "timesheetssupport7", action = "test2" });
















                #endregion Testing


            });




            // 12/07/2019 08:32 am - SSN - [20191207-0704] - [005] - AngularJS - Routing - Authentication


            ////////////////////////// 10/02/2019 01:40 pm - SSN - [20191002-1118] - [006] - Adding Angular 7 test app

            ////////////////////////// This allows to display AppComponent when using route 'test2'
            ////////////////////////app.UseSpa(spa =>
            ////////////////////////{
            ////////////////////////    // To learn more about options for serving an Angular SPA from ASP.NET Core,
            ////////////////////////    // see https://go.microsoft.com/fwlink/?linkid=864501

            ////////////////////////    spa.Options.SourcePath = "timesheetsSupport7";

            ////////////////////////    if (env.IsDevelopment())
            ////////////////////////    {
            ////////////////////////        //     spa.UseAngularCliServer(npmScript: "start");
            ////////////////////////    }
            ////////////////////////});

            // https://forums.asp.net/t/2156516.aspx?Serve+multiple+angular+spa+from+a+single+core+web+application


            app.Map("/app1", app1 =>
            {
                app1.UseSpa(spa =>
                {
                    // To learn more about options for serving an Angular SPA from ASP.NET Core,
                    // see https://go.microsoft.com/fwlink/?linkid=864501

                    spa.Options.SourcePath = "wwwroot/js";

                    spa.UseSpaPrerendering(options =>
                    {
                        //options.BootModulePath = $"{spa.Options.SourcePath}/dist-server/main.bundle.js";
                        options.BootModulePath = "wwwroot/webpack_build/bundle_timesheetapp.js";
                        //options.BootModuleBuilder = env.IsDevelopment()
                        //    ? new AngularCliBuilder(npmScript: "build:ssr:en")
                        //    : null;
                        //options.ExcludeUrls = new[] { "/sockjs-node" };
                        //options.SupplyData = (context, data) =>
                        //{
                        //    data["foo"] = "bar";
                        //};
                    });

                    //if (env.IsDevelopment())
                    //{
                    //    spa.UseAngularCliServer(npmScript: "start --app=app1 --base-href=/app1/ --serve-path=/");
                    //}
                });
            }).Map("/app2", app2 =>
            {
                app2.UseSpa(spa =>
                {
                    // To learn more about options for serving an Angular SPA from ASP.NET Core,
                    // see https://go.microsoft.com/fwlink/?linkid=864501

                    spa.Options.SourcePath = "timesheetsSupport7";

                    //spa.UseSpaPrerendering(options =>
                    //{
                    //    options.BootModulePath = "wwwroot/dist/timesheetsSupport7/runtime.js";
                    //});


                });
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
