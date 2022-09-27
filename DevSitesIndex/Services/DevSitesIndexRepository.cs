using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Models;
using DevSitesIndex.Util;
using Microsoft.EntityFrameworkCore;
using SSN_GenUtil_StandardLib;

// 07/29/2018 03:45 pm - SSN - Copied

namespace DevSitesIndex.Services
{
    public class DevSitesIndexRepository : IDevSitesIndexRepository
    {
        private readonly DevSitesIndexContext _context;
        private readonly ILogger_SSN logger;

        // 09/27/2022 01:44 pm - SSN - Add logger
        public DevSitesIndexRepository(DevSitesIndexContext context, ILogger_SSN logger)
        {
            this._context = context;
            this.logger = logger;
        }


        public IEnumerable<DevSite> GetDevSites(int recordsPerPage, int currentPage)
        {
            // 06/13/2021 07:57 am - SSN - [20210613-0452] - [008] - Adding tags to DevSite
            int recordsToSkip = recordsPerPage * (currentPage - 1);
            // 11/03/2018 08:05 am - SSN - order
            // return _context.DevSites.ToList();
            // 04/20/2019 11:13 am - SSN - [20190420-1109] - Add AsNoTracking to index pages

            // 09/10/2019 02:28 am - SSN - 
            // IEnumerable<DevSite> devSites = _context.DevSites.OrderByDescending(r => r.DateUpdated ?? r.DateAdded).AsNoTracking().ToList();
            IEnumerable<DevSite> devSites = _context
                .DevSites

                .Include(r => r.DevSiteTechnologies).ThenInclude(r2 => r2.Technology)

              // 06/14/2021 07:00 pm - SSN - [20210613-0452] - [034] - Adding tags to DevSite
              // .OrderByDescending(r => r.LastActivityDate).Skip(recordsToSkip).Take(recordsPerPage).AsNoTracking().ToList();
              .OrderByDescending(r => r.LastActivityDate).Skip(recordsToSkip).Take(recordsPerPage).AsNoTracking();

            return devSites;
        }


        // 08/12/2019 08:25 pm - SSN - [20190812-2024] - [001] - DevSites FullText search
        // 09/27/2022 12:36 pm - SSN - Replcae searchText with searchObj
        // public async Task<IEnumerable<DevSite>> GetDevSites(string searchText)
        public async Task<IEnumerable<DevSite>> GetDevSites_v01(SearchObj searchObj)
        {
            var searchText = searchObj?.SearchText ?? "";

            // 06/14/2021 04:17 pm - SSN - [20210613-0452] - [029] - Adding tags to DevSite
            // var devSites = await _context.DevSites.FromSql("DemoSites.DevSites_FullTextSearch {0}", searchText).AsNoTracking().ToListAsync<DevSite>();

            // List<int> listDevSites2 = _context.DevSites.FromSql("DemoSites.DevSites_FullTextSearch {0}", searchText).Select(r => r.Id).ToList();
            var devSites_a = await _context.DevSites.FromSql("DemoSites.DevSites_FullTextSearch {0}, {1}, {2}", searchText, searchObj.RecordsPerPage, searchObj.CurrentPage).AsNoTracking().ToListAsync<DevSite>();

            List<int> listDevSites2 = devSites_a.Select(r => r.Id).ToList();

            var devSites = _context.DevSites.Join(listDevSites2, r1 => r1.Id, r2 => r2, (target, source) => target)
                            .Include(r => r.DevSiteTechnologies).ThenInclude(r2 => r2.Technology)
                            .OrderByDescending(r => r.LastActivityDate).AsNoTracking().ToList();

            return devSites;
        }


