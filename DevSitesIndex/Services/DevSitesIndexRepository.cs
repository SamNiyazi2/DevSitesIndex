using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;

// 07/29/2018 03:45 pm - SSN - Copied

namespace DevSitesIndex.Services
{
    public class DevSitesIndexRepository : IDevSitesIndexRepository
    {
        private readonly DevSitesIndexContext _context;

        public DevSitesIndexRepository(DevSitesIndexContext context)
        {
            this._context = context;
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
                .Include(r => r.DevSiteTechnologies)
                .OrderByDescending(r => r.LastActivityDate).Skip(recordsToSkip).Take(recordsPerPage).AsNoTracking().ToList();

            return devSites;
        }



        // 08/12/2019 08:25 pm - SSN - [20190812-2024] - [001] - DevSites FullText search
        public async Task<IEnumerable<DevSite>> GetDevSites(string searchText)
        {

            var devSites = await _context.DevSites.FromSql("DemoSites.DevSites_FullTextSearch {0}", searchText).AsNoTracking().ToListAsync<DevSite>();

            // return _context.DevSites.OrderByDescending(r => r.DateUpdated ?? r.DateAdded).AsNoTracking().ToList();
            return devSites;
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