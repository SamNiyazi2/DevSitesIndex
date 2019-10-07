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
        console.log('dataservice - getTimesheets - 20191003-1707');
        return this.http.get("/api/timelogapi");
    };
    // 10/05/2019 02:52 pm - SSN - [20191003-1557] - [014] - Adding data service to Angular7
    DataService.prototype.getTimesheet = function (id) {
        console.log('dataservice - getTimesheet - 20191005-1451');
        return this.http.get("/api/timelogapi/get_custom/" + id);
    };
    // 10/07/2019 10:58 am - SSN - [20191007-1020] - [005] - Adding Angular 7 - Collecting data with Angular forms and validations - Authenticate user
    DataService.prototype.authenticateUser = function (userObject) {
        console.log('dataservice - authenticateUser - 20191007-1112');
        console.log(userObject);
        return this.http.post("/api/authenticateUserAPI/", userObject);
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