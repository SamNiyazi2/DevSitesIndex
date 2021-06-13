using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using SSN_GenUtil_StandardLib;


// 09/26/2018 02:16 am - SSN - Created

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevSitesIndex.Controllers
{

    // 12/03/2019 12:26 am - SSN - [20191202-2353] - [006] - DisplayCode - Adding
    // Add [Route("api/[controller]")]
    [Route("api/[controller]")]
    public class DisplayCodeController : Controller
    {
        const string DISPLAY_CODE_BEGIN = "*** displaycode-begin";
        const string DISPLAY_CODE_END = "*** displaycode-end";

        // 10/27/2018 06:14 am - SSN - Allow for a space (ESLint!!!)
        public const string JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN_o1 = "//h//";
        public const string JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN_o2 = "// h//";
        public const string JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN_BEGIN = "//ha//";
        public const string JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN_END = "//hz//";
        private readonly IConfiguration configuration;
        private readonly IHttpClientFactory clientFactory;
        private readonly ILogger_SSN logger;
        CodeBlocksMaster_v02 codeBlocksMaster;


        Util.ValidateReferer validateReferer;


        public DisplayCodeController(IConfiguration configuration, IHttpClientFactory clientFactory, ILogger_SSN logger)
        {
            // 1/23/2018 07:09 am - SSN - refactor
            validateReferer = new Util.ValidateReferer(configuration);
            this.configuration = configuration;
            this.clientFactory = clientFactory;
            this.logger = logger;
        }


        // 12/03/2019 03:03 am - SSN - [20191202-2353] - [008] - DisplayCode - Adding
        // Create method for VSTS
        // 06/13/2021 04:04 am - SSN - [20210613-0039] - [003] - VSTS Code - Refactoring
        [HttpGet("VSTSCode")]
        // public async Task<RequestResult> VSTSCode(string url, bool doDebug, bool useFileSystem = false)
        public async Task<RequestResult> VSTSCode(VSTSCodeRequest _VSTSCodeRequest)
        {
            string userName = configuration["vsts_username"];
            string token = configuration["vsts_token"];

            RequestResult requestResult_init = new RequestResult();

            if (string.IsNullOrWhiteSpace(userName) || string.IsNullOrWhiteSpace(token))
            {
                requestResult_init.finalResult = "Missing VSTS credentials.";
                requestResult_init.haveError = true;
                await logger.PostException(new Exception("Missing VSTS credentials"), "20191203-2257", "Missing VSTS credential for VSTSCode display");
                return requestResult_init;
            }


            string url_base = string.Format("https://dev.azure.com/{0}/{1}/_apis/git/repositories/{2}/items?path={3}&api-version=5.1",
                     _VSTSCodeRequest.vstsAccount,
                     _VSTSCodeRequest.projectName,
                     _VSTSCodeRequest.repository,
                     _VSTSCodeRequest.filePath);


            string base64AuthInfo = Convert.ToBase64String(Encoding.ASCII.GetBytes(string.Format("{0}:{1}", userName, token)));



            // 12/03/2019 04:49 am - SSN - [20191202-2353] - [019] - DisplayCode - Adding
            // https://docs.microsoft.com/en-us/aspnet/core/fundamentals/http-requests?view=aspnetcore-3.0

            try
            {
                requestResult_init = await processRequest_init(url_base, base64AuthInfo);

            }
            catch (Exception ex)
            {
                requestResult_init.haveError = true;
                requestResult_init.finalResult = ex.Message;
                await logger.PostException(ex, "20191203-0901", "Failed to call DisplayCodeContrller - VSTSCode");
            }



            return requestResult_init;
        }

        private async Task<RequestResult> processRequest_init(string url_base, string base64AuthInfo)
        {
            RequestResult requestResult_init = new RequestResult();

            var request = new HttpRequestMessage(HttpMethod.Get, url_base);
            request.Headers.Add("Accept", "application/json");
            request.Headers.Add("Authorization", string.Format("Basic {0}", base64AuthInfo));


            var client = clientFactory.CreateClient();

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var responseStream = await response.Content.ReadAsStreamAsync();

                StreamReader sr = new StreamReader(responseStream);

                requestResult_init.finalResult = await sr.ReadToEndAsync();

                //Branches = await JsonSerializer.DeserializeAsync
                //    <IEnumerable<GitHubBranch>>(responseStream);

                ItemDetail itemDetail = JsonConvert.DeserializeObject<ItemDetail>(requestResult_init.finalResult);

                if (itemDetail != null)
                {
                    requestResult_init = await processRequest_blob(base64AuthInfo, requestResult_init, itemDetail);

                }
            }
            else
            {
                requestResult_init.haveError = true;
            }

            return requestResult_init;
        }

        private async Task<RequestResult> processRequest_blob(string base64AuthInfo, RequestResult requestResult_init, ItemDetail itemDetail)
        {
            RequestResult requestResult = new RequestResult();

            ItemDetailLinkHref blob = itemDetail._links.blob;

            if (blob != null && !string.IsNullOrEmpty(blob.href))
            {
                var request2 = new HttpRequestMessage(HttpMethod.Get, blob.href);
                request2.Headers.Add("Accept", "text/plain");
                request2.Headers.Add("Authorization", string.Format("Basic {0}", base64AuthInfo));


                var client2 = clientFactory.CreateClient();

                var response2 = await client2.SendAsync(request2);

                if (response2.IsSuccessStatusCode)
                {
                    var responseStream2 = await response2.Content.ReadAsStreamAsync();

                    StreamReader sr2 = new StreamReader(responseStream2);

                    requestResult_init.finalResult = await sr2.ReadToEndAsync();

                }
                else
                {
                    requestResult_init.haveError = true;
                }

            }

            return requestResult_init;
        }


        public class VSTSCodeRequest
        {
            public string url { get; set; }
            public bool doDebug { get; set; }
            public bool useFileSystem { get; set; }

            public string vstsAccount { get; set; }
            public string projectName { get; set; }
            public string repository { get; set; }
            public string filePath { get; set; }

        }


        public class RequestResult
        {
            public string finalResult { get; set; }
            public bool haveError { get; set; }
        }

        //        {
        //  "objectId": "fde2947dc25061a625d0b282647bbda8f9804231",
        //  "gitObjectType": "blob",
        //  "commitId": "92f25c4b2dedd6a6e1a34c7563f01f9596d922c6",
        //  "path": "/DevSitesIndex/wwwroot/js/DemoSites_index_p1.ts",
        //  "url": "https://dev.azure.com/samniyazi/23a6e784-1bc9-4b41-a395-0a828963facb/_apis/git/repositories/433fe932-11f3-4919-831b-234c1dab4d8d/items?path=%2FDevSitesIndex%2Fwwwroot%2Fjs%2FDemoSites_index_p1.ts&versionType=Branch&versionOptions=None",
        //  "_links": {
        //    "self": {
        //      "href": "https://dev.azure.com/samniyazi/23a6e784-1bc9-4b41-a395-0a828963facb/_apis/git/repositories/433fe932-11f3-4919-831b-234c1dab4d8d/items?path=%2FDevSitesIndex%2Fwwwroot%2Fjs%2FDemoSites_index_p1.ts&versionType=Branch&versionOptions=None"
        //    },
        //    "repository": {
        //      "href": "https://dev.azure.com/samniyazi/23a6e784-1bc9-4b41-a395-0a828963facb/_apis/git/repositories/433fe932-11f3-4919-831b-234c1dab4d8d"
        //    },
        //    "blob": {
        //      "href": "https://dev.azure.com/samniyazi/23a6e784-1bc9-4b41-a395-0a828963facb/_apis/git/repositories/433fe932-11f3-4919-831b-234c1dab4d8d/blobs/fde2947dc25061a625d0b282647bbda8f9804231"
        //    }
        //  }
        //}
        class ItemDetail
        {
            public string objectId { get; set; }
            public string gitObjectType { get; set; }
            public string commitId { get; set; }
            public string path { get; set; }
            public string url { get; set; }
            public ItemDetailLinks _links { get; set; }
        }
        class ItemDetailLinks
        {
            public ItemDetailLinkHref self { get; set; }
            public ItemDetailLinkHref repository { get; set; }
            public ItemDetailLinkHref blob { get; set; }

        }
        class ItemDetailLinkHref
        {
            public string href { get; set; }
        }

        // GET: /<controller>/
        // 12/03/2019 12:26 am - SSN - [20191202-2353] - [007] - DisplayCode - Adding
        // Replace name and add [HttpGet[
        // public string Index(string url, bool doDebug, bool useFileSystem = false)
        [HttpGet]
        public string get(string url, bool doDebug, bool useFileSystem = false)
        {
            validateReferer.validateReferer(Request, Response);


            WebClient web = new WebClient();

            StringBuilder sb_final = new StringBuilder();

            sb_final.AppendLine(url);

            string div_top = "".PadLeft(url.Length, '-');
            string div_bottom = "".PadLeft(url.Length, '=');
            sb_final.AppendLine(div_top);

            codeBlocksMaster = new CodeBlocksMaster_v02();

            try
            {
                codeBlocksMaster.debugRegex = doDebug;


                System.IO.Stream stream = null;

                if (!useFileSystem)
                {
                    stream = web.OpenRead(url);
                }

                else
                {
                    stream = new System.IO.FileStream(url, System.IO.FileMode.Open, System.IO.FileAccess.Read);
                }

                bool doInclude = false;

                int safetyCouner = 0;
                int maximumLinesToRead = 1000;


                List<string> wordsToHighlight = new List<string>();

                using (System.IO.StreamReader reader = new System.IO.StreamReader(stream))
                {
                    do
                    {
                        safetyCouner++;

                        if (safetyCouner > maximumLinesToRead)
                        {

                            sb_final.AppendLine($"SafetyCounter triggered ({maximumLinesToRead}). Not all file lines were read.");
                            break;
                        }

                        string text = reader.ReadLine();

                        if (text.ToLower().Contains(DISPLAY_CODE_BEGIN))
                        {
                            codeBlocksMaster.add();
                            doInclude = codeBlocksMaster.process_Display_Code_Begin(text);
                            continue;
                        }

                        if (text.ToLower().Contains(DISPLAY_CODE_END))
                        {
                            doInclude = codeBlocksMaster.process_Display_Code_End();
                            continue;
                        }

                        if (doInclude)
                        {
                            codeBlocksMaster.addText(text);
                        }

                    } while (!reader.EndOfStream);

                }

                if (doInclude) // in case closing was missed
                {
                    doInclude = codeBlocksMaster.process_Display_Code_End();
                }


                codeBlocksMaster.dump(sb_final);


                if (sb_final.Length == 0)
                {
                    sb_final.AppendLine($"Nothing was posted. Are code blocks marked [{DISPLAY_CODE_BEGIN}/{DISPLAY_CODE_END}]");
                }

                sb_final.AppendLine(div_bottom);

                return sb_final.ToString();
            }
            catch (Exception ex)
            {
                sb_final.AppendLine("devsites-displayCode-20180926_0309_NoSet");
                sb_final.AppendLine($"url: [{url}]");
                sb_final.AppendLine(ex.Message);
                sb_final.AppendLine(ex.StackTrace);
                return sb_final.ToString();
            }


        }

    }

    #region Utility

    /// <summary>
    /// Hold contents of file to be displayed.
    /// </summary>
    class CodeBlocksMaster_v02
    {
        public bool debugRegex { get; set; }

        List<CodeBlock> codeBlocks = new List<CodeBlock>();
        static string lf = Environment.NewLine;

        int currentCodeBlockIndex { get { return codeBlocks.Count - 1; } }

        public CodeBlock currentCodeBlock { get { return currentCodeBlockIndex < 0 ? null : codeBlocks[currentCodeBlockIndex]; } }
        public CodeBlocksMaster_v02()
        {
            add();
        }


        public void add()
        {
            if (currentCodeBlock == null || currentCodeBlock.isDirty_v02())
                codeBlocks.Add(new CodeBlock());
        }


        public void addText(string text)
        {
            text = doReplacements_Step01(text);

            // 09/27/2018 12:31 am - SSN - const JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN
            if (text.ToLower().Contains(DisplayCodeController.JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN_o1))
            {
                text = doReplacement_step02_JavaScriptComment_Highlight(text, DisplayCodeController.JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN_o1);
            }

            if (text.ToLower().Contains(DisplayCodeController.JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN_o2))
            {
                text = doReplacement_step02_JavaScriptComment_Highlight(text, DisplayCodeController.JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN_o2);
            }


            if (text.ToLower().Contains(DisplayCodeController.JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN_BEGIN))
            {
                text = doReplacement_step02_JavaScriptComment_Highlight_Begin(text);
            }

            if (text.ToLower().Contains(DisplayCodeController.JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN_END))
            {
                text = doReplacement_step02_JavaScriptComment_Highlight_End(text);
            }

            codeBlocks[currentCodeBlockIndex].sb.AppendLine(text);
        }



        //internal void clearDirtyEntry_v02()
        //{
        //    if (currentCodeBlock.isDirty())
        //    {
        //        currentCodeBlock.sb.AppendLine("");
        //        currentCodeBlock.sb.AppendLine("********************* Unclosed block (2) *********************");

        //        currentCodeBlock.sb.AppendLine("");
        //       // process_Display_Code_End();
        //    }
        //}




        public bool process_Display_Code_Begin(string text)
        {

            if (currentCodeBlock.isDirty_v02())
            {
                currentCodeBlock.sb.AppendLine("");
                currentCodeBlock.sb.AppendLine("********************* Unclosed block (1) *********************");
                currentCodeBlock.sb.AppendLine("");
                // process_Display_Code_End();
            }

            bool doInclude;

            if (text.Contains("highlight ["))
            {
                if (debugRegex)
                    currentCodeBlock.sb.AppendLine("------------- Regex  begin");

                Regex r = new Regex(@".*highlight \[(?<aaa>.*)\].*", RegexOptions.IgnoreCase);
                Match m = r.Match(text);
                int matchCount = 0;

                while (m.Success)
                {
                    if (debugRegex)
                        currentCodeBlock.sb.AppendLine($"Match {++matchCount}");
                    for (int i = 1; i <= 2; i++)
                    {
                        Group g = m.Groups[i];
                        if (debugRegex)
                            currentCodeBlock.sb.AppendLine("Group" + i + "='" + encodeOpeningTag(g.Value) + "'");


                        CaptureCollection cc = g.Captures;
                        for (int j = 0; j < cc.Count; j++)
                        {
                            Capture c = cc[j];
                            if (debugRegex)
                                currentCodeBlock.sb.AppendLine("Capture" + j + "='" + encodeOpeningTag(c.Value) + "', Position=" + c.Index);

                            // Remove software return
                            string c_stripped = c.Value.Replace(char.ConvertFromUtf32(141), "");
                            currentCodeBlock.highlightWords_v02 = c_stripped.Split(',').ToList();

                        }
                    }
                    m = m.NextMatch();

                }
                if (debugRegex)
                    currentCodeBlock.sb.AppendLine("------------- Regex end");
            }


            // 11/10/2018 11:56 am - SSN - Adding alarm
            if (text.Contains("alarm ["))
            {
                if (debugRegex)
                    currentCodeBlock.sb.AppendLine("------------- Regex  begin (102-alarm)");

                Regex r = new Regex(@".*alarm \[(?<aaa>.*)\].*", RegexOptions.IgnoreCase);
                Match m = r.Match(text);
                int matchCount = 0;

                while (m.Success)
                {
                    if (debugRegex)
                        currentCodeBlock.sb.AppendLine($"Match {++matchCount}");
                    for (int i = 1; i <= 2; i++)
                    {
                        Group g = m.Groups[i];
                        if (debugRegex)
                            currentCodeBlock.sb.AppendLine("Group" + i + "='" + encodeOpeningTag(g.Value) + "'");


                        CaptureCollection cc = g.Captures;
                        for (int j = 0; j < cc.Count; j++)
                        {
                            Capture c = cc[j];
                            if (debugRegex)
                                currentCodeBlock.sb.AppendLine("Capture" + j + "='" + encodeOpeningTag(c.Value) + "', Position=" + c.Index);

                            // Remove software return
                            string c_stripped = c.Value.Replace(char.ConvertFromUtf32(141), "");
                            currentCodeBlock.alarmWords = c_stripped.Split(',').ToList();

                        }
                    }
                    m = m.NextMatch();

                }
                if (debugRegex)
                    currentCodeBlock.sb.AppendLine("------------- Regex end");
            }


            doInclude = true;
            return doInclude;

        }


        public bool process_Display_Code_End()
        {
            bool doInclude = false;
            return doInclude;
        }


        private string doReplacements_Step01(string text)
        {
            text = encodeOpeningTag(text);

            //if (debugRegex)
            //{
            //    currentCodeBlock.sb.Insert(0, $"Number of words to highlight [{currentCodeBlock.highlight.Count}]{lf}");
            //}

            text = doReplacements_Step01_sub(text, "n", currentCodeBlock.highlightWords_v02);

            text = doReplacements_Step01_sub(text, "alarm", currentCodeBlock.alarmWords);


            return text;

        }

        private string doReplacements_Step01_sub(string text, string tag, List<string> list)
        {

            foreach (string s in list.OrderByDescending(r => r.Length))
            {

                if (string.IsNullOrEmpty(s))
                    continue;

                // Error CS1656  Cannot assign to 's' because it is a 'foreach iteration variable'   

                var s2 = encodeOpeningTag(s);

                text = text.Replace(s2, $"<{tag}>{s2}</{tag}>");

            }

            return text;
        }

        private static string encodeOpeningTag(string text)
        {
            text = text.Replace("<", "&lt;");
            return text;
        }


        // 09/27/2018 01:01 am - SSN

        /// <summary>
        /// Wrap comment lines containing the marker //h// with <n> tag.  
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public static string doReplacement_step02_JavaScriptComment_Highlight(string input, string stringToMatch)
        {
            //string pattern = @"(//h//)(.*)$";
            //string replacement = "<n>// $2</n>";
            //string result = Regex.Replace(input, pattern, replacement);
            //input = Regex.Replace(input, pattern, replacement);

            //return doReplacement_Apply(ref input, @"(//h//)(.*)$", "<n>// $2</n>");
            return doReplacement_Apply(ref input, $"({stringToMatch})(.*)$", "<n>// $2</n>");
        }

        // 09/27/2018 03:41 am - SSN
        public static string doReplacement_step02_JavaScriptComment_Highlight_Begin(string input)
        {
            if (input.Trim() == "//ha//")
                return "<n>"; // if we only have request to open block with no comments, we won't need the backslashes.

            return doReplacement_Apply(ref input, @"(//ha//)(.*)$", "<n>// $2");
        }
        public static string doReplacement_step02_JavaScriptComment_Highlight_End(string input)
        {
            if (input.Trim() == "//hz//")
                return "</n>"; // if we only have request to close block with no comments, just close block.

            return doReplacement_Apply(ref input, @"(//hz//)(.*)$", "// $2 </n>");
        }

        private static string doReplacement_Apply(ref string input, string pattern, string replacement)
        {
            string result = Regex.Replace(input, pattern, replacement);
            input = Regex.Replace(input, pattern, replacement);
            return input;
        }

        internal void dump(StringBuilder sb_final)
        {
            int partNo = 0;
            bool displayCodeBlocks = codeBlocks.Count > 1;

            foreach (CodeBlock cb in codeBlocks)
            {
                //if (cb.sb.Length > 0)
                {
                    partNo++;

                    sb_final.AppendLine("");
                    if (displayCodeBlocks)
                        sb_final.AppendLine($"*************** Part [{partNo}] - Begin");
                    if (displayCodeBlocks)
                        sb_final.AppendLine("");

                    sb_final.Append(cb.sb);

                    if (displayCodeBlocks)
                        sb_final.AppendLine("");
                    if (displayCodeBlocks)
                        sb_final.AppendLine($"*************** Part [{partNo}] - End");
                    sb_final.AppendLine("");
                }
            }
        }

    }


    class CodeBlock
    {
        public StringBuilder sb { get; set; }

        // 11/10/2018 11:58 am - SSN - v02 for adding alarmWords.  Match process.
        public List<string> highlightWords_v02 { get; set; }
        public List<string> alarmWords { get; set; }

        public CodeBlock()
        {
            sb = new StringBuilder();
            highlightWords_v02 = new List<string>();
            alarmWords = new List<string>();
        }

        public bool isDirty_v02()
        {
            return sb.Length > 0 || highlightWords_v02.Count > 0 || alarmWords.Count > 0;
        }



    }

    #endregion Utility
}
