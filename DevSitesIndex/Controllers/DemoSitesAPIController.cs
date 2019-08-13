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

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    public class DemoSitesAPIController : Controller
    {


        public DemoSitesAPIController(IDevSitesIndexRepository devSitesIndexRepository)
        {
            _devSitesIndexRepository = devSitesIndexRepository;
        }

        private readonly IDevSitesIndexRepository _devSitesIndexRepository;



        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<DevSite> Get()
        {
           // System.Threading.Thread.Sleep(2000);

            IEnumerable<DevSite> devSites_1 = _devSitesIndexRepository.GetDevSites();

            return devSites_1;


        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }


        // 08/12/2019 06:10 am - SSN - [20190812-0515] - [008] - Apply fulltext search
        // Add SearchText
        public class SearchObj
        {
            public string SearchText { get; set; }
        }
        [Route("/api/demositesapi/Search")]
        [HttpPost]
        public IEnumerable<DevSite> Search( SearchObj obj1)
        {
            var request = Request;

            IEnumerable<DevSite> devSites_1 = _devSitesIndexRepository.GetDevSites();

            return devSites_1;

        }


        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]DevSite value)
        {
            _devSitesIndexRepository.UpdateDevSite(value);
            _devSitesIndexRepository.Save();

        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }




    }
}
