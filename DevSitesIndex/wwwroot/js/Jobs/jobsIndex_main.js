// 09/21/2019 11:31 am - SSN - [20190921-1129] - [002] - Plug in job status filter on job's index
import { headerWithSort_instance } from '../Util/HeaderWithSort';
import { pagingDirective_instance } from '../Util/pagingDirective';
import { dataService_instance } from '../DataServices';
import { jobStatusDirective_instance } from './JobStatusDirective';
import { jobsIndexController_instance } from '../Jobs/JobsIndexController';
import { timesheetController_instance } from '../Timesheet/TimesheetController';
//import { timesheetApp_instance } from '../Timesheet/TimesheetApp';  // for timesheet related links
//import { timesheetContinueController_instance } from '../Timesheet/timesheetcontinuecontroller';
//import { timesheetClockoutController_instance } from '../Timesheet/timesheetclockoutcontroller';
// 11/14/2019 08:28 pm - SSN - [20191114-1931] - [006] - Job - option to change job status 
// Adding jobStatusChangeRecord_instance 
import { jobStatusChangeRecord_instance } from './JobStatusChangeRecord';
dataService_instance.doSetup("timesheetApp");
jobsIndexController_instance.Jobs_Angular_Module;
headerWithSort_instance.headerWithSort_angular_module;
pagingDirective_instance.pagingDirective_angular_module;
jobStatusDirective_instance.Job_Status_Angular_Module;
timesheetController_instance.timesheetApp_TimesheetController;
//timesheetContinueController_instance;
//timesheetClockoutController_instance;
//timesheetApp_instance.timesheetApp;
jobStatusChangeRecord_instance.jobStatusChangeRecord_Module;
//# sourceMappingURL=jobsIndex_main.js.map