import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from '../j-query.service';

@Component({
  selector: 'app-timelog-modal',
  templateUrl: './timelog-modal.component.html',
  styleUrls: ['./timelog-modal.component.css']
})
export class TimelogModalComponent implements OnInit {

  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnClick: string;

  @ViewChild('modalContainer') containerEl: ElementRef;


  constructor(@Inject(JQ_TOKEN) private $: any) { }


  ngOnInit() {
  }

  closeModal() {
 

    let _closeOnClick = true;

    console.log('timelog-modal.compoent - 20191021-1315');
    console.log(typeof (this.closeOnClick));


    if (typeof (this.closeOnClick) === "string" && this.closeOnClick.toLowerCase() !== "true") {
      _closeOnClick = false;
    }
    if (_closeOnClick) {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }


}
