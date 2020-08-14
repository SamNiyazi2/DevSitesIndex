import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, Inject } from '@angular/core';
import { GenUtilService } from 'src/app/shared/gen-util.service';
import { DataService } from 'src/app/shared/data.service';
import { TOASTR_TOKEN, Toastr } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-project-jobs-list',
  templateUrl: './project-jobs-list.component.html',
  styleUrls: ['./project-jobs-list.component.css']
})
export class ProjectJobsListComponent implements OnInit, OnChanges {

  @Input() projectId; // 12/02/2019 05:41 am - SSN Added
  @Input() jobs;
  @Input() filterBy: number = 0;
  @Output() inAddMode = new EventEmitter();

  addMode: boolean = false;

  // 10/10/2019 11:24 am - SSN - [20191010-1059] - [004] - M10-05 - Creating filtering display
  filteredJobs: any;

  constructor(private genUtil: GenUtilService, private dataService: DataService,

    // 12/02/2019 05:18 am - SSN - Copied from profile.component.ts
    @Inject(TOASTR_TOKEN) private toastr: Toastr) { }


  ngOnInit() {

    this.genUtil.setPageTitle("Project Job List");

  }


  // 10/10/2019 11:19 am - SSN - [20191010-1059] - [002] - M10-05 - Creating filtering display

  ngOnChanges(changes: SimpleChanges): void {

    if (this.jobs) {
      this.filterJobs();
    }
  }


  filterJobs() {


    if (this.filterBy > 0) {
      this.filteredJobs = this.jobs.filter((r) => r.job_StatusID == this.filterBy);
    }
    else {
      this.filteredJobs = this.jobs;
    }
  }



  addJob() {

    console.log('projct-jobs-list.componet - 20191202-0621')


    this.setAddMode(true);
  }

  cancelAddJob() {
    this.setAddMode(false);
  }

  saveNewProjectJob(newJob) {

    this.setAddMode(false);
    newJob.csshighlightAdded = "csshighlight_Added";
    this.jobs.unshift(newJob);

    this.toastr.info("Job was saved.");


  }










  cancelNewProjectJob() {

    this.setAddMode(false);
  }


  setAddMode(setting) {

    console.log('projct-jobs-list.componet - setAddMode - 20191202-0622')


    this.addMode = setting;
    this.inAddMode.emit(setting);

  }




  // 12/02/2019 10:09 am - SSN - Delete job

  deleteJob(e, jobId) {

    e.stopPropagation();
    e.stopPropagation();
    e.preventDefault();

    console.log('project-jobs-list.component - deleteJob');
    console.log(jobId);

  }
}
