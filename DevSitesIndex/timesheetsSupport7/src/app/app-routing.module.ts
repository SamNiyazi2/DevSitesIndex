import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimelogComponent } from './timesheet/timelog/timelog.component';
import { CreateTimelogComponent } from './timesheet/create-timelog/create-timelog.component';
import { E404Component } from './shared/e404/e404.component';
import { TimelogRouteActivatorService } from './util/timelog-route-activator.service';
import { TimesheetResolverService } from './resolvers/timesheet-resolver.service';


const routes: Routes = [

  // 10/02/2019 12:20 pm - SSN - [20191002-1118] - [004] - Adding Angular 7 test app
  // Testing excluding .Net paths
  { path: 'test1', redirectTo: 'search' },

  // 10/02/2019 05:51 pm - SSN - [20191002-1118] - [013] - Adding Angular 7 test app

  { path: 'test3', component: TestComponentComponent },


  // 10/06/2019 12:49 pm - SSN - [20191006-1211] - [002] - Adding Angular 7
  { path: 'timesheet/create', component: CreateTimelogComponent, pathMatch: 'full', canDeactivate: ['canDeactivateCreateTimelog'] },
  //{ path: 'create', component: CreateTimelogComponent },


  // 10/03/2019 12:19 pm - SSN - [20191003-1219] - [001] - Adding timesheet to Angular7
  // 10/06/2019 05:06 pm - SSN - [20191006-1643] - [004] - Adding Angular 7 - Observables and resolvers - TimesheetResolverService

  { path: 'timesheet', component: TimesheetComponent, resolve: { timesheets_resolver: TimesheetResolverService } },


  // 10/05/2019 03:10 pm - SSN - [20191003-1557] - [015] - Adding data service to Angular7
  // 10/06/2019 01:41 pm - SSN - [20191006-1211] - [008] - Adding Angular 7 - TimelogRouteActivatorService

  { path: 'timelog/:id', component: TimelogComponent, canActivate: [TimelogRouteActivatorService] },


  // 10/06/2019 01:28 pm - SSN - [20191006-1211] - [005] - Adding Angular 7
  { path: 'e404', component: E404Component },


  { path: '', redirectTo: 'test3', pathMatch: 'full' },


  // 10/06/2019 09:09 pm - SSN - [20191006-2058] - [003] - Adding Angular 7 - Lazily loading feature modules
  { path: 'user', loadChildren: './users/user.module#UserModule' },


  //{ path: '**', component: AppComponent, outlet: "main101" },
  { path: '**', redirectTo: 'test3' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

  // 10/02/2019 05:19 pm - SSN - [20191002-1118] - [011] - Adding Angular 7 test app
  constructor(private router: Router) {

    //this.router.errorHandler = (error: any) => {
    //  console.log("*******************************************");
    //  console.log("app-routing.module.ts - 20191002-1721");
    //  console.log(error);

    //  console.log("*******************************************");
    //};

  }
}
