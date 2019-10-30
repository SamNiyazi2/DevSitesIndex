
// 10/30/2019 11:11 am - SSN - [20191030-1054] - [001] - Timesheet dashboard - Weekly work hours summary

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GenUtilService {


  constructor() { }


  setPageTitle(title: string) {

    document.title = (title + " - " + document.location.hostname);
  }




  compareDates(d1, d2) {

    if (d1 > d2) return -1;
    if (d1 < d2) return 1;
    return 0;
  }




}
