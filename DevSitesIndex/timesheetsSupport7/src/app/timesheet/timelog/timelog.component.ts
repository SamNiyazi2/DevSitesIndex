
// 10/05/2019 03:14 pm - SSN - [20191003-1557] - [016] - Adding data service to Angular7

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timelog',
  templateUrl: './timelog.component.html',
  styleUrls: ['./timelog.component.css']
})
export class TimelogComponent implements OnInit {

  timelog: any;



  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {

    console.log("timelog.component - 20191005-1521");

    this.timelog = {};

    this.timelog.timeLogId = -999;

    // 10/06/2019 12:12 pm - SSN - [20191006-1211] - [001] - Adding Angular 7
    let id = +this.route.snapshot.params['id'];

    let promise = this.dataService.getTimesheet(id).toPromise();

    promise.then(this.getTimesheetSuccess.bind(this), this.getTimesheetError).catch(this.getTimesheetCatch);

  }


  getTimesheetSuccess(response) {

    console.log('timelog.component - getTimehseetSuccess - 20191005-1523');

    console.log(response);
    this.timelog = response;

  }


  getTimesheetError(response) {

    console.log('timelog.component - getTimehseetError - 20191005-1524');
    console.log(response);

  }


  getTimesheetCatch(response) {

    console.log('timelog.component - getTimehseetCatch - 20191005-1526');
    console.log(response);

  }


}
