
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


  dateToString(d1: Date) {

    if (typeof (d1) === "string") {
      d1 = new Date(d1);
    }

    return (d1.getMonth() + 1).toString().padStart(2, '0') + "/" + d1.getDate().toString().padStart(2, '0') + "/" + d1.getFullYear().toString();

  }


  doSetfocus_withTimeout(selector: string) {
    setTimeout(() => this.doSetfocus(selector), 700);
  }

  doSetfocus(selector: string) {
    $(selector).focus();
  }


  ToLowerCaseFirstChar(theString: string) {

    if (theString == null) return theString;
    const tempString = theString.substr(0, 1).toLowerCase() + theString.substring(1);
    return tempString;

  }
}
