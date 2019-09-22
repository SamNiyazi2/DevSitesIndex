
// 09/21/2019 03:57 am - SSN - [20190921-0357] - [001] - Creating multiple entry for Webpack



import { dataService_instance } from '../DataServices';

import { timesheetApp_instance } from './TimesheetApp';

import { timesheetController_instance } from './TimesheetController';

import { timesheetContinueController_instance } from './timesheetcontinuecontroller';
import { timesheetClockoutController_instance } from './timesheetclockoutcontroller';


var x1 = timesheetController_instance.timesheetApp_TimesheetController;


var x = dataService_instance.doSetup('timesheetApp');

var x3 = timesheetContinueController_instance;



var timesheetApp = timesheetApp_instance.timesheetApp;

