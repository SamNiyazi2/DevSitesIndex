// 09/21/2019 07:14 am - SSN - [20190921-0357] - [009] - Creating multiple entry for Webpack
var ngDefaultApplication = 'demoSites_Index';
import { demosites_index_p1_instance } from "./DemoSites_index_p1";
import { dataService_instance } from './DataServices';
import { ssn_devsite_angular_module_instance } from './demoSites_Index';
dataService_instance.doSetup(ngDefaultApplication);
ssn_devsite_angular_module_instance.ssn_devsite_angular_module;
demosites_index_p1_instance;
// 10/01/2019 10:15 am - SSN - [20191001-0944] - [006] - Adding Application Insights for JavaScript
import { AppInsights_Util } from './Util/ApplicationInsights_Monitor';
// 11/23/2019 08:53 am - SSN 
import { RestorePreviousPageState_instance } from './Util/RestorePreviousPageState';
RestorePreviousPageState_instance.doSetup(ngDefaultApplication);
AppInsights_Util.doSetup();
AppInsights_Util.logEvent("DemoSites_Index_Main", { SourceCode: "20191001-1132-C2", Message: "Loading DemoSites_Index_Main" });
//# sourceMappingURL=DemoSites_Index_main.js.map