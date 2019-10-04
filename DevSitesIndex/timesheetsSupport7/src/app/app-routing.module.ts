import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TimesheetComponent } from './timesheet/timesheet.component';


console.log('app.routing.module.ts - 20191002-2005');

const routes: Routes = [

  // 10/02/2019 12:20 pm - SSN - [20191002-1118] - [004] - Adding Angular 7 test app
  // Testing excluding .Net paths
  { path: 'test1', redirectTo: 'search' },

  // 10/02/2019 05:51 pm - SSN - [20191002-1118] - [013] - Adding Angular 7 test app
 
  { path: 'test3', component: TestComponentComponent },

  // 10/03/2019 12:19 pm - SSN - [20191003-1219] - [001] - Adding timesheet to Angular7
  { path: 'timesheet', component: TimesheetComponent},

  //{ path: '**', component: AppComponent, outlet: "main101" },
  { path: '**', redirectTo: 'test3'  },
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
