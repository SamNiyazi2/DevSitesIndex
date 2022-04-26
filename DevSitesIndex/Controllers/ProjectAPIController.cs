using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using DevSitesIndex.Util;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SSN_GenUtil_StandardLib;



// 09/26/2019 03:05 pm - SSN - [20190926-1242] - [009] - Search projects
// Created



namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    ////////////////////////////////////////////////////////////////////////////////// [ApiController]

    // 10/09/2019 01:20 pm - SSN - [20191009-1302] - [004] - M09 - Reusing components with content projection
    // Change to implement : EntityAPIController<Project>
    // Takeout _context and _logger with new implementation
    public class ProjectAPIController : EntityAPIController<Project> //: ControllerBase
    {

        //private readonly DevSitesIndexContext _Context;
        //private readonly ILogger_SSN _Logger;

        public ProjectAPIController(DevSitesIndexContext context, ILogger_SSN logger) : base(context, logger)
        {
            //_Context = context;
            //_Logger = logger;

            // 10/09/2019 01:23 pm - SSN - [20191009-1302] - [005] - M09 - Reusing components with content projection

            _entityRepository = new ProjectRepository(context, logger);
        }



        // 03/28/2022 01:02 am - SSN - Allow for paging - Partial implementation
        [Route("{recordsPerPage}/{currentPage}")]
        [HttpGet]
        public IEnumerable<Project> Get(int recordsPerPage, int currentPage)
        {
            recordsPerPage = recordsPerPage > 25 ? 25 : recordsPerPage;
            currentPage = currentPage < 1 ? 1 : currentPage;
            int skips = currentPage - 1 * recordsPerPage;
            IEnumerable<Project> projects = _entityRepository.GetAll().Skip(skips).Take(recordsPerPage);
            return projects;
        }





        // 09/26/2019 02:48 pm - SSN - [20190926-1242] - [008] - Search projects



        public class Tempparam
        {
            public string searchText { get; set; }
            public string selectedTablesIDs { get; set; }
        }

        //[Route("search/{pageNo}/{recordsPerPage}/{columnName}/{desc}/{job_statuses_selected}/{searchText}")]
        // [Route("search/{searchText}")]
        //  [HttpPost]
        // public async Task<DataBag<Project_Search_Record>> getSerachResults(string searchText, string selectedTablesIDs, int _recordsPerPage, int _pageNo, string columnName, string desc)
        //  public  DataBag<Project_Search_Record> getSerachResults(
        [Route("search")]
        public async Task<DataBag<Project_Search_Record>> search([FromBody] Tempparam options) // Input replaces form Input variable from code copied here
        {
            try
            {

                List<Pages.Projects.SearchTableRecord> searchTables = new List<Pages.Projects.SearchTableRecord> { new Pages.Projects.SearchTableRecord { Id = 1, IsSelected = true } };

                if (string.IsNullOrWhiteSpace(options.selectedTablesIDs) && searchTables != null && searchTables.Count > 0)
                {
                    options.selectedTablesIDs = searchTables.Where(r => r.IsSelected).Select(r => r.Id).Aggregate("", (prev, next) => prev + (prev != "" ? "," : "") + next, final => final);
                }


                ProjectRepository projectRepository = new ProjectRepository(context, logger);

                int? pageIndex = null;

                if (!pageIndex.HasValue) pageIndex = 1;
                int recordsPerPage = 5;
                int _pageIndex = pageIndex.HasValue ? pageIndex.Value : 1;

                DataBag<Project_Search_Record> databag = await projectRepository.getSerachResults(options.searchText, options.selectedTablesIDs, recordsPerPage, _pageIndex, "LastActivity", "false");

                databag.copyFromBagModelError(ModelState);

                return databag;




                //DataBag<Project_Search_Record> xxx = new DataBag<Project_Search_Record>();
                //return xxx;





            }
            catch (Exception ex)
            {
                string message = ex.Message;

                throw;
            }

        }


























        // 11/22/2019 03:31 pm - SSN - [20191121-0503] - [017] - Timelog edit options on project search

        [HttpGet("RefreshRecord/{id}")]
        public Pages.Shared.Project_Search_index_record RefreshRecord(int id, string servingPage)
        {

            Pages.Shared.Project_Search_index_record r = new Pages.Shared.Project_Search_index_record
            {
                servingPage = Enum_Extensions.parseEnum<Pages.Shared.ServingPage>(servingPage)

            };

            try
            {


                TimeLogRepository timeLogRepository = new TimeLogRepository(context, logger, null);
                TimeLog timelog = timeLogRepository.GetRecord(id);

                r.project_Search_Record = new DevSitesIndex.Services.Project_Search_Record
                {
                    Description = timelog.WorkDetail,
                    JobId = timelog.JobId,
                    JobTitle = timelog.job.JobTitle,
                    ProjectID = timelog.job.ProjectID,
                    ProjectTitle = timelog.job.project.ProjectTitle,
                    SourceTable = "Timelog",
                    TableID = 3,
                    TimelogId = timelog.TimeLogId,
                    LastActivity = timelog.DateModified ?? timelog.DateAdded,
                    EntryTotalSeconds = timelog.TotalSeconds

                };


                var view = View("Projects_Index_Search_Row", r);
                r.html = view.ToHtml(HttpContext);


            }
            catch (Exception ex)
            {
                r.html = ExceptionHandling_MessageToUser.getBasicMessage_asHtml("20191122-1548", ex);
                logger.PostException(ex, "20191122-1549", "Failed call to return view for project search index record refresh.");

            }

            return r;

        }




        // 11/27/2019 04:51 pm - SSN Copied from JobApiController

        [Route("typeahead")]
        [HttpGet]
        public IEnumerable<TypeAheadRecord> Get_TA()
        {

            IEnumerable<Project> entity = _entityRepository.GetAll().OrderBy(r => r.ProjectTitle);

            return entity.Select(r => new TypeAheadRecord(r.ProjectID, r.ProjectTitle));
        }

        // 11/28/2019 07:58 am - SSN - Copied from JobApiController

        [Route("typeahead/{id}")]
        [HttpGet]
        public TypeAheadRecord Get_TA(int? id)
        {

            TypeAheadRecord entity = default(TypeAheadRecord);

            if (id.HasValue)
            {
                Project r = _entityRepository.GetRecord(id.Value);
                entity = new TypeAheadRecord(r.ProjectID, r.ProjectTitle);
            }
            return entity;

        }


    }
}

