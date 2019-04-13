using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Entities;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Mvc;

// 04/13/2019 10:37 am - SSN - [20190413-1037] - Add discipline lookup

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevSitesIndex.Controllers
{
    [Route("api/[controller]")]
    public class DisciplineAPIController : EntityAPIController<Discipline>
    {

        public DisciplineAPIController(DevSitesIndexContext context)
        {
            _entityRepository = new DisciplineRepository(context);


        }


    }
}
