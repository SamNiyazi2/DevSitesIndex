import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

console.log('timesheet.component.ts - 20191003-1618');

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  // 10/03/2019 04:04 pm - SSN - [20191003-1557] - [004] - Adding data service to Angular7
  // Injectindata DataService

  timesheets: any;



  constructor(private dataService: DataService) { }



  ngOnInit() {

    console.log("timesheet.component.ts - ngOnInit - 20191003-1607");

    this.timesheets = [];

    this.dataService.getTimesheets().toPromise().then(this.getTimesheetSuccess.bind(this), this.getTimesheetError);

    
  }

  getTimesheetSuccess(response) {

    console.log('timesheetComponent  20191003-1715 - success');
    console.log(response);

    this.timesheets = response;

  }


  getTimesheetError(response) {

    console.log('timesheetComponent  20191003-1715 - Error');
    console.log(response);

  }




}
