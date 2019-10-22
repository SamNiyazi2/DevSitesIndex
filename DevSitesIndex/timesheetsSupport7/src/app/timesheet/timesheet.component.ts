import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute } from '@angular/router';
import { ITimelog } from '../interfaces/ITimelog';
import { TOASTR_TOKEN, Toastr } from '../shared/toastr.service';


import * as ehu from '../util/ErrorHandlingHelpers';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  // 10/03/2019 04:04 pm - SSN - [20191003-1557] - [004] - Adding data service to Angular7
  // Injectindata DataService

  // 10/07/2019 09:24 am - SSN - [20191007-0914] - [002] - Adding Angular 7 - Collecting data with Angular forms and validations
  // Add ITimeLog
  timesheets: ITimelog[];


  timesheets_for_modal: ITimelog[];


  searchTerm: string = "";



  // 10/04/2019 11:24 pm - SSN - [20191003-1557] - [012] - Adding data service to Angular7
  // Add toastrService
  // 10/06/2019 05:11 pm - SSN - [20191006-1643] - [006] - Adding Angular 7 - Observables and resolvers - Adding ActivatedRoute

  constructor(
    private dataService: DataService,

    // 10/10/2019 11:56 pm - SSN - [20191010-1354] - [006] - M11 - Understanding Angular's Dependency Injection
    @Inject(TOASTR_TOKEN) private toastrService: Toastr,

    private route: ActivatedRoute) {

  }



  ngOnInit() {

    this.timesheets = [];

    //let promise = this.dataService.getTimesheets().toPromise();

    //promise.then(this.getTimesheetSuccess.bind(this), this.getTimesheetError);

    // 10/06/2019 05:10 pm - SSN - [20191006-1643] - [005] - Adding Angular 7 - Observables and resolvers - Pickup data from resolver

    this.timesheets = this.route.snapshot.data['timesheets_resolver'];

    console.log('timesheet.component - 20191009-1502 - AAAA');
    console.log(this.timesheets);

  }


  getTimesheetSuccess(response) {

    this.timesheets = response;

  }


  getTimesheetError(response) {

    console.log('timesheetComponent  20191003-1715 - Error');
    console.log(response);

    ehu.ErrorHandlingHelpers.showHtmlErrorResponse(response);
  }






  handleThumbnailClick(data) {

    console.log('timesheet.component handleThumbnail click');

    console.log('Date received [' + data + ']');
    this.toastrService.success('Loaded [' + data + ']...', 'some title');
  }



  // 10/21/2019 04:48 am - SSN - [20191021-0444] - [001] - M12 - Creating directives and advanced components in Angular.

  searchTimesheets() {

    console.log("timesheet.components - 20191021-0449");
    console.log(this.searchTerm);
    let data = {
      searchTerm: this.searchTerm
    }

    this.dataService.getTimelogSearch(data).then(this.getTimelogSearchSuccess.bind(this), this.getTimelogSearchError.bind(this));


  }


  getTimelogSearchSuccess(result) {

    // this.timesheets_for_modal = result.dataList;
    this.timesheets = result.dataList;
    console.log('timesheet.component - 20191021-2029');
    console.log(result.dataList);


  }


  getTimelogSearchError(response) {

    console.log('timesheet.Component - 20191021-0824  - Error ');
    console.log(response);

    ehu.ErrorHandlingHelpers.showHtmlErrorResponse(response);

  }



}
