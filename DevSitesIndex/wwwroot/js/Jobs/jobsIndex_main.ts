
// 09/21/2019 11:31 am - SSN - [20190921-1129] - [002] - Plug in job status filter on job's index


import { headerWithSort_instance } from '../Util/HeaderWithSort';
import { pagingDirective_instance } from '../Util/pagingDirective';
import { dataService_instance } from '../DataServices';
import { jobStatusDirective_instance } from './JobStatusDirective';
import { jobsIndexController_instance } from '../Jobs/JobsIndexController';

dataService_instance.doSetup("timesheetApp");

jobsIndexController_instance.Jobs_Angular_Module;

headerWithSort_instance.headerWithSort_angular_module;

pagingDirective_instance.pagingDirective_angular_module;

jobStatusDirective_instance.Job_Status_Angular_Module;
 



