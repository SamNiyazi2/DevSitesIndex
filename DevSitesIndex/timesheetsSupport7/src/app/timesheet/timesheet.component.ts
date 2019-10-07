import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ToastrService } from '../shared/toastr.service';
import { ActivatedRoute } from '@angular/router';
 


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
  // 10/06/2019 05:11 pm - SSN - [20191006-1643] - [006] - Adding Angular 7 - Observables and resolvers - Adding ActivatedRoute

  constructor(private dataService: DataService, private toastrService: ToastrService, private route: ActivatedRoute) {
 
  }



  ngOnInit() {

    console.log("timesheet.component.ts - ngOnInit - 20191003-1607");

    this.timesheets = [];

    //let promise = this.dataService.getTimesheets().toPromise();

    //promise.then(this.getTimesheetSuccess.bind(this), this.getTimesheetError);

    // 10/06/2019 05:10 pm - SSN - [20191006-1643] - [005] - Adding Angular 7 - Observables and resolvers - Pickup data from resolver

    let temp1 = this.route.snapshot.data['timesheets_resolver'];


    this.timesheets = this.route.snapshot.data['timesheets_resolver'];
   

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
  }

}
