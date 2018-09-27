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

                return View("index_p1", vm);

            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }
        // 09/04/2018 06:38 am - SSN

        public IActionResult Index_p2()
        {
            try
            {
                DemoSitesViewModel vm = new DemoSitesViewModel();
                vm.devSites = _devSitesIndexRepository.GetDevSites();

                return View("index_p2", vm);

            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        // 09/04/2018 06:38 am - SSN

        public IActionResult Index_p3()
        {
            try
            {
                DemoSitesViewModel vm = new DemoSitesViewModel();
                vm.devSites = _devSitesIndexRepository.GetDevSites();

                return View("index_p3", vm);

            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        // 08/21/2018 03:34 am - SSN - Adding
        protected override void Dispose(bool disposing)
        {
            if (_devSitesIndexRepository != null)
            {
                _devSitesIndexRepository.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}