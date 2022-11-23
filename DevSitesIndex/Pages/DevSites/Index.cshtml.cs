using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Authorization;
using DevSitesIndex.Models;
using Microsoft.AspNetCore.Html;
using SSN_GenUtil_StandardLib;
using DevSitesIndex.Util;
using System.Text;
using DevSitesIndex.Services;

namespace DevSitesIndex.Pages.DevSites
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    // 03/10/2022 08:59 pm - SSN - [20220310-1358] - [018] - Allow anonymous
    //    [Authorize]

    public class IndexModel : PageModel
    {

        // 12/31/2018 09:28 pm - SSN

        [BindProperty]
        public string SearchText { get; set; }

        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;
        private readonly ILogger_SSN logger;
        private readonly IDevSitesIndexRepository devSitesIndexRepository;


        // 12/28/2019 05:42 pm - SSN Adding ILogger_SSN logger
        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext context, ILogger_SSN logger, IDevSitesIndexRepository devSitesIndexRepository)
        {
            _context = context;
            this.logger = logger;
            this.devSitesIndexRepository = devSitesIndexRepository;
        }


        public PaginatedList<DevSite> DevSites { get; set; }
        public PageUtil pageUtil { get; set; }

        // 09/01/2019 01:12 pm - SSN - [20190901-1225] - [003] - Add Job_DevSite table - Adding sorting and paging

        // public IList<DevSite> DevSite { get; set; }


        [BindProperty]
        public string sortOrder_XXXX { get; set; }
        [BindProperty]
        public string desc_XXXX { get; set; }

        [BindProperty]
        public int? pageIndex_XXXX { get; set; }

        // 11/23/2022 03:42 pm - SSN - Adding totalRecordCount_XXXX
        [BindProperty]
        public int? totalPageCount_XXXX { get; set; }



        public async Task OnGetAsync(string columnName, string desc, int? pageIndex, string searchText)
        {

            // 10/12/2018 03:53 pm - SSN - Added OrderByDescending (r=>r.DateUpdated 
            // 06/01/2019 11:22 am - SSN - Include


            await GetData(columnName, desc, pageIndex, searchText);
        }



        // 12/31/2018 09:34 pm - SSN

        //        public async Task<IActionResult> OnPostAsync(string sortOrder, string desc, int? pageIndex)
        public async Task<IActionResult> OnPostAsync()
        {

            pageIndex_XXXX = 1;

            // 12/28/2019 05:36 pm - SSN - Adding try/catch
            try
            {

                if (string.IsNullOrEmpty(SearchText))
                {
                    await GetData(sortOrder_XXXX, desc_XXXX, pageIndex_XXXX, SearchText);
                    return Page();
                }

                // 08/12/2019 04:48 am - SSN - [20190812-0345] - [005] - Apply fulltext search
                // DevSite = await GetData();
                await GetData(sortOrder_XXXX, desc_XXXX, pageIndex_XXXX, SearchText);

            }
            catch (Exception ex)
            {
                await logger.PostException(ex, "DevSites index post error", "20191228-1740");
                ModelState.AddModelError("SearchText", "Invalid syntax (SQL Server fulltext) (002)");
            }


            return Page();
        }




        // 08/12/2019 04:37 am - SSN - [20190812-0345] - [004] - Apply fulltext search

        // 09/01/2019 01:12 pm - SSN - [20190901-1225] - [003] - Add Job_DevSite table - Adding sorting and paging
        // async Task<IList<DevSite>> GetData()
        async Task GetData(string columnName, string desc, int? pageIndex, string searchText)
        {
            int recordsPerPage = 50;
            int? totalRecordCount = null;

            try
            {

                columnName = columnName ?? "LastActivityDate";
                desc = desc ?? "true";

                SearchText = searchText;

                sortOrder_XXXX = columnName;
                desc_XXXX = desc;
                pageIndex_XXXX = pageIndex??1;



                IQueryable<DevSite> _DevSites;

                // 06/14/2021 07:04 pm - SSN - [20210613-0452] - [035] - Adding tags to DevSite (Posted note in SQL)
                // Todo
                // Can't use repository. Conflict with IEnumerable and querable PaginatedList 
                if (string.IsNullOrWhiteSpace(SearchText))
                {
                    _DevSites = _context.DevSites.Include(r => r.SoftwareCode).OrderByDescending(r => r.DateUpdated ?? r.DateAdded);
                }
                else
                {
                    // 11/23/2022 02:07 pm - SSN - Update
                    //                    _DevSites = _context.DevSites.FromSql("DemoSites.DevSites_FullTextSearch {0}", SearchText).AsNoTracking();

                    SearchObj searchObj = new SearchObj { CurrentPage = pageIndex ?? 1, RecordsPerPage = recordsPerPage, SearchText = SearchText };
                    DataBag<DevSite> searchResultData = await devSitesIndexRepository.GetDevSites_v02(searchObj);

                    if (searchResultData.hasErrors)
                    {
                        foreach (FeedbackMessage fbmessage in searchResultData.FeedbackMessages)
                        {
                            foreach (string message2 in fbmessage.ErrorMessages)
                            {
                                ModelState.AddModelError("SearchText", message2);
                            }
                        }
                    }

                    List<DevSite_Combo> devSite_combos = DevSite_Combo.devSites_input(searchResultData.dataList);
                    _DevSites = searchResultData.dataList.AsQueryable();
                    totalRecordCount = searchResultData.sqlStatsRecord.TotalRecordCount;

                    //DevSiteSearchResult_DTO dto = new DevSiteSearchResult_DTO();
                    //dto.devSite_Combo = devSite_combos;
                    //dto.SqlStatsRecord = searchResultData.sqlStatsRecord;
                    //DevSites.setTotalPageCount(searchResultData.sqlStatsRecord.TotalRecordCount, searchResultData.sqlStatsRecord.RecordsPerPage);

                }


                DevSites = await PaginatedList<DevSite>.GetSourcePage(_DevSites, columnName, desc, pageIndex, recordsPerPage, totalRecordCount);

                totalPageCount_XXXX = DevSites.TotalPages;


                SetupPageObjects();

                if (!string.IsNullOrWhiteSpace(SearchText))
                {
                    pageUtil.AddOtherHtmlInputToSave("SearchText", SearchText);
                }



                pageUtil.SetupHeaders<DevSite>("/DevSites/", columnName, desc);

                pageUtil.SetupButtons<DevSite>(DevSites, "/DevSites", columnName, desc);



                if (DevSites == null || DevSites != null && DevSites.Count == 0)
                {
                    ModelState.AddModelError("SearchText", "No match.");
                }

            }
            catch (Exception ex)
            {
                ModelState.AddModelError("SearchText", "Invalid syntax (SQL Server fulltext)");
            }




        }




        private void SetupPageObjects()
        {
            pageUtil = new PageUtil();
            pageUtil.AddColumns("SiteTitle");
            pageUtil.AddColumns("SoftwareCode.SoftwareTitle");
            pageUtil.AddColumns("DateAdded");
            pageUtil.AddColumns("LastActivityDate");


        }




    }
}
