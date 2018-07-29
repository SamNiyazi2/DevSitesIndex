using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 07/29/2018 10:15 am - SSN 

namespace DevSitesIndex.Models
{
    public class DemoSitesViewModel
    {
       public List<DemoSite> demoSites = new List<DemoSite>();

        public void getData()
        {
           
            demoSites.Add(new DemoSite
            {
                SiteTitle = "Knockout - Loading and saving data (M03)  -  KnockoutSiteTraining",
                SiteUrl = "http://knockoutsitetraining/KnockoutSiteTraining/E04_Data.html",
                SolutionName = @"C:\Sams_Projects\PluralSight\knockout-mvvm\d\M3\Code\before\KnockoutMVVM\PS_KnockoutMVVM_3_before.sln",
                Software = SoftwareCode.VS
            });

            demoSites.Add(new DemoSite
            {
                SiteTitle = "WebAPI - Data provider for KnockoutSiteTraining",
                SiteUrl = "http://knockout-mvvm-WebAPI-Test/api/tasks",
                SolutionName = @"C:\Sams_Projects\PluralSight\knockout-mvvm\WebAPI_Test\WebAPI_Test\WebAPI_Test",
                Software = SoftwareCode.VS
            });



        }
    }
}
