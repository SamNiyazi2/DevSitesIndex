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

namespace DevSitesIndex.Controllers
{
    public class HomeController : Controller
    {

        // 05/31/2019 02:36 pm - SSN - Take out context for handling errors with database

        //   private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public HomeController(DevSitesIndexContext context)
        {
            //       _context = context;
        }


        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Demonstration Site.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

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
            // 08/22/2019 03:26 pm - SSN

            // https://scottsauber.com/2017/04/03/adding-global-error-handling-and-logging-in-asp-net-core/

            // Get the details of the exception that occurred
            var exceptionFeature = HttpContext.Features.Get<IExceptionHandlerPathFeature>();

            if (exceptionFeature != null)
            {
                // Get which route the exception occurred at
                string routeWhereExceptionOccurred = exceptionFeature.Path;

                // Get the exception that occurred
                Exception exceptionThatOccurred = exceptionFeature.Error;

                // TODO: Do something with the exception
                // Log it with Serilog?
                // Send an e-mail, text, fax, or carrier pidgeon?  Maybe all of the above?
                // Whatever you do, be careful to catch any exceptions, otherwise you'll end up with a blank page and throwing a 500



                // 08/22/2019 03:42 pm - SSN
                //if (routeWhereExceptionOccurred.ToLower().Contains("/delete"))

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



            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }



    }
}
