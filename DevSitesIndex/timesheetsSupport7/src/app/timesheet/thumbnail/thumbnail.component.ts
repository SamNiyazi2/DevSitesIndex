import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITimelog } from 'src/app/interfaces/ITimelog';

// 10/04/2019 05:29 pm - SSN - [20191003-1557] - [009] - Adding data service to Angular7

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html?v=1',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  // 10/07/2019 09:34 am - SSN - [20191007-0914] - [003] - Adding Angular 7 - Collecting data with Angular forms and validations
  // Added ITimeLog
  @Input() timesheet: ITimelog;
  @Output() eventClick = new EventEmitter();

  somePropertyInThumnail: string = "Some value for someProperty";

  constructor() { }

  ngOnInit() {
  }

  handleClickMe101(timesheet) {
    console.log("Clicked me!");
    this.eventClick.emit(timesheet.job.jobTitle);
  }

  testFunction() {
    console.log("Output from testFunction");
  }

  setTotalSecondsClass() {

    if (!this.timesheet) return;
    if (!this.timesheet.totalSeconds) return;

    if (this.timesheet.totalSeconds < 3600) return ["green", "bold", "colorPadded"];
    if (this.timesheet.totalSeconds < 7200) return { yellow: true, colorPadded: true };

    return { red: true };

  }


}
