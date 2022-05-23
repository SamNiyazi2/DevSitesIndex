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
        // 05/22/2022 07:16 pm - SSN - Add ProjectNo
        public JsonResult Job_duplicate_Check([Bind(Prefix = "Job.JobTitle")] string jobTitle, [Bind(Prefix = "Job.JobID")] int JobID, [Bind(Prefix = "Job.ProjectID")] int ProjectID)
        {
            Job r = _context.Jobs.Where(e => e.JobTitle == jobTitle && e.ProjectID == ProjectID && e.JobID != JobID).FirstOrDefault();
            if (r != null)
            {
                return Json(data: $"Job title is already on <a href='/jobs/Details?id={r.JobID}' target='jobewin{r.JobID}' >file</a>.");
            }
            return Json(data: true);

        }



        // 06/08/2021 11:59 am - SSN - [20210606-0227] - [028] - Testng for deployment - Line item
        public JsonResult Project_duplicate_Check([Bind(Prefix = "Project.ProjectTitle")] string projectTitle, [Bind(Prefix = "Project.ProjectID")] int projectID)
        {
            Project r = _context.Projects.Where(e => e.ProjectTitle == projectTitle && e.ProjectID != projectID).FirstOrDefault();

            if (r != null)
            {
                return Json(data: $"Project title is already on <a href='/projects/Details?id={r.ProjectID}' target='jobewin{r.ProjectID}' >file</a>.");
            }
            return Json(data: true);

        }


        // 09/13/2019 11:38 pm - SSN - Added
        // 09/24/2019 11:47 am - SSN - [20190924-1134] - [007] - Removing date add/updated from create/edit pages
        // Wasn't checking ID
        public JsonResult CompanyName_IsDuplicate([Bind(Prefix = "Company.CompanyName")] string companyName, [Bind(Prefix = "Company.CompanyID")] int CompanyID)
        {
            var reqeust = Request;

            Company r = _context.Companies.Where(e => e.CompanyID != CompanyID && e.CompanyName == companyName).FirstOrDefault();
            if (r != null)
            {
                return Json(data: $"Company name is already on <a href='/Companies/Details?id={r.CompanyID }' target='companyWin{r.CompanyID}' >file</a>.");
            }
            return Json(data: true);

        }


        // 09/24/2019 12:34 pm - SSN - [20190924-1134] - [010] - Removing date add/updated from create/edit pages
        // Added
        public JsonResult Discipline_IsDuplicate([Bind(Prefix = "Discipline.DisciplineShort")] string disciplineShort, [Bind(Prefix = "Discipline.DisciplineId")] int disciplineId)
        {

            Discipline r = _context.Disciplines.Where(e => e.DisciplineShort == disciplineShort && e.DisciplineId != disciplineId).FirstOrDefault();
            if (r != null)
            {
                return Json(data: $"Discipline is already on <a href='/Disciplines/Details?id={r.DisciplineId}' target='refsitewin{r.DisciplineId}' >file</a>.");
            }
            return Json(data: true);

        }

    }
}
