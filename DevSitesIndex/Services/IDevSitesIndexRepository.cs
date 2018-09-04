using DevSitesIndex.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

// 07/29/2018 03:42 pm - SSN - Copied in

namespace DevSitesIndex.Services
{
    public interface IDevSitesIndexRepository
    {

        IEnumerable<DevSite> GetDevSites();
        DevSite UpdateDevSite(DevSite devSite);

        DevSite GetDevSite(int DevSiteID);

        bool Save();
        void Dispose();
    }
}
