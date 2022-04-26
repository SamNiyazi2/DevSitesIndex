
// 09/21/2019 03:57 am - SSN - [20190921-0357] - [001] - Creating multiple entry for Webpack


// 11/09/2019 12:05 pm - SSN - Added ChangeMonitor
// 11/14/2019 03:20 pm - SSN - [20191114-1459] - [004] - ChangeMonitroService

//import { ChangeMonitor_Util } from '../Util/ChangeMonitor';

/////////////////////////////////////////////////////////////////import { changeMonitorService_instance } from '../Util/ChangeMonitor/ChangeMonitorService';

// 11/20/2019 04:40 am - SSN - [20191120-0429] - [002] - Timelog index clock-out refresh updated row
import { PageUpdater_Instance } from '../Util/PageUpdater';


//////////////////////////////////////////////////////////import { dataService_instance } from '../Shared/DataServices';
import { dropdownListDirective_instance } from '../DropdownList/DropdownListDirective';
import { AppInsights_Util } from '../Util/ApplicationInsights_Monitor';


//////////////////////////////////import { RestorePreviousPageState_instance } from '../Util/RestorePreviousPageState';

// 12/07/2019 04:09 am - SSN - [20191207-0353] - [002] - SessionTimeoutInterceptor

/////////////////////////////////////////////////////import sessionTimeoutInterceptor from '../Interceptors/SessionTimeoutInterceptor';


// 12/07/2019 08:07 am - SSN - [20191207-0704] - [004] - AngularJS - Routing - Authentication

import { routing_config_instance } from '../Routing/Routing_Config';

routing_config_instance.doSetup();




const ngApplicationName = 'timesheetApp';

//////////////////////////////////////////////////sessionTimeoutInterceptor.doSetup(ngApplicationName);


import * as _sharedUtil from '../Shared/SharedUtil';

_sharedUtil.LoadAll(ngApplicationName);




//ChangeMonitor_Util
//////////////////////////////////////////////////////////changeMonitorService_instance.doSetup(ngApplicationName);


PageUpdater_Instance.doSetup(ngApplicationName);


// 11/16/2019 06:27 pm - SSN - [20191116-1516] - [006] - Timelog edit (AngularJS client version)

// 11/25/2019 11:34 pm - SSN - [20191125-2153] - [005] - Job create - Replace dropdown with dropdownListDirective


dropdownListDirective_instance.doSetup(ngApplicationName);




// 06/07/2021 05:00 pm - SSN - [20210606-0227] - [019] - Testng for deployment - Line item

import { ssn_AngularJslogger } from '../Util/Logger/ssn_AngularJslogger';

ssn_AngularJslogger.doSetup("timesheet_main", ngApplicationName);






//////////////////////////////////////////////////////////dataService_instance.doSetup(ngApplicationName);


// 11/23/2019 08:56 am - SSN
////////////////////////////////////////////////////////////////RestorePreviousPageState_instance.doSetup(ngApplicationName, "timesheet_main_20210606_1731");


// 10/01/2019 11:09 am - SSN - [20191001-0944] - [007] - Adding Application Insights for JavaScript

AppInsights_Util.doSetup("timesheet_main");


AppInsights_Util.logEvent("Timesheet_main", { SourceCode: "20191001-1112-C", Message: "Loading timesheet_main" });
AppInsights_Util.logEvent(document.location.hostname, { SourceCode: "20191105-0503", Message: "Loading timesheet_main" });


// 11/25/2019 05:34 pm - SSN - [20191125-1414] - [011] - Project jobs - filter 
// Refactor - Timelog only

import * as x from './Timesheet_main_timesheetOnly';

x.doSetup(ngApplicationName);



// 04/10/2022 04:10 pm - SSN - Adding
import { site_instance } from '../site_v02';

site_instance.setDefault_ForStartup('timesheet_main-20220426-0814', true);

