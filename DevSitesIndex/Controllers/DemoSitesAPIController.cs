using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Models;
using DevSitesIndex.Services;
using DevSitesIndex.Util;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    // 06/15/2021 11:41 pm - SSN - [20210613-0452] - [054] - Adding tags to DevSite
    // Add ApiController and Controller to ControllerBase
    [ApiController]
    public class DemoSitesAPIController : ControllerBase
    {


        public DemoSitesAPIController(IDevSitesIndexRepository devSitesIndexRepository)
        {
            _devSitesIndexRepository = devSitesIndexRepository;
        }

        private readonly IDevSitesIndexRepository _devSitesIndexRepository;



        // 09/10/2019 01:03 am - SSN - [20190909-2136] - [003] -  But leave call to the original


        // GET: api/<controller>
        [Route("/api/demositesapi/{recordsPerPage}/{currentPage}")]
        [HttpGet]
        // 04/27/2022 03:54 pm - SSN - [20220427-1524] - [006] - Add DTO for devSitesTechnologies
        // public IEnumerable<DevSite> Get(int recordsPerPage, int currentPage)
        public List<DevSite_Combo> Get(int recordsPerPage, int currentPage)
        {
            recordsPerPage = recordsPerPage > 25 ? 25 : recordsPerPage;
            currentPage = currentPage < 1 ? 1 : currentPage;

            // 04/27/2022 03:54 pm - SSN - [20220427-1524] - [006] - Add DTO for devSitesTechnologies

            // IEnumerable<DevSite> devSites_1 = _devSitesIndexRepository.GetDevSites(recordsPerPage, currentPage);


            //devSites_1_combo.devSites_v02 = _devSitesIndexRepository.GetDevSites(recordsPerPage, currentPage);
            List<DevSite_Combo> devSites_1_combos = DevSite_Combo.devSites_input(_devSitesIndexRepository.GetDevSites(recordsPerPage, currentPage).ToList());


            //return devSites_1;
            return devSites_1_combos;
        }


        [Route("/api/demositesapi/recordcount")]
        [HttpGet]
        public int GetDevSitesCount()
        {
            return _devSitesIndexRepository.GetDevSitesCount();
        }



        // 09/09/2019 10:30 pm - SSN - [20190909-2136] - [003] -  Limit record count

        [Route("/api/demositesapi/top")]
        [HttpGet]
        // 04/27/2022 04:01 pm - SSN - [20220427-1524] - [007] - Add DTO for devSitesTechnologies
        // public IEnumerable<DevSite> GetTop(int? recordCount)
        public List<DevSite_Combo> GetTop(int? recordCount)
        {
            // System.Threading.Thread.Sleep(2000);
            int _recordCount = recordCount ?? 15;
            _recordCount = _recordCount > 10 ? 10 : _recordCount;

            // 04/27/2022 04:01 pm - SSN - [20220427-1524] - [007] - Add DTO for devSitesTechnologies
            // IEnumerable<DevSite> devSites_1 = Get(_recordCount, 1);
            List<DevSite_Combo> devSite_combos = Get(_recordCount, 1);

            // Redundant
            //////////////////if (recordCount.HasValue)
            //////////////////    devSites_1 = devSites_1.Take(recordCount.Value);

            //return devSites_1;
            return devSite_combos;

        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }


        [Route("/api/demositesapi/Search")]
        // 04/13/2022 07:43 am - SSN - Add authorize
        // 04/27/2022 06:08 am - SSN - Why authorize public access page?
        // [Authorize]
        [HttpPost]
        // 08/15/2021 02:01 pm - SSN - Change return type to handle errors.
        //public async Task<IEnumerable<DevSite>> SearchAsync([FromBody] SearchObj obj1)
        // 04/27/2022 07:20 pm - SSN - [20220427-1524] - [008] - Add DTO for devSitesTechnologies
        //public async Task<ActionResult<IEnumerable<DevSite>>> SearchAsync([FromBody] SearchObj obj1)
        // 09/27/2022 02:36 pm - SSN - Adding paging to search option
        // public async Task<ActionResult<IEnumerable<DevSite_Combo>>> SearchAsync([FromBody] SearchObj searchObj)
        public async Task<ActionResult<DevSiteSearchResult_DTO>> SearchAsync([FromBody] SearchObj searchObj)
        {

            try
            {

                // 04/27/2022 07:20 pm - SSN - [20220427-1524] - [008] - Add DTO for devSitesTechnologies
                // IEnumerable<DevSite> devSites_1 = await _devSitesIndexRepository.GetDevSites(searchText);

                // 09/27/2022 02:34 pm - SSN - Adding paging to search option
                DataBag<DevSite> searchResultData = await _devSitesIndexRepository.GetDevSites_v02(searchObj);

                List<DevSite_Combo> devSite_combos = DevSite_Combo.devSites_input(searchResultData.dataList);

                DevSiteSearchResult_DTO dto = new DevSiteSearchResult_DTO();
                dto.devSite_Combo = devSite_combos;
                dto.SqlStatsRecord = searchResultData.sqlStatsRecord;

                // return Ok(devSites_1);
                // return Ok(devSite_combos);
                return Ok(dto);
            }
            catch (Exception ex)
            {
                return BadRequest(new { ErrorMessage = $"Failed to process request: {ex.Message}" });
            }


        }


        // POST api/<controller>
        // 04/13/2022 07:43 am - SSN - Add authorize
        [Authorize]
        [HttpPost]
        public async void Post([FromBody] DevSite value)
        {
            await _devSitesIndexRepository.UpdateDevSiteAsync(value);
            _devSitesIndexRepository.Save();

        }

        // 04/13/2022 07:43 am - SSN - Add authorize
        [Authorize]
        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        // 04/27/2022 06:09 am - SSN - Add Authorize
        [Authorize]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }




    }
}
