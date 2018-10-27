using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// 09/26/2018 02:16 am - SSN - Created

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevSitesIndex.Controllers
{
    public class DisplayCodeController : Controller
    {
        const string DISPLAY_CODE_BEGIN = "*** displaycode-begin";
        const string DISPLAY_CODE_END = "*** displaycode-end";
        public const string JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN = "//h//";
        public const string JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN_BEGIN = "//ha//";
        public const string JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN_END = "//hz//";

        CodeBlocksMaster_v02 codeBlocksMaster;


        Util.ValidateReferer validateReferer ;


        public DisplayCodeController(IConfiguration configuration)
        {
            // 1/23/2018 07:09 am - SSN - refactor
            validateReferer = new Util.ValidateReferer(configuration);

        }


        // GET: /<controller>/
        public string Index(string url, bool doDebug, bool useFileSystem = false)
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
            if (currentCodeBlock == null || currentCodeBlock.isDirty_v02()) codeBlocks.Add(new CodeBlock());
        }


        public void addText(string text)
        {
            text = doReplacements_Step01(text);

            // 09/27/2018 12:31 am - SSN - const JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN
            if (text.ToLower().Contains(DisplayCodeController.JAVASCRIPT_COMMENT_HIGHLIGHT_TOKEN))
            {
                text = doReplacement_step02_JavaScriptComment_Highlight(text);
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

            if (text.Contains("["))
            {
                if (debugRegex) currentCodeBlock.sb.AppendLine("------------- Regex  begin");

                Regex r = new Regex(@".*\[(?<aaa>.*)\].*", RegexOptions.IgnoreCase);
                Match m = r.Match(text);
                int matchCount = 0;

                while (m.Success)
                {
                    if (debugRegex) currentCodeBlock.sb.AppendLine($"Match {++matchCount}");
                    for (int i = 1; i <= 2; i++)
                    {
                        Group g = m.Groups[i];
                        if (debugRegex) currentCodeBlock.sb.AppendLine("Group" + i + "='" + encodeOpeningTag(g.Value) + "'");


                        CaptureCollection cc = g.Captures;
                        for (int j = 0; j < cc.Count; j++)
                        {
                            Capture c = cc[j];
                            if (debugRegex) currentCodeBlock.sb.AppendLine("Capture" + j + "='" + encodeOpeningTag(c.Value) + "', Position=" + c.Index);

                            // Remove software return
                            string c_stripped = c.Value.Replace(char.ConvertFromUtf32(141), "");
                            currentCodeBlock.highlightWords = c_stripped.Split(',').ToList();

                        }
                    }
                    m = m.NextMatch();

                }
                if (debugRegex) currentCodeBlock.sb.AppendLine("------------- Regex end");
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

            foreach (string s in currentCodeBlock.highlightWords.OrderByDescending(r => r.Length))
            {
                //if (debugRegex)
                //{
                //    currentCodeBlock.sb.Insert(0, $"Highlight [{s}]{lf}");
                //}

                if (string.IsNullOrEmpty(s)) continue;

                // Error CS1656  Cannot assign to 's' because it is a 'foreach iteration variable'   

                var s2 = encodeOpeningTag(s);

                text = text.Replace(s2, $"<n>{s2}</n>");

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
        public static string doReplacement_step02_JavaScriptComment_Highlight(string input)
        {
            //string pattern = @"(//h//)(.*)$";
            //string replacement = "<n>// $2</n>";
            //string result = Regex.Replace(input, pattern, replacement);
            //input = Regex.Replace(input, pattern, replacement);

            return doReplacement_Apply(ref input, @"(//h//)(.*)$", "<n>// $2</n>");
        }

        // 09/27/2018 03:41 am - SSN
        public static string doReplacement_step02_JavaScriptComment_Highlight_Begin(string input)
        {
            if (input.Trim() == "//ha//") return "<n>"; // if we only have request to open block with no comments, we won't need the backslashes.

            return doReplacement_Apply(ref input, @"(//ha//)(.*)$", "<n>// $2");
        }
        public static string doReplacement_step02_JavaScriptComment_Highlight_End(string input)
        {
            if (input.Trim() == "//hz//") return "</n>"; // if we only have request to close block with no comments, just close block.

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
                    if (displayCodeBlocks) sb_final.AppendLine($"*************** Part [{partNo}] - Begin");
                    if (displayCodeBlocks) sb_final.AppendLine("");

                    sb_final.Append(cb.sb);

                    if (displayCodeBlocks) sb_final.AppendLine("");
                    if (displayCodeBlocks) sb_final.AppendLine($"*************** Part [{partNo}] - End");
                    sb_final.AppendLine("");
                }
            }
        }

    }


    class CodeBlock
    {
        public StringBuilder sb { get; set; }
        public List<string> highlightWords { get; set; }

        public CodeBlock()
        {
            sb = new StringBuilder();
            highlightWords = new List<string>();
        }

        public bool isDirty_v02()
        {
            return sb.Length > 0 || highlightWords.Count > 0;
        }



    }

    #endregion Utility
}
