import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {

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


  cancelNewJob_local(formValue) {

    this.cancelNewJob.emit();

  }


}
