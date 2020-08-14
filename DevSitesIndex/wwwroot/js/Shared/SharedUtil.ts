

// 01/02/2020 02:30 pm - SSN - [20200102-1234] - [010] - Add AngularJS login


import { RestorePreviousPageState_instance } from '../Util/RestorePreviousPageState';

import { changeMonitorService_instance } from '../Util/ChangeMonitor/ChangeMonitorService';

import { dataService_instance } from '../DataServices';

import sessionTimeoutInterceptor from '../Interceptors/SessonTimeoutInterceptor';


const ngApplicationName = 'timesheetApp';


function LoadAll() {

    RestorePreviousPageState_instance.doSetup(ngApplicationName);

    changeMonitorService_instance.doSetup(ngApplicationName);

    dataService_instance.doSetup(ngApplicationName);
    
    sessionTimeoutInterceptor.doSetup(ngApplicationName);

}


export { LoadAll };

