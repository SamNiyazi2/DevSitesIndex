
// 09/21/2019 07:14 am - SSN - [20190921-0357] - [009] - Creating multiple entry for Webpack
 
import * as util from '../js/site';

import { demosites_index_p1_instance  } from "./DemoSites_index_p1"

import { dataService_instance } from './DataServices';

import { ssn_devsite_angular_module_instance } from './demoSites_Index';

dataService_instance.doSetup('demoSites_Index');

ssn_devsite_angular_module_instance.ssn_devsite_angular_module;

demosites_index_p1_instance;
 