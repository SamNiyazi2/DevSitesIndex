using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Models;
using Microsoft.AspNetCore.Mvc;

namespace DevSitesIndex.Controllers
{
    public class DemoSitesController : Controller
    {
        public IActionResult Index()
        {
            DemoSitesViewModel vm = new DemoSitesViewModel();
            vm.getData();
            return View(vm);
        }
    }
}