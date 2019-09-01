using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using DevSitesIndex.Entities;
using System.Diagnostics;
using Microsoft.AspNetCore.Authorization;
using DevSitesIndex.Models;
using Microsoft.ApplicationInsights;
using System.Text;
using System.Linq.Expressions;

namespace DevSitesIndex.Pages.Jobs
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class IndexModel : PageModel
    {
        private readonly DevSitesIndex.Entities.DevSitesIndexContext _context;

        public IndexModel(DevSitesIndex.Entities.DevSitesIndexContext context)
        {
            _context = context;
        }

        // 08/29/2019 12:54 pm - SSN - [20190829-1253] - [002] - Adding paging and sorting to jobs index
        //public IList<Job> Job { get; set; }
        public PaginatedList<Job> Job { get; set; }
        public HeaderWithSortLinks headerWithSortLinks { get; set; }
        public TablePager tablePager { get; set; }



        // 08/29/2019 12:57 pm - SSN - [20190829-1253] - [003] - Adding paging and sorting to jobs index

        public async Task OnGetAsync(string sortOrder, string desc, int? pageIndex)
        {
           

            headerWithSortLinks = new HeaderWithSortLinks();
            headerWithSortLinks.TestMessageForDebugging = "This is a call from project index page";
            headerWithSortLinks.AddColumns("ProjectTitle_ForActivity");
            headerWithSortLinks.AddColumns("JobTitle");
            headerWithSortLinks.AddColumns("DateAdded");
            headerWithSortLinks.AddColumns("LastActivityDate");
            headerWithSortLinks.AddColumns("ActivityAge");


            sortOrder = sortOrder ?? "ActivityAge";
            desc = desc ?? "true";


            headerWithSortLinks.SetupHeaders<Job>("/jobs/", sortOrder, desc);

            tablePager = new TablePager();

            TelemetryClient telemetry = new TelemetryClient();
            telemetry.TrackPageView("DemoSite-20190829-1257: Jobs Index");



            // 08/29/2019 01:00 pm - SSN - [20190829-1253] - [004] - Adding paging and sorting to jobs index

            //// 04/20/2019 11:15 am - SSN - [20190420-1109] - Add AsNoTracking to index pages


            IQueryable<Job> _Jobs = _context.Job.FromSql("exec DemoSites.Jobs_Index_WithLastActivityDate");
            
            
            var results = TempTest.OrderByPropertyOrField<Job, Project>(_Jobs, sortOrder.Split('.').ToArray(), desc.ToLower() == "true");
            

            // Job = await PaginatedList<Job>.GetSourcePage(_Jobs, sortOrder, desc, pageIndex, 50);
            Job = await PaginatedList<Job>.CreateAsync(results, pageIndex ?? 1, 6);

            



            tablePager.SetupButtons<Job>(Job, "/jobs", sortOrder, desc);




        }
    }

    public static class TempTest
    {

        public static IQueryable<T> OrderByPropertyOrField<T, Y>(this IQueryable<T> queryable, string[] propertyOrFieldName, bool ascending = true)
        {
            var elementType = typeof(T);
            var orderByMethodName = ascending ? "OrderBy" : "OrderByDescending";

            var parameterExpression = Expression.Parameter(elementType);

            var propertyOrFieldExpression = Expression.Property(parameterExpression, propertyOrFieldName[0]);
            for (int x = 1; x < propertyOrFieldName.Length; x++)
                propertyOrFieldExpression = Expression.Property(propertyOrFieldExpression, propertyOrFieldName[x]);


            var selector = Expression.Lambda(propertyOrFieldExpression, parameterExpression);


            //var pe = Expression.Parameter(typeof(object1));
            //var property1 = typeof(object1).GetProperty(Name1);
            //var property2 = property1.PropertyType.GetProperty(Name2);
            //var inner = Expression.Property(pe, property1);
            //var outer = Expression.Property(inner, property2);




            var orderByExpression = Expression.Call(typeof(Queryable), orderByMethodName,
                                                    new[] { elementType, propertyOrFieldExpression.Type }, queryable.Expression, selector);

            return queryable.Provider.CreateQuery<T>(orderByExpression);
        }
    }

}
