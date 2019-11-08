﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Collections.Concurrent;
using SSN_GenUtil_StandardLib;

// 11/04/2019 08:52 am - SSN - [20191104-0844] - [002] - Prevent delete option on timesheet related forms 
// Added
namespace DevSitesIndex.Util
{
    public class UrlRecord
    {
        public string url { get; set; }
        public string DefaultReturnUrl { get; set; }

        public int seqNo { get; set; }

    }


    public class ReturnToCaller
    {
        private static readonly ILogger_SSN logger;

        public string referrer { get; set; }
        public string defaultUrl { get; set; }

        private static List<UrlRecord> urlList { get; set; } = new List<UrlRecord>();

        // 11/08/2019 11:04 am - SSN - [20191108-1043] - [005] - Persisting search on return to index
        /// <summary>
        /// We assign page url in this list so we can return to that page using its key.
        /// </summary>
        private static ConcurrentDictionary<string, string> returnToCallerList { get; set; } = new ConcurrentDictionary<string, string>();


        static ReturnToCaller()
        {
            logger = new SSN_Logger();
        }

        internal void setup(HttpRequest request, string _defaultUrl)
        {


            string url = request.Path;
            string queryString = request.QueryString.ToString();

            if (request.QueryString.HasValue)
            {
                url = url + queryString;
            }


            // 11/08/2019 10:44 am - SSN - [20191108-1043] - [002] - Persisting search on return to index

            Microsoft.Extensions.Primitives.StringValues searchText_SSN = "";
            request.Query.TryGetValue("returnToCallerKey", out searchText_SSN);

            string referrer_From_ReturnToCallerList = string.Empty;

            if (!string.IsNullOrWhiteSpace(searchText_SSN))
            {
                returnToCallerList.TryGetValue(searchText_SSN, out referrer_From_ReturnToCallerList);
            }

            if (!string.IsNullOrWhiteSpace(referrer_From_ReturnToCallerList))
            {
                referrer = referrer_From_ReturnToCallerList;
            }
            else
            {

                referrer = request.Headers["Referer"].ToString();

                if (request.Host.Port.HasValue)
                {
                    string host = string.Format("{0}://{1}:{2}", request.Scheme, request.Host.Host, request.Host.Port);
                    referrer = referrer.Replace(host, "");
                }
            }



            defaultUrl = _defaultUrl;

            StringBuilder sb = new StringBuilder();

            sb.AppendLine(" ");
            sb.AppendLine(" ");
            sb.AppendLine(" ");
            sb.AppendLine("urlList VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
            sb.AppendLine("urlList *************************************************");
            sb.AppendLine("urlList *************************************************");
            sb.AppendLine("urlList *************************************************");

            sb.AppendLine(string.Format("{0,15} {1}", "url", url));
            sb.AppendLine(string.Format("{0,15} {1}", "referer ", referrer));
            sb.AppendLine(string.Format("{0,15} {1}", "defaultUrl ", defaultUrl));
            sb.AppendLine(" ");
            sb.AppendLine(" ");


            UrlRecord foundRecord = urlList.OrderByDescending(r => r.seqNo).FirstOrDefault(r => r.url == url);
            if (foundRecord == null)
            {
                sb.AppendLine("Adding record");

                urlList.Add(new UrlRecord
                {
                    url = url,
                    DefaultReturnUrl = string.IsNullOrWhiteSpace(referrer) ? _defaultUrl : referrer,
                    seqNo = urlList.Count
                });
            }
            else
            {
                sb.AppendLine(string.Format("Replacing [{0}] with [{1}]", referrer, foundRecord.DefaultReturnUrl));
                referrer = foundRecord.DefaultReturnUrl;
                //  urlList.Remove(foundRecord);
            }




            foreach (UrlRecord r in urlList)
            {
                sb.AppendLine(string.Format("{0,5} - {1,-30} -> {2}", r.seqNo, r.url, r.DefaultReturnUrl));

            }


            sb.AppendLine(" ");
            sb.AppendLine(" ");




            sb.AppendLine(" ");
            sb.AppendLine(" ");
            sb.AppendLine("urlList *************************************************");
            sb.AppendLine("urlList *************************************************");
            sb.AppendLine("urlList *************************************************");
            sb.AppendLine("urlList ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
            sb.AppendLine(" ");
            sb.AppendLine(" ");
            sb.AppendLine(" ");
            sb.AppendLine(" ");
            sb.AppendLine(" ");
            sb.AppendLine(" ");

            Debug.WriteLine(sb.ToString());





        }

        // 11/08/2019 11:51 am - SSN - [20191108-1043] - [007] - Persisting search on return to index


        public class QueryStringParts
        {
            List<KeyValuePair<string, string>> vars = new List<KeyValuePair<string, string>>();

            public void add(string key, string value)
            {
                vars.Add(new KeyValuePair<string, string>(key, value));
            }

            public string getFullQueryString()
            {
                StringBuilder sb = new StringBuilder();

                int entryCount = 0;

                foreach (KeyValuePair<string, string> r in vars)
                {
                    entryCount++;

                    sb.Append(string.Format("{0}={1}{2}", r.Key, r.Value, entryCount < vars.Count ? "&" : ""));
                }

                return sb.ToString();
            }
        }


        public static QueryStringParts CreateQueryStringParts()
        {
            return new QueryStringParts();

        }


        // 11/08/2019 11:14 am - SSN - [20191108-1043] - [006] - Persisting search on return to index
        internal static void postReturnToCallerRecord(string returnToCallerKey, HttpRequest request, QueryStringParts queryStringParts)
        {
            string port = "";
            if (request.Host.Port.HasValue)
            {
                port = string.Format(":{0}", request.Host.Port.Value);
            }

            string queryString = request.QueryString.ToString();

            string additionalQueryString = queryStringParts.getFullQueryString();

            if (!string.IsNullOrWhiteSpace(additionalQueryString))
            {
                queryString = (string.IsNullOrWhiteSpace(queryString) ? "?" : "&") + additionalQueryString;
            }


            string url = string.Format("{0}://{1}{2}{3}{4}", request.Scheme, request.Host.Host, port, request.Path, queryString);

            if (!returnToCallerList.TryAdd(returnToCallerKey, url))
            {
                logger.PostException(new Exception("DemoSites-20191108-1120 - ReturnToCaller failure"), "20191108-1120", "Failed to add record to returnToCallerList");
            }

        }
    }
}
