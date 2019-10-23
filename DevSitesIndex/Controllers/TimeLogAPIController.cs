using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using DevSitesIndex.Util;
using Microsoft.AspNetCore.Mvc;

// 04/12/2019 02:24 pm - SSN - [20190412-1126] - Timelog - save data



// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    public class TimeLogAPIController : EntityAPIController<TimeLog>
    {

        // 09/26/2019 11:02 am - SSN - [20190926-1047] - [005] - Debugging: timelog not posting
        // Add logger

        // 09/30/2019 07:47 pm - SSN - Adding logger and call to base
        public TimeLogAPIController(DevSitesIndexContext context, ILogger_SSN logger) : base(context, logger)
        {
            _entityRepository = new TimeLogRepository(context, logger);
        }


      


        // 10/21/2019 08:15 am - SSN - [20191021-0444] - [009] - M12 - Creating directives and advanced components in Angular.
        // Partial copy of JobApiController



        [Route("search")]
        public async Task<DataBag<TimeLog>> search([FromBody] SqlStatsRecord sqlStatsRecord)
        {

            // if (options == null) options = new Tempparam();
            if (sqlStatsRecord == null) sqlStatsRecord = new SqlStatsRecord();
            sqlStatsRecord.RecordsPerPage_Default = 3;

            Util.ExecuteStoredProcedure exec = new Util.ExecuteStoredProcedure(context, logger);

            exec.LoadStoredProc("demosites.Timelogs_Search");


            exec.WithSqlParam("@searchTerm", sqlStatsRecord.searchTerm);
            exec.WithSqlParam("@recordsPerPage", sqlStatsRecord.RecordsPerPage);
            exec.WithSqlParam("@pageNo", sqlStatsRecord.CurrentPageNo);
            exec.WithSqlParam("@sortColumn", sqlStatsRecord.columnName);
            exec.WithSqlParam("@desc", sqlStatsRecord.desc);


            IEnumerable<Timelog_Search_Record> result1_data = await exec.GetResultSet_v02<Timelog_Search_Record>();
            IList<SqlStatsRecord> result2_Stats = await exec.GetResultSet_v02<SqlStatsRecord>();
             

            if (result2_Stats.Count() == 0)
            {
                await logger.PostException(new Exception { Source = "TimelogAPIController" }, "20191021-0818", "Procedure did not return a second result set of table/page stats.");
            }
            else
            {
                sqlStatsRecord = result2_Stats.FirstOrDefault();
            }

            exec.CloseConnection();

            IQueryable<TimeLog> finalResult = _entityRepository.GetAll().Where(r => result1_data.Any(r2 => r2.TimelogId == r.TimeLogId));

            DataBag<TimeLog> databag = new DataBag<TimeLog> { dataList = finalResult, sqlStatsRecord = sqlStatsRecord };

            return databag;
        }













        // 09/24/2019 05:10 am - SSN - [20190924-0401] - [003] - Quick timelog entry

        [HttpGet("get_custom/{id}")]
        public TimeLog Get_custom(int id)
        {
            JobRepository jobRepository = new JobRepository(context);
            TimeLog entity = _entityRepository.GetRecord(id);
            entity.job.timelogs = null;

            return entity;
        }

    }


    // 10/21/2019 08:15 am - SSN - [20191021-0444] - [009] - M12 - Creating directives and advanced components in Angular.
    public class Timelog_Search_Record
    {

        public string ProjectTitle { get; set; }
        public string JobTitle { get; set; }
        public string DisciplineShort { get; set; }
        public int ProjectID { get; set; }
        public int JobId { get; set; }
        public int TimelogId { get; set; }
        public DateTime StartTime { get; set; }
        public int TotalSeconds { get; set; }

    }


}
