import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-jobs-list',
  templateUrl: './project-jobs-list.component.html',
  styleUrls: ['./project-jobs-list.component.css']
})
export class ProjectJobsListComponent implements OnInit {

  @Input() jobs;
  addMode: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  addJob() {
    this.addMode = true;
  }

  cancelAddJob() {
    this.addMode = false;
  }

  saveNewProjectJob(newProject) {

    console.log('project-jobs-list.component - 20191009-1611');
    console.log(newProject);
    this.jobs.push(newProject);
    this.addMode = false;

  }


  cancelNewProjectJob() {

    this.addMode = false;

  }



}
