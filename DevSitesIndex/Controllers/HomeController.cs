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


        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public HomeController(DevSitesIndexContext context)
        {
            _context = context;
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



        // 09/04/2018 09:00 am - SSN - Added remote validation   
        public JsonResult DoesReferenceSites_SiteUrlExist([Bind(Prefix = "ReferenceSite.SiteURL")] string siteUrl, [Bind(Prefix = "ReferenceSite.Id")] int Id)
        {
            ReferenceSite r = _context.ReferenceSites.Where(e => e.SiteURL == siteUrl && e.Id != Id).FirstOrDefault();
            if (r != null)
            {
                return Json(data: $"Site URL is already on <a href='/ReferenceSites/Details?id={r.Id}' target='refsitewin{r.Id}' >file</a>.");
            }
            return Json(data: true);

        }

        // 09/04/2018 10:06 am - SSN - Added remote validation   
        public JsonResult DoesReferenceSites_SiteTitleExist([Bind(Prefix = "ReferenceSite.SiteTitle")] string siteTitle, [Bind(Prefix = "ReferenceSite.Id")] int Id)
        {
            ReferenceSite r = _context.ReferenceSites.Where(e => e.SiteTitle == siteTitle && e.Id != Id).FirstOrDefault();
            if (r != null)
            {
                return Json(data: $"Site title is already on <a href='/ReferenceSites/Details?id={r.Id}' target='refsitewin{r.Id}' >file</a>.");
            }
            return Json(data: true);

        }

    }
}
