﻿using AutoMapper;
using DevSitesIndex.Entities;
using DevSitesIndex.Models;
using DevSitesIndex.Pages;
using DevSitesIndex.Pages.Shared;
using DevSitesIndex.Services;
using DevSitesIndex.Util; 
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 04/12/2019 02:24 pm - SSN - [20190412-1126] - Timelog - save data


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevSitesIndex.Controllers
{

    [Route("api/[controller]")]
    // [Authorize]
    public class TimeLogAPIController : EntityAPIController<TimeLog>
    {
        private readonly IMapper mapper;

        // 09/26/2019 11:02 am - SSN - [20190926-1047] - [005] - Debugging: timelog not posting
        // Add logger

        // 03/28/2022 03:34 am - SSN - [20220328-0334] - [001] - Add AutoMapper

        // 09/30/2019 07:47 pm - SSN - Adding logger and call to base
        public TimeLogAPIController(DevSitesIndexContext context, ILogger_SSN logger, IValidationSharedUtil validationSharedUtil, IMapper _mapper) : base(context, logger)
        {
            _entityRepository = new TimeLogRepository(context, logger, validationSharedUtil);
            mapper = _mapper;
        }



        // 10/21/2019 08:15 am - SSN - [20191021-0444] - [009] - M12 - Creating directives and advanced components in Angular.
        // Partial copy of JobApiController


        [Route("search")]
        public async Task<DataBag<TimeLog>> search([FromBody] SqlStatsRecord sqlStatsRecord)
        {

            // if (options == null) options = new Tempparam();
            if (sqlStatsRecord == null)
                sqlStatsRecord = new SqlStatsRecord();
            sqlStatsRecord.RecordsPerPage_Default = 20;

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

            // 03/28/2022 03:21 am - [20220328-0334] - [003] - Add AutoMapper

            // IQueryable<TimeLog> finalResult = _entityRepository.GetAll().Where(r => result1_data.Any(r2 => r2.TimelogId == r.TimeLogId));
            
            // IQueryable<TimeLog> finalResult = _entityRepository.GetAll().Join(result1_data, timelog => timelog.TimeLogId, selectedRecord => selectedRecord.TimelogId, (timelog, selectedRecord) => timelog);

           // IList<TimeLog> result2_data = mapper.Map<IList<TimeLog>>(result1_data);

            IList<int> keysSelected = result1_data.Select(r => r.TimelogId).ToArray();

            IList<TimeLog> finalResult = _entityRepository.GetAll().Where(r => keysSelected.Contains(r.TimeLogId)).ToList();
                 
            
            DataBag<TimeLog> databag = new DataBag<TimeLog> { dataList = finalResult, sqlStatsRecord = sqlStatsRecord };

            return databag;
        }



        // 10/28/2019 09:11 am - SSN - [20191028-0909] - [002] - Timesheet dashboard - Summary by discipline
        [HttpGet("summaryByDiscipline")]
        public async Task<List<SummaryByDiscipline>> summaryByDiscipline()
        {

            Util.ExecuteStoredProcedure exec = new Util.ExecuteStoredProcedure(context, logger);

            exec.LoadStoredProc("demosites.TimeLog_ByDiscipline");

            IEnumerable<SummaryByDiscipline> results = await exec.GetResultSet_v02<SummaryByDiscipline>();

            exec.CloseConnection();

            return results.ToList();
        }

        public class SummaryByDiscipline
        {
            public DateTime FirstDate { get; set; }
            public string DisciplineShort { get; set; }
            public decimal TotalHours { get; set; }
        }






        // 10/29/2019 05:25 am - SSN - [20191029-0124] - [010] - Timesheet dashboard - Summary by project

        [HttpGet("summaryByProject")]
        public async Task<List<SummaryByProject>> summaryByProject()
        {

            Util.ExecuteStoredProcedure exec = new Util.ExecuteStoredProcedure(context, logger);

            exec.LoadStoredProc("demosites.TimeLog_ByProject");

            IEnumerable<SummaryByProject> results = await exec.GetResultSet_v02<SummaryByProject>();

            exec.CloseConnection();

            return results.ToList();
        }

        public class SummaryByProject
        {
            public DateTime FirstDate { get; set; }
            public string ProjectTitle { get; set; }
            public decimal TotalHours { get; set; }
        }






        [HttpGet("SummaryByDailyWorkHours")]
        public async Task<List<SummaryByDailyWorkHour>> SummaryByDailyWorkHours()
        {

            Util.ExecuteStoredProcedure exec = new Util.ExecuteStoredProcedure(context, logger);

            exec.LoadStoredProc("demosites.timelog_SummaryByDailyWorkHours");

            IEnumerable<SummaryByDailyWorkHour> results = await exec.GetResultSet_v02<SummaryByDailyWorkHour>();

            exec.CloseConnection();

            return results.ToList();
        }

        public class SummaryByDailyWorkHour
        {

            public Int64 SeqNo { get; set; }
            public string Discipline { get; set; }
            public DateTime WorkDate { get; set; }
            public decimal? TotalHours { get; set; }
        }









        // 10/30/2019 02:59 pm - SSN - [20191030-1054] - [005] - Timesheet dashboard - Weekly work hours summary

        [HttpGet("SummaryByWeekAndDiscipline")]
        public async Task<List<SummaryByWeekAndDiscipline>> summaryByWeekAndDiscipline()
        {

            Util.ExecuteStoredProcedure exec = new Util.ExecuteStoredProcedure(context, logger);

            exec.LoadStoredProc("demosites.Timelog_SummaryByWeekAndDiscipline");

            IEnumerable<SummaryByWeekAndDiscipline> results = await exec.GetResultSet_v02<SummaryByWeekAndDiscipline>();

            exec.CloseConnection();

            if (results != null)
                return results.ToList();

            return null;

        }

        public class SummaryByWeekAndDiscipline
        {
            public Int64 SeqNo { get; set; }
            public string WeekEnding { get; set; }
            public int nYear { get; set; }
            public int wk { get; set; } // Week number
            public int RowNo { get; set; }
            public int DisciplineID { get; set; }
            public string DisciplineShort { get; set; }
            public decimal? TotalHours { get; set; }
        }













        // 09/24/2019 05:10 am - SSN - [20190924-0401] - [003] - Quick timelog entry
        // 06/08/2021 11:14 pm - SSN - [20210608-2247] - [007] - Test line item -  Prep for deployment
        // [HttpGet("get_custom/{id}")]
        [HttpGet("getTimelog/{id}")]
        public TimeLog GetTimelog(int id)
        {
            JobRepository jobRepository = new JobRepository(context);
            TimeLog entity = _entityRepository.GetRecord(id);

            if (entity != null && entity.job != null)
            {
                entity.job.timelogs = null;
            }

            return entity;
        }



        // 11/19/2019 12:48 am - SSN - [20191119-0048] Created    

        [HttpGet("RefreshRecord/{id}")]
        public Timelog_index_record RefreshRecord(int id, ServingPage servingPage)
        {
            TimeLog timelog = _entityRepository.GetRecord(id);

            Timelog_index_record r = new Timelog_index_record { timelog = timelog, servingPage = servingPage };

            try
            {
                var view = View("Timelog_index_record", r);
                r.html = view.ToHtml(HttpContext);


            }
            catch (Exception ex)
            {
                r.html = ExceptionHandling_MessageToUser.getBasicMessage_asHtml("20191119-0233", ex);
                logger.PostException(ex, "20191119-0234", "Failed call to return view for Timelog index record refresh.");
            }

            return r;
        }
          
    }

     

}
