
// 09/21/2019 11:31 am - SSN - [20190921-1129] - [002] - Plug in job status filter on job's index


import { headerWithSort_instance } from '../Util/HeaderWithSort';
import { pagingDirective_instance } from '../Util/pagingDirective';
import { dataService_instance } from '../DataServices';
import { jobStatusDirective_instance } from './JobStatusDirective';
import { jobsIndexController_instance } from '../Jobs/JobsIndexController';

import { timesheetController_instance } from '../Timesheet/TimesheetController';



// 11/14/2019 08:28 pm - SSN - [20191114-1931] - [006] - Job - option to change job status 
// Adding jobStatusChangeRecord_instance 
import { jobStatusChangeRecord_instance } from './JobStatusChangeRecord';
import { TimelogLinkOptions } from '../Timesheet/TimelogLinkOtions/TimelogLinkOptions';
import { changeMonitorService_instance } from '../Util/ChangeMonitorService';
import { timesheetEditController_instance } from '../Timesheet/TimesheetEditController';
import { timesheetContinueController_instance } from '../Timesheet/TimesheetContinueController';
import { timesheetClockoutController_instance } from '../Timesheet/TimesheetClockOutController';
import { PageUpdater_Instance } from '../Util/PageUpdater';
import { ProjectIndexController_instance } from '../Projects/ProjectsIndex';
import { dropdownListDirective_instance } from '../DropdownList/DropdownListDirective';
import { RestorePreviousPageState_instance } from '../Util/RestorePreviousPageState';

let ngApplicationName = "timesheetApp";

// 11/22/2019 09:06 pm - SSN - [20191121-0503] - [023] - Timelog edit options on project search
dropdownListDirective_instance.doSetup(ngApplicationName);


// 11/21/2019 08:18 am - SSN - [20191121-0503] - [009] - Timelog edit options on project search
changeMonitorService_instance.doSetup(ngApplicationName);
TimelogLinkOptions.doSetup(ngApplicationName);


// 11/22/2019 01:48 pm - SSN - [20191121-0503] - [013] - Timelog edit options on project search
ProjectIndexController_instance.doSetup(ngApplicationName);


dataService_instance.doSetup(ngApplicationName);


jobsIndexController_instance.Jobs_Angular_Module;

headerWithSort_instance.headerWithSort_angular_module;

pagingDirective_instance.pagingDirective_angular_module;

jobStatusDirective_instance.Job_Status_Angular_Module;


timesheetController_instance.timesheetApp_TimesheetController;

//timesheetContinueController_instance;

//timesheetClockoutController_instance;

//timesheetApp_instance.timesheetApp;



jobStatusChangeRecord_instance.angular_Module;



// 11/21/2019 03:51 pm - SSN - [20191121-0503] - [010] - Timelog edit options on project search
// Added timelog related links with Timelog_Row_Options
timesheetEditController_instance.timesheetApp;
timesheetContinueController_instance.timesheetApp;
timesheetClockoutController_instance.timesheetApp;
PageUpdater_Instance.doSetup(ngApplicationName);

// 11/23/2019 09:07 pm - SSN 
RestorePreviousPageState_instance.doSetup(ngApplicationName);
