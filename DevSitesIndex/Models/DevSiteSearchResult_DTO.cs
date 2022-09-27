
// 09/27/2022 02:40 pm - SSN - Adding paging option to search.
using DevSitesIndex.Models;
using DevSitesIndex.Util;
using System.Collections.Generic;

public class DevSiteSearchResult_DTO
{
    public IEnumerable<DevSite_Combo> devSite_Combo { get; set; }
    public SqlStatsRecord SqlStatsRecord { get; set; }
}

