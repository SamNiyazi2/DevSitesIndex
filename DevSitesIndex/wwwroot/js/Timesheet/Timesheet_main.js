// 09/21/2019 03:57 am - SSN - [20190921-0357] - [001] - Creating multiple entry for Webpack
console.log("timesheet_main - 20190921-0412");
import { headerWithSort_instance } from '../Util/HeaderWithSort';
import { pagingDirective_instance } from '../Util/pagingDirective';
import { dataService_instance } from '../DataServices';
import { timesheetApp_instance } from './TimesheetApp';
import { jobsIndexController_instance } from '../Jobs/JobsIndexController';
import { timesheetController_instance } from '../Timesheet/TimesheetController';
var x1 = timesheetController_instance.timesheetApp_TimesheetController;
var z = headerWithSort_instance.headerWithSort_angular_module;
var y = pagingDirective_instance.pagingDirective_angular_module;
var x = dataService_instance.doSetup('timesheetApp');
var Jobs_Angular_Module = jobsIndexController_instance.Jobs_Angular_Module;
var timesheetApp = timesheetApp_instance.timesheetApp;
//# sourceMappingURL=Timesheet_main.js.map