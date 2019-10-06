// 10/04/2019 11:25 pm - SSN - [20191003-1557] - [013] - Adding data service to Angular7
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ToastrService = /** @class */ (function () {
    function ToastrService() {
    }
    ToastrService.prototype.success = function (message, title) {
        toastr.success(message, title);
    };
    ToastrService.prototype.info = function (message, title) {
        toastr.info(message, title);
    };
    ToastrService.prototype.warning = function (message, title) {
        toastr.warning(message, title);
    };
    ToastrService.prototype.error = function (message, title) {
        toastr.error(message, title);
    };
    ToastrService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ToastrService);
    return ToastrService;
}());
export { ToastrService };
//# sourceMappingURL=toastr.service.js.map