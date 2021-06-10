using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SSN_GenUtil_StandardLib;

// 06/07/2021 06:25 am - SSN - [20210606-0227] - [016] - Testng for deployment

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Job_LineItemAPIController :  EntityAPIController<Job_Lineitem>
    {

        public Job_LineItemAPIController(DevSitesIndexContext context, ILogger_SSN logger) : base(context, logger)
        {
            _entityRepository = new Job_LineitemRepository(context, logger);
        }
    }
}