import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/users/authenticate.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authenticateService) {
        this.authenticateService = authenticateService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.getGreetingMessage = function () {
        console.log('header.component - ngOnInit - 20191007-1418');
        console.log(this.authenticateService);
        if (this.authenticateService) {
            if (this.authenticateService.isAuthenticated()) {
                return "Hello " + this.authenticateService.currentUser.email;
            }
            else {
                return "Not Authenticated";
            }
        }
        return "No greeting message!";
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticateService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map