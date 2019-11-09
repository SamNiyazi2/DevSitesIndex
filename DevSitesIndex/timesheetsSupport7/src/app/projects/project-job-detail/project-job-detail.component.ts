
// 10/09/2019 08:32 pm - SSN - [20191009-1302] - [009] - M09 - Reusing components with content projection

import { Component, OnInit } from '@angular/core';
import { GenUtilService } from 'src/app/shared/gen-util.service';

@Component({
  selector: 'app-project-job-detail',
  templateUrl: './project-job-detail.component.html',
  styleUrls: ['./project-job-detail.component.css']
})
export class ProjectJobDetailComponent implements OnInit {

  visible: boolean = false;

  constructor(private genUtil:GenUtilService) { }

  ngOnInit() {

    this.genUtil.setPageTitle("Job Detail");

  }

  toggleContent() {
    this.visible = !this.visible;
  }


}
