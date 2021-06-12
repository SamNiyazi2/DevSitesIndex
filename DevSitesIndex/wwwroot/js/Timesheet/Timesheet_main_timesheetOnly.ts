
// 11/25/2019 05:34 pm - SSN - [20191125-1414] - [011] - Project jobs - filter 


import { timesheetApp_instance } from './TimesheetApp';
import { timesheetController_instance } from './TimesheetController';
import { timesheetContinueController_instance } from './timesheetcontinuecontroller';
import { timesheetClockoutController_instance } from './timesheetclockoutcontroller';
import { timesheetEditController_instance } from '../Timesheet/TimesheetEditController';
import { timesheetCreateController_instance } from '../Timesheet/TimesheetCreateController';
import { TimelogLinkOptions } from './TimelogLinkOtions/TimelogLinkOptions';
import { lineItemController_instance } from './LineItem/LineItemController';
import { ssn_auto_focus } from '../Util/autofocus/ssnAutoFocus';
import { ModalCallsUtil } from '../Shared/ModalCallsUtil';



var doSetup = function (ngApplicationName) {

    TimelogLinkOptions.doSetup(ngApplicationName);
    timesheetController_instance.timesheetApp;
    timesheetContinueController_instance.timesheetApp;
    timesheetClockoutController_instance.timesheetApp;
    timesheetApp_instance.timesheetApp;
    timesheetEditController_instance.timesheetApp;
    timesheetCreateController_instance.timesheetApp;
    lineItemController_instance.doSetup()
    ssn_auto_focus.doSetup("Timesheet_main_timesheetOnly", ngApplicationName);
    ModalCallsUtil.doSetup("Timesheet_main_timesheetOnly", ngApplicationName);
};

export { doSetup };
