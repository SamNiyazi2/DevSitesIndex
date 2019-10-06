import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// 10/06/2019 01:20 pm - SSN - [20191006-1211] - [003] - Adding Angular 7

@Component({
  selector: 'app-create-timelog',
  templateUrl: './create-timelog.component.html',
  styleUrls: ['./create-timelog.component.css']
})
export class CreateTimelogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  cancel() {
    this.router.navigate(['/timesheet']);
  }
}
