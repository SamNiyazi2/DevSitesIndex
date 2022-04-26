

// 01/02/2020 02:30 pm - SSN - [20200102-1234] - [010] - Add AngularJS login


import { RestorePreviousPageState_instance } from '../Util/RestorePreviousPageState';

import { changeMonitorService_instance } from '../Util/ChangeMonitor/ChangeMonitorService';

import { dataService_instance } from './DataServices';

import { sessionTimeoutInterceptor_instance }from '../Interceptors/SessionTimeoutInterceptor';

import {DateTimeService_Instance  }  from './DateTimeService';


// Todo-SSN - 06/23/2021 05:00 am - SSN - [20210623-0158] - [011] - Limit user access to their timesheet records
// Pass in ngApplicationName

function LoadAll(ngApplicationName) {

    // const ngApplicationName = 'timesheetApp';


    RestorePreviousPageState_instance.doSetup(ngApplicationName, "SharedUtil_20210606_1732");

    changeMonitorService_instance.doSetup(ngApplicationName);

    dataService_instance.doSetup(ngApplicationName);

    sessionTimeoutInterceptor_instance.doSetup(ngApplicationName);

    DateTimeService_Instance.doSetup(ngApplicationName);

}


export { LoadAll };

