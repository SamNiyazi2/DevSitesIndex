import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GenUtilService } from 'src/app/shared/gen-util.service';

@Component({
  selector: 'app-project-create-job',
  templateUrl: './project-create-job.component.html',
  styleUrls: ['./project-create-job.component.css']
})
export class ProjectCreateJobComponent implements OnInit {

  @Output() saveNewJob = new EventEmitter();
  @Output() cancelNewJob = new EventEmitter();

  jobTitle: FormControl = new FormControl();
  newJobForm: FormGroup = new FormGroup({ jobTitle: this.jobTitle });

  job: any;

  constructor(private genUtil: GenUtilService) { }

  ngOnInit() {


    this.genUtil.setPageTitle("New Job Entry");


    setTimeout(this.doSetfocus, 700);
  }

  doSetfocus() {
    $('[autofocus]').focus();
  }


  validControl(controlName) {

    return this.newJobForm.controls[controlName].valid || this.newJobForm.controls[controlName].untouched;

  }

  saveNewJob_local(formValue) {
    console.log('project-create-job.component - 201009-1546');
    console.log(formValue);
    console.log("Valid: " + this.newJobForm.valid);
    if (this.newJobForm.valid) {
      this.saveNewJob.emit(formValue);
    }

  }

  // 10/28/2019 05:39 am - SSN - [20191028-0456] - [007] - Timesheet dashboard
  // ng build --aot=true - child route fix
  //cancelNewJob_local(formValue) {
  cancelNewJob_local() {

    this.cancelNewJob.emit();

  }


}
