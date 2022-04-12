
// 10/09/2019 01:14 pm - SSN - [20191009-1302] - [002] - M09 - Reusing components with content projection

import { Component, OnInit, Compiler } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

import * as ehu from '../../util/ErrorHandlingHelpers';
import { GenUtilService } from 'src/app/shared/gen-util.service';

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

    // 03/28/2022 02:31 am - SSN - Adding
    projectRecordCount : number = 0;

    // 12/02/2019 04:28 am - SSN - Adding clearCache

    constructor(private dataService: DataService, private genUtil: GenUtilService, private compiler: Compiler) { }


    ngOnInit() {

        this.compiler.clearCache();

        this.genUtil.setPageTitle("Project List");


        this.dataService.getJobStatuses().then(this.getJobStatusesSuccess.bind(this), this.getJobStatusesError.bind(this));
        this.initialDataLoad();
    }

    // 01/01/2019 02:52 am - SSN - To share with resetSearch


    initialDataLoad() {

        this.dataService.getProjects().then(this.getProjectsSuccess.bind(this), this.getProjectsError.bind(this));

    }


    getProjectsSuccess(response) {

        this.projects = response;
        this.filteredProjects = response;
        this.projectRecordCount= response.length;
    }


    getProjectsError(response) {

        this.projectRecordCount = -1;
        ehu.ErrorHandlingHelpers.showHtmlErrorResponse(response);

    }


    getJobStatusesSuccess(response) {

        this.job_statuses = response;
         
    }


    getJobStatusesError(response) {

        ehu.ErrorHandlingHelpers.showHtmlErrorResponse(response);
    }


    setProjectWithJobsOnly(projectsWithJobsOnly, _filterBy) {

        if (_filterBy == null) {
            _filterBy = this.filterBy;
        }

        this.ProjectWithJobsOnly = projectsWithJobsOnly;

        console.log('20220411-2059-B');
        console.dir(this.ProjectWithJobsOnly );
        console.dir(this.projects);

        if (projectsWithJobsOnly) {

            this.filteredProjects = this.projects.filter(r => r.jobs.some(r2 => (r2.job_StatusID === (_filterBy == 0 ? r2.job_StatusID : _filterBy)))); 
        }
        else {
            this.filteredProjects = this.projects.slice(0);
        }

        // 03/28/2022 04:59 am - SSN
        this.projectRecordCount = this.filteredProjects.length;

        if (_filterBy != this.filterBy) {
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

        let data = {
            searchText: this.searchTerm,
            selectedTablesIDs: "12"
        }

        this.dataService.getProjectsWithStatus(data).then(this.searchResultSuccess.bind(this), this.searchResultError.bind(this));

    }


    searchResultSuccess(response) {

        this.projects = response.dataList;
        this.filteredProjects = response.dataList;

        // 04/11/2022 10:50 pm - SSN - Correct
        this.projectRecordCount = response.dataList.length;
    }


    searchResultError(response) {

        ehu.ErrorHandlingHelpers.showHtmlErrorResponse(response);

        // 04/11/2022 10:50 pm - SSN 
        this.projectRecordCount = 0;

    }


    // 01/01/2019 02:51 am - SSN - Adding 
    resetSearch() {

        this.searchTerm = null;
        this.initialDataLoad();

    }


}
