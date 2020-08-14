
// 11/25/2019 05:34 pm - SSN - [20191125-1414] - [011] - Project jobs - filter 
// Refactor - Timelog only

import { timesheetApp_instance } from './TimesheetApp';
import { timesheetController_instance } from './TimesheetController';
import { timesheetContinueController_instance } from './timesheetcontinuecontroller';
import { timesheetClockoutController_instance } from './timesheetclockoutcontroller';


// 11/16/2019 04:57 pm - SSN - [20191116-1516] - [004] - Timelog edit (AngularJS client version)
import { timesheetEditController_instance } from '../Timesheet/TimesheetEditController';

import { TimelogLinkOptions } from './TimelogLinkOtions/TimelogLinkOptions';



var doSetup = function (ngApplicationName) {

    // 11/21/2019 06:45 am - SSN - [20191121-0503] - [007] - Timelog edit options on project search
    TimelogLinkOptions.doSetup(ngApplicationName);

    timesheetController_instance.timesheetApp_TimesheetController;

    timesheetContinueController_instance.timesheetApp;

    timesheetClockoutController_instance.timesheetApp;

    timesheetApp_instance.timesheetApp;

    timesheetEditController_instance.timesheetApp;

};

export { doSetup };

