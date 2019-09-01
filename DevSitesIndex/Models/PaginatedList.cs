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
            var count = await source.CountAsync();


            var items = await source.Skip(
                (pageIndex - 1) * pageSize)
                .Take(pageSize).ToListAsync();
            return new PaginatedList<T>(items, count, pageIndex, pageSize);
        }


        // 08/28/2019 04:39 am - SSN - [20190828-0427] - [005] - Apply sorting and paging to timelogs index
        // Refactor
        public static async Task<PaginatedList<T>> GetSourcePage<T>(IQueryable<T> source, string sortOrder, string desc, int? pageIndex, int pageSize) where T : class
        {
            desc = desc ?? "";

            PrintList(source, sortOrder, desc, "Before");


          //  if (Util.Reflection_Util.PropertyExists<T>(sortOrder))
            {
                source = Util.Reflection_Util.SourceSetOrder<T>(source, sortOrder, desc.ToLower() == "true");
            }


            PrintList(source, sortOrder, desc, "After");

            return await PaginatedList<T>.CreateAsync(source.AsNoTracking(), pageIndex ?? 1, pageSize);
        }


        private static void PrintList<T>(IQueryable<T> source, string sortOrder, string desc, string caption) where T : class
        {


            return;
            StringBuilder sb = new StringBuilder();

            sb.AppendLine("");
            sb.AppendLine(string.Format("{0:yyyy-MM-dd HH:mm:ss}", DateTime.Now));

            sb.Append(string.Format("[{0}]  [{1}] [{2}] [{3}]", typeof(T).Name, sortOrder, desc, caption));

            sb.AppendLine("");

            var properties = typeof(T).GetProperties();

            if (source != null && properties != null)
            {

                foreach (var item in source)
                {

                    foreach (var property in properties)
                    {
                        var name = property.Name;
                        var value = property.GetValue(item, null);
                        if (name.ToLower() == sortOrder.ToLower())
                        {
                            // sb.AppendLine(string.Format("{0},{1}", name, value));
                            sb.AppendLine(string.Format("{0}", value));
                        }
                    }
                }

            }

            sb.AppendLine("");
            sb.AppendLine("-- End");
            sb.AppendLine("");

            DateTime d = DateTime.Now;
            //  System.IO.File.WriteAllText(string.Format("{0}_{1}_{2}_{3:yyyyMMdd_HHmmss}.sdf", source.GetType().Name, sortOrder, desc, d), sb.ToString());
        }
    }
}