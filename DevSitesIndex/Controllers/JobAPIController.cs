using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// 09/16/2019 03:55 am - SSN - [20190916-0355] - [001] - Adding JobAPI controller

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    //  [ApiController]
    public class JobAPIController : EntityAPIController<Job>
    {

        public JobAPIController(DevSitesIndexContext context)
        {
            _entityRepository = new JobRepository(context);

        }


        #region For Typeahead - DowndownListDirective

        // 09/16/2019 04:28 am - SSN - [20190916-0355] - [004] - Adding JobAPI controller
        // For Typeahead

        // GET: api/<controller>
        [Route("typeahead")]
        [HttpGet]
        public IEnumerable<TypeAheadRecord> Get_TA()
        {

            IEnumerable<Job> entity = _entityRepository.GetAll();

            return entity.Select(r => new TypeAheadRecord(r.JobID, r.JobTitle));
        }


        [Route("typeahead/{id}")]
        [HttpGet]
        public TypeAheadRecord Get_TA(int? id)
        {

            TypeAheadRecord entity = default(TypeAheadRecord);

            if (id.HasValue)
            {
                Job r = _entityRepository.GetRecord(id.Value);
                entity = new TypeAheadRecord(r.JobID, r.JobTitle);
            }


            return entity;

        }

        // 09/16/2019 04:28 am - SSN - [20190916-0355] - [004] - Adding JobAPI controller
        // For Typeahead

        #endregion For Typeahead
    }
}
