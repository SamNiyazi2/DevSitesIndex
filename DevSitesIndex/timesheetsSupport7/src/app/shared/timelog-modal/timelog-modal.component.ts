import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timelog-modal',
  templateUrl: './timelog-modal.component.html',
  styleUrls: ['./timelog-modal.component.css']
})
export class TimelogModalComponent implements OnInit {

  @Input() title: string;


  constructor() { }

  ngOnInit() {
  }

}
