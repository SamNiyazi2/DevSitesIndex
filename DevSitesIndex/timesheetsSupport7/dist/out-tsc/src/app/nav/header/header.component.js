import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/users/authenticate.service';
import { DataService } from 'src/app/shared/data.service';
import { DomSanitizer } from '@angular/platform-browser';
var HeaderComponent = /** @class */ (function () {
    // 10/08/2019 10:39 pm - SSN - [20191008-1232] - [017] - X-XSRF-TOKEN
    // https://angular.io/guide/security#xss
    function HeaderComponent(authenticateService, dataService, sanitizer) {
        this.authenticateService = authenticateService;
        this.dataService = dataService;
        this.sanitizer = sanitizer;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // 10/08/2019 06:41 pm - SSN - [20191008-1232] - [010] - X-XSRF-TOKEN
        this.authenticateService.isLoggedIn().then(this.isLoggedInSuccess.bind(this), this.isLoggedInError.bind(this));
        this.dataService.getForgeryToken().then(this.forgeryTokenSuccess.bind(this), this.forgeryTokenError.bind(this));
    };
    HeaderComponent.prototype.forgeryTokenSuccess = function (response) {
        this.forgeryToken = this.sanitizer.bypassSecurityTrustHtml(response);
    };
    HeaderComponent.prototype.forgeryTokenError = function (response) {
        console.log('header.component.ts - forgeryTokenError - 20191009-0014');
        console.log(response);
        this.forgeryToken = "";
    };
    HeaderComponent.prototype.isLoggedInSuccess = function (response) {
        this.authenticateService.currentUser = response;
    };
    HeaderComponent.prototype.isLoggedInError = function (response) {
        console.log('header.component.ts isLoggedInError');
        console.log(response);
    };
    HeaderComponent.prototype.getGreetingMessage = function () {
        if (this.authenticateService) {
            if (this.authenticateService.isAuthenticated()) {
                return "Hello " + this.authenticateService.currentUser.firstName;
            }
            else {
                return "Not Authenticated";
            }
        }
        return "";
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticateService, DataService, DomSanitizer])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map