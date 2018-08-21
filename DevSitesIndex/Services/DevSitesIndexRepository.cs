using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;

// 07/29/2018 03:45 pm - SSN - Copied

namespace DevSitesIndex.Services
{
    public class DevSitesIndexRepository : IDevSitesIndexRepository
    {
        private readonly DevSitesIndexContext _context;

        public DevSitesIndexRepository(DevSitesIndexContext context)
        {
            this._context = context;
        }


        //public void getData()
        //{

        //    demoSites.Add(new DemoSite
        //    {
        //        SiteTitle = "Knockout - Loading and saving data (M03)  -  KnockoutSiteTraining",
        //        SiteUrl = "http://knockoutsitetraining/KnockoutSiteTraining/E04_Data.html",
        //        SolutionName = @"C:\Sams_Projects\PluralSight\knockout-mvvm\d\M3\Code\before\KnockoutMVVM\PS_KnockoutMVVM_3_before.sln",
        //        Software = SoftwareCode.VS
        //    });

        //    demoSites.Add(new DemoSite
        //    {
        //        SiteTitle = "WebAPI - Data provider for KnockoutSiteTraining",
        //        SiteUrl = "http://knockout-mvvm-WebAPI-Test/api/tasks",
        //        SolutionName = @"C:\Sams_Projects\PluralSight\knockout-mvvm\WebAPI_Test\WebAPI_Test\WebAPI_Test",
        //        Software = SoftwareCode.VS
        //    });



        //}

        public IEnumerable<DevSite> GetDevSites()
        {
            return _context.DevSites.ToList();
        }


        public DevSite GetDevSite(int devSiteID)
        {
            var city = _context.DevSites.Where(c => c.Id == devSiteID);

            return city.FirstOrDefault();
        }


        public bool Save()
        {
            return _context.SaveChanges() > 0;
        }
    }
}