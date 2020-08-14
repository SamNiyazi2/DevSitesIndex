
// 10/06/2019 01:31 pm - SSN - [20191006-1211] - [006] - Adding Angular 7

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DataService } from '../shared/data.service';



@Injectable({
  providedIn: 'root'
})
export class TimelogRouteActivatorService implements CanActivate {

  constructor(private dataService: DataService, private route: Router) { }


  canActivate(route: ActivatedRouteSnapshot) {

    let result = this.dataService.getTimesheet(route.params['id']).toPromise().then((r) => {

      let recordExists = !!r;

      return recordExists;

    },
      (r) => {
        this.route.navigate(['e404']);
        return false;
      });


    return result;
  }
}
