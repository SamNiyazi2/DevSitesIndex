﻿
// 09/26/2019 06:47 am - SSN - [20190926-0638] - [004] - Move scripts from index_p1.cshtml to demoSites_index_p1

// 04/22/2022 07:34 am - SSN - Remove since adding site_only_main buncle
// import * as util from '../js/site';

import { demoSites_index_p3_instance } from "./DemoSites_index_p3"

import { dataService_instance } from './Shared/DataServices';

import { ssn_devsite_angular_module_instance } from './demoSites_Index';

const ngApplicationName = 'demoSites_Index';

dataService_instance.doSetup(ngApplicationName);


// 04/24/2022 07:53 am - SSN - Passing in application name
// ssn_devsite_angular_module_instance.ssn_devsite_angular_module;
ssn_devsite_angular_module_instance.doSetup(ngApplicationName);

demoSites_index_p3_instance;

