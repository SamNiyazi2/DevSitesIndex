using DevSitesIndex.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// 03/25/2022 01:19 am - SSN - [20220325-0119] - [001] - Show page title

namespace DevSitesIndex.Pages.Shared
{
    public static class PageTitleUtil
    {

        public static string GetTitle_TimeLog(TimeLog timeLog)
        {
            StringBuilder title = new StringBuilder();
            if (timeLog != null)
            {
                title.Append($"{timeLog.TimeLogId}");
                if (timeLog.job_Lineitem != null)
                {
                    if (!string.IsNullOrEmpty(timeLog.job_Lineitem.LineItem))
                        title.Append($" - {timeLog.job_Lineitem.LineItem}");
                    else
                    {
                        if (timeLog.job_Lineitem.job != null)
                        {
                            title.Append($" - {timeLog.job_Lineitem.job.JobTitle}");
                        }
                    }

                }
            }

            return title.ToString();
        }

        public static string GetTitle_Job(Job job)
        {
            StringBuilder title = new StringBuilder();
            if (job != null)
            {
                title.Append($"{job.JobID} - {job.JobTitle}");

                if (job.project != null)
                {
                    title.Append($" - {job.project.ProjectTitle }");
                }
            }

            return title.ToString();
        }

        public static string GetTitle_Project(Project project)
        {
            StringBuilder title = new StringBuilder();

            if (project != null)
            {
                title.Append($"{project.ProjectID } - {project.ProjectTitle}");

                if (project.company != null)
                {
                    title.Append($" - {project.company.CompanyName}");
                }
            }

            return title.ToString();
        }


        public static string GetTitle_DevSite(DevSite devSite)
        {
            StringBuilder title = new StringBuilder();

            if (devSite != null)
            {
                title.Append($"{devSite.Id}");


                if (devSite.JobDevSites != null)
                {
                    title.Append($" - Jobs: ({devSite.JobDevSites.Count()})");
                }

                title.Append($" - {devSite.SiteTitle}");
            }

            return title.ToString();
        }

    }
}
