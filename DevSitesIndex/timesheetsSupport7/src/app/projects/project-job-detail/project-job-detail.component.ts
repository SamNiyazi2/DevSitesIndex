
// 10/09/2019 08:32 pm - SSN - [20191009-1302] - [009] - M09 - Reusing components with content projection

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-job-detail',
  templateUrl: './project-job-detail.component.html',
  styleUrls: ['./project-job-detail.component.css']
})
export class ProjectJobDetailComponent implements OnInit {

  visible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    this.visible = !this.visible;
  }


}
