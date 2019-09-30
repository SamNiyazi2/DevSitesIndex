using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

// 08/26/2019 11:50 am - SSN - [20190826-1108] - [002] - Add paging and sort

// https://docs.microsoft.com/en-us/aspnet/core/data/ef-rp/sort-filter-page?view=aspnetcore-2.2

using Microsoft.EntityFrameworkCore;

namespace DevSitesIndex.Models
{
    public class PaginatedList<T> : List<T>
    {

        public int PageIndex { get; private set; }
        public int TotalPages { get; private set; }

        public PaginatedList(List<T> items, int count, int pageIndex, int pageSize)
        {

            PageIndex = pageIndex;
            TotalPages = (int)Math.Ceiling(count / (double)pageSize);

            this.AddRange(items);
        }

        public bool HasPreviousPage
        {
            get
            {
                return (PageIndex > 1);
            }
        }

        public bool HasNextPage
        {
            get
            {
                return (PageIndex < TotalPages);
            }
        }

        public static async Task<PaginatedList<T>> CreateAsync(IQueryable<T> source, int pageIndex, int pageSize)
        {
            // 09/27/2019 09:19 am - SSN - [20190927-0634] - [012] - Testing
            // Does not work for List (from stored procedures)

            Type type = source.GetType();

            if (type.Name == "EntityQueryable`1")
            {

                var count = await source.CountAsync();


                var items = await source.Skip(
                    (pageIndex - 1) * pageSize)
                    .Take(pageSize).ToListAsync();
                return new PaginatedList<T>(items, count, pageIndex, pageSize);
            }
            else
            {
                // 09/27/2019 09:21 am - SSN - [20190927-0634] - [013] - Testing

                var count = source.Count();


                var items = source.Skip(
                    (pageIndex - 1) * pageSize)
                    .Take(pageSize).ToList();
                return new PaginatedList<T>(items, count, pageIndex, pageSize);

            }
        }


        // 08/28/2019 04:39 am - SSN - [20190828-0427] - [005] - Apply sorting and paging to timelogs index
        // Refactor
        public static async Task<PaginatedList<T>> GetSourcePage<T>(IQueryable<T> source, string columnName, string desc, int? pageIndex, int pageSize) where T : class
        {
            desc = desc ?? "";

            source = Util.Reflection_Util.SourceSetOrder<T>(source, columnName, desc.ToLower() == "true");

            return await PaginatedList<T>.CreateAsync(source.AsNoTracking(), pageIndex ?? 1, pageSize);
        }


    }
}