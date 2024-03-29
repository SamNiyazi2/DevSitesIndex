import { Output, EventEmitter } from "@angular/core";
import { IComponentBase } from './ComponentBase';

// 11/04/2019 05:21 pm - SSN - [20191104-0607] - [009] - Registration - Client 
// Moved outside 

// export class PopupComponentSupport extends ComponentBase {
export class PopupComponentSupport implements IComponentBase {

  isDirty: boolean = false;
  pageContent: { title: string; body: string; };


  @Output() closePopupCaller = new EventEmitter();

  isOpenAsModal(): boolean {

    return this.closePopupCaller.observers.length !== 0;

  }


  // 10/11/2019 08:22 pm - SSN
  doSetfocus() {
    $('[autofocus]').focus();
  }


}
