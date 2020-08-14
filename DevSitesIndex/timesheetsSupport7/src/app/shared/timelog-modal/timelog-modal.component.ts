import { Component, OnInit, Input, ViewChild, ElementRef, Inject, } from '@angular/core';
import { JQ_TOKEN } from '../j-query.service';
import { BroadcasterUtilService } from 'src/app/broadcaster-util.service';


@Component({
  selector: 'app-timelog-modal',
  templateUrl: './timelog-modal.component.html',
  styleUrls: ['./timelog-modal.component.css']
})
export class TimelogModalComponent implements OnInit {


  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnClick: string;

  // 11/03/2019 07:25 am - SSN - [20191101-0526] - [017] - Check login status
  // To pass ing returnUrl
  @Input() customObject: any;

  counter = 0;


  @ViewChild('modalContainer') containerEl: ElementRef;


  constructor(@Inject(JQ_TOKEN) private $: any, private broadcasterUtil: BroadcasterUtilService) { }


  ngOnInit() {

    this.broadcasterUtil.on<string>('doLogin')
      .subscribe((message: any) => {

        this.counter++;

        if (message.controlId) {

          if (message.controlId === this.containerEl.nativeElement.id) {
            this.customObject = message;
            this.openModal();

          }
        }

      });

  }


  closeModalOnBodyClick() {

    let _closeOnClick = true;

    if (typeof (this.closeOnClick) === "string" && this.closeOnClick.toLowerCase() !== "true") {
      _closeOnClick = false;
    }
    if (_closeOnClick) {
      this.closeModal();
    }

  }


  closeModal() {
    this.$(this.containerEl.nativeElement).modal('hide');
  }


  // 11/01/2019 01:21 pm - SSN - [20191101-0526] - [004] - Check login status

  openModal() {

    this.$(this.containerEl.nativeElement).modal({ backdrop: 'static', keyboard: false });
      
  }
   

}