        // 09/27/2022 01:41 pm - SSN - Adding paging to search option
        public async Task<DataBag<DevSite>> GetDevSites_v02(SearchObj searchObj)
        {

            DataBag<DevSite> databag = new DataBag<DevSite>();

            try
            {


                SqlStatsRecord SqlStatsRecord_temp = new SqlStatsRecord();

                SqlStatsRecord_temp.RecordsPerPage_Default = searchObj.RecordsPerPage;
                SqlStatsRecord_temp.CurrentPageNo = searchObj.CurrentPage;


                Util.ExecuteStoredProcedure exec = new Util.ExecuteStoredProcedure(_context, logger);

                exec.LoadStoredProc("demosites.DevSites_FullTextSearch");

                exec.WithSqlParam("@searchTerm", searchObj.SearchText);
                exec.WithSqlParam("@recordsPerPage", SqlStatsRecord_temp.RecordsPerPage);
                exec.WithSqlParam("@currentPage", SqlStatsRecord_temp.CurrentPageNo);


                var result1_data = await exec.GetResultSet_v02<DevSite>();
                IList<SqlStatsRecord> result2_Stats = await exec.GetResultSet_v02<SqlStatsRecord>();

                List<int> listDevSites2 = result1_data.Select(r => r.Id).ToList();


                var devSites = _context.DevSites.Join(listDevSites2, r1 => r1.Id, r2 => r2, (target, source) => target)
                                .Include(r => r.DevSiteTechnologies).ThenInclude(r2 => r2.Technology)
                                .OrderByDescending(r => r.LastActivityDate);



                SqlStatsRecord sqlStatsRecord = null;

                if (result2_Stats.Count() == 0)
                {
                    await logger.PostException(new Exception { Source = "DevSitesIndexRepository" }, "20220927-1348", "Procedure did not return a second result set of table/page stats.");
                    sqlStatsRecord = new SqlStatsRecord();
                }
                else
                {
                    sqlStatsRecord = result2_Stats.FirstOrDefault();
                }

                exec.CloseConnection();

                databag = new DataBag<DevSite> { dataList = devSites.ToList(), sqlStatsRecord = sqlStatsRecord };
            }
            catch (Exception ex)
            {

                databag.addToBagModelError("", ExceptionHandling_MessageToUser.getBasicMessage_asHtml("20191127-1641", ex));

                await logger.PostException(ex, "20191127-1640", "Failed call to get jobs.");

            }

            return databag;
        }

        // 06/13/2021 10:25 am - SSN - [20210613-0452] - [017] - Adding tags to DevSite
        public int GetDevSitesCount()
        {
            return _context.DevSites.Count();
        }

        public DevSite GetDevSite(int devSiteID)
        {
            var devSite = _context.DevSites.Where(c => c.Id == devSiteID);

            return devSite.FirstOrDefault();
        }

        // 09/06/2019 06:50 pm - SSN - [20190906-0518] - [008] - Angular - edit div content - Revised to handle async and use with edit.cshtml



        public async Task<DevSite> UpdateDevSiteAsync(DevSite devSite)
        {
            Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<DevSite> r = null;
            try
            {
                if (devSite.Id == 0)
                {
                    r = await _context.DevSites.AddAsync(devSite);
                }
                else
                {
                    // 09/06/2019 05:29 pm - SSN - [20190906-0518] - [004] - Angular - edit div content
                    devSite.DateUpdated = DateTime.Now;
                    _context.Attach(devSite).State = EntityState.Modified;
                    _context.Entry(devSite).Property(x => x.DateAdded).IsModified = false;


                    ////////////////////////////////      r = _context.DevSites.Update(devSite);
                }

            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }

            return devSite;
        }


        // 09/30/2019 09:06 am - SSN - bool to Exception
        public Exception Save()
        {
            try
            {
                if (_context.SaveChanges() > 0)
                    return default(Exception);

                return new Exception("20190930-0906 - Failed to save record.");
            }
            catch (Exception ex)
            {
                //string message = ex.Message;
                //return false;
                return ex;
            }
        }

        public void Dispose()
        {
            if (_context != null)
            {
                _context.Dispose();
            }
        }

    }
}