using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;



// 08/26/2019 12:09 pm - SSN - [20190826-1108] - [003] - Add paging and sort


namespace DevSitesIndex.Pages
{


    public class HeaderWithSortLinks : PageModel
    {

        public string TestMessageForDebugging { get; set; }
        public HtmlString ReturnedHTML { get; set; }

        IBaseEntity Entity { get; set; }

        List<Col> ColumnNames { get; set; }

        string Path;

        class Col
        {
            public string Name { get; set; }
            public bool SortDescending { get; set; }
        }

        public void AddColumns(string _columnName)
        {
            if (ColumnNames == null) ColumnNames = new List<Col>();
            ColumnNames.Add(new Col { Name = _columnName });

        }


        public void SetupHeaders<T>(string _path, string sortOrder, string sortDirectionDescRequested)
        {
            Path = _path;

            sortOrder = sortOrder ?? "";

            // We assume the sort is ascending on first entry.
            sortDirectionDescRequested = string.IsNullOrWhiteSpace(sortDirectionDescRequested) ? "false" : sortDirectionDescRequested;

            var propList = typeof(T).GetProperties();

            StringBuilder sb = new StringBuilder();

            foreach (Col col in ColumnNames)
            {
                IEnumerable<PropertyInfo> columnProps = propList.Where(r => r.Name.ToUpper() == col.Name.ToUpper());

                string displayName = columnProps.Select(property => ((DisplayNameAttribute)property.GetCustomAttributes(typeof(DisplayNameAttribute), false).FirstOrDefault())?.DisplayName).Where(r => !string.IsNullOrWhiteSpace(r)).FirstOrDefault();

                if (string.IsNullOrEmpty(displayName))
                {
                    displayName = columnProps.Select(property => ((DisplayAttribute)property.GetCustomAttributes(typeof(DisplayAttribute), false).FirstOrDefault())?.Name).Where(r => !string.IsNullOrWhiteSpace(r)).FirstOrDefault();
                    if (string.IsNullOrEmpty(displayName))
                    {
                        displayName = col.Name;
                    }
                }

                // We sort ascending when:
                // When we first come in, the option is null
                bool case1 = string.IsNullOrWhiteSpace(sortOrder);

                // On subsequent call when a different column is selected
                bool case2 = sortOrder.ToLower() != col.Name.ToLower();

                // We sort descending only if the same column is clicked
                bool case3 = sortOrder.ToLower() == col.Name.ToLower() && (sortDirectionDescRequested.ToLower() == "false");


                string sortColumnOptionDescForLink = string.Format("{0}", case3);

                string arrowUp = "&#9650;";
                string arrowDown = "&#9660;";
                string selectedArrow = "";

                if (col.Name.ToLower() == sortOrder.ToLower())
                {

                    selectedArrow = (sortDirectionDescRequested.ToLower() == "false" ? arrowDown : arrowUp);

                }

                sb.Append("<th>");
                sb.Append($"<a href=\"{Path}?sortOrder={col.Name}&desc={sortColumnOptionDescForLink}\">");
                sb.Append($"{displayName}");
                sb.Append("</a>");
                sb.Append($"&nbsp;{selectedArrow}</th>");

            }

            ReturnedHTML = new HtmlString(sb.ToString());

        }

 

    }
}