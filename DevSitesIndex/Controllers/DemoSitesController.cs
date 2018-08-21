using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Models;
using DevSitesIndex.Services;
using Microsoft.AspNetCore.Mvc;

namespace DevSitesIndex.Controllers
{
    public class DemoSitesController : Controller
    {
        // 07/29/2018 03:58 pm - SSN - Copied in

        public DemoSitesController(IDevSitesIndexRepository devSitesIndexRepository)
        {
            _devSitesIndexRepository = devSitesIndexRepository;
        }

        private readonly IDevSitesIndexRepository _devSitesIndexRepository;

        public IActionResult Index()
        {
            try
            {
                DemoSitesViewModel vm = new DemoSitesViewModel();
                vm.devSites = _devSitesIndexRepository.GetDevSites();

                return View(vm);

            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }
    }
}