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


        Task<DevSite> UpdateDevSiteAsync(DevSite devSite);

        DevSite GetDevSite(int DevSiteID);

        // 09/30/2019 09:05 am - SSN - bool to Exception
        Exception Save();
        void Dispose();
    }
}
