
/// <reference path="../../node_modules/@types/angular/index.d.ts" />


// 09/18/2019 10:33 am - SSN - [20190918-0943] - [006] - Adding job status option to index

// https://stackoverflow.com/questions/55324510/how-to-make-a-singleton-in-typescript-work-across-multiple-modules


import IAngularApp from './IAngularApp';

import * as angular from "angular";


class SSN_Globals {


    private static ssn_devsite_angular_module: IAngularApp[] = []; //angular.IModule[];
    

    public static getInstance(applicationName: string, args: string[] = null): angular.IModule {

        var selected = (SSN_Globals.ssn_devsite_angular_module).filter((r: IAngularApp) => r.name === applicationName);


        if (selected.length > 0) {
     
            return selected[0].instance;

        } else {
            
            switch (applicationName) {

                case 'timesheetApp':

                    var obj: IAngularApp = {
                        name: applicationName,
                        instance: angular.module('timesheetApp', ['ngRoute', 'ui.bootstrap'])
                    }
                    
                    SSN_Globals.ssn_devsite_angular_module.push(obj);

                    break;

                case 'demoSites_Index_Timesheet':

                    var obj: IAngularApp = {
                        name: applicationName,
                        instance: angular.module('demoSites_Index_Timesheet', args)
                    }
                    
                    SSN_Globals.ssn_devsite_angular_module.push(obj);

                    break;


                case 'demoSites_Index':

                    var obj: IAngularApp = {
                        name: applicationName,
                        instance: angular.module("demoSites_Index", args)
                    }
                    
                    SSN_Globals.ssn_devsite_angular_module.push(obj);

                    break;

                default:

                    console.log("No case for application name [" + applicationName + "]  [20190920-0955] globals.ts");

                    break;

            }


            return obj.instance;

        }


    }
}

// 09/20/2019 09:38 am - SSN - Pass in args

function getInstance(applicationName: string, args: string[] = null): angular.IModule {

    return SSN_Globals.getInstance(applicationName, args);
}

export default { getInstance };
