(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-user-module"],{

/***/ "./src/app/users/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/users/profile/profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/users/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile works!\r\n</p>\r\n<h1>Edit Profile</h1>\r\n<hr />\r\n<div class=\"col-md-6\">\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n  <button type=\"button\" class=\"btn btn-default\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/users/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/users/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/users/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/users/user.module.ts":
/*!**************************************!*\
  !*** ./src/app/users/user.module.ts ***!
  \**************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.routes */ "./src/app/users/user.routes.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/users/profile/profile.component.ts");
// 10/06/2019 08:58 pm - SSN - [20191006-2058] - [001] - Adding Angular 7 - Lazily loading feature modules






console.log("user.module.ts - 20191006-2121");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_user_routes__WEBPACK_IMPORTED_MODULE_4__["userRoutes"])
            ],
            declarations: [
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
            ],
            providers: []
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/users/user.routes.ts":
/*!**************************************!*\
  !*** ./src/app/users/user.routes.ts ***!
  \**************************************/
/*! exports provided: userRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/users/profile/profile.component.ts");
// 10/06/2019 09:05 pm - SSN - [20191006-2058] - [002] - Adding Angular 7 - Lazily loading feature modules

console.log('usre.routes.ts - 201910062124');
var userRoutes = [
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=users-user-module.js.map