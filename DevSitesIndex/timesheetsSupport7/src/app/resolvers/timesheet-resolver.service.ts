
// 10/06/2019 05:00 pm - SSN - [20191006-1643] - [002] - Adding Angular 7 - Observables and resolvers

import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Resolve } from '@angular/router';

import { map, withLatestFrom } from 'rxjs/operators';
import { ISqlStatsRecord } from '../interfaces/ISqlStatusRecord';
import { AuthenticateService } from '../users/authenticate.service';
import { promise } from 'protractor';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TimesheetResolverService implements Resolve<any>{  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


  isDone: boolean = false;

  // 11/03/2019 08:15 am - SSN - [20191101-0526] - [019] - Check login status
  // authenticateService 
  constructor(private dataService: DataService, private authenticateService: AuthenticateService) {

  }

  resolve() {


 

    this.authenticateService.isLoggedIn_promise();

 

    // if (!this.authenticateService.isAuthenticated()) {
    // 
    this.authenticateService.isLoggedIn_subscribe()



    // 11/01/2019 10:18 am - SSN - [20191101-1018] Added passing in data for default recordsPerPage

    
    let data: ISqlStatsRecord = {
      recordsPerPage: 20
    }

    return this.dataService.getTimesheets(data).pipe(map(data => data));
    
  }


}
