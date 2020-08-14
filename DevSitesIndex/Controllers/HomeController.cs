using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DevSitesIndex.Models;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Diagnostics;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Authorization;
using SSN_GenUtil_StandardLib;

namespace DevSitesIndex.Controllers
{
    public class HomeController : Controller
    {
        private readonly IConfiguration configuration;
        private readonly IHostingEnvironment env;
        private readonly ILogger_SSN logger;

        // 05/31/2019 02:36 pm - SSN - Take out context for handling errors with database

        //   private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;
        // 08/26/2019 04:29 pm - SSN - [20190826-1619] - [002] - Add sort
        // Adding IConfiguration and IHostingEnvironment 

        public HomeController(DevSitesIndexContext context, IConfiguration configuration, IHostingEnvironment env, ILogger_SSN logger)
        {
            this.configuration = configuration;
            this.env = env;
            this.logger = logger;
            //       _context = context;
        }


        public IActionResult Index()
        {
            return RedirectToAction("index", "demosites");
        }

        public IActionResult Index_was()
        {
            return View("index");
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Demonstration Site";

            return View();
        }

        [Authorize]
        public IActionResult Contact()
        {
            ViewData["Message"] = "Contact Information";

            return View();
        }


        // 06/03/2019 06:39 pm - SSN - [20190603-1427] - [008] - Error handling
        // Adding for testing 
        public IActionResult throw1()
        {
            string x = null;
            string y = x.Substring(1, 1);

            return View();
        }



        public IActionResult Error()
        {

            // 12/07/2019 01:57 pm - SSN - [20191207-0704] - [009] - AngularJS - Routing - Authentication
            StringBuilder sb_master = new StringBuilder();
            sb_master.AppendLine("DevSitesIndex Error Page");


            // 08/22/2019 03:26 pm - SSN

            // https://scottsauber.com/2017/04/03/adding-global-error-handling-and-logging-in-asp-net-core/

            // Get the details of the exception that occurred
            var exceptionFeature = HttpContext.Features.Get<IExceptionHandlerPathFeature>();

            if (exceptionFeature != null)
            {
                // Get which route the exception occurred at
                string routeWhereExceptionOccurred = exceptionFeature.Path;

                sb_master.AppendLine($"routeWhereExceptionOccurred: [{routeWhereExceptionOccurred }]");

                // Get the exception that occurred
                Exception exceptionThatOccurred = exceptionFeature.Error;

                sb_master.AppendLine($"Error-1a [{exceptionThatOccurred.Message}]");
                sb_master.AppendLine($"Error-1b [{exceptionThatOccurred.StackTrace}]");


                // TODO: Do something with the exception
                // Log it with Serilog?
                // Send an e-mail, text, fax, or carrier pidgeon?  Maybe all of the above?
                // Whatever you do, be careful to catch any exceptions, otherwise you'll end up with a blank page and throwing a 500



                // 08/22/2019 03:42 pm - SSN
                //if (routeWhereExceptionOccurred.ToLower().Contains("/delete"))
                if (exceptionThatOccurred.InnerException != null)
                {

                    sb_master.AppendLine($"Error-2a [{exceptionThatOccurred.InnerException.Message}]");
                    sb_master.AppendLine($"Error-2b [{exceptionThatOccurred.InnerException.StackTrace}]");



                    string errorMessageToLookFor = "The DELETE statement conflicted with the REFERENCE constraint";
                    if (exceptionThatOccurred.InnerException.Message.Contains(errorMessageToLookFor))
                    {
                        StringBuilder sb = new StringBuilder();
                        sb.Append(string.Format("<p>{0}</p>", "This site is work in progress.&nbsp; The delete ation you took is currently being handled by this exception handler."));
                        sb.Append(string.Format("<p>{0}</p>", "An option to authorized users to delete is in the works."));
                        sb.Append(string.Format("<p>{0}</p>", "Thank you for reviewing the site."));
                        ViewData["Feedback"] = sb.ToString();

                    }

                }

                if (env.IsDevelopment())
                {

                    Exception ex = exceptionThatOccurred;

                    StringBuilder sb = new StringBuilder();

                    while (ex != null)
                    {
                        sb.Append(string.Format("<p>{0}</p>", ex.Message));
                        sb.Append(string.Format("<p>{0}</p>", ex.StackTrace));
                        sb.Append(string.Format("<p></p>"));
                        ex = ex.InnerException;

                    }

                    ViewData["Feedback"] = (ViewData["Feedback"] ?? "") + sb.ToString();

                }


            }

            logger.PostException(new Exception(sb_master.ToString()), "20191207-1402", "DevSitesIndex - Home error captured error");

            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }



    }
}
