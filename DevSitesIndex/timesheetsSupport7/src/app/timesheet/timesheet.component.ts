import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ToastrService } from '../shared/toastr.service';
 


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


  // 10/04/2019 11:24 pm - SSN - [20191003-1557] - [012] - Adding data service to Angular7
  // Add toastrService
  constructor(private dataService: DataService, private toastrService: ToastrService) { }



  ngOnInit() {

    console.log("timesheet.component.ts - ngOnInit - 20191003-1607");

    this.timesheets = [];

    let promise = this.dataService.getTimesheets().toPromise();

    promise.then(this.getTimesheetSuccess.bind(this), this.getTimesheetError);


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


  handleThumbnailClick(data) {

    console.log('timesheet.component handleThumbnail click');

    console.log('Date received [' + data + ']');
    this.toastrService.success('Loaded [' + data + ']...', 'some title');
    this.toastrService.info('Loaded [' + data + ']...', 'some title');
    this.toastrService.warning('Loaded [' + data + ']...', 'some title');
    this.toastrService.error('Loaded [' + data + ']...', 'some title');
  }

}
