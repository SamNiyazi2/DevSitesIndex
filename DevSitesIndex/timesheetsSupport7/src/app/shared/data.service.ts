

// 10/03/2019 03:45 pm - SSN - [20191003-1557] - [001] - Adding data service to Angular7


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../users/iuser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // 10/03/2019 05:01 pm - SSN - [20191003-1557] - [007] - Adding data service to Angular7
  // Inject httpClient
  constructor(private http: HttpClient) {
  }


  getTimesheets() {

    console.log('dataservice - getTimesheets - 20191003-1707');

    return this.http.get("/api/timelogapi");

  }

  // 10/05/2019 02:52 pm - SSN - [20191003-1557] - [014] - Adding data service to Angular7

  getTimesheet(id: number) {

    console.log('dataservice - getTimesheet - 20191005-1451');

    return this.http.get("/api/timelogapi/get_custom/" + id);

  }


  // 10/07/2019 10:58 am - SSN - [20191007-1020] - [005] - Adding Angular 7 - Collecting data with Angular forms and validations - Authenticate user

  authenticateUser(userObject: IUser) {

    console.log('dataservice - authenticateUser - 20191007-1112');
    console.log(userObject);

    return this.http.post("/api/authenticateUserAPI/", userObject);


  }


}

