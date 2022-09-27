using DevSitesIndex.Entities;
using DevSitesIndex.Models;
using DevSitesIndex.Util;
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
        //09/24/2022 12:40 pm - SSN - Replace searchText with searchObj
        // Task<IEnumerable<DevSite>> GetDevSites(string searchText);
        Task<IEnumerable<DevSite>> GetDevSites_v01(SearchObj searchObj);
        Task<DataBag<DevSite>> GetDevSites_v02(SearchObj searchObj);


        // 06/13/2021 10:25 am - SSN - [20210613-0452] - [017] - Adding tags to DevSite
        int GetDevSitesCount();


        Task<DevSite> UpdateDevSiteAsync(DevSite devSite);

        DevSite GetDevSite(int DevSiteID);

        // 09/30/2019 09:05 am - SSN - bool to Exception
        Exception Save();
        void Dispose();
    }
}
