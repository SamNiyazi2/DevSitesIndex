
// 10/06/2019 01:31 pm - SSN - [20191006-1211] - [006] - Adding Angular 7

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DataService } from '../shared/data.service';

console.log('timelogroute-activator.service - 20191006-1343');

@Injectable({
  providedIn: 'root'
})
export class TimelogRouteActivatorService implements CanActivate {

  constructor(private dataService: DataService, private route: Router) {

    console.log('timelogroute-activator.service - 20191006-1344 - constructor ');

  }

  canActivate(route: ActivatedRouteSnapshot) {

    console.log('timelogroute-activator.service - 20191006-1345 - canActivate ');

    let id = +this.dataService.getTimesheet(route.params['id']);

 
   let result =  this.dataService.getTimesheet(route.params['id']).toPromise().then((r) => {

      let recordExists = !!r;

      console.log(r);

      console.log("id [" + id + "] recordexists [" + recordExists + "]");
      return recordExists;

    },
      (r) => {
        this.route.navigate(['e404']);
        return false;
      });


    console.log("result  [" + result + "]");

    return result;
  }
}
