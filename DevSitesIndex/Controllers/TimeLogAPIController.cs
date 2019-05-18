﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Mvc;

// 04/12/2019 02:24 pm - SSN - [20190412-1126] - Timelog - save data



// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    public class TimeLogAPIController : EntityAPIController<TimeLog>
    {

        public TimeLogAPIController(DevSitesIndexContext context)
        {
            _entityRepository = new TimeLogRepository(context);

        }


    }
}