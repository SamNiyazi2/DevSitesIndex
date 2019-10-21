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
// 10/10/2019 11:43 pm - SSN - [20191010-1354] - [002] - M11 - Understanding Angular's Dependency Injection

// import { ToastrService } from './shared/toastr.service';
import { TOASTR_TOKEN, Toastr } from './shared/toastr.service';
import { JQ_TOKEN } from './shared/j-query.service';

import { ThumbnailComponent } from './timesheet/thumbnail/thumbnail.component';
import { HeaderComponent } from './nav/header/header.component';
import { TimelogComponent } from './timesheet/timelog/timelog.component';

import { CreateTimelogComponent } from './timesheet/create-timelog/create-timelog.component';
import { TimesheetMenuComponent } from './nav/timesheet-menu/timesheet-menu.component';
import { E404Component } from './shared/e404/e404.component';
import { TimelogRouteActivatorService } from './util/timelog-route-activator.service';
import { TimesheetResolverService } from './resolvers/timesheet-resolver.service';
import { AuthenticateService } from './users/authenticate.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectJobsListComponent } from './projects/project-jobs-list/project-jobs-list.component';
import { ProjectCreateJobComponent } from './projects/project-create-job/project-create-job.component';
import { ProjectJobDetailComponent } from './projects/project-job-detail/project-job-detail.component';

import { JobStatusPipe } from './util/job-status.pipe';
import { TimelogModalComponent } from './shared/timelog-modal/timelog-modal.component';

import { ModalTriggerDirective } from './shared/modal-trigger.directive';




// 10/10/2019 11:45 pm - SSN - [20191010-1354] - [003] - M11 - Understanding Angular's Dependency Injection
declare let toastr: Toastr;

// 10/21/2019 09:58 am - SSN - [20191021-0444] - [013] - M12 - Creating directives and advanced components in Angular.
// let toastr: Toastr = window['toastr'];
// let jQuery = window['$'];





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

    E404Component,

    ProjectsListComponent,

    ProjectJobsListComponent,

    ProjectCreateJobComponent,

    ProjectJobDetailComponent,

    JobStatusPipe,

    TimelogModalComponent,

    ModalTriggerDirective
  ],
  imports: [

    // 10/02/2019 05:47 pm - SSN - [20191002-1118] - [012] - Adding Angular 7 test app
    // Did this solve problem with "ERROR Error: The selector "app-root" did not match any elements"  - Removed app-root from _layout.cshtml
    // putting back in
    BrowserModule,

    // 10/03/2019 05:00 pm - SSN - [20191003-1557] - [006] - Adding data service to Angular7
    HttpClientModule,

    AppRoutingModule,

    // 10/09/2019 01:45 am - SSN - [20191009-0144] - [001] - M07-09 - Template-based form validation
    FormsModule, ReactiveFormsModule

  ],

  // 10/03/2019 04:03 pm - SSN - [20191003-1557] - [003] - Adding data service to Angular7
  // 10/06/2019 01:39 pm - SSN - [20191006-1211] - [007] - Adding Angular 7 - TimelogRouteActivatorService
  // 10/06/2019 05:05 pm - SSN - [20191006-1643] - [003] - Adding Angular 7 - Observables and resolvers - TimesheetResolverService

  providers: [DataService,

    // 10/10/2019 11:46 pm - SSN - [20191010-1354] - [004] - M11 - Understanding Angular's Dependency Injection
    //ToastrService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },

    // 10/21/2019 06:11 am - SSN - [20191021-0444] - [006] - M12 - Creating directives and advanced components in Angular.
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },

    TimelogRouteActivatorService,
    TimesheetResolverService,

    {
      provide: 'canDeactivateCreateTimelog',
      useValue: checkDirtyState
    },

    AuthenticateService
  ],


  bootstrap: [AppComponent]

})
export class AppModule { }


export function checkDirtyState(component: CreateTimelogComponent) {

  if (typeof (component.isDirty) != 'boolean') {
    console.error("property isDirty does not exists on component:");
    console.error(component);
    return true;
  }

  if (component.isDirty) {

    return window.confirm("You have not saved your changes. Do you really want to cancel?")
  }

  return true;
}
