import { Component, OnInit, Output, EventEmitter, Compiler, Input, OnChanges, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GenUtilService } from 'src/app/shared/gen-util.service';
import { DataService } from 'src/app/shared/data.service';

import { TOASTR_TOKEN, Toastr } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-project-create-job',
  templateUrl: './project-create-job.component.html',
  styleUrls: ['./project-create-job.component.css']
})
export class ProjectCreateJobComponent implements OnInit, OnChanges {


  @Input() projectId;
  @Output() saveNewJob = new EventEmitter();
  @Output() cancelNewJob = new EventEmitter();

  jobTitle: FormControl = new FormControl();
  newJobForm: FormGroup = new FormGroup({ jobTitle: this.jobTitle });

  job: any;

  feedbackToUserText: string = "";
  feedbackToUserClassNameCase: number = 0;

  constructor(private genUtil: GenUtilService, private dataService: DataService, private compiler: Compiler,

    // 12/03/2019 10:42 pm - SSN - Added Toastr
    @Inject(TOASTR_TOKEN) private toastr: Toastr 

  ) { }

  ngOnInit() {

    this.compiler.clearCache();

    this.genUtil.setPageTitle("New Job Entry");


    console.log('project-create-job.component - 20191202-0631 - should have projectId [', this.projectId, ']');



    setTimeout(this.doSetfocus, 700);
  }

  ngOnChanges(): void {

    console.log('project-create-job.compoennt');

  }



  doSetfocus() {
    $('[autofocus]').focus();
  }


  validControl(controlName) {

    return this.newJobForm.controls[controlName].valid || this.newJobForm.controls[controlName].untouched;

  }

  saveNewJob_local(formValue) {

    this.feedbackToUserText = "";
    this.feedbackToUserClassNameCase = 0;


    console.log('project-create-job.component - 201009-1546');
    console.log(formValue);
    console.log("Valid: " + this.newJobForm.valid);

    if (this.newJobForm.valid) {

      let newJob: any = {};
      newJob.jobTitle = this.jobTitle.value;
      newJob.projectID = this.projectId;
      newJob.job_StatusID = 1;

      console.log(newJob);

      this.dataService.postJob(newJob).then(this.postJobSuccess.bind(this)).catch(this.postJobError.bind(this));


    }

  }


  // 12/02/2019 05:11 am - SSN - Adding saving job reocrd

  postJobSuccess(results) {

   
   
    console.log('project-create-job.component - 20191202-0805');
    console.log(results);


    this.saveNewJob.emit(results);
  }



  postJobError(results) {

    this.toastr.error("Failed to save job. See console log.");
    console.error("Failed to dave job - 20191202-0515");
    console.error(results);
    this.feedbackToUserText = results.error;
    this.feedbackToUserClassNameCase = 2;
  }




   
  cancelNewJob_local() {

    this.cancelNewJob.emit();

  }


  feedbackToUserClassNameSet() {

    switch (this.feedbackToUserClassNameCase) {
      case 1:
        return "margined info_good";
      case 2:
        return "margined info_bad";
      default:
        return "";
    }

  }


  // 12/02/2019 08:22 am - SSN - Added

  checkForDuplicates() {
      
    let newJob: any = {};
    let temp = this.jobTitle.value.replace("  ", " ").trim();

    if (this.jobTitle.value != temp) {
      this.jobTitle.setValue(temp);
    }

    newJob.jobTitle = this.jobTitle.value;
    newJob.projectID = this.projectId;

    console.log(newJob);

    this.dataService.checkForDuplicateProjectJobTitle(newJob).then(this.checkForDuplicateProjectJobTitleSuccess.bind(this)).catch(this.postJobError.bind(this));


  }

  checkForDuplicateProjectJobTitleSuccess(results) {

    // results = true if it's a duplicate.
    if (results) {
      this.jobTitle.setErrors({ duplicateJobTitle: true });
    }

  }


}
