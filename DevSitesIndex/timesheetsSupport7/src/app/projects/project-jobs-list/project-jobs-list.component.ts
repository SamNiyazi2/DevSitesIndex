import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { GenUtilService } from 'src/app/shared/gen-util.service';

@Component({
  selector: 'app-project-jobs-list',
  templateUrl: './project-jobs-list.component.html',
  styleUrls: ['./project-jobs-list.component.css']
})
export class ProjectJobsListComponent implements OnInit, OnChanges {


  @Input() jobs;
  @Input() filterBy: number = 0;
  @Output() inAddMode = new EventEmitter();

  addMode: boolean = false;

  // 10/10/2019 11:24 am - SSN - [20191010-1059] - [004] - M10-05 - Creating filtering display
  filteredJobs: any;

  constructor(private genUtil: GenUtilService) { }

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
    this.setAddMode(true);
  }

  cancelAddJob() {
    this.setAddMode(false);
  }

  saveNewProjectJob(newJob) {

    console.log('project-jobs-list.component - 20191009-1611');
    console.log(newJob);
    newJob.job_StatusID = 1;
    this.jobs.unshift(newJob);
    
    this.setAddMode(false);

  }


  cancelNewProjectJob() {

    this.setAddMode(false);
  }


  setAddMode(setting) {

    this.addMode = setting;
    this.inAddMode.emit(setting);

  }


}
