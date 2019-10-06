import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimelogComponent } from './timesheet/timelog/timelog.component';
import { CreateTimelogComponent } from './timesheet/create-timelog/create-timelog.component';
import { E404Component } from './shared/e404/e404.component';
import { TimelogRouteActivatorService } from './util/timelog-route-activator.service';
console.log('app.routing.module.ts - 20191002-2005');
var routes = [
    // 10/02/2019 12:20 pm - SSN - [20191002-1118] - [004] - Adding Angular 7 test app
    // Testing excluding .Net paths
    { path: 'test1', redirectTo: 'search' },
    // 10/02/2019 05:51 pm - SSN - [20191002-1118] - [013] - Adding Angular 7 test app
    { path: 'test3', component: TestComponentComponent },
    // 10/06/2019 12:49 pm - SSN - [20191006-1211] - [002] - Adding Angular 7
    { path: 'timesheet/create', component: CreateTimelogComponent, pathMatch: 'full' },
    //{ path: 'create', component: CreateTimelogComponent },
    // 10/03/2019 12:19 pm - SSN - [20191003-1219] - [001] - Adding timesheet to Angular7
    { path: 'timesheet', component: TimesheetComponent },
    // 10/05/2019 03:10 pm - SSN - [20191003-1557] - [015] - Adding data service to Angular7
    // 10/06/2019 01:41 pm - SSN - [20191006-1211] - [008] - Adding Angular 7 - TimelogRouteActivatorService
    { path: 'timelog/:id', component: TimelogComponent, canActivate: [TimelogRouteActivatorService] },
    // 10/06/2019 01:28 pm - SSN - [20191006-1211] - [005] - Adding Angular 7
    { path: 'e404', component: E404Component },
    { path: '', redirectTo: 'test3', pathMatch: 'full' },
    //{ path: '**', component: AppComponent, outlet: "main101" },
    { path: '**', redirectTo: 'test3' },
];
var AppRoutingModule = /** @class */ (function () {
    // 10/02/2019 05:19 pm - SSN - [20191002-1118] - [011] - Adding Angular 7 test app
    function AppRoutingModule(router) {
        //this.router.errorHandler = (error: any) => {
        //  console.log("*******************************************");
        //  console.log("app-routing.module.ts - 20191002-1721");
        //  console.log(error);
        this.router = router;
        //  console.log("*******************************************");
        //};
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes)
            ],
            exports: [RouterModule]
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map