
// 11/05/2019 10:13 am - SSN - [20191105-0938] - [002] - Add routes for all menu options

import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-site-menu',
  templateUrl: './main-site-menu.component.html',
  styleUrls: ['./main-site-menu.component.css']
})
export class MainSiteMenuComponent implements OnInit, DoCheck {

  ngDoCheck(): void {

    const targetUrl = this.router.url.replace('/MainSiteMenu', '');

    console.log('main-site-menu - 20191105-1028 -change 2 ');
    console.log(targetUrl);
    document.location.href = targetUrl;

  }

  
  constructor(private router: Router) { }

  ngOnInit() {

  }

}
