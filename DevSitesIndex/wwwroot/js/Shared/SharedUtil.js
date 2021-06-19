// 01/02/2020 02:30 pm - SSN - [20200102-1234] - [010] - Add AngularJS login
import { RestorePreviousPageState_instance } from '../Util/RestorePreviousPageState';
import { changeMonitorService_instance } from '../Util/ChangeMonitor/ChangeMonitorService';
import { dataService_instance } from './DataServices';
import sessionTimeoutInterceptor from '../Interceptors/SessionTimeoutInterceptor';
var ngApplicationName = 'timesheetApp';
function LoadAll() {
    RestorePreviousPageState_instance.doSetup(ngApplicationName, "SharedUtil_20210606_1732");
    changeMonitorService_instance.doSetup(ngApplicationName);
    dataService_instance.doSetup(ngApplicationName);
    sessionTimeoutInterceptor.doSetup(ngApplicationName);
}
export { LoadAll };
//# sourceMappingURL=SharedUtil.js.map