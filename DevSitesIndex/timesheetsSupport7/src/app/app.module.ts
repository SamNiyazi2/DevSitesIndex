import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 10/03/2019 04:59 pm - SSN - [20191003-1557] - [005] - Adding data service to Angular7
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

// 10/03/2019 03:57 pm - SSN - [20191003-1557] - [002] - Adding data service to Angular7
import { DataService } from './shared/data.service';
// 10/04/2019 11:22 pm - SSN - [20191003-1557] - [011] - Adding data service to Angular7
import { ToastrService } from './shared/toastr.service';

import { ThumbnailComponent } from './timesheet/thumbnail/thumbnail.component';
import { HeaderComponent } from './nav/header/header.component';
import { TimelogComponent } from './timesheet/timelog/timelog.component';

import { CreateTimelogComponent } from './timesheet/create-timelog/create-timelog.component';
import { TimesheetMenuComponent } from './nav/timesheet-menu/timesheet-menu.component';
import { E404Component } from './shared/e404/e404.component';
import { TimelogRouteActivatorService } from './util/timelog-route-activator.service';

console.log('app.module.ts - 20191002-2007');


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TimesheetComponent,
    ThumbnailComponent,
    HeaderComponent,
    TimelogComponent,

    CreateTimelogComponent,

    TimesheetMenuComponent,

    E404Component
  ],
  imports: [

    // 10/02/2019 05:47 pm - SSN - [20191002-1118] - [012] - Adding Angular 7 test app
    // Did this solve problem with "ERROR Error: The selector "app-root" did not match any elements"  - Removed app-root from _layout.cshtml
    // putting back in
    BrowserModule,

    // 10/03/2019 05:00 pm - SSN - [20191003-1557] - [006] - Adding data service to Angular7
    HttpClientModule,

    AppRoutingModule
  ],

  // 10/03/2019 04:03 pm - SSN - [20191003-1557] - [003] - Adding data service to Angular7
  // 10/06/2019 01:39 pm - SSN - [20191006-1211] - [007] - Adding Angular 7 - TimelogRouteActivatorService

  providers: [DataService, ToastrService, TimelogRouteActivatorService],


  bootstrap: [AppComponent]

})
export class AppModule { }
