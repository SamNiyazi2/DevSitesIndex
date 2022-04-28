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
using SSN_GenUtil_StandardLib;

// 09/04/2018 06:38 am - SSN



namespace DevSitesIndex.Controllers
{

    // 08/12/2019 12:21 pm - SSN - [20190812-0945] - [014] - Add identity
    // Add Authorize    public class CreateModel : PageModel
    [Authorize]
    public class DemoSitesController : Controller
    {

        // 06/13/2021 08:04 am - SSN - [20210613-0452] - [010] - Adding tags to DevSite

        const int DEFAULT_RECORDS_PER_PAGE_TEMP = 53;
        const int DEFAULT_CURRNT_PAGE_TEMP = 1;

        // 03/21/2022 02:27 pm - SSN - [20220321-1408] - [007] - Takeout TelemetryClient - Use logger
        // Added loger


        public DemoSitesController(IDevSitesIndexRepository devSitesIndexRepository, ILogger_SSN logger)
        {
            _devSitesIndexRepository = devSitesIndexRepository;
            this.logger = logger;
        }

        private readonly IDevSitesIndexRepository _devSitesIndexRepository;
        private readonly ILogger_SSN logger;

        // 03/10/2022 01:58 pm - SSN - [20220310-1358] - [001] - Allow anonymous 

        [AllowAnonymous]
        public IActionResult Index()
        {

            // 08/28/2019 09:02 am - SSN - [20190828-0819] - [005] - Adding Application Insights
            // 03/21/2022 02:26 pm - SSN - [20220321-1408] - [006] - Takeout TelemetryClient - Use logger

            //TelemetryClient telemetry = new TelemetryClient();
            //telemetry.TrackPageView("DemoSite-20190828-0902: Demo site index page.");

            logger.TrackPageView("DemoSite-20190828-0902-B: Demo site index page.");

            DemoSitesViewModel vm = new DemoSitesViewModel();



            vm.selectedPage = "index_p1";

            return View(vm.selectedPage, vm);

        }


        public IActionResult Index_p2()
        {
            try
            {
                DemoSitesViewModel vm = new DemoSitesViewModel();
                // 04/27/2022 03:33 pm - SSN - [20220427-1524] - [003] - Add DTO for devSitesTechnologies
                // vm.devSites = _devSitesIndexRepository.GetDevSites(DEFAULT_RECORDS_PER_PAGE_TEMP, DEFAULT_CURRNT_PAGE_TEMP);
                vm.devSites_Combo_v03 = DevSite_Combo.devSites_input( _devSitesIndexRepository.GetDevSites(DEFAULT_RECORDS_PER_PAGE_TEMP, DEFAULT_CURRNT_PAGE_TEMP));

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


                // 04/27/2022 03:43 pm - SSN - [20220427-1524] - [003] - Add DTO for devSitesTechnologies
                // vm.devSites = _devSitesIndexRepository.GetDevSites(DEFAULT_RECORDS_PER_PAGE_TEMP, DEFAULT_CURRNT_PAGE_TEMP);
                vm.devSites_Combo_v03  = DevSite_Combo.devSites_input( _devSitesIndexRepository.GetDevSites(DEFAULT_RECORDS_PER_PAGE_TEMP, DEFAULT_CURRNT_PAGE_TEMP));

                // 09/21/2019 09:43 am - SSN - [20190921-0357] - [015] - Creating multiple entry for Webpack
                // foreach (Entities.DevSite r in vm.devSites_Combo_v03 )
                foreach (DevSite_Combo r in vm.devSites_Combo_v03 )
                {
                    r.devSite_v04.Solution_Details = "***Remove***";
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


        // 12/13/2019 06:37 am - SSN - Adding claims
        [Authorize(Policy = "EmployeeOnly")]
        public IActionResult Test_Access1()
        {
            return View("index_p2");
        }

        [Authorize(Policy = "Managers")]
        public IActionResult Test_Access2()
        {
            return View("index_p2");
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