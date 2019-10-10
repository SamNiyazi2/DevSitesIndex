// 10/03/2019 03:45 pm - SSN - [20191003-1557] - [001] - Adding data service to Angular7
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DataService = /** @class */ (function () {
    // 10/03/2019 05:01 pm - SSN - [20191003-1557] - [007] - Adding data service to Angular7
    // Inject httpClient
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getTimesheets = function () {
        return this.http.get("/api/timelogapi");
    };
    // 10/05/2019 02:52 pm - SSN - [20191003-1557] - [014] - Adding data service to Angular7
    DataService.prototype.getTimesheet = function (id) {
        return this.http.get("/api/timelogapi/get_custom/" + id);
    };
    // 10/07/2019 10:58 am - SSN - [20191007-1020] - [005] - Adding Angular 7 - Collecting data with Angular forms and validations - Authenticate user
    DataService.prototype.authenticateUser = function (userObject) {
        return this.http.post("/api/authenticateUserAPI/", userObject);
    };
    // 10/08/2019 02:09 pm - SSN - [20191008-1232] - [007] - X-XSRF-TOKEN
    DataService.prototype.logoutUser = function (token) {
        var requestOptions = {
            headers: {
                'RequestVerificationToken': token,
                'X-XSRF-Token': token
            }
        };
        return this.http.post("/api/authenticateUserAPI/logout", {}, requestOptions);
    };
    // 10/08/2019 06:45 pm - SSN - [20191008-1232] - [012] - X-XSRF-TOKEN
    DataService.prototype.isLoggedIn = function () {
        return this.http.get("/api/authenticateUserAPI/isLoggedIn");
    };
    // 10/08/2019 08:13 pm - SSN - [20191008-1232] - [016] - X-XSRF-TOKEN
    DataService.prototype.getForgeryToken = function () {
        return this.http.get("/api/authenticateUserAPI/ForgeryToken", { responseType: 'text' }).toPromise();
    };
    // 10/09/2019 01:15 pm - SSN - [20191009-1302] - [003] - M09 - Reusing components with content projection
    DataService.prototype.getProjects = function () {
        return this.http.get("/api/projectAPI").toPromise();
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map