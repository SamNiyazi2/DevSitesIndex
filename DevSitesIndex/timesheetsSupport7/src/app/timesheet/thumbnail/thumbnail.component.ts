import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
// 10/04/2019 05:29 pm - SSN - [20191003-1557] - [009] - Adding data service to Angular7

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html?v=1',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input()  timesheet: any;
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

    if (this.timesheet.totalSeconds < 3600) return ["green", "bold","colorPadded"];
    if (this.timesheet.totalSeconds < 7200) return { yellow: true, colorPadded: true};

    return { red: true };

  }


}
