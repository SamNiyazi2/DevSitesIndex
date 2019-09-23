﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// 09/21/2019 01:29 pm - SSN - [20190921-1129] - [004] - Plug in job status filter on job's index


namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Job_StatusAPIController : EntityAPIController<Job_Status>
    {
        // 09/21/2019 01:32 pm - SSN - [20190921-1129] - [005] - Plug in job status filter on job's index
        private readonly DevSitesIndexContext context;
        private readonly Util.ILogger_SSN logger;

        public Job_StatusAPIController(DevSitesIndexContext context, Util.ILogger_SSN logger)
        {
            _entityRepository = new Services.Job_StatusRepository(context);
            this.context = context;
            this.logger = logger;
        }


    }
}