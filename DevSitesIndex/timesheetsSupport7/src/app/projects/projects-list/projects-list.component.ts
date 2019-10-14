
// 10/09/2019 01:14 pm - SSN - [20191009-1302] - [002] - M09 - Reusing components with content projection

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

import * as ehu from '../../util/ErrorHandlingHelpers';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: any;
  filteredProjects: any;

  childInAddMode: boolean = false;

  // 10/10/2019 11:20 am - SSN - [20191010-1059] - [003] - M10-05 - Creating filtering display

  job_statuses: any;
  filterBy: number = 0;
  ProjectWithJobsOnly: boolean = false;

  // 10/11/2019 12:27 am - SSN - [20191011-0027] - [001] - M12 - Creating directives and advanced components in Angular
  searchTerm: string = "";
  projectRecordsFound: any;


  constructor(private dataService: DataService) { }


  ngOnInit() {

    this.dataService.getProjects().then(this.getProjectsSuccess.bind(this), this.getProjectsError.bind(this));
    this.dataService.getJobStatuses().then(this.getJobStatusesSuccess.bind(this), this.getJobStatusesError.bind(this));

  }


  getProjectsSuccess(response) {
    console.log('project-list - success - 20191009-1316');
    console.log(response);
    this.projects = response;
    this.filteredProjects = response;

  }


  getProjectsError(response) {
    console.log('project-list - Error - 20191009-1317');
    console.log(response);
  }



  getJobStatusesSuccess(response) {
    console.log('project-list - jobStatus success - 20191010-1102');
    console.log(response);
    this.job_statuses = response;
  }


  getJobStatusesError(response) {
    console.log('project-list - jobStatus Error - 20191010-1103');
    console.log(response);
  }

  setProjectWithJobsOnly(projectsWithJobsOnly, _filterBy) {


    if (_filterBy == null) {
      _filterBy = this.filterBy;
    }

    this.ProjectWithJobsOnly = projectsWithJobsOnly;

    if (projectsWithJobsOnly) {

      this.filteredProjects = this.projects.filter(r => r.jobs.some(r2 => (r2.job_StatusID === (_filterBy == 0 ? r2.job_StatusID : _filterBy))));
    }
    else {
      this.filteredProjects = this.projects.slice(0);
    }

    if (_filterBy != this.filterBy) {
      console.log('set filter');
      this.filterBy = _filterBy;
    }
  }

  setFilter(_filterBy) {
    this.setProjectWithJobsOnly(this.ProjectWithJobsOnly, _filterBy);
  }


  inAddMode(setting) {
    this.childInAddMode = setting;
  }



  // 10/11/2019 12:28 am - SSN - [20191011-0027] - [002] - M12 - Creating directives and advanced components in Angular

  searchProjects() {

    console.log("projects-list.components - 20191011-0028");
    console.log(this.searchTerm);
    let data = {
      searchText: this.searchTerm,
      selectedTablesIDs: "12"
    }

    this.dataService.getProjectsWithStatus(data).then(this.searchResultSuccess.bind(this), this.searchResultError.bind(this));


  }

  searchResultSuccess(response) {
    console.log('projects-list.component - searchresult Success - 20191011-1422');
    console.log(response);
  }


  searchResultError(response) {
    console.log('projects-list.component - searchresult Error - 20191011-1423');
    console.log(response);

    ehu.ErrorHandlingHelpers.showHtmlErrorResponse(response);


  }




}
