using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using SSN_GenUtil_StandardLib;

// 06/16/2021 02:51 am - SSN - [20210613-0452] - [059] - Adding tags to DevSite

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DevSiteTechnologyAPIController : EntityAPIController<DevSiteTechnology>
    {

        //private readonly DevSitesIndexContext context;
        //private readonly ILogger_SSN logger;

        public DevSiteTechnologyAPIController(DevSitesIndexContext context, ILogger_SSN logger) : base(context, logger)
        {
            //this.context = context;
            //this.logger = logger;

            _entityRepository = new DevSiteTechnologyRepository(context, logger);
        }

        // 06/16/2021 07:24 pm - SSN - [20210613-0452] - [102] - Adding tags to DevSite
        [Route("post_custom")]
        public new ActionResult Post([FromBody]  DevSiteTechnology value)
        {

            DevSiteTechnology duplicateRecord = context.DevSiteTechnologies.Include(r => r.Technology).FirstOrDefault(r => r.DevSiteId == value.DevSiteId && r.TechnologyId == value.TechnologyId);

            if (duplicateRecord != null)
            {
                return BadRequest("Duplicate record (20210624-0246-ssn)");
            }

            var returnedResults = base.Post(value);
            Type returnedResultsType = returnedResults.GetType();

            if (returnedResultsType.Equals(typeof(OkObjectResult)))
            {
                OkObjectResult returnedOK = base.Post(value) as OkObjectResult;
                DevSiteTechnology rec = returnedOK.Value as DevSiteTechnology;

                return Ok(context.DevSiteTechnologies.Where(r => r.Id == rec.Id).Include(r => r.Technology).FirstOrDefault());

            }
            else if (returnedResultsType.Equals(typeof(BadRequestObjectResult)))
            {
                BadRequestObjectResult badRequest = returnedResults as BadRequestObjectResult;
                return BadRequest(badRequest.Value);
            }
            else
            {
                return BadRequest($"devsite-20210616-2004-ssn: No case for response type {returnedResultsType}");
            }

        }
    }
}