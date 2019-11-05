import { Output, EventEmitter } from "@angular/core";
import { ComponentBase } from './ComponentBase';

// 11/04/2019 05:21 pm - SSN - [20191104-0607] - [009] - Registration - Client 
// Moved outside 

export class PopupComponentSupport extends ComponentBase {

  @Output() closePopupCaller = new EventEmitter();

  isOpenAsModal(): boolean {
 
    return this.closePopupCaller.observers.length !== 0;

  }

}
