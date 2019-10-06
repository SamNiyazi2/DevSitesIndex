

// 10/03/2019 03:45 pm - SSN - [20191003-1557] - [001] - Adding data service to Angular7


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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


}

