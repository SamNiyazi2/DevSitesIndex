using Microsoft.AspNetCore.Html;
using Newtonsoft.Json;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// 11/07/2019 01:49 pm - SSN - [20191107-1213] - [012] - Login -  Test run after working with newly added register option
// Refactor

namespace DevSitesIndex.Util
{
    /// <summary>
    /// Creates content to deliver as HTML.
    /// </summary>
    public class PageContent
    {

        private readonly ILogger_SSN logger;

        public PageContent(ILogger_SSN logger)
        {
            this.logger = logger;
        }



        static ConcurrentBag<PageContent> PageCnetentList = new ConcurrentBag<PageContent>();
        static ConcurrentDictionary<Guid, Guid> UserIds = new ConcurrentDictionary<Guid, Guid>();


        private static PageContent AddPage()
        {
            PageContent pageContent = new PageContent(Guid.NewGuid());

            PageCnetentList.Add(pageContent);
            return pageContent;

        }


        private enum MessageType
        {
            NotSet,
            Title,
            Body
        }


        private class MessageRecord
        {
            public MessageType messageType { get; set; }
            public string messageText { get; set; }
        }


        // 09/05/2019 07:01 pm - SSN - [20190905-1835] - [005] - Resetting password process
        // MessageTitle_ViewBag - We don't want the HTML - Shows in Application Insights

        public string MessageTitle_ViewBag { get; set; }

        /// <summary>
        /// Contains all entries added with the AddTitle method, after the static GetPageData is called.
        /// </summary>
        string _MessageTitle;
        public string MessageTitle_AsString => _MessageTitle;
        public HtmlString MessageTitle_AsHtml => new HtmlString(_MessageTitle);

        /// <summary>
        /// Contains all entries added with the AddMessage method, after the static GetPageData is called.
        /// </summary>
        string _MessageBody;
        public string MessageBody_AsString => _MessageBody;
        public HtmlString MessageBody_AsHtml => new HtmlString(_MessageBody);


        /// <summary>
        /// Automatically assigned to current instance.  Used to reacall current content. 
        /// </summary>
        // public Guid PageID { get; set; }
        public Guid PageID { get; }

        private List<MessageRecord> MessageList { get; set; }


        /// <summary>
        /// Used to assign current user ID.  Used for authentication.
        /// </summary>
        // public Guid TheKey { get; set; }

        [JsonIgnore]
        public Guid UserID
        {
            get
            {
                Guid _userID = Guid.Empty;

                if (!UserIds.TryGetValue(PageID, out _userID))
                {
                    logger.PostException(new Exception("DemoSites-20191107-2214 - Failed to get UserID for PageContent"), "20191107-2214", "Failed to get UserID for PageContent");
                }
                return _userID;

            }
            set
            {
                if (!UserIds.TryAdd(PageID, value))
                {
                    logger.PostException(new Exception("DemoSites-20191107-2216 - Failed to add UserID for PageContent"), "20191107-2216", "Failed to get UserID for PageContent");
                }
            }
        }


        public PageContent() : this(Guid.NewGuid())
        {

        }

        public PageContent(Guid pageID)
        {
            this.PageID = pageID;
            MessageList = new List<MessageRecord>();
            PageCnetentList.Add(this);
        }



        /// <summary>
        /// Add page title.  Can have more than one entry.
        /// </summary>
        /// <param name="title"></param>
        internal void AddTitle(string title)
        {
            AddEntry(MessageType.Title, title);
        }

        /// <summary>
        /// Add body content.  Can have multiple entries.
        /// </summary>
        /// <param name="title"></param>
        internal void AddMessage(string title)
        {
            AddEntry(MessageType.Body, title);
        }


        /// <summary>
        /// Add current user ID. Used to authenticate calling user.
        /// </summary>
        /// <param name="theKey"></param>
        // internal void AddTheKey(string theKey)
        internal void AddUserID(string userID)
        {
            Guid temp = Guid.Empty;
            Guid.TryParse(userID, out temp);
            // TheKey = temp;
            UserID = temp;

        }


        /// <summary>
        /// Called by other shortcut functions.
        /// </summary>
        /// <param name="messageType"></param>
        /// <param name="message"></param>
        /// <returns></returns>
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

                logger.TrackEvent("DemoSite-20190904-2300-A - Failed to post error message");
                logger.TrackEvent(string.Format("DemoSite-20190904-2300-B - {0} ", ex.Message));
                logger.TrackEvent(string.Format("DemoSite-20190904-2300-B - {0} ", ex.StackTrace));
            }

            return -1;
        }


        /// <summary>
        /// Static function: Populates Title and Body HTML variables.  
        /// </summary>
        /// <param name="pageID"></param>
        /// <returns></returns>
        public static PageContent GetPageData(Guid pageID)
        {

            // logger.TrackEvent($"DemoSite-20190905-0010 - Displaying Feedbackx contents (2)");

            PageContent pageContent = PageCnetentList.Where(r => r.PageID == pageID).FirstOrDefault();
            pageContent.BuildPageContent(pageContent);

            return pageContent;
        }



        private void BuildPageContent(PageContent pageContent)
        {
            if (pageContent == null)
            {
                logger.TrackEvent($"DemoSite-20190905-0012 - Calling Feedbackw_util page with null pageContent]");

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


            _MessageTitle = sb_Title.ToString();
            _MessageBody = sb_Body.ToString();
        }


    }

}
