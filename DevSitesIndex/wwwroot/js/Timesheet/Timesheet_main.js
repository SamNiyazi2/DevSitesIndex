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
//# sourceMappingURL=Timesheet_main.js.map