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
                Exception ex = _entityRepository.Save();
                if (ex != null)
                {
                    return BadRequest(string.Format("Failed to save record .  (DemoSite-20190521-1150-AAA) {0}", ex.Message));
                }

            }
            catch (Exception ex)
            {

                // 09/29/2019 11:43 am - SSN - [20190928-1256] - [022] - Adding Entity Framework model attribute
                //string message = ex.Message;
                SSN_GenUtil_StandardLib.ExceptionHandler_SSN eh = new SSN_GenUtil_StandardLib.ExceptionHandler_SSN();

                SSN_GenUtil_StandardLib.ExceptionsList el = eh.HandleException_GetExAsSB_v02(ex);



                string message = el.Message_ToStringBuilder().ToString();
                return BadRequest(string.Format("Failed to save record.  (DemoSite-20190521-1150-ZZZ)  {0}", message));
            }

            return Ok();


        }


        //// PUT api/<controller>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}


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







    // 09/17/2019 08:04 am - SSN - [20190916-1123] - [020] - Adding job status

    public class DataBag<T>
    {


        public class FeedbackMessage
        {
            public string Key { get; set; }
            public List<string> ErrorMessages { get; set; } = new List<string>();

        }



        // 11/06/2019 04:31 pm - SSN - [20191104-0607] - [026] - Registration - Client 
        // Use to display feedback to user after submitting a form.
        public class PageContent_duplicate
        {
            public string Title { get; set; }
            public string Body { get; set; }
        }
        public PageContent_duplicate pageContent { get; set; }

        public void pageContent_Title_Add(string title)
        {
            if (pageContent == null) pageContent = new PageContent_duplicate();
            pageContent.Title = title;
        }

        public void pageContent_Body_Add(string body)
        {
            if (pageContent == null) pageContent = new PageContent_duplicate();
            pageContent.Body = body;
        }


        public IEnumerable<T> dataList { get; set; }
        public SqlStatsRecord sqlStatsRecord { get; set; }


        // 11/06/2019 10:07 am - SSN - [20191104-0607] - [022] - Registration - Client 
        // public ModelStateDictionary modelState { get; set; }
        public List<FeedbackMessage> FeedbackMessages { get; set; }


        public void addToBagModelError(string key, string errorMessage)
        {

            //if (modelState == null) modelState = new ModelStateDictionary();
            //modelState.AddModelError(key, errorMessage);

            if (FeedbackMessages == null) FeedbackMessages = new List<FeedbackMessage>();
            FeedbackMessage fbm = FeedbackMessages.FirstOrDefault(r => r.Key == key);
            if (fbm == null)
            {
                fbm = new FeedbackMessage { Key = key };
                FeedbackMessages.Add(fbm);
            }
            fbm.ErrorMessages.Add(errorMessage);

        }


        // public bool hasErrors => modelState != null && modelState.ErrorCount > 0;
        public bool hasErrors => FeedbackMessages != null && FeedbackMessages.Count > 0;

        public void copyFromBagModelError(ModelStateDictionary pageModelState)
        {
            if (FeedbackMessages == null) return;

            //foreach (KeyValuePair<string, ModelStateEntry> e in modelState)
            foreach (FeedbackMessage e in FeedbackMessages)
            {
                string key = e.Key;
                //foreach (ModelError me in e.Value.Errors)
                foreach (string message in e.ErrorMessages)
                {
                    // string em = me.ErrorMessage;
                    // pageModelState.AddModelError(key, em);
                    pageModelState.AddModelError(e.Key, message);
                }

            }

        }

        internal void copyToBadModelError(ModelStateDictionary modelState)
        {

            foreach (KeyValuePair<string, ModelStateEntry> e in modelState)
            {
                foreach (ModelError me in e.Value.Errors)
                {
                    addToBagModelError(e.Key, me.ErrorMessage);
                }
            }
        }

    }







    // 09/17/2019 11:55 am - SSN - [20190917-0929] - [006] - Adding paging for angular lists
    // 10/21/2019 09:19 am - SSN - [20191021-0444] - [011] - M12 - Creating directives and advanced components in Angular.
    // Revised for validation and defaults;

    public class SqlStatsRecord
    {


        public int RecordsPerPage_Default = 10;

        private int recordsPerPage;
        public int RecordsPerPage
        {
            get
            {
                return recordsPerPage <= 0 ? RecordsPerPage_Default : recordsPerPage;

            }
            set
            {
                recordsPerPage = value;
            }
        }

        private int currentPageNo;
        public int CurrentPageNo
        {
            get
            {
                if (TotalRecordCount > 0 && currentPageNo > TotalRecordCount)
                    return 1;

                return currentPageNo <= 0 ? 1 : currentPageNo;

            }
            set
            {
                currentPageNo = value;
            }
        }

        public int TotalRecordCount { get; set; }
        public string columnName { get; set; }
        public string columnNameSelected { get; set; }
        public bool desc { get; set; }

        // 09/22/2019 08:25 am - SSN - [20190922-0822] - [002] - Plug in job status filter on job's index - update data source
        public string job_statuses_selected { get; set; }


        // 10/21/2019 10:35 pm - SSN - [20191021-2033] - [006] - Revise timelog search returned result
        private string _searchTerm;
        public string searchTerm
        {
            get
            {
                return string.IsNullOrWhiteSpace(_searchTerm) ? "" : _searchTerm;
            }
            set
            {
                _searchTerm = value;
            }
        }

    }



}
