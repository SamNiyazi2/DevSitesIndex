using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevSitesIndex.Filters;
using DevSitesIndex.Models;
using DevSitesIndex.Services;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DevSitesIndex.Controllers
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
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

            // 08/28/2019 09:02 am - SSN - [20190828-0819] - [005] - Adding Application Insights
            TelemetryClient telemetry = new TelemetryClient();
            telemetry.TrackPageView("DemoSite-20190828-0902: Demo site index page.");




            //try
            //{


            // 05/31/2019 03:37 pm - SSN - Testing capturing errors with databsae.  Take out try/catch block




            DemoSitesViewModel vm = new DemoSitesViewModel();


            // 08/12/2019 06:06 am - SSN - [20190812-0515] - [007] - Apply fulltext search
            // Remove
            // vm.devSites = _devSitesIndexRepository.GetDevSites();





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

                // 09/21/2019 09:43 am - SSN - [20190921-0357] - [015] - Creating multiple entry for Webpack
                foreach (Entities.DevSite r in vm.devSites)
                {
                    r.Solution_Details = "***Remove***";
                }

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