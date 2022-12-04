using DevSitesIndex.Controllers;
using DevSitesIndex.Entities;
using DevSitesIndex.Models;
using DevSitesIndex.Services;
using DevSitesIndex.Util;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;


namespace DevSitesIndex.Pages.Projects
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    // 03/10/2022 08:35 pm - SSN - [20220310-1358] - [015] - Allow anonymous
    // [Authorize]
    public class IndexModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;
        private readonly ILogger_SSN logger;

        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext context, ILogger_SSN logger)
        {
            _context = context;
            this.logger = logger;
        }


        const int RECORDS_PER_PAGE = 25;


        // 08/26/2019 11:08 am - SSN - [20190826-1108] - [001] - Add paging and sort
        // https://docs.microsoft.com/en-us/aspnet/core/data/ef-rp/sort-filter-page?view=aspnetcore-2.2



        // 09/27/2019 07:14 am - SSN - [20190927-0634] - [002] - Testing
        // Seperate objects for main index (Projects) and searchResults

        public PaginatedList<Project> Projects { get; set; }
        public PageUtil pageUtil_Projects { get; set; }



        public PaginatedList<Project_Search_Record> searchResults { get; set; }
        public PageUtil pageUtil_SearchResults { get; set; }



        // 09/26/2019 12:45 pm - SSN - [20190926-1242] - [001] - Search projects
        public string searchText { get; set; }


        // 11/08/2019 10:59 am - SSN - [20191108-1043] - [004] - Persisting search on return to index
        public string returnToCallerKey { get; set; }


        // 09/26/2019 02:15 pm - SSN - [20190926-1242] - [005] - Search projects
        public List<SearchTableRecord> searchTables { get; set; }


        // 09/26/2019 06:06 pm - SSN - [20190926-1242] - [015] - Search projects
        // public List<Project_Search_Record> searchResults { get; set; }



        // 09/27/2019 10:45 am - SSN - [20190927-0634] - [015] - Testing
        // Added searchText_Param
        //  List<SearchTableRecord> searchTable are picked up from checkboxes list.  selectedTablesIDs picked up from sorting and paging links.
        public async Task OnGetAsync(string columnName, List<SearchTableRecord> searchTables, string desc, int? pageIndex, string searchText_Param, string selectedTablesIDs)
        {
            HttpRequest request = Request;
            searchTablesOptions_Fill(selectedTablesIDs);

            if (!string.IsNullOrEmpty(searchText_Param))
            {
                searchText = searchText_Param;

                await searchResults_Fill(searchText, searchTables, columnName, desc, pageIndex, selectedTablesIDs);

            }
            else
            {

                // 04/19/2019 11:58 am - SSN - Add sort
                // 04/20/2019 11:14 am - SSN - [20190420-1109] - Add AsNoTracking to index pages

                await defaultProjects_Fill(columnName, desc, pageIndex);
            }

            // 11/08/2019 10:43 am - SSN - [20191108-1043] - [001] - Persisting search on return to index
            setReturnToCallerRecord(searchText, searchTables, columnName, desc, pageIndex);


        }


        // selectedTablesIDs not needed here. Initial search request. Same for  pageIndex

        public async Task OnPostAsync(string searchText, List<SearchTableRecord> searchTables, string columnName, string desc)
        {
            searchTablesOptions_Fill(null);
            try
            {
                await searchResults_Fill(searchText, searchTables, columnName, desc, null, null);

                // 11/08/2019 10:43 am - SSN - [20191108-1043] - [001] - Persisting search on return to index
                setReturnToCallerRecord(searchText, searchTables, columnName, desc, 0);

            }
            catch (Exception ex)
            {
                // 11/11/2019 08:11 am - SSN - Update user's message
                ModelState.AddModelError("searchText", "Invalid search request. Use SQL Server Fulltext syntax.");
                // 11/26/2022 03:08 pm - SSN - Add ex message
                ModelState.AddModelError("searchText", ex.Message);
                await logger.PostException(ex, "DemoSite-20191022-0644", $"Failed search call. Text [{searchText}]");
            }

        }


        // 11/08/2019 10:43 am - SSN - [20191108-1043] - [001] - Persisting search on return to index
        private void setReturnToCallerRecord(string searchText, List<SearchTableRecord> searchTables, string columnName, string desc, int? pageIndex)
        {

            returnToCallerKey = Guid.NewGuid().ToString();
            ReturnToCaller.QueryStringParts queryStringParts = ReturnToCaller.CreateQueryStringParts();
            queryStringParts.add("searchText_Param", searchText);
            queryStringParts.add("selectedTablesIDs", SearchTableRecord.toQueryStringVariable(searchTables));
            queryStringParts.add("columnName", columnName);
            queryStringParts.add("desc", desc);
            queryStringParts.add("pageIndex", (pageIndex ?? 0).ToString());

            ReturnToCaller.postReturnToCallerRecord(returnToCallerKey, Request, queryStringParts);
        }

        async Task defaultProjects_Fill(string columnName, string desc, int? pageIndex)
        {
            columnName = columnName ?? "DateAdded";
            desc = desc ?? "true";

            pageUtil_Projects = new PageUtil();
            pageUtil_Projects.AddColumns("ProjectTitle");
            pageUtil_Projects.AddColumns("Company");
            pageUtil_Projects.AddColumns("DateAdded");
            pageUtil_Projects.AddColumns("DateModified");
            pageUtil_Projects.AddColumns("ProjectTotalHours");

            pageUtil_Projects.SetupHeaders<Project>("/projects/", columnName, desc);



            IQueryable<Project> _Project = _context.Projects.Include(r => r.company);

            Projects = await PaginatedList<Project>.GetSourcePage(_Project, columnName, desc, pageIndex, RECORDS_PER_PAGE);

            pageUtil_Projects.SetupButtons<Project>(Projects, "/projects", columnName, desc);


        }


        // List<SearchTableRecord> searchTables being picked up from form
        async Task searchResults_Fill(string searchText, List<SearchTableRecord> searchTables, string columnName, string desc, int? pageIndex, string selectedTablesIDs)
        {

            if (string.IsNullOrWhiteSpace(selectedTablesIDs) && searchTables != null && searchTables.Count > 0)
            {
                selectedTablesIDs = searchTables.Where(r => r.IsSelected).Select(r => r.Id).Aggregate("", (prev, next) => prev + (prev != "" ? "," : "") + next, final => final);
            }


            ProjectRepository projectRepository = new ProjectRepository(_context, logger);

            if (!pageIndex.HasValue) pageIndex = 1;

            int _pageIndex = pageIndex.HasValue ? pageIndex.Value : 1;

            DataBag<Project_Search_Record> databag = await projectRepository.getSerachResults(searchText, selectedTablesIDs, RECORDS_PER_PAGE, _pageIndex, "LastActivity", "false");

            databag.copyFromBagModelError(ModelState);

            if (databag.dataList != null)

            {
                columnName = columnName ?? "LastActivity";
                desc = desc ?? "true";


                pageUtil_SearchResults = new PageUtil();
                pageUtil_SearchResults.AddColumns("SourceTable");
                pageUtil_SearchResults.AddColumns("LastActivity");

                // 03/20/2022 06:16 pm - SSN - [20220320-1726] - [008] - 03 - Update jobs related objects to show total hours
                pageUtil_SearchResults.AddColumns("EntryTotalHours");

                pageUtil_SearchResults.AddColumns("Description");


                // 09/27/2019 10:40 am - SSN - [20190927-0634] - [014] - Testing
                // Added AddOtherHtmlInputToSave
                if (!string.IsNullOrWhiteSpace(searchText))
                {
                    pageUtil_SearchResults.AddOtherHtmlInputToSave("searchText_Param", searchText);
                    pageUtil_SearchResults.AddOtherHtmlInputToSave("selectedTablesIDs", selectedTablesIDs);
                }

                pageUtil_SearchResults.SetupHeaders<Project>("/projects/", columnName, desc);

                IQueryable<Project_Search_Record> _searchResults = databag.dataList.AsQueryable();

                searchResults = await PaginatedList<Project_Search_Record>.GetSourcePage(_searchResults, columnName, desc, pageIndex, RECORDS_PER_PAGE);

                pageUtil_SearchResults.SetupButtons<Project_Search_Record>(searchResults, "/projects", columnName, desc);


            }

        }



        void searchTablesOptions_Fill(string selectedTablesIDs)
        {

            if (string.IsNullOrWhiteSpace(selectedTablesIDs)) selectedTablesIDs = "1"; // Default to projects

            // 09/26/2019 02:16 pm - SSN - [20190926-1242] - [006] - Search projects
            searchTables = new List<SearchTableRecord>
                    {
                        new SearchTableRecord( 1,  "Projects",selectedTablesIDs.Contains("1")),
                        new SearchTableRecord( 2,  "Jobs",selectedTablesIDs.Contains("2")),
                        new SearchTableRecord( 3,  "Timelog",selectedTablesIDs.Contains("3"))
                    };

        }

    }



    public class SearchTableRecord
    {
        public int Id { get; set; }
        public string TableName { get; set; }
        public bool IsSelected { get; set; }

        public SearchTableRecord() { }

        public SearchTableRecord(int id, string tableName, bool isSelected = false)
        {
            this.Id = id;
            this.TableName = tableName;
            this.IsSelected = isSelected;
        }

        public static string toQueryStringVariable(IList<SearchTableRecord> list)
        {
            string returnValue = "";
            foreach (SearchTableRecord r in list)
            {
                if (r.IsSelected) returnValue += r.Id;
            }

            return returnValue;

        }
    }

}
