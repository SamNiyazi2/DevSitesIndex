import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ToastrService } from '../shared/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { ITimelog } from '../interfaces/ITimelog';
 

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


  // 10/04/2019 11:24 pm - SSN - [20191003-1557] - [012] - Adding data service to Angular7
  // Add toastrService
  // 10/06/2019 05:11 pm - SSN - [20191006-1643] - [006] - Adding Angular 7 - Observables and resolvers - Adding ActivatedRoute

  constructor(private dataService: DataService, private toastrService: ToastrService, private route: ActivatedRoute) {

  }



  ngOnInit() {
      
    this.timesheets = [];

    //let promise = this.dataService.getTimesheets().toPromise();

    //promise.then(this.getTimesheetSuccess.bind(this), this.getTimesheetError);

    // 10/06/2019 05:10 pm - SSN - [20191006-1643] - [005] - Adding Angular 7 - Observables and resolvers - Pickup data from resolver
      
    this.timesheets = this.route.snapshot.data['timesheets_resolver'];

    console.log('timesheet.component - 20191009-1502');
    console.log(this.timesheets);

  }


  getTimesheetSuccess(response) {
      
    this.timesheets = response;

  }


  getTimesheetError(response) {

    console.log('timesheetComponent  20191003-1715 - Error');
    console.log(response);

  }


  handleThumbnailClick(data) {

    console.log('timesheet.component handleThumbnail click');

    console.log('Date received [' + data + ']');
    this.toastrService.success('Loaded [' + data + ']...', 'some title');
  }

}
