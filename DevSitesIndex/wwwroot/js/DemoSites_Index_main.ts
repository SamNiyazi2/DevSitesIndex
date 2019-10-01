
// 09/21/2019 07:14 am - SSN - [20190921-0357] - [009] - Creating multiple entry for Webpack
 
import * as util from '../js/site';

import { demosites_index_p1_instance  } from "./DemoSites_index_p1"

import { dataService_instance } from './DataServices';

import { ssn_devsite_angular_module_instance } from './demoSites_Index';

dataService_instance.doSetup('demoSites_Index');

ssn_devsite_angular_module_instance.ssn_devsite_angular_module;

demosites_index_p1_instance;

// 10/01/2019 10:15 am - SSN - [20191001-0944] - [006] - Adding Application Insights for JavaScript

console.log("DemoSites_Index_main - 20191001-1017");

import { AppInsights_Util } from './Util/ApplicationInsights_Monitor';

AppInsights_Util.doSetup();

AppInsights_Util.doTest();



 