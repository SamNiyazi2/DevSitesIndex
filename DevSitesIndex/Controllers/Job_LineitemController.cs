using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SSN_GenUtil_StandardLib;

// 12/10/2020 04:38 pm - SSN - [20201210-1625] - [003] - Update Timelog edit MVC

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    /////////////////////////////////////////////////[ApiController]
    public class Job_LineitemController : EntityAPIController<Job_Lineitem>
    {
        public Job_LineitemController(DevSitesIndexContext context, ILogger_SSN logger) : base(context, logger)
        {
            _entityRepository = new Job_LineitemRepository(context, logger);
        }



        [Route("typeahead_jobrecords/{jobId}")]
        [HttpGet]
        public IEnumerable<TypeAheadRecord> Get_TA_JobRecords(int? jobId)
        {

            IEnumerable<Job_Lineitem> entity = _entityRepository.GetAll().Where(r => r.JobId == jobId);

            return entity.Select(r => new TypeAheadRecord(r.LineItemId, r.LineItem));
        }


        [Route("typeahead/{id}")]
        [HttpGet]
        public TypeAheadRecord Get_TA(int? id)
        {

            TypeAheadRecord entity = default(TypeAheadRecord);

            if (id.HasValue)
            {
                Job_Lineitem r = _entityRepository.GetRecord(id.Value);
                if (r != null)
                {
                    entity = new TypeAheadRecord(r.LineItemId, r.LineItem);
                }
            }
            return entity;

        }



    }
}