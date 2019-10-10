
// 10/09/2019 01:14 pm - SSN - [20191009-1302] - [002] - M09 - Reusing components with content projection

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: any;


  constructor( private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getProjects().then(this.getProjectsSuccess.bind(this), this.getProjectsError.bind(this));

  }


  getProjectsSuccess(response) {
    console.log('project-list - success - 20191009-1316');
    console.log(response);
    this.projects = response;
  }


  getProjectsError(response) {
    console.log('project-list - Error - 20191009-1317');
    console.log(response);
  }

 

}
