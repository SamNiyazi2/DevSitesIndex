﻿
// 01/02/2020 12:42 pm - SSN - [20200102-1234] - [002] - Add AngularJS login


import * as x from '../Shared/SharedUtil';

import { loginController_instance } from "./login";


const ngApplicationName = "timesheetApp";


x.LoadAll(ngApplicationName);

loginController_instance.doSetup(ngApplicationName);

