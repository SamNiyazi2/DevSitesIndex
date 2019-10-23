import { Component, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ISqlStatsRecord } from '../interfaces/ISqlStatusRecord';



//<span  * ngFor="let item of data" > <span>{{ item }}</span> &nbsp; &nbsp; <span (click)='removeTag_local(\"" +   item + "\")'>X</span > & nbsp;  & nbsp; </span> 

@Component({
  selector: 'app-page-v02-custom',
  template: `
<p><span [ngClass]="CSSClasses">{{sayWhatpageWeAreon}}</span></p>
<div *ngIf="haveRecords">
  <button cmd-name="smooth-scroll" jQueryObjectName="[ssnobject]" [disabled]="!previousButtonEnabled" appPagerCustom class="btn btn-default" (click)="doSkip(-1)" >Previous</button> &nbsp; 
  <button cmd-name="smooth-scroll" jQueryObjectName="[ssnobject]" [disabled]="!nextButtonEnabled" appPagerCustom class="btn btn-default" (click)="doSkip(1)" >Next</button>
</div>
 
`
})
export class AppPageV02Custom implements OnChanges {


  @Input() sqlStatsRecord: ISqlStatsRecord;
  @Input() scrollIntoViewSelector: string;

  @Output() skipActionOwner = new EventEmitter();

  sayWhatpageWeAreon: string;
  previousButtonEnabled: boolean = false;
  nextButtonEnabled: boolean = true;
  haveRecords: boolean = false;
  CSSClasses: string[];

  constructor() {

  }



  ngOnChanges(changes: SimpleChanges): void {

    this.haveRecords = false;


    if (this.sqlStatsRecord) {

      if (this.sqlStatsRecord.currentPageNo > 0 && this.sqlStatsRecord.totalRecordCount > 0) {

        let totalPageCount = Math.ceil(this.sqlStatsRecord.totalRecordCount / this.sqlStatsRecord.recordsPerPage);

        this.sayWhatpageWeAreon = "Page " + this.sqlStatsRecord.currentPageNo + " of " + totalPageCount;

        this.previousButtonEnabled = this.sqlStatsRecord.currentPageNo > 1 && totalPageCount > 1;
        this.nextButtonEnabled = this.sqlStatsRecord.currentPageNo < totalPageCount;

        this.haveRecords = this.sqlStatsRecord.totalRecordCount > 0;
        this.CSSClasses = [];

      }
      else {
        this.sayWhatpageWeAreon = "No records available.";

        this.CSSClasses = ['info_bad', 'padded_v02'];
      }

    }

  }



  doSkip(value) {

    this.skipActionOwner.emit({ value: value, sqlStatsRecord: this.sqlStatsRecord });

    if (this.scrollIntoViewSelector) {

      let obj1 = document.querySelector(this.scrollIntoViewSelector);
      if (obj1) {
        obj1.scrollIntoView({ behavior: 'smooth' });
      }
    }

  }



}



