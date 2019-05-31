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
            //try
            //{
            
            
            // 05/31/2019 03:37 pm - SSN - Testing capturing errors with databsae.  Take out try/catch block

            DemoSitesViewModel vm = new DemoSitesViewModel();
            vm.devSites = _devSitesIndexRepository.GetDevSites();

            // 04/16/2019 07:37 pm - SSN - [20190416-1937] - Corrrection angular version for P2 and P3
            vm.selectedPage = "index_p1";

            return View(vm.selectedPage, vm);


            //}
            //catch (Exception ex)
            //{

            //    return BadRequest(ex);
            //}
        }
        // 09/04/2018 06:38 am - SSN

        public IActionResult Index_p2()
        {
            try
            {
                DemoSitesViewModel vm = new DemoSitesViewModel();
                vm.devSites = _devSitesIndexRepository.GetDevSites();

                // 04/16/2019 07:37 pm - SSN - [20190416-1937] - Corrrection angular version for P2 and P3
                vm.selectedPage = "index_p2";

                return View(vm.selectedPage, vm);

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

                // 04/16/2019 07:37 pm - SSN - [20190416-1937] - Corrrection angular version for P2 and P3
                vm.selectedPage = "index_p3";

                return View(vm.selectedPage, vm);

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