using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DevSitesIndex.Models;
using DevSitesIndex.Entities;

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

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

         

    }
}
