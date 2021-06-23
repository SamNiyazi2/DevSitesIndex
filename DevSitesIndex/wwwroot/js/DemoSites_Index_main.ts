
// 09/21/2019 07:14 am - SSN - [20190921-0357] - [009] - Creating multiple entry for Webpack

import * as util from '../js/site';

let ngApplicationName = 'demoSites_Index';

import { demosites_index_p1_instance } from "./DemoSites_index_p1"

import { dataService_instance } from './Shared/DataServices';

import { ssn_devsite_angular_module_instance } from './demoSites_Index';



dataService_instance.doSetup(ngApplicationName);

ssn_devsite_angular_module_instance.ssn_devsite_angular_module;

demosites_index_p1_instance;

// 10/01/2019 10:15 am - SSN - [20191001-0944] - [006] - Adding Application Insights for JavaScript


import { AppInsights_Util } from './Util/ApplicationInsights_Monitor';


// 11/23/2019 08:53 am - SSN 
//import { RestorePreviousPageState_instance } from './Util/RestorePreviousPageState';

//RestorePreviousPageState_instance.doSetup(ngApplicationName, "DemoSites_index_main_20210606_1731");



// Todo-SSN - 06/23/2021 04:45 am - SSN - [20210623-0158] - [010] - Limit user access to their timesheet records
// Replaces some of existing calls
import * as _sharedUtil from './Shared/SharedUtil';

_sharedUtil.LoadAll(ngApplicationName);




AppInsights_Util.doSetup("DemoSies_index_main");

AppInsights_Util.logEvent("DemoSites_Index_Main", { SourceCode: "20191001-1132-C2", Message: "Loading DemoSites_Index_Main" });


// 06/13/2021 09:43 pm - SSN - [20210613-0452] - [020] - Adding tags to DevSite 

import { dropdownListDirective_instance } from './DropdownList/DropdownListDirective';
dropdownListDirective_instance.doSetup(ngApplicationName);

import { ssn_AngularJslogger } from './Util/Logger/ssn_AngularJslogger';
ssn_AngularJslogger.doSetup('jobIndex_main', ngApplicationName);


//import { changeMonitorService_instance } from './Util/ChangeMonitor/ChangeMonitorService';
//changeMonitorService_instance.doSetup(ngApplicationName);



// 06/15/2021 04:10 am - SSN - [20210613-0452] - [043] - Adding tags to DevSite

import { TechnologyController_instance } from './Technology/Technology';
TechnologyController_instance.doSetup(ngApplicationName);

import { ModalCallsUtil } from './Shared/ModalCallsUtil';
ModalCallsUtil.doSetup("DemoSites_Index_main", ngApplicationName);


