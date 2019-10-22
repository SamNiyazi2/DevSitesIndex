
// 10/05/2019 03:14 pm - SSN - [20191003-1557] - [016] - Adding data service to Angular7

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-timelog',
  templateUrl: './timelog.component.html',
  styleUrls: ['./timelog.component.css']
})
export class TimelogComponent implements OnInit {

  timelog: any;


  constructor(private dataService: DataService, private route: ActivatedRoute) { }


  ngOnInit() {

    this.timelog = {};

    this.timelog.timeLogId = -999;

    // 10/06/2019 12:12 pm - SSN - [20191006-1211] - [001] - Adding Angular 7
    // 10/21/2019 11:58 am - SSN - [20191021-0444] - [014] - M12 - Creating directives and advanced components in Angular.

    let id = 0;
    let promise;

    let useOriginalVersion: boolean = true;

    if (useOriginalVersion) {

      id = +this.route.snapshot.params['id'];
    }
    else {

      this.route.params.forEach((params: Params) => {
        id = +params['id'];
      });

    }

    promise = this.dataService.getTimesheet(id).toPromise();

    promise.then(this.getTimesheetSuccess.bind(this), this.getTimesheetError).catch(this.getTimesheetCatch);

  }


  getTimesheetSuccess(response) {

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
