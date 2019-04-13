﻿using System;
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
 

        public IEnumerable<DevSite> GetDevSites()
        {
            // 11/03/2018 08:05 am - SSN - order
            // return _context.DevSites.ToList();
            return _context.DevSites.OrderByDescending(r => r.DateUpdated ?? r.DateAdded).ToList();
        }


        public DevSite GetDevSite(int devSiteID)
        {
            var devSite = _context.DevSites.Where(c => c.Id == devSiteID);

            return devSite.FirstOrDefault();
        }

        public DevSite UpdateDevSite(DevSite devSite)
        {
            Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry<DevSite> r = null;
            try
            {
                if (devSite.Id == 0)
                {
                    r = _context.DevSites.Add(devSite);
                }
                else
                {
                    r = _context.DevSites.Update(devSite);
                }

            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }

            return devSite;
        }


        public bool Save()
        {
            try
            {
                return _context.SaveChanges() > 0;
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                return false;
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