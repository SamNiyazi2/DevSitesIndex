"use strict";
// 09/21/2019 11:31 am - SSN - [20190921-1129] - [002] - Plug in job status filter on job's index
exports.__esModule = true;
var HeaderWithSort_1 = require("../Util/HeaderWithSort");
var pagingDirective_1 = require("../Util/pagingDirective");
var DataServices_1 = require("../DataServices");
var JobStatusDirective_1 = require("./JobStatusDirective");
var JobsIndexController_1 = require("../Jobs/JobsIndexController");
DataServices_1.dataService_instance.doSetup("timesheetApp");
JobsIndexController_1.jobsIndexController_instance.Jobs_Angular_Module;
HeaderWithSort_1.headerWithSort_instance.headerWithSort_angular_module;
pagingDirective_1.pagingDirective_instance.pagingDirective_angular_module;
JobStatusDirective_1.jobStatusDirective_instance.Job_Status_Angular_Module;
