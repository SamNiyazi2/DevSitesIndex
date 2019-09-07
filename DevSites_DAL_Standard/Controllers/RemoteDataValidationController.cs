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

    // 05/31/2019 02:40 pm - SSN - Take out context for handling errors with database  - Moved from homeController

    public class RemoteDataValidationController : Controller
    {


        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;


        public RemoteDataValidationController(DevSitesIndexContext context)
        {
            _context = context;
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

        // 03/19/2019 10:34 pm - SSN - Adding
        public JsonResult isForDemo_v02_SelectionValid([Bind(Prefix = "DevSite.ForDemo_v02")] byte forDemo_V02)
        {
            bool isValid = Enum.TryParse<EnumList.ForDemoState>(forDemo_V02.ToString(), out EnumList.ForDemoState selected);

            if (!isValid)
            {
                return Json(data: $"You need to make a selection");
            }
            return Json(data: true);

        }


    }
}
