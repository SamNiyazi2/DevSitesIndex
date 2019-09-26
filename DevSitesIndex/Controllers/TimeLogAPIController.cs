using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using DevSitesIndex.Util;
using Microsoft.AspNetCore.Mvc;

// 04/12/2019 02:24 pm - SSN - [20190412-1126] - Timelog - save data



// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    public class TimeLogAPIController : EntityAPIController<TimeLog>
    {

        // 09/26/2019 11:02 am - SSN - [20190926-1047] - [005] - Debugging: timelog not posting
        // Add logger

        public TimeLogAPIController(DevSitesIndexContext context, ILogger_SSN logger)
        {
            _entityRepository = new TimeLogRepository(context, logger);
            _context = context;

        }


        // 09/24/2019 05:10 am - SSN - [20190924-0401] - [003] - Quick timelog entry

        [HttpGet("get_custom/{id}")]
        public TimeLog Get_custom(int id)
        {
            JobRepository jobRepository = new JobRepository(_context);
            TimeLog entity = _entityRepository.GetRecord(id);
            entity.job.timelogs = null;

            return entity;
        }

    }
}
