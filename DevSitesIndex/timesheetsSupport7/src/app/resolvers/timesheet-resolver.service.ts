
// 10/06/2019 05:00 pm - SSN - [20191006-1643] - [002] - Adding Angular 7 - Observables and resolvers

import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Resolve } from '@angular/router';

import { map } from 'rxjs/operators';
 

@Injectable({
  providedIn: 'root'
})
export class TimesheetResolverService implements Resolve<any>{  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  constructor(private dataService: DataService) {
 
  }

  resolve() {
    
    let obj2 = this.dataService.getTimesheets().pipe(map(timesheets => timesheets));
    
    return obj2;
  }
}
