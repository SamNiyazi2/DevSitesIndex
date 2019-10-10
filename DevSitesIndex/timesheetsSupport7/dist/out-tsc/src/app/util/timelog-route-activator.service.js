// 10/06/2019 01:31 pm - SSN - [20191006-1211] - [006] - Adding Angular 7
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
var TimelogRouteActivatorService = /** @class */ (function () {
    function TimelogRouteActivatorService(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    TimelogRouteActivatorService.prototype.canActivate = function (route) {
        var _this = this;
        var result = this.dataService.getTimesheet(route.params['id']).toPromise().then(function (r) {
            var recordExists = !!r;
            return recordExists;
        }, function (r) {
            _this.route.navigate(['e404']);
            return false;
        });
        return result;
    };
    TimelogRouteActivatorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], TimelogRouteActivatorService);
    return TimelogRouteActivatorService;
}());
export { TimelogRouteActivatorService };
//# sourceMappingURL=timelog-route-activator.service.js.map