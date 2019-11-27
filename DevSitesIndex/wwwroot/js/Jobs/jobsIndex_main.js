// 09/21/2019 11:31 am - SSN - [20190921-1129] - [002] - Plug in job status filter on job's index
import { headerWithSort_instance } from '../Util/HeaderWithSort';
import { pagingDirective_instance } from '../Util/pagingDirective';
import { dataService_instance } from '../DataServices';
import { jobStatusDirective_instance } from './JobStatusDirective';
import { jobsIndexController_instance } from '../Jobs/JobsIndexController';
// 11/14/2019 08:28 pm - SSN - [20191114-1931] - [006] - Job - option to change job status 
// Adding jobStatusChangeRecord_instance 
import { jobStatusChangeRecord_instance } from './JobStatusChangeRecord';
import { changeMonitorService_instance } from '../Util/ChangeMonitorService';
import { PageUpdater_Instance } from '../Util/PageUpdater';
import { ProjectIndexController_instance } from '../Projects/ProjectsIndex';
import { dropdownListDirective_instance } from '../DropdownList/DropdownListDirective';
import { RestorePreviousPageState_instance } from '../Util/RestorePreviousPageState';
var ngApplicationName = "timesheetApp";
// 11/23/2019 09:07 pm - SSN 
// 11/25/2019 04:40 pm - SSN - [20191125-1414] - [007] - Project jobs - filter 
// Moved to top.  Directive is not loading???
RestorePreviousPageState_instance.doSetup(ngApplicationName);
// 11/22/2019 09:06 pm - SSN - [20191121-0503] - [023] - Timelog edit options on project search
dropdownListDirective_instance.doSetup(ngApplicationName);
// 11/21/2019 08:18 am - SSN - [20191121-0503] - [009] - Timelog edit options on project search
changeMonitorService_instance.doSetup(ngApplicationName);
// 11/22/2019 01:48 pm - SSN - [20191121-0503] - [013] - Timelog edit options on project search
ProjectIndexController_instance.doSetup(ngApplicationName);
dataService_instance.doSetup(ngApplicationName);
jobsIndexController_instance.Jobs_Angular_Module;
headerWithSort_instance.headerWithSort_angular_module;
pagingDirective_instance.pagingDirective_angular_module;
jobStatusDirective_instance.Job_Status_Angular_Module;
jobStatusChangeRecord_instance.angular_Module;
PageUpdater_Instance.doSetup(ngApplicationName);
// 11/25/2019 05:34 pm - SSN - [20191125-1414] - [011] - Project jobs - filter 
// Refactor - Timelog only
import * as x from '../Timesheet/Timesheet_main_timesheetOnly';
x.doSetup(ngApplicationName);
//# sourceMappingURL=jobsIndex_main.js.map