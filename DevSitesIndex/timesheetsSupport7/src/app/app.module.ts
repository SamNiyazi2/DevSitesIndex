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

console.log('app.module.ts - 20191002-2007');


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TimesheetComponent
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
  providers: [DataService],


  bootstrap: [AppComponent]

})
export class AppModule { }
