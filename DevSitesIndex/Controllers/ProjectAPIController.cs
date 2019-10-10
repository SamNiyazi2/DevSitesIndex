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

        public ProjectAPIController(DevSitesIndexContext context, ILogger_SSN logger):base(context,logger)
        {
            //_Context = context;
            //_Logger = logger;

            // 10/09/2019 01:23 pm - SSN - [20191009-1302] - [005] - M09 - Reusing components with content projection

            _entityRepository = new ProjectRepository(context, logger);
        }

        // 09/26/2019 02:48 pm - SSN - [20190926-1242] - [008] - Search projects

        [Route("search/{pageNo}/{recordsPerPage}/{columnName}/{desc}/{job_statuses_selected}/{searchText}")]
        [HttpGet]
        public void getSerachResults(string searchText, string selectedTablesIDs, int _recordsPerPage, int _pageNo, string columnName, string desc)
        {
            throw new NotImplementedException("20190926-1606 - Incomplete");

        }



    }
}