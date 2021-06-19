import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticateService } from 'src/app/users/authenticate.service';
import { DataService } from 'src/app/shared/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BroadcasterUtilService } from 'src/app/broadcaster-util.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


    forgeryToken: any;
    QRCodeContent: any;
    routerEventSubscription: any;


    // 10/08/2019 10:39 pm - SSN - [20191008-1232] - [017] - X-XSRF-TOKEN
    // https://angular.io/guide/security#xss

    // 10/28/2019 05:37 am - SSN - [20191028-0456] - [006] - Timesheet dashboard
    // ng build --aot=true - child route fix
    // public authenticateService from private
    constructor(public authenticateService: AuthenticateService, private dataService: DataService, private sanitizer: DomSanitizer, private broadcasterUtil: BroadcasterUtilService, private router: Router) {

    }



    ngOnInit(): void {


        this.setupControl();


        // 10/11/2019 06:04 pm - SSN - [20191011-1804] - [001] - Adding broadcastutil

        this.broadcasterUtil.on<string>('login')
            .subscribe(message => {

                this.setupControl();

            });


        // 06/17/2021 07:51 am - SSN - QRCode-20210617
        this.routerEventSubscription = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd): void => {

            console.log('20210611-0752 - route change');


            console.log(event);
            console.log('-----------------------');
            console.log('----------------------');
            console.log('---------------------');
            console.log(' ');
            console.log(' ');


            this.setupQRCode();


        });


    }



    ngOnDestroy(): void {

        // 06/17/2021 08:26 am - SSN - QRCode-20210617
        if (this.routerEventSubscription) {
            this.routerEventSubscription.unsubscribe();
        }
    }




    setupControl() {

        // 10/08/2019 06:41 pm - SSN - [20191008-1232] - [010] - X-XSRF-TOKEN

        // 11/03/2019 05:44 am - SSN - [20191101-0526] - [015] - Check login status
        // Moved processing code to AuthenticateService
        this.authenticateService.isLoggedIn_subscribe();

        this.dataService.getForgeryToken().then(this.forgeryTokenSuccess.bind(this), this.forgeryTokenError.bind(this));

        this.setupQRCode();

    }



    // 06/17/2021 04:17 am - SSN - QRCode-20210617

    setupQRCode() {

        const fullUrl = window.location.href;

        this.dataService.getQRCode(fullUrl).then(this.getQRCodeSuccess.bind(this), this.getQRCodeError.bind(this));

    }


    forgeryTokenSuccess(response) {

        this.forgeryToken = this.sanitizer.bypassSecurityTrustHtml(response);

    }


    forgeryTokenError(response) {

        console.error('header.component.ts - forgeryTokenError - 20191009-0014');
        console.log(response);

        this.forgeryToken = "";

    }


    // 06/17/2021 04:18 am - SSN - QRCode-20210617

    getQRCodeSuccess(response) {

        this.QRCodeContent = this.sanitizer.bypassSecurityTrustHtml(response);

    }


    getQRCodeError(response) {

        console.error('header.component.ts - getQRCodeError - 20210617-0418');
        console.log(response);

        this.QRCodeContent = "";

    }


    getGreetingMessage() {


        if (this.authenticateService) {
            if (this.authenticateService.isAuthenticated()) {
                return "Hello " + this.authenticateService.currentUser.firstName;
            }
            else {
                return "Not Authenticated"
            }
        }

        return "";
    }

}
