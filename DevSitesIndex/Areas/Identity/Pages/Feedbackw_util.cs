using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Html;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// 09/05/2019 06:05 am - SSN - [20190904-1845] - [012] - Enforce email confirmation
// Refactor
namespace DevSitesIndex.Areas.Identity
{
    public class Feedbackw_util
    {


        static ConcurrentBag<PageContent> PageCnetentList = new ConcurrentBag<PageContent>();

        static TelemetryClient telemetry = new TelemetryClient();


        public class PageContent
        {
            // 09/05/2019 07:01 pm - SSN - [20190905-1835] - [005] - Resetting password process
            // MessageTitle_ViewBag - We don't want the HTML - Shows in Application Insights

            public string MessageTitle_ViewBag { get; set; }
            public HtmlString MessageTitle { get; set; }

            public HtmlString MessageBody { get; set; }


            public Guid PageID { get; set; }
            internal List<MessageRecord> MessageList { get; set; }


            public Guid TheKey { get; set; }


            public PageContent() : this(Guid.NewGuid())
            {

            }

            public PageContent(Guid pageID)
            {
                this.PageID = pageID;
                MessageList = new List<MessageRecord>();
                PageCnetentList.Add(this);
            }


            internal void AddTitle(string title)
            {
                AddEntry(MessageType.Title, title);
            }


            internal void AddMessage(string title)
            {
                AddEntry(MessageType.Body, title);
            }


            internal void AddTheKey(string theKey)
            {
                Guid temp = Guid.Empty;
                Guid.TryParse(theKey, out temp);
                TheKey = temp;
            }


            private int AddEntry(MessageType messageType, string message)
            {
                try
                {
                    {
                        this.MessageList.Add(new MessageRecord { messageType = messageType, messageText = message });
                    }

                }
                catch (Exception ex)
                {

                    telemetry.TrackEvent("DemoSite-20190904-2300-A - Failed to post error message");
                    telemetry.TrackEvent(string.Format("DemoSite-20190904-2300-B - {0} ", ex.Message));
                    telemetry.TrackEvent(string.Format("DemoSite-20190904-2300-B - {0} ", ex.StackTrace));
                }

                return -1;
            }



            public static PageContent GetPageData(Guid pageID)
            {

                telemetry.TrackEvent($"DemoSite-20190905-0010 - Displaying Feedbackx contents (2)");

                PageContent pageContent = PageCnetentList.Where(r => r.PageID == pageID).FirstOrDefault();
                pageContent.BuildPageContent(pageContent);

                return pageContent;
            }



            private void BuildPageContent(PageContent pageContent)
            {
                if (pageContent == null)
                {
                    telemetry.TrackEvent($"DemoSite-20190905-0012 - Calling Error page with null pageContent]");

                    return;
                }

                StringBuilder sb_Title = new StringBuilder();
                StringBuilder sb_Body = new StringBuilder();

                foreach (MessageRecord r in pageContent.MessageList)
                {
                    switch (r.messageType)
                    {
                        case MessageType.Title:
                            if (string.IsNullOrWhiteSpace(MessageTitle_ViewBag)) MessageTitle_ViewBag = r.messageText;
                            sb_Title.AppendLine(string.Format("<h2>{0}</h2>", r.messageText));
                            break;

                        case MessageType.Body:
                            sb_Body.AppendLine(string.Format("<p>{0}</p>", r.messageText));
                            break;

                    }

                }


                MessageTitle = new HtmlString(sb_Title.ToString());
                MessageBody = new HtmlString(sb_Body.ToString());
            }


        }


        internal enum MessageType
        {
            NotSet,
            Title,
            Body
        }

        internal class MessageRecord
        {
            public MessageType messageType { get; set; }
            public string messageText { get; set; }
        }


        internal static PageContent AddPage()
        {
            PageContent pageContent = new PageContent
            {
                PageID = Guid.NewGuid()
            };

            PageCnetentList.Add(pageContent);
            return pageContent;

        }

    }
}
