using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

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
        // 09/07/2019 05:11 am - SSN - [20190907-0018] - [008] - Entity Framework concurrency check
        // Result of moving DAL objects out.
        public JsonResult DoesReferenceSites_SiteUrlExist([Bind(Prefix = "ReferenceSite.SiteUrl")] string siteUrl, [Bind(Prefix = "ReferenceSite.Id")] int Id)
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

        // 09/13/2019 05:17 am - SSN - [20190913-0517] - [001] - Job title duplicate check

        public JsonResult Job_duplicate_Check([Bind(Prefix = "Job.JobTitle")] string jobTitle, [Bind(Prefix = "Job.JobID")] int Id)
        {
            Job r = _context.Jobs.Where(e => e.JobTitle== jobTitle && e.JobID != Id).FirstOrDefault();
            if (r != null)
            {
                return Json(data: $"Job title is already on <a href='/jobs/Details?id={r.JobID}' target='jobewin{r.JobID}' >file</a>.");
            }
            return Json(data: true);

        }



        // 09/13/2019 11:38 pm - SSN - Added
        public JsonResult CompanyName_IsDuplicate([Bind(Prefix = "Company.CompanyName")] string companyName)
        {
            Company r = _context.Companies.Where(e => e.CompanyName == companyName).FirstOrDefault();
            if (r != null)
            {
                return Json(data: $"Company name is already on <a href='/Companies/Details?id={r.CompanyID }' target='companyWin{r.CompanyID}' >file</a>.");
            }
            return Json(data: true);

        }

    }
}
