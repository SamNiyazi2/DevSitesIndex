
// 04/24/2022 04:25 am - SSN

// Copied from DropDownListDirective.ts

/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../Shared/DataServices.ts"/>

import { IDevSite } from "../Interfaces/IDevSite";

import * as angular from 'angular';


import * as ssn_globals from '../globals';
import { dataService_instance } from '../Shared/DataServices';
import { ILoggerModule } from '../Util/Logger/ILoggerErrorMessage';
import { BROADCAST_IDENTIFIERS } from '../Shared/Broadcast_Identifers';


console.log('%c ' + 'DevSite_detail - 20220424-0452', 'font-size:12pt;color:red;');


var devSite_Detail_instance = function () {

    console.log('%c ' + 'DevSite_detail - 20220424-0452-B', 'font-size:12pt;color:yellow;');

    var doSetup = function (defaultAppName) {


        console.log('%c ' + 'DevSite_detail - 20220424-0452-C', 'font-size:12pt;color:green;');

        var devSite_Detail_module = ssn_globals.globals_instance.getInstance_v002('devSite_Detail_module_callSource', defaultAppName, ['ui.bootstrap']);


        var devSite_Detail_controller = devSite_Detail_module.controller('devSite_Detail_Controller',
            ['$scope', '$attrs', '$location', 'ssn_logger',
                function ($scope, $attrs, $location, ssn_logger: ILoggerModule) {

                console.log('%c ' + 'DevSite_detail - 20220424-0452-D', 'font-size:16pt;color:green;');

                }]);


    }
    return {



        doSetup: doSetup

    };

}();

export { devSite_Detail_instance };
     

 


