using DevSitesIndex.Controllers;
using DevSitesIndex.Entities;
using DevSitesIndex.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


// 09/26/2019 03:18 pm - SSN - [20190926-1242] - [010] - Search projects

using Microsoft.EntityFrameworkCore;

namespace DevSitesIndex.Services
{
    public class ProjectRepository : IEntityRepository_v01<Project>
    {
        private readonly DevSitesIndexContext context;
        private readonly ILogger_SSN logger;

        public ProjectRepository(DevSitesIndexContext context, ILogger_SSN logger)
        {
            this.context = context;
            this.logger = logger;
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Project> GetAll()
        {

            IList<Project> result = context.Projects
                .Include(r=>r.jobs)
                .OrderByDescending(r => r.DateModified ?? r.DateAdded).AsNoTracking().ToList();
            
            return result;
        }

        public Project GetRecord(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<DataBag<Project_Search_Record>> getSerachResults(string searchText, string selectedTablesIDs, int _recordsPerPage, int _pageNo, string columnName, string desc)

        {

            DataBag<Project_Search_Record> databag = new DataBag<Project_Search_Record>();


            if (string.IsNullOrWhiteSpace(searchText))
            {
                databag.addModelError("searchText", "You need to provide at least one word.");
            }

            if (string.IsNullOrWhiteSpace(selectedTablesIDs))
            {
                databag.addModelError("searchTables", "You need to select at least one table.");
            }

            if (databag.hasErrors) return databag;


            Util.ExecuteStoredProcedure exec = new Util.ExecuteStoredProcedure(context, logger);

            exec.LoadStoredProc("DemoSites.Project_Index_Search");


            exec.WithSqlParam("@searchterm", searchText);
            exec.WithSqlParam("@tablesIncluded", selectedTablesIDs);
            exec.WithSqlParam("@recordsPerPage", _recordsPerPage);
            exec.WithSqlParam("@pageNo", _pageNo);
            exec.WithSqlParam("@sortColumn", columnName);
            exec.WithSqlParam("@desc", desc.ToLower() == "true");


            IList<Project_Search_Record> result1_data = await exec.GetResultSet_v02<Project_Search_Record>();

            IList<SqlStatsRecord> result2_Stats = await exec.GetResultSet_v02<SqlStatsRecord>();

            SqlStatsRecord sqlStatsRecord = null;

            if (result2_Stats.Count() == 0)
            {
                await logger.PostException(new Exception { Source = "ProjcetAPIController" }, "20190926-1509", "Procedure did not return a second result set of table/page stats.");
            }
            else
            {
                sqlStatsRecord = result2_Stats.FirstOrDefault();
            }

            exec.CloseConnection();

            databag = new DataBag<Project_Search_Record> { dataList = result1_data, sqlStatsRecord = sqlStatsRecord };

            return databag;
        }

        public Exception Save()
        {
            throw new NotImplementedException();
        }

        public Project Update(Project dbSet)
        {
            throw new NotImplementedException();
        }
    }

    public class Project_Search_Record
    {
        public int TableID { get; set; }
        public string SourceTable { get; set; }
        public int ProjectID { get; set; }
        public int JobId { get; set; }
        public int TimelogId { get; set; }
        public DateTime LastActivity { get; set; }
        public string Description { get; set; }
    }



}
