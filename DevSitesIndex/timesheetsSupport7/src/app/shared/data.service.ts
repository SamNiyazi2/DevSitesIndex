

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

    return this.http.get("/api/timelogapi");

  }

  // 10/05/2019 02:52 pm - SSN - [20191003-1557] - [014] - Adding data service to Angular7

  getTimesheet(id: number) {

    return this.http.get("/api/timelogapi/get_custom/" + id);

  }


  // 10/07/2019 10:58 am - SSN - [20191007-1020] - [005] - Adding Angular 7 - Collecting data with Angular forms and validations - Authenticate user

  authenticateUser(userObject: IUser) {

    return this.http.post("/api/authenticateUserAPI/", userObject);

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


}

