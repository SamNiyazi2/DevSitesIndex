using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using DevSitesIndex.Util;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;



// 09/26/2019 03:05 pm - SSN - [20190926-1242] - [009] - Search projects
// Created



namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

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

                databag.copyModelError(ModelState);

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



    }
}