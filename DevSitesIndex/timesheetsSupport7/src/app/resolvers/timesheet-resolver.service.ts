
// 10/06/2019 05:00 pm - SSN - [20191006-1643] - [002] - Adding Angular 7 - Observables and resolvers

import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Resolve } from '@angular/router';

import { map } from 'rxjs/operators';

console.log('timesheet-resolver.service - 20191006-1721');


@Injectable({
  providedIn: 'root'
})
export class TimesheetResolverService implements Resolve<any>{  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  constructor(private dataService: DataService) {

    console.log('timesheet-resolver.service - 20191006-1722 - constructor');

  }

  resolve() {

    console.log('timesheet-resolver.service - 20191006-1723-A - resolve');

    let obj1 = this.dataService.getTimesheets();
    let obj2 = this.dataService.getTimesheets().pipe(map(timesheets => timesheets));

    console.log(obj1);
    console.log(obj2);

    console.log('timesheet-resolver.service - 20191006-1723-Z - resolve');

    return obj2;
  }
}
