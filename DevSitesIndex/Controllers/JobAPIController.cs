using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// 09/16/2019 03:55 am - SSN - [20190916-0355] - [001] - Adding JobAPI controller



using Microsoft.EntityFrameworkCore;


namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    //  [ApiController]
    public class JobAPIController : EntityAPIController<Job>
    {
        private readonly DevSitesIndexContext context;
        private readonly Util.ILogger_SSN logger;

        public JobAPIController(DevSitesIndexContext context, Util.ILogger_SSN logger)
        {
            _entityRepository = new JobRepository(context);
            this.context = context;
            this.logger = logger;
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

        [Route("list/{pageNo}/{recordsPerPage}/{columnName}/{desc}/{job_statuses_selected}")]
        [HttpGet]
        public DataBag<Job> Get_Jobs(int? pageNo, int? recordsPerPage, string columnName, string desc, string job_statuses_selected)
        {
            int _recordsPerPage = recordsPerPage ?? 10;
            _recordsPerPage = (_recordsPerPage > 50) ? 50 : _recordsPerPage;

            int _pageNo = pageNo ?? 1;


            // 09/18/2019 12:40 am - SSN - [20190917-0929] - [009] - Adding paging for angular lists

            // Tried to first replace with this:


            //string sql = "demosites.Jobs_Index_WithLastActivityDate @recordsPerPage , @pageNo  @sortColumn ";
            //SqlParameter parameter_recordsPerPage = new SqlParameter("@recordsPerPage", _recordsPerPage);
            //SqlParameter parameter_pageNo = new SqlParameter("@pageNo", _pageNo);
            //SqlParameter parameter_SortColumn = new SqlParameter("@sortColumn", columnName);


            //var resultSet= context.FromSql(sql,parameter_recordsPerPage, parameter_pageNo, parameter_SortColumn);

            //            IEnumerable < Job > list = resultSet;
            //            list = Util.Reflection_Util.SourceSetOrder<Job>(list, columnName, desc.ToLower() == "true");

            // But ended up with this: (Solution for multiple result sets)  


            Util.ExecuteStoredProcedure exec = new Util.ExecuteStoredProcedure(context);

            exec.LoadStoredProc("demosites.Jobs_Index_WithLastActivityDate");

            exec.WithSqlParam("@recordsPerPage", _recordsPerPage);
            exec.WithSqlParam("@pageNo", _pageNo);
            exec.WithSqlParam("@sortColumn", columnName);
            exec.WithSqlParam("@desc", desc.ToLower() == "true");

            // 09/22/2019 09:18 am - SSN - [20190922-0822] - [005] - Plug in job status filter on job's index - update data source

            exec.WithSqlParam("@job_statuses_selected", job_statuses_selected);


            IEnumerable<Job> result1_data = exec.GetResultSet<Job>();
            IList<SqlStatsRecord> result2_Stats = exec.GetResultSet<SqlStatsRecord>();

            SqlStatsRecord sqlStatsRecord = null;

            if (result2_Stats.Count == 0)
            {
                logger.PostException(new Exception { Source = "JobAPIController" }, "20190918-0057", "Procedure did not return a second result set of table/page stats.");
                sqlStatsRecord = new SqlStatsRecord { };
            }
            else
            {
                sqlStatsRecord = result2_Stats[0];
            }
            exec.CloseConnection();


            DataBag<Job> databag = new DataBag<Job> { dataList = result1_data, sqlStatsRecord = sqlStatsRecord };

            return databag;
        }



    }
}
