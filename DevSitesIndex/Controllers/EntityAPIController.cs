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
// 04/12/2019 11:44 am - SSN - [20190412-1126] - Timelog - save data - Copying from DemoSitesAPIController


namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    abstract public class EntityAPIController<T> : Controller
    {

        public IEntityRepository<T> _entityRepository;




        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<T> Get()
        {

            IEnumerable<T> entity = _entityRepository.GetAll();

            return entity;

        }


        // 04/29/2019 06:01 pm - SSN - [20190429-1748] - [003] - Angular clock out popup

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public T Get(int id)
        {
            T entity = _entityRepository.GetRecord(id);

            return entity;
        }

        // POST api/<controller>
        //   [HttpPost]
        public void Post([FromBody]  T value)//  TimeLog value) x123
        {

            _entityRepository.Update(value);

            // 05/19/2019 03:06 pm - SSN - [20190519-1412] - [005] - Continue work on adding continue option for timesheet record
            // Testing save on update
            try
            {
                if (!_entityRepository.Save())
                {
                    string message = "Failed to update";
                }

            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }

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
    public class x123
    {
        public string DisciplineID { get; set; }
        public DateTime StartTime { get; set; }
        public int TimeLogId { get; set; }
        public string WorkDetail { get; set; }

    }
}
