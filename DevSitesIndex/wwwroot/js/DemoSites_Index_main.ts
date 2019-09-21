
// 09/21/2019 07:14 am - SSN - [20190921-0357] - [009] - Creating multiple entry for Webpack


console.log('DemoSites_Index_main - 20190921-0751 - Top');



import { demosites_index_p1_instance  } from "./DemoSites_index_p1"

import { dataService_instance } from './DataServices';

import { ssn_devsite_angular_module_instance } from './demoSites_Index';

dataService_instance.doSetup('demoSites_Index');



var x1 = ssn_devsite_angular_module_instance.ssn_devsite_angular_module;

var x2 = demosites_index_p1_instance;

console.log('DemoSites_Index_main - 20190921-0751  - Bottom');

 


