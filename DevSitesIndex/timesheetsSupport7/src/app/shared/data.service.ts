

// 10/03/2019 03:45 pm - SSN - [20191003-1557] - [001] - Adding data service to Angular7


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../users/iuser';
import { ISqlStatsRecord } from '../interfaces/ISqlStatusRecord';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // 10/03/2019 05:01 pm - SSN - [20191003-1557] - [007] - Adding data service to Angular7
  // Inject httpClient
  constructor(private http: HttpClient) {
  }


  getTimesheets() {

    return this.http.get("/api/timelogapi");

  }

  // 10/21/2019 10:18 pm - SSN - [20191021-2033] - [004] - Revise timelog search returned result

  getTimesheets_search(data: ISqlStatsRecord) {

    return this.http.post("/api/timelogapi/search", data);

  }



  // 10/21/2019 08:18 am - SSN - [20191021-0444] - [010] - M12 - Creating directives and advanced components in Angular.
  getTimelogSearch(data) {

    return this.http.post('/api/timelogapi/search', data).toPromise();

  }

  // 10/28/2019 09:10 am - SSN - [20191028-0909] - [001] - Timesheet dashboard - Summary by discipline

  getTimelog_SummaryByDiscipline() {

    return this.http.get("/api/timelogapi/summaryByDiscipline/");

  }

  // 10/29/2019 05:24 am - SSN - [20191029-0124] - [009] - Timesheet dashboard - Summary by project

  getTimelog_SummaryByProject() {

    return this.http.get("/api/timelogapi/summaryByProject/");

  }



  // 10/29/2019 12:03 pm - SSN - [20191029-0747] - [008] - Timesheet dashboard - Daily work hour summary

  getTimelog_SummaryByDailyWorkHours() {
 
    return this.http.get("/api/timelogapi/SummaryByDailyWorkHours/");

  }



  getTimesheet(id: number) {

    return this.http.get("/api/timelogapi/get_custom/" + id);

  }




  // 10/07/2019 10:58 am - SSN - [20191007-1020] - [005] - Adding Angular 7 - Collecting data with Angular forms and validations - Authenticate user

  authenticateUser(userObject: IUser) {

    // 10/11/2019 07:38 pm - SSN - [20191011-1804] - [005] - Adding broadcastutil

    let requestOptions = {
      headers: {
        'RequestVerificationToken': userObject.forgeryToken,
        'X-XSRF-Token': userObject.forgeryToken
      }
    };

    return this.http.post("/api/authenticateUserAPI/", userObject, requestOptions);

  }

  // 10/08/2019 02:09 pm - SSN - [20191008-1232] - [007] - X-XSRF-TOKEN
  logoutUser(token) {

    let requestOptions = {
      headers: {
        'RequestVerificationToken': token,
        'X-XSRF-Token': token
      }
    };

    return this.http.post("/api/authenticateUserAPI/logout", {}, requestOptions);

  }

  // 10/08/2019 06:45 pm - SSN - [20191008-1232] - [012] - X-XSRF-TOKEN
  isLoggedIn() {

    return this.http.get("/api/authenticateUserAPI/isLoggedIn");

  }

  // 10/08/2019 08:13 pm - SSN - [20191008-1232] - [016] - X-XSRF-TOKEN
  getForgeryToken() {

    return this.http.get("/api/authenticateUserAPI/ForgeryToken", { responseType: 'text' }).toPromise();
  }


  // 10/09/2019 01:15 pm - SSN - [20191009-1302] - [003] - M09 - Reusing components with content projection
  getProjects() {
    return this.http.get("/api/projectAPI").toPromise();
  }







  // 10/11/2019 02:20 pm - SSN - [20191011-0027] - [004] - M12 - Creating directives and advanced components in Angular

  getProjectsWithStatus(data) {



    console.log('data.service.ts - getProjectWithStatus - 20191011-2043');
    console.log(data);


    return this.http.post("/api/projectAPI/search", data).toPromise();
  }















  // 10/10/2019 10:59 am - SSN - [20191010-1059] - [001] - M10-05 - Creating filtering display
  getJobStatuses() {
    return this.http.get('/api/job_StatusAPI').toPromise();
  }





}

