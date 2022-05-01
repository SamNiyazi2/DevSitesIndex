
// 04/24/2022 06:15 am - SSN





const ngApplicationName = 'devSite_Detail_module';


import { devSite_Detail_instance } from './DevSite_Detail'
devSite_Detail_instance.doSetup(ngApplicationName);


import * as _sharedUtil from '../Shared/SharedUtil';
_sharedUtil.LoadAll(ngApplicationName);


import { ModalCallsUtil } from '../Shared/ModalCallsUtil';
ModalCallsUtil.doSetup("DemoSites_Index_main", ngApplicationName);


import { ssn_AngularJslogger } from '../Util/Logger/ssn_AngularJslogger';
ssn_AngularJslogger.doSetup('devSite_detail_20220424', 'devSite_Detail_module');



import { ssn_devsite_angular_module_instance } from './demoSites_Index';
ssn_devsite_angular_module_instance.doSetup(ngApplicationName);


import { dropdownListDirective_instance } from '../DropdownList/DropdownListDirective';
dropdownListDirective_instance.doSetup(ngApplicationName);

// 04/28/2022 05:17 am - SSN 
import { TechnologyController_instance } from '../Technology/Technology';
TechnologyController_instance.doSetup(ngApplicationName);
