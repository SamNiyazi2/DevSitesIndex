
// 09/21/2019 11:31 am - SSN - [20190921-1129] - [002] - Plug in job status filter on job's index


import { headerWithSort_instance } from '../Util/HeaderWithSort';
import { pagingDirective_instance } from '../Util/pagingDirective';
import { dataService_instance } from '../Shared/DataServices';
import { jobStatusDirective_instance } from './JobStatusDirective';
import { jobsIndexController_instance } from '../Jobs/JobsIndexController';
import { jobStatusChangeRecord_instance } from './JobStatusChangeRecord';
import { changeMonitorService_instance } from '../Util/ChangeMonitor/ChangeMonitorService';
import { PageUpdater_Instance } from '../Util/PageUpdater';
import { ProjectIndexController_instance } from '../Projects/ProjectsIndex';
import { dropdownListDirective_instance } from '../DropdownList/DropdownListDirective';
import { RestorePreviousPageState_instance } from '../Util/RestorePreviousPageState';
import { ssn_AngularJslogger } from '../Util/Logger/ssn_AngularJslogger';
import { ssn_auto_focus } from '../Util/autofocus/ssnAutoFocus';
import * as x from '../Timesheet/Timesheet_main_timesheetOnly';

let ngApplicationName = "timesheetApp";


RestorePreviousPageState_instance.doSetup(ngApplicationName, "jobIndex_main_20210606_1732");
dropdownListDirective_instance.doSetup(ngApplicationName);
changeMonitorService_instance.doSetup(ngApplicationName);
ProjectIndexController_instance.doSetup(ngApplicationName);
dataService_instance.doSetup(ngApplicationName);
jobsIndexController_instance.Jobs_Angular_Module;
headerWithSort_instance.headerWithSort_angular_module;
pagingDirective_instance.pagingDirective_angular_module;
jobStatusDirective_instance.Job_Status_Angular_Module;
jobStatusChangeRecord_instance.angular_Module;
PageUpdater_Instance.doSetup(ngApplicationName);



x.doSetup(ngApplicationName);


ssn_AngularJslogger.doSetup('jobIndex_main', ngApplicationName);
ssn_auto_focus.doSetup("jobIndex_main", ngApplicationName);