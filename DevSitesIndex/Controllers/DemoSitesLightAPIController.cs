using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

// 04/09/2019 07:42 am - SSN - Light API - SiteTitle and key only

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    public class DemoSitesLightAPIController : Controller
    {


        public DemoSitesLightAPIController(IDevSitesIndexRepository devSitesIndexRepository)
        {
            _devSitesIndexRepository = devSitesIndexRepository;
        }

        private readonly IDevSitesIndexRepository _devSitesIndexRepository;


        public class TempRec
        {
            public int Id { get; set; }
            public string siteTitle { get; set; }
        }
        // GET: api/<controller>
        [HttpGet]
        public IList<TempRec> Get(string lookupValue)
        {
            if (string.IsNullOrEmpty(lookupValue)) lookupValue = "";

            List<TempRec> devSites_1 = _devSitesIndexRepository.GetDevSites()
                .Where(r => r.SiteTitle.ToLower().Contains(lookupValue) || (r.Solution_Details??"").ToLower().Contains(lookupValue))
                .Select(r => new TempRec { Id = r.Id, siteTitle = r.SiteTitle })
                .OrderBy( r=>r.siteTitle).ToList();

            return devSites_1;


        }



    }
}
