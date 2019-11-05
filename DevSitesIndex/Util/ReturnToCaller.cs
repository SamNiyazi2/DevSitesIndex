using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

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

        public string referrer { get; set; }
        public string defaultUrl { get; set; }
        static public List<UrlRecord> urlList { get; set; } = new List<UrlRecord>();

        internal void setup(HttpRequest request, string _defaultUrl)
        {


            string url = request.Path;
            string queryString = request.QueryString.ToString();

            if (request.QueryString.HasValue)
            {
                url = url + queryString;
            }

            referrer = request.Headers["Referer"].ToString();

            if (request.Host.Port.HasValue)
            {
                string host = string.Format("{0}://{1}:{2}", request.Scheme, request.Host.Host, request.Host.Port);
                referrer = referrer.Replace(host, "");
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



    }
}
