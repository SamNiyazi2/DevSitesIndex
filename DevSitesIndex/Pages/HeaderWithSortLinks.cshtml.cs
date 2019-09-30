using DevSitesIndex.Entities;
using DevSitesIndex.Models;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
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

        public HtmlString ReturnedHTML { get; set; } = new HtmlString("");

        List<Col> ColumnNames { get; set; }


        string Path;

        class Col
        {
            public string Name { get; set; }
            public bool SortDescending { get; set; }
        }

        internal void AddColumns(string _columnName)
        {
            if (ColumnNames == null) ColumnNames = new List<Col>();
            ColumnNames.Add(new Col { Name = _columnName });
        }


        /// <summary>
        /// Creates table header row with links for sorting.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="_path">The URL prefix for the page</param>
        /// <param name="columnName">The name of the field/column</param>
        /// <param name="sortDirectionDescRequested_v02">true or false to sort in ascending or descending order</param>
        /// <param name="urlMaker">An object reference to UrlMaker - Shard object between rendering headers and footer (paging)</param>
        internal void SetupHeaders<T>(string _path, string columnName, string sortDirectionDescRequested_v02, UrlMaker urlMaker)
        {
            Path = _path;

            columnName = columnName ?? "";

            // We assume the sort is ascending on first entry.
            sortDirectionDescRequested_v02 = string.IsNullOrWhiteSpace(sortDirectionDescRequested_v02) ? "false" : sortDirectionDescRequested_v02.ToLower();

            var propList = typeof(T).GetProperties();

            // sb is for storing the final output.
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
                // We sort descending only if the same column is clicked
                bool case3 = columnName.ToLower() == col.Name.ToLower() && (sortDirectionDescRequested_v02.ToLower() == "false");


                string sortColumnOptionDescForLink = string.Format("{0}", case3);

                string arrowUp = "&#9650;";
                string arrowDown = "&#9660;";
                string selectedArrow = "";

                if (col.Name.ToLower() == columnName.ToLower())
                {

                    selectedArrow = (sortDirectionDescRequested_v02.ToLower() == "false" ? arrowDown : arrowUp);

                }



                // Here we create the default url with the page path and querystring for the sort and page clicks. The url includes the path, column order selected and whethere it is
                // in descending order and the page index.

                // The output format for each column: <th><a href="the context od sb">displayName</a></th>

                // sb example: "/SomeRoute/?columnName=ProjectTitle&desc=false. 
                // We don't supply the closing quote until we check if we have any other objects (OtherHtmlInputToSave) to 
                // append to the url address before supplying the closing quote.


                sb.Append("<th>");

                sb.Append($"<a href=\"");



                sb.Append(urlMaker.MakeUrl(Path, col.Name, sortColumnOptionDescForLink));



                sb.Append("\"");
                sb.Append(">");
                sb.Append($"{displayName}");
                sb.Append("</a>");
                sb.Append($"&nbsp;{selectedArrow}</th>");

            }

            ReturnedHTML = new HtmlString(sb.ToString());

        }

    }


    public class UrlMaker
    {

        Dictionary<string, string> OtherHtmlInputToSave { get; set; }

        internal void AddOtherHtmlInputToSave(string objectName, string objectValue)
        {
            if (OtherHtmlInputToSave == null) OtherHtmlInputToSave = new Dictionary<string, string>();

            OtherHtmlInputToSave.Add(objectName, objectValue);
        }


        public string MakeUrl(string path, string sortColumn, string desc)
        {

            StringBuilder sb = new StringBuilder();
            StringBuilder otherHtmlInput = new StringBuilder();

            // We are adding in any html input provided (like search) se we may pass on with sort and page click
            // otherHtmlInput = "&key1=val1;key2=val2"

            if (OtherHtmlInputToSave != null)
            {
                foreach (KeyValuePair<string, string> e in OtherHtmlInputToSave)
                {
                    otherHtmlInput.Append(string.Format("&{0}={1}", e.Key, e.Value));
                }
            }


            sb.Append($"{path}?columnName={sortColumn}&desc={desc}");

            if (otherHtmlInput.Length > 0)
            {
                sb.Append(otherHtmlInput.ToString());
            }

            return sb.ToString();

        }

    }


    public class PageUtil
    {

        public HeaderWithSortLinks headerWithSortLinks { get; set; } = new HeaderWithSortLinks();

        public TablePager tablePager { get; set; } = new TablePager();
        public UrlMaker urlMaker { get; set; } = new UrlMaker();
        public PageUtil()
        {
            headerWithSortLinks = new HeaderWithSortLinks();
            tablePager = new TablePager();
        }


        public void AddColumns(string _columnName)
        {
            headerWithSortLinks.AddColumns(_columnName);
        }


        public void SetupHeaders<T>(string _path, string columnName, string sortDirectionDescRequested_v02)
        {
            headerWithSortLinks.SetupHeaders<T>(_path, columnName, sortDirectionDescRequested_v02, urlMaker);
        }


        public void SetupButtons<T>(PaginatedList<T> source, string _path, string columnName, string sortDirectionDescRequested)
        {
            tablePager.SetupButtons<T>(source, _path, columnName, sortDirectionDescRequested, urlMaker);
        }

        public void AddOtherHtmlInputToSave(string objectName, string objectValue)
        {
            urlMaker.AddOtherHtmlInputToSave(objectName, objectValue);
        }

    }
}


