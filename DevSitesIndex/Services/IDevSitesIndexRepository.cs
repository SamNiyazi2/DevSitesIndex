using DevSitesIndex.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 07/29/2018 03:42 pm - SSN - Copied in

namespace DevSitesIndex.Services
{
    public interface IDevSitesIndexRepository
    {

        IEnumerable<DevSite> GetDevSites();

        // 08/12/2019 08:36 pm - SSN - [20190812-2024] - [002] - DevSites FullText search
        Task<IEnumerable<DevSite>> GetDevSites(string searchText);


        DevSite UpdateDevSite(DevSite devSite);

        DevSite GetDevSite(int DevSiteID);

        bool Save();
        void Dispose();
    }
}
