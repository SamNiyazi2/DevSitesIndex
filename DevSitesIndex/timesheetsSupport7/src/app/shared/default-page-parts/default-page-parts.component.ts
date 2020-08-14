
// 10/22/2019 09:47 pm - SSN - [20191022-2147] - [001] - Adding DefaultPagePartsComponent

import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-default-page-parts',
  templateUrl: './default-page-parts.component.html',
  styleUrls: ['./default-page-parts.component.css']
})
export class DefaultPagePartsComponent implements OnInit {

  @Input() requestedSection: string;

  locationHostName: string = "";


  showDomainNameOnMainPage: boolean = false;

  showCopyright: boolean = false;
  showCopyright_String: string = "";

  currentPageTitle: string = "";

  SITE_ALERT_CSS_NAME: string = "";

  constructor(private location: Location) { }

  ngOnInit() {

    this.locationHostName = location.hostname;

    if (this.requestedSection === "showDomainNameOnMainPage") {
      this.showDomainNameOnMainPage = true;
    }

    if (this.requestedSection === "showCopyright") {
      this.showCopyright = true;
      this.setCopyright();
    }

    this.setPageTitle();


    if (location.hostname.toLocaleLowerCase().indexOf("testsam") === -1) {
      this.SITE_ALERT_CSS_NAME = "site_alert_css_name";
    }

  }


  setPageTitle() {

    if (this.currentPageTitle) {
      document.title = this.currentPageTitle + " - " + this.locationHostName;
    }
    else {
      document.title = this.locationHostName;
    }

  }

  setCopyright() {
    let currentYear = (new Date()).getFullYear();

    this.showCopyright_String = `<p>&copy; 2018 - ${this.locationHostName}</p>`;
  }

}
