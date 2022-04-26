
// 04/25/2022 01:20 pm - SSN - Created so we can onclude sharedUtil.  It calls SessionTimeoutInterceptor which is currently used to config sanitization unsafe links
// 04/26/2022 05:54 am - SSN - Moved under CodeReference
import { CodeReference_Page_Instance } from './CodeReference_Pages';
import { LoadAll } from '../Shared/SharedUtil'

// 04/25/2022 03:30 PM - SSN - Adding 
import { site_instance } from '../../js/site_v02';


const ngApplicationName = 'CodeReference_Page_module';


CodeReference_Page_Instance.doSetup();

// We are using timesheetApp for now.
LoadAll('timesheetApp');


site_instance.setDefault_ForStartup('CodeReference_pages_20220426-0819', true);
