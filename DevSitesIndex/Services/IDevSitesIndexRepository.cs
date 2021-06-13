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

        // 06/13/2021 08:00 am - SSN - [20210613-0452] - [009] - Adding tags to DevSite
        IEnumerable<DevSite> GetDevSites(int recordsPerPage, int currentPage);

        // 08/12/2019 08:36 pm - SSN - [20190812-2024] - [002] - DevSites FullText search
        Task<IEnumerable<DevSite>> GetDevSites(string searchText);


        // 06/13/2021 10:25 am - SSN - [20210613-0452] - [017] - Adding tags to DevSite
        int GetDevSitesCount();


        Task<DevSite> UpdateDevSiteAsync(DevSite devSite);

        DevSite GetDevSite(int DevSiteID);

        // 09/30/2019 09:05 am - SSN - bool to Exception
        Exception Save();
        void Dispose();
    }
}
