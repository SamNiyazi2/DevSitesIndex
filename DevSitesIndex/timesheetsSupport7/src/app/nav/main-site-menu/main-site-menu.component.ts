
// 11/05/2019 10:13 am - SSN - [20191105-0938] - [002] - Add routes for all menu options

import { Component, OnInit, OnChanges, DoCheck, Compiler } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-site-menu',
  templateUrl: './main-site-menu.component.html',
  styleUrls: ['./main-site-menu.component.css']
})
export class MainSiteMenuComponent implements OnInit, DoCheck {

  ngDoCheck(): void {


    this.compiler.clearCache();


    const targetUrl = this.router.url.replace('/MainSiteMenu', '');

    document.location.href = targetUrl;

  }


  constructor(private router: Router, private compiler: Compiler) { }

  ngOnInit() {

    this.compiler.clearCache();

  }

}
