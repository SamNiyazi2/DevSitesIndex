// 09/21/2019 03:57 am - SSN - [20190921-0357] - [001] - Creating multiple entry for Webpack
import { dataService_instance } from '../DataServices';
import { timesheetApp_instance } from './TimesheetApp';
import { timesheetController_instance } from './TimesheetController';
import { timesheetContinueController_instance } from './timesheetcontinuecontroller';
import { timesheetClockoutController_instance } from './timesheetclockoutcontroller';
import { dropdownListDirective_instance } from '../DropdownList/DropdownListDirective';
dropdownListDirective_instance;
dataService_instance.doSetup('timesheetApp');
timesheetController_instance.timesheetApp_TimesheetController;
timesheetContinueController_instance.timesheetApp;
timesheetClockoutController_instance.timesheetApp;
timesheetApp_instance.timesheetApp;
// 10/01/2019 11:09 am - SSN - [20191001-0944] - [007] - Adding Application Insights for JavaScript
console.log("Timesheet_main - 20191001-1110");
import { AppInsights_Util } from '../Util/ApplicationInsights_Monitor';
AppInsights_Util.doSetup();
AppInsights_Util.logEvent("Timesheet_main", { SourceCode: "20191001-1112-C", Message: "Loading timesheet_main" });
//# sourceMappingURL=timesheet_main.js.map