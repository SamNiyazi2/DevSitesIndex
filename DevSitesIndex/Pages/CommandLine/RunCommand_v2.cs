using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

// 09/12/2018 04:18 pm - SSN - Copied from C:\Sams_W\Sam_W_a\FC_3\Dev\FirstCallWebUtil\FirstCallWebUtil\SQLServerAccessManager.cs

namespace DevSitesIndex.Pages.CommandLine
{
    public class RunCommand_v2 // v2 to set ScriptWorkDirectory
    {
        private string LocalDirectory;
        private bool waitForExit;

        public string strOutput { get; set; }
        public string strError { get; set; }

        const int waitForExitTimeout = 3000;

        public RunCommand_v2(string _LocalDirectory, bool _waitForExit)
        {
            LocalDirectory = _LocalDirectory;
            waitForExit = _waitForExit;
        }


        public void Run(StringBuilder sb)
        {

            Monitor.Enter(LocalDirectory);

            bool emailDebuggingMessages = false;

            try
            {

                //   emailDebuggingMessages = AppHelper_FC.getBool(ConfigurationManager.AppSettings["SQLServerAccessManager_EmailDebuggingMessages"]);

                if (string.IsNullOrEmpty(LocalDirectory)) return;

                DateTime d = DateTime.Now;

                string fileName = LocalDirectory + string.Format("SQLServerAccess_{0}{1}{2}_{3}{4}{5}.cmd", d.Year, d.Month.ToString().PadLeft(2, '0'), d.Day.ToString().PadLeft(2, '0'), d.Hour.ToString().PadLeft(2, '0'), d.Minute.ToString().PadLeft(2, '0'), d.Second.ToString().PadLeft(2, '0'));

                System.IO.File.WriteAllText(fileName, sb.ToString());

                var si = new System.Diagnostics.ProcessStartInfo();

                si.WorkingDirectory = LocalDirectory;

                si.FileName = fileName;

                //System.Security.SecureString s2 = new System.Security.SecureString();
                //string password = "";

                //for (int mm = 0; mm < password.Length; mm++)
                //{
                //    s2.AppendChar(password[mm]);
                //}

                //si.Domain = ".";
                //si.UserName = "sam";
                //si.Password = s2;

                si.UseShellExecute = false;


                si.LoadUserProfile = true;

                // si.CreateNoWindow = false;
                si.CreateNoWindow = true;

                si.RedirectStandardOutput = true;
                si.RedirectStandardInput = true;
                si.RedirectStandardError = true;

                si.StandardErrorEncoding = Encoding.UTF8;
                si.StandardOutputEncoding = Encoding.UTF8;


                //System.Diagnostics.Process p = System.Diagnostics.Process.Start(si);
                System.Diagnostics.Process p = new System.Diagnostics.Process();
                p.StartInfo = si;
                p.Start();



                if (waitForExit)
                {
                    // 11/09/2018 04:19 pm - SSN - Added
                    int? exitCode = null;

                    // 11/09/2018 04:19 pm - SSN - Added 
                    bool processHasExited = p.WaitForExit(waitForExitTimeout);

                    StreamReader sr = p.StandardOutput;

                    strOutput = sr.ReadToEnd();
                    sr.Close();

                    if (emailDebuggingMessages)
                    {
                        //   EmailError.emailError(null, string.Format("[FCWebUtil-20130417--1030] Debug SQL Server manager results: [{0}]", strOutput));
                    }


                    // 11/09/2018 04:19 pm - SSN - Added
                    if (!processHasExited)
                    {
                        exitCode = p.ExitCode;

                        if (exitCode.HasValue)
                        {
                            strError += "*".PadLeft(80, '*') + Environment.NewLine + Environment.NewLine;
                            strError += $"********** waitForExit timed out ({waitForExitTimeout}) - ExitCode [{exitCode}]" + Environment.NewLine + Environment.NewLine;
                            strError += "*".PadLeft(80, '*') + Environment.NewLine + Environment.NewLine;
                        }
                    }


                    StreamReader sr2 = p.StandardError;

                    strError += sr2.ReadToEnd();
                    sr2.Close();
                    p.Close();
                    if (emailDebuggingMessages)
                    {
                        //  EmailError.emailError(null, string.Format("[FCWebUtil-20130417--1028] Debug SQL Server manager error: [{0}]", strError));
                    }

                    System.IO.File.Delete(fileName);


                }


            }
            catch (Exception ex)
            {
                strError += Environment.NewLine + Environment.NewLine + ex.Message;

                //  EmailError.emailError(ex, string.Format("[FCWebUtil-20130129-0129-v2] Failed to run command. {0}", sb));


            }

            Monitor.Exit(LocalDirectory);


        }
    }
}
