import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITimelog } from 'src/app/interfaces/ITimelog';
import { FormControl } from '@angular/forms';
import { IComponentBase } from 'src/app/interfaces/ComponentBase';


// 10/06/2019 01:20 pm - SSN - [20191006-1211] - [003] - Adding Angular 7

// Tempalte-based form

@Component({
  selector: 'app-create-timelog',
  templateUrl: './create-timelog.component.html',
  styleUrls: ['./create-timelog.component.css']
})
// export class CreateTimelogComponent extends ComponentBase implements OnInit {
export class CreateTimelogComponent implements OnInit, IComponentBase {


  isDirty: boolean;
  pageContent: { title: string; body: string; };

  // isDirty: boolean = true;
  timelog: ITimelog;


  constructor(private router: Router) {

  }

  ngOnInit() {

    console.log('create-timelog.component - 20191009-0154');
    console.log('isDirty', this.isDirty);

    this.timelog = {
      dateAdded: null,
      dateModified: null,
      disciplineID: 0,
      job: {
        jobTitle: "",
        project: {
          projectTitle: "Some job title"
        }
      },
      jobId: null,
      startTime: null,
      timeLogId: 0,
      totalSeconds: null,
      workDetail: "From db"
    };



  }


  isValidControl(formControl, theControlName) {

    if (!formControl.controls[theControlName]) {
      return;
    }

    return formControl.controls[theControlName].valid || formControl.controls[theControlName].untouched;
  }


  cancel() {
    this.router.navigate(['/timesheet']);
  }


  saveTimelog(formValue) {

    console.log('create-timelog.component - 20191009-0147');
    console.log(formValue);

  }


}
