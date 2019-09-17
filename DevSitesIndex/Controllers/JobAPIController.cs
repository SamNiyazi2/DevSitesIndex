using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// 09/16/2019 03:55 am - SSN - [20190916-0355] - [001] - Adding JobAPI controller



using Microsoft.EntityFrameworkCore;


namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    //  [ApiController]
    public class JobAPIController : EntityAPIController<Job>
    {
        private readonly DevSitesIndexContext context;

        public JobAPIController(DevSitesIndexContext context)
        {
            _entityRepository = new JobRepository(context);
            this.context = context;
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


        // 09/17/2019 01:01 am - SSN - [20190916-1123] - [017] - Adding job status

        [Route("list/{pageNo}/{recordsPerPage}/{columnName}/{desc}")]
        [HttpGet]
        public DataBag<Job> Get_Jobs(int? pageNo, int? recordsPerPage, string columnName, string desc)
        {
            int _recordsPerPage = recordsPerPage ?? 10;
            _recordsPerPage = (_recordsPerPage > 50) ? 50 : _recordsPerPage;

            int _pageNo = pageNo ?? 1;
            int recordsToSkip = _recordsPerPage * (_pageNo - 1);


            IQueryable<Job> list = context.Jobs.FromSql("demosites.Jobs_Index_WithLastActivityDate").Take(_recordsPerPage).Skip(recordsToSkip);

            list = Util.Reflection_Util.SourceSetOrder<Job>(list, columnName, desc.ToLower() == "true");

            DataBag<Job> databag = new DataBag<Job> { dataList = list, columnName = columnName, desc = desc.ToLower() != "true" };

            return databag;
        }


    }
}
