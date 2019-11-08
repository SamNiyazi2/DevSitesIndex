using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using DevSitesIndex.Util;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// 09/16/2019 03:55 am - SSN - [20190916-0355] - [001] - Adding JobAPI controller



using Microsoft.EntityFrameworkCore;
using SSN_GenUtil_StandardLib;

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    //  [ApiController]
    public class JobAPIController : EntityAPIController<Job>
    {

        public JobAPIController(DevSitesIndexContext context, ILogger_SSN logger) : base(context, logger)
        {
            _entityRepository = new JobRepository(context);
        }


        #region For Typeahead - DowndownListDirective

        // 09/16/2019 04:28 am - SSN - [20190916-0355] - [004] - Adding JobAPI controller
        // For Typeahead

        // GET: api/<controller>
        [Route("typeahead")]
        [HttpGet]
        public IEnumerable<TypeAheadRecord> Get_TA()
        {

            IEnumerable<Job> entity = _entityRepository.GetAll();

            return entity.Select(r => new TypeAheadRecord(r.JobID, r.JobTitle));
        }


        [Route("typeahead/{id}")]
        [HttpGet]
        public TypeAheadRecord Get_TA(int? id)
        {

            TypeAheadRecord entity = default(TypeAheadRecord);

            if (id.HasValue)
            {
                Job r = _entityRepository.GetRecord(id.Value);
                entity = new TypeAheadRecord(r.JobID, r.JobTitle);
            }


            return entity;

        }

        // 09/16/2019 04:28 am - SSN - [20190916-0355] - [004] - Adding JobAPI controller
        // For Typeahead

        #endregion For Typeahead


        // 09/17/2019 01:01 am - SSN - [20190916-1123] - [017] - Adding job status

        // 09/22/2019 08:27 am - SSN - [20190922-0822] - [003] - Plug in job status filter on job's index - update data source
        // Adding job_statuses_selected

        // 09/26/2019 03:30 pm - SSN - [20190926-1242] - [013] - Search projects
        // async/await

        [Route("list/{pageNo}/{recordsPerPage}/{columnName}/{desc}/{job_statuses_selected}")]
        [HttpGet]
        public async Task<DataBag<Job>> Get_Jobs(int? pageNo, int? recordsPerPage, string columnName, string desc, string job_statuses_selected)
        {
            // 10/21/2019 09:22 am - SSN - [20191021-0444] - [012] - M12 - Creating directives and advanced components in Angular.
            // Update with SqlStatsRecord_temp 

            SqlStatsRecord SqlStatsRecord_temp = new SqlStatsRecord();
            SqlStatsRecord_temp.RecordsPerPage_Default = 10;

            // 09/18/2019 12:40 am - SSN - [20190917-0929] - [009] - Adding paging for angular lists


            Util.ExecuteStoredProcedure exec = new Util.ExecuteStoredProcedure(context, logger);

            exec.LoadStoredProc("demosites.Jobs_Index_WithLastActivityDate");

            exec.WithSqlParam("@recordsPerPage", SqlStatsRecord_temp.RecordsPerPage);
            exec.WithSqlParam("@pageNo", SqlStatsRecord_temp.CurrentPageNo);
            exec.WithSqlParam("@sortColumn", columnName);
            exec.WithSqlParam("@desc", desc.ToLower() == "true");

            // 09/22/2019 09:18 am - SSN - [20190922-0822] - [005] - Plug in job status filter on job's index - update data source

            exec.WithSqlParam("@job_statuses_selected", job_statuses_selected);


            IEnumerable<Job> result1_data = await exec.GetResultSet_v02<Job>();
            IList<SqlStatsRecord> result2_Stats = await exec.GetResultSet_v02<SqlStatsRecord>();

            SqlStatsRecord sqlStatsRecord = null;

            if (result2_Stats.Count() == 0)
            {
                await logger.PostException(new Exception { Source = "JobAPIController" }, "20190918-0057", "Procedure did not return a second result set of table/page stats.");
                sqlStatsRecord = new SqlStatsRecord();
            }
            else
            {
                // 09/27/2019 07:50 am - SSN - [20190927-0634] - [007] - Testing
                // sqlStatsRecord = result2_Stats[0];
                sqlStatsRecord = result2_Stats.FirstOrDefault();
            }

            exec.CloseConnection();


            DataBag<Job> databag = new DataBag<Job> { dataList = result1_data, sqlStatsRecord = sqlStatsRecord };

            return databag;
        }



        // 09/30/2019 07:01 pm - SSN - Added
        [Route("get_custom/{id}")]
        //[HttpGet("get_custom/{id}")]
        [HttpGet]
        public Job get_custom(int? id)
        {

            try
            {
                return context.Jobs.Include(r => r.project).Where(r => r.JobID == id).FirstOrDefault();
            }
            catch (Exception ex)
            {
                logger.PostException(ex, "20190918-0057-B", "Procedure did not return a second result set of table/page stats.");
                throw new Exception($"20190930-1905 - Failed call to get job record [{id}]");
            }
        }



    }
}
