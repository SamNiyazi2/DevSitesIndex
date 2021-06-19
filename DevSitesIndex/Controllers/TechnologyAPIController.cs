using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SSN_GenUtil_StandardLib;

// 06/13/2021 10:15 pm - SSN - [20210613-0452] - [024] - Adding tags to DevSite

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TechnologyAPIController : EntityAPIController<Technology>
    {
        public TechnologyAPIController(DevSitesIndexContext context, ILogger_SSN logger) : base(context, logger)
        {
            _entityRepository = new TechnologyRepository(context, logger);
        }




        [Route("typeahead")]
        [HttpGet]
        public IEnumerable<TypeAheadRecord> Get_TA1()
        {

            IEnumerable<Technology> entity = _entityRepository.GetAll();

            return entity.Select(r => new TypeAheadRecord(r.Id, r.Description));
        }


        [Route("typeahead/{id}")]
        [HttpGet]
        public TypeAheadRecord Get_TA2(int? id)
        {

            TypeAheadRecord entity = default(TypeAheadRecord);

            if (id.HasValue)
            {
                Technology r = _entityRepository.GetRecord(id.Value);
                entity = new TypeAheadRecord(r.Id, r.Description);
            }
            return entity;

        }




    }
}