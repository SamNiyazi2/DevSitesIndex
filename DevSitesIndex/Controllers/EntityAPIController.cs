using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using DevSitesIndex.Util;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using SSN_GenUtil_StandardLib;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
// 04/12/2019 11:44 am - SSN - [20190412-1126] - Timelog - save data - Copying from DemoSitesAPIController


namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    // 06/16/2021 02:52 am - SSN - [20210613-0452] - [060] - Adding tags to DevSite
    // Controller to ControllerBase Wouldn't work since we are passing views in some calls (To update timelog and projects updated table raws)
    // abstract public class EntityAPIController<T> : Controller
    abstract public class EntityAPIController<T> : Controller
    {

        public IEntityRepository<T> _entityRepository;

        // 09/24/2019 05:48 am - SSN - [20190924-0401] - [006] - Quick timelog entry
        // Add _context
        // public DevSitesIndexContext _context;
        // 09/30/2019 10:04 pm - SSN - Replaced _context

        protected readonly DevSitesIndexContext context;
        protected readonly ILogger_SSN logger;


        public EntityAPIController(DevSitesIndexContext context, ILogger_SSN logger)
        {
            this.context = context;
            this.logger = logger;

        }


        // GET: api/<controller>
        [HttpGet]
        public IQueryable<T> Get()
        {

            IQueryable<T> entity = _entityRepository.GetAll();

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
        public ActionResult Post([FromBody]  T value)
        {
            // 05/21/2019 11:33 am - SSN - Return OK and BadRequest


            // 05/19/2019 03:06 pm - SSN - [20190519-1412] - [005] - Continue work on adding continue option for timesheet record
            // Testing save on update

            try
            {


                _entityRepository.Update(value);

                // 09/29/2019 09:50 am - SSN - [20190928-1256] - [017] - Adding Entity Framework model attribute
                // if (!_entityRepository.Save())
                // 11/16/2019 08:03 pm - SSN - [20191116-1516] - [010] - Timelog edit (AngularJS client version)
                // Leave exception handling to repository
                // Exception ex = _entityRepository.Save();
                _entityRepository.Save();



            }
            catch (Exception ex)
            {

                // Todo Todo Todo Todo Todo Todo Todo 
                // Todo Todo Todo Todo Todo Todo Todo 
                // Todo Todo Todo Todo Todo Todo Todo 
                // Todo Todo Todo Todo Todo Todo Todo 
                // Todo Todo Todo Todo Todo Todo Todo 

                // 09/29/2019 11:43 am - SSN - [20190928-1256] - [022] - Adding Entity Framework model attribute
                //string message = ex.Message;
                SSN_GenUtil_StandardLib.ExceptionHandler_SSN eh = new SSN_GenUtil_StandardLib.ExceptionHandler_SSN();

                SSN_GenUtil_StandardLib.ExceptionsList el = eh.HandleException_GetExAsSB_v02(ex);

                string message = el.Message_ToStringBuilder().ToString();
                return BadRequest(string.Format("Failed to save record.  (DemoSite-20190521-1150-ZZZ)  {0}", message));

            }

            // 12/02/2019 08:14 am - SSN - Return value. To refresh screen.
            return Ok(value);


        }


        //// PUT api/<controller>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}


        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                _entityRepository.Delete(id);
                _entityRepository.Save();

                return Ok();
            }
            catch (Exception ex)
            {
                ExceptionHandler_SSN eh = new SSN_GenUtil_StandardLib.ExceptionHandler_SSN();

                ExceptionsList el = eh.HandleException_GetExAsSB_v02(ex);

                string message = el.Message_ToStringBuilder().ToString();
                return BadRequest(string.Format("Failed to delete record.  (DemoSite-20210616-2134)  {0}", message));

            }
        }


    }







    // 09/16/2019 04:58 am - SSN - [20190916-0355] - [005] - Adding JobAPI controller
    public class TypeAheadRecord
    {
        public TypeAheadRecord(int id, string description)
        {
            this.ta_id = id.ToString();
            this.ta_description = description;
        }

        public string ta_id { get; set; }
        public string ta_description { get; set; }
    }


}
