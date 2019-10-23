(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./users/user.module": [
		"./src/app/users/user.module.ts",
		"users-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-component/test-component.component */ "./src/app/test-component/test-component.component.ts");
/* harmony import */ var _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timesheet/timesheet.component */ "./src/app/timesheet/timesheet.component.ts");
/* harmony import */ var _timesheet_timelog_timelog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timesheet/timelog/timelog.component */ "./src/app/timesheet/timelog/timelog.component.ts");
/* harmony import */ var _timesheet_create_timelog_create_timelog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timesheet/create-timelog/create-timelog.component */ "./src/app/timesheet/create-timelog/create-timelog.component.ts");
/* harmony import */ var _shared_e404_e404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/e404/e404.component */ "./src/app/shared/e404/e404.component.ts");
/* harmony import */ var _util_timelog_route_activator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/timelog-route-activator.service */ "./src/app/util/timelog-route-activator.service.ts");
/* harmony import */ var _resolvers_timesheet_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/timesheet-resolver.service */ "./src/app/resolvers/timesheet-resolver.service.ts");
/* harmony import */ var _projects_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/projects-list/projects-list.component */ "./src/app/projects/projects-list/projects-list.component.ts");











var routes = [
    // 10/02/2019 12:20 pm - SSN - [20191002-1118] - [004] - Adding Angular 7 test app
    // Testing excluding .Net paths
    { path: 'test1', redirectTo: 'search' },
    // 10/02/2019 05:51 pm - SSN - [20191002-1118] - [013] - Adding Angular 7 test app
    { path: 'test3', component: _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_3__["TestComponentComponent"] },
    // 10/06/2019 12:49 pm - SSN - [20191006-1211] - [002] - Adding Angular 7
    { path: 'timesheet/create', component: _timesheet_create_timelog_create_timelog_component__WEBPACK_IMPORTED_MODULE_6__["CreateTimelogComponent"], pathMatch: 'full', canDeactivate: ['canDeactivateCreateTimelog'] },
    //{ path: 'create', component: CreateTimelogComponent },
    // 10/03/2019 12:19 pm - SSN - [20191003-1219] - [001] - Adding timesheet to Angular7
    // 10/06/2019 05:06 pm - SSN - [20191006-1643] - [004] - Adding Angular 7 - Observables and resolvers - TimesheetResolverService
    { path: 'timesheet', component: _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_4__["TimesheetComponent"], resolve: { timesheets_resolver: _resolvers_timesheet_resolver_service__WEBPACK_IMPORTED_MODULE_9__["TimesheetResolverService"] } },
    // 10/09/2019 01:07 pm - SSN - [20191009-1302] - [001] - M09 - Reusing components with content projection
    { path: 'ProjectsA7', component: _projects_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsListComponent"] },
    // 10/05/2019 03:10 pm - SSN - [20191003-1557] - [015] - Adding data service to Angular7
    // 10/06/2019 01:41 pm - SSN - [20191006-1211] - [008] - Adding Angular 7 - TimelogRouteActivatorService
    { path: 'timelog/:id', component: _timesheet_timelog_timelog_component__WEBPACK_IMPORTED_MODULE_5__["TimelogComponent"], canActivate: [_util_timelog_route_activator_service__WEBPACK_IMPORTED_MODULE_8__["TimelogRouteActivatorService"]] },
    // 10/06/2019 01:28 pm - SSN - [20191006-1211] - [005] - Adding Angular 7
    { path: 'e404', component: _shared_e404_e404_component__WEBPACK_IMPORTED_MODULE_7__["E404Component"] },
    { path: '', redirectTo: 'test3', pathMatch: 'full' },
    // 10/06/2019 09:09 pm - SSN - [20191006-2058] - [003] - Adding Angular 7 - Lazily loading feature modules
    { path: 'user', loadChildren: './users/user.module#UserModule' },
    //{ path: '**', component: AppComponent, outlet: "main101" },
    { path: '**', redirectTo: 'test3' },
];
var AppRoutingModule = /** @class */ (function () {
    // 10/02/2019 05:19 pm - SSN - [20191002-1118] - [011] - Adding Angular 7 test app
    function AppRoutingModule(router) {
        //this.router.errorHandler = (error: any) => {
        //  console.log("*******************************************");
        //  console.log("app-routing.module.ts - 20191002-1721");
        //  console.log(error);
        this.router = router;
        //  console.log("*******************************************");
        //};
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div>\r\n\r\n  <div class=\"container body-content\">\r\n\r\n    <app-header></app-header>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n    <hr />\r\n\r\n  </div>\r\n\r\n\r\n  <footer style=\"padding:20px;\">\r\n    <hr />\r\n\r\n    <app-default-page-parts requestedSection=\"showCopyright\"></app-default-page-parts>\r\n  \r\n  </footer>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, checkDirtyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDirtyState", function() { return checkDirtyState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-component/test-component.component */ "./src/app/test-component/test-component.component.ts");
/* harmony import */ var _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timesheet/timesheet.component */ "./src/app/timesheet/timesheet.component.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _shared_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/toastr.service */ "./src/app/shared/toastr.service.ts");
/* harmony import */ var _shared_j_query_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/j-query.service */ "./src/app/shared/j-query.service.ts");
/* harmony import */ var _timesheet_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timesheet/thumbnail/thumbnail.component */ "./src/app/timesheet/thumbnail/thumbnail.component.ts");
/* harmony import */ var _nav_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/header/header.component */ "./src/app/nav/header/header.component.ts");
/* harmony import */ var _timesheet_timelog_timelog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timesheet/timelog/timelog.component */ "./src/app/timesheet/timelog/timelog.component.ts");
/* harmony import */ var _timesheet_create_timelog_create_timelog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timesheet/create-timelog/create-timelog.component */ "./src/app/timesheet/create-timelog/create-timelog.component.ts");
/* harmony import */ var _nav_timesheet_menu_timesheet_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav/timesheet-menu/timesheet-menu.component */ "./src/app/nav/timesheet-menu/timesheet-menu.component.ts");
/* harmony import */ var _shared_e404_e404_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/e404/e404.component */ "./src/app/shared/e404/e404.component.ts");
/* harmony import */ var _util_timelog_route_activator_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./util/timelog-route-activator.service */ "./src/app/util/timelog-route-activator.service.ts");
/* harmony import */ var _resolvers_timesheet_resolver_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resolvers/timesheet-resolver.service */ "./src/app/resolvers/timesheet-resolver.service.ts");
/* harmony import */ var _users_authenticate_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./users/authenticate.service */ "./src/app/users/authenticate.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _projects_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./projects/projects-list/projects-list.component */ "./src/app/projects/projects-list/projects-list.component.ts");
/* harmony import */ var _projects_project_jobs_list_project_jobs_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./projects/project-jobs-list/project-jobs-list.component */ "./src/app/projects/project-jobs-list/project-jobs-list.component.ts");
/* harmony import */ var _projects_project_create_job_project_create_job_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./projects/project-create-job/project-create-job.component */ "./src/app/projects/project-create-job/project-create-job.component.ts");
/* harmony import */ var _projects_project_job_detail_project_job_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./projects/project-job-detail/project-job-detail.component */ "./src/app/projects/project-job-detail/project-job-detail.component.ts");
/* harmony import */ var _util_job_status_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./util/job-status.pipe */ "./src/app/util/job-status.pipe.ts");
/* harmony import */ var _shared_timelog_modal_timelog_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/timelog-modal/timelog-modal.component */ "./src/app/shared/timelog-modal/timelog-modal.component.ts");
/* harmony import */ var _shared_modal_trigger_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/modal-trigger.directive */ "./src/app/shared/modal-trigger.directive.ts");
/* harmony import */ var _shared_pager_custom_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/pager-custom.component */ "./src/app/shared/pager-custom.component.ts");
/* harmony import */ var _shared_default_page_parts_default_page_parts_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/default-page-parts/default-page-parts.component */ "./src/app/shared/default-page-parts/default-page-parts.component.ts");



// 10/03/2019 04:59 pm - SSN - [20191003-1557] - [005] - Adding data service to Angular7





// 10/03/2019 03:57 pm - SSN - [20191003-1557] - [002] - Adding data service to Angular7

// 10/04/2019 11:22 pm - SSN - [20191003-1557] - [011] - Adding data service to Angular7
// 10/10/2019 11:43 pm - SSN - [20191010-1354] - [002] - M11 - Understanding Angular's Dependency Injection
// import { ToastrService } from './shared/toastr.service';





















// 10/21/2019 09:58 am - SSN - [20191021-0444] - [013] - M12 - Creating directives and advanced components in Angular.
// let toastr: Toastr = window['toastr'];
// let jQuery = window['$'];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_6__["TestComponentComponent"],
                _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_7__["TimesheetComponent"],
                _timesheet_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_11__["ThumbnailComponent"],
                _nav_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _timesheet_timelog_timelog_component__WEBPACK_IMPORTED_MODULE_13__["TimelogComponent"],
                _timesheet_create_timelog_create_timelog_component__WEBPACK_IMPORTED_MODULE_14__["CreateTimelogComponent"],
                _nav_timesheet_menu_timesheet_menu_component__WEBPACK_IMPORTED_MODULE_15__["TimesheetMenuComponent"],
                _shared_e404_e404_component__WEBPACK_IMPORTED_MODULE_16__["E404Component"],
                _projects_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_21__["ProjectsListComponent"],
                _projects_project_jobs_list_project_jobs_list_component__WEBPACK_IMPORTED_MODULE_22__["ProjectJobsListComponent"],
                _projects_project_create_job_project_create_job_component__WEBPACK_IMPORTED_MODULE_23__["ProjectCreateJobComponent"],
                _projects_project_job_detail_project_job_detail_component__WEBPACK_IMPORTED_MODULE_24__["ProjectJobDetailComponent"],
                _util_job_status_pipe__WEBPACK_IMPORTED_MODULE_25__["JobStatusPipe"],
                _shared_timelog_modal_timelog_modal_component__WEBPACK_IMPORTED_MODULE_26__["TimelogModalComponent"],
                _shared_modal_trigger_directive__WEBPACK_IMPORTED_MODULE_27__["ModalTriggerDirective"],
                _shared_pager_custom_component__WEBPACK_IMPORTED_MODULE_28__["AppPageV02Custom"],
                _shared_default_page_parts_default_page_parts_component__WEBPACK_IMPORTED_MODULE_29__["DefaultPagePartsComponent"]
            ],
            imports: [
                // 10/02/2019 05:47 pm - SSN - [20191002-1118] - [012] - Adding Angular 7 test app
                // Did this solve problem with "ERROR Error: The selector "app-root" did not match any elements"  - Removed app-root from _layout.cshtml
                // putting back in
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // 10/03/2019 05:00 pm - SSN - [20191003-1557] - [006] - Adding data service to Angular7
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                // 10/09/2019 01:45 am - SSN - [20191009-0144] - [001] - M07-09 - Template-based form validation
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"]
            ],
            // 10/03/2019 04:03 pm - SSN - [20191003-1557] - [003] - Adding data service to Angular7
            // 10/06/2019 01:39 pm - SSN - [20191006-1211] - [007] - Adding Angular 7 - TimelogRouteActivatorService
            // 10/06/2019 05:05 pm - SSN - [20191006-1643] - [003] - Adding Angular 7 - Observables and resolvers - TimesheetResolverService
            providers: [_shared_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"],
                // 10/10/2019 11:46 pm - SSN - [20191010-1354] - [004] - M11 - Understanding Angular's Dependency Injection
                //ToastrService,
                {
                    provide: _shared_toastr_service__WEBPACK_IMPORTED_MODULE_9__["TOASTR_TOKEN"],
                    useValue: toastr
                },
                // 10/21/2019 06:11 am - SSN - [20191021-0444] - [006] - M12 - Creating directives and advanced components in Angular.
                {
                    provide: _shared_j_query_service__WEBPACK_IMPORTED_MODULE_10__["JQ_TOKEN"],
                    useValue: jQuery
                },
                _util_timelog_route_activator_service__WEBPACK_IMPORTED_MODULE_17__["TimelogRouteActivatorService"],
                _resolvers_timesheet_resolver_service__WEBPACK_IMPORTED_MODULE_18__["TimesheetResolverService"],
                {
                    provide: 'canDeactivateCreateTimelog',
                    useValue: checkDirtyState
                },
                _users_authenticate_service__WEBPACK_IMPORTED_MODULE_19__["AuthenticateService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function checkDirtyState(component) {
    if (typeof (component.isDirty) != 'boolean') {
        console.error("property isDirty does not exists on component:");
        console.error(component);
        return true;
    }
    if (component.isDirty) {
        return window.confirm("You have not saved your changes. Do you really want to cancel?");
    }
    return true;
}


/***/ }),

/***/ "./src/app/broadcaster-util.service.ts":
/*!*********************************************!*\
  !*** ./src/app/broadcaster-util.service.ts ***!
  \*********************************************/
/*! exports provided: BroadcasterUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcasterUtilService", function() { return BroadcasterUtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// 10/11/2019 05:34 pm - SSN
// 10/11/2019 06:07 pm - SSN - [20191011-1804] - [003] - Adding broadcastutil

// https://blog.lacolaco.net/post/event-broadcasting-in-angular-2/




var BroadcasterUtilService = /** @class */ (function () {
    function BroadcasterUtilService() {
        this.broadcastEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    BroadcasterUtilService.prototype.broadcast = function (key, data) {
        this.broadcastEvents.next({ key: key, data: data });
    };
    BroadcasterUtilService.prototype.on = function (key) {
        console.log('broadcastUtil - 20191011-1757');
        var result = this.broadcastEvents.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event.key === key; })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) { return event.data; }));
        console.log(result);
        console.log('------------------------------');
        return result;
    };
    BroadcasterUtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BroadcasterUtilService);
    return BroadcasterUtilService;
}());



/***/ }),

/***/ "./src/app/nav/header/header.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav/header/header.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n\r\n.menu_button {\r\n  margin: 8px 0px 0px 0px;\r\n}\r\n\r\n \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbmF2L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuXHJcbi5tZW51X2J1dHRvbiB7XHJcbiAgbWFyZ2luOiA4cHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbiBcclxuIl19 */"

/***/ }),

/***/ "./src/app/nav/header/header.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav/header/header.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a [routerLink]=\"['/']\" class=\"navbar-brand\">\r\n        <app-default-page-parts requestedSection=\"showDomainNameOnMainPage\"></app-default-page-parts>\r\n      </a>\r\n    </div>\r\n    <div class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n\r\n\r\n\r\n        <li><a href=\"/DemoSites/Index\">Sites</a></li>\r\n        <li><a href=\"/home/about\">About</a></li>\r\n        <li><a href=\"/Home/Contact\">Contact</a></li>\r\n\r\n        <li class=\"dropdown-submenu\">\r\n\r\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Jobs  <span class=\"caret\"></span></a>\r\n\r\n          <ul class=\"dropdown-menu\">\r\n\r\n            <li><a href=\"/Companies\">Companies</a></li>\r\n            <li><a href=\"/Discipline\">Disciplines</a></li>\r\n            <li><a href=\"/Projects\">Projects</a></li>\r\n            <li><a href=\"/ProjectsA7\">Projects (Angular 7)</a></li>\r\n            <li><a href=\"/jobs\">Jobs</a></li>\r\n            <li><a href=\"/TimeLogs\">Timelog</a></li>\r\n            <li><a href=\"/timesheet\">Timelog (Angular 7)</a></li>\r\n            <li><a href=\"/ReferenceSites\">Reference Sites</a></li>\r\n            <li><a href=\"/CodeReferences\">Code</a></li>\r\n            <li><a href=\"/CommandLine\">Command Line</a></li>\r\n            <li><a href=\"/DevSites\">Demo Sites</a></li>\r\n\r\n\r\n          </ul>\r\n\r\n        </li>\r\n\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav \" style=\"float:right;\">\r\n        <li *ngIf=\"!authenticateService.isAuthenticated()\">\r\n          <a [routerLink]=\"['/user/login']\">Login</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"authenticateService.isAuthenticated()\">\r\n          <a id=\"manage\" class=\"nav-link text-dark\" title=\"Manage\" [routerLink]=\"['/user/profile']\"><span [innerText]=\"getGreetingMessage()\"></span></a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"authenticateService.isAuthenticated()\">\r\n          <!--<form id=\"logoutForm\" class=\"form-inline\" action=\"/Identity/Account/Logout?returnUrl=%2F%3Fpage%3D%252FIndex\" method=\"post\">\r\n            <button id=\"logout\" type=\"submit\" class=\"nav-link btn btn-link text-dark menu_button\">Logout</button>\r\n          </form>-->\r\n\r\n          <a id=\"logout\" class=\"nav-link text-dark\" title=\"Logout\" [routerLink]=\"['/user/logout']\">Logout</a>\r\n\r\n        </li>\r\n      </ul>\r\n\r\n\r\n\r\n    </div>\r\n    <app-timesheet-menu></app-timesheet-menu>\r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div  [innerHtml]=\"forgeryToken\">\r\n</div>\r\n \r\n"

/***/ }),

/***/ "./src/app/nav/header/header.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav/header/header.component.ts ***!
  \************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_users_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/users/authenticate.service */ "./src/app/users/authenticate.service.ts");
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_broadcaster_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/broadcaster-util.service */ "./src/app/broadcaster-util.service.ts");






var HeaderComponent = /** @class */ (function () {
    // 10/08/2019 10:39 pm - SSN - [20191008-1232] - [017] - X-XSRF-TOKEN
    // https://angular.io/guide/security#xss
    function HeaderComponent(authenticateService, dataService, sanitizer, broadcasterUtil) {
        this.authenticateService = authenticateService;
        this.dataService = dataService;
        this.sanitizer = sanitizer;
        this.broadcasterUtil = broadcasterUtil;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setupControl();
        // 10/11/2019 06:04 pm - SSN - [20191011-1804] - [001] - Adding broadcastutil
        this.broadcasterUtil.on('login')
            .subscribe(function (message) {
            console.log('header.compoent - broacast - 20191011-1805');
            console.log(message);
            _this.setupControl();
        });
    };
    HeaderComponent.prototype.setupControl = function () {
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
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/nav/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/nav/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_users_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"], src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], src_app_broadcaster_util_service__WEBPACK_IMPORTED_MODULE_5__["BroadcasterUtilService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/nav/timesheet-menu/timesheet-menu.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/nav/timesheet-menu/timesheet-menu.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.menu {\r\n  padding: 8px;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n  .menu a {\r\n    color: #9d9d9d;\r\n    margin-right: 20px;\r\n  }\r\n\r\n  .menu a:hover {\r\n      color: white;\r\n      text-decoration: none;\r\n    }\r\n\r\n  .menu a.active {\r\n      color: red!important;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L3RpbWVzaGVldC1tZW51L3RpbWVzaGVldC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0VBRUU7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVFO01BQ0UsWUFBWTtNQUNaLHFCQUFxQjtJQUN2Qjs7RUFHQTtNQUNFLG9CQUFvQjtJQUN0QiIsImZpbGUiOiJzcmMvYXBwL25hdi90aW1lc2hlZXQtbWVudS90aW1lc2hlZXQtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tZW51IHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4gIC5tZW51IGEge1xyXG4gICAgY29sb3I6ICM5ZDlkOWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAgIC5tZW51IGE6aG92ZXIge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLm1lbnUgYS5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogcmVkIWltcG9ydGFudDtcclxuICAgIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav/timesheet-menu/timesheet-menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/nav/timesheet-menu/timesheet-menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"menu\">\r\n\r\n  <a [routerLink]=\"['/timesheet']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Timelog List</a>\r\n  <a [routerLink]=\"['/timesheet/create']\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact:true}\">Create New Entry</a>\r\n  <a [routerLink]=\"['/ProjectsA7']\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact:true}\">Projects List</a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav/timesheet-menu/timesheet-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/nav/timesheet-menu/timesheet-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: TimesheetMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetMenuComponent", function() { return TimesheetMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimesheetMenuComponent = /** @class */ (function () {
    function TimesheetMenuComponent() {
    }
    TimesheetMenuComponent.prototype.ngOnInit = function () {
    };
    TimesheetMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timesheet-menu',
            template: __webpack_require__(/*! ./timesheet-menu.component.html */ "./src/app/nav/timesheet-menu/timesheet-menu.component.html"),
            styles: [__webpack_require__(/*! ./timesheet-menu.component.css */ "./src/app/nav/timesheet-menu/timesheet-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimesheetMenuComponent);
    return TimesheetMenuComponent;
}());



/***/ }),

/***/ "./src/app/projects/project-create-job/project-create-job.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/projects/project-create-job/project-create-job.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nem {\r\n  float: right;\r\n  color: #e05c65;\r\n  /*padding-left: 10px;*/\r\n}\r\n\r\n.error {\r\n  padding: 0px;\r\n}\r\n\r\n.error input {\r\n    background-color: #e3c3c5;\r\n  }\r\n\r\n.error ::-webkit-input-placeholder {\r\n    color: #999;\r\n  }\r\n\r\n.error::-moz-placeholder {\r\n    color: #999;\r\n  }\r\n\r\n.error :ms-input-placeholder {\r\n    color: #999;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1jcmVhdGUtam9iL3Byb2plY3QtY3JlYXRlLWpvYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVFO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1jcmVhdGUtam9iL3Byb2plY3QtY3JlYXRlLWpvYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmVtIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6ICNlMDVjNjU7XHJcbiAgLypwYWRkaW5nLWxlZnQ6IDEwcHg7Ki9cclxufVxyXG5cclxuLmVycm9yIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbiAgLmVycm9yIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2MzYzU7XHJcbiAgfVxyXG5cclxuICAuZXJyb3IgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuXHJcbiAgLmVycm9yOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuXHJcbiAgLmVycm9yIDptcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/projects/project-create-job/project-create-job.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/projects/project-create-job/project-create-job.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\r\n  <div class=\"col-md-offset-2 col-md-6 well\">\r\n\r\n    <form [formGroup]=\"newJobForm\" autocomplete=\"off\" novalidate (ngSubmit)=\"saveNewJob_local(newJobForm.value)\">\r\n\r\n\r\n      <div class=\"form-group\" [ngClass]=\"{'error':!validControl('jobTitle')}\">\r\n        <label for=\"jobTitle\">Job Title</label>\r\n        <em *ngIf=\"!validControl('jobTitle') && newJobForm.controls.jobTitle.errors.required\">Required</em>\r\n        <input type=\"text\" formControlName=\"jobTitle\" name=\"jobTitle\" class=\"form-control\" required autofocus/>\r\n      </div>\r\n\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelNewJob_local()\">Cancel</button>\r\n\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/projects/project-create-job/project-create-job.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/projects/project-create-job/project-create-job.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProjectCreateJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCreateJobComponent", function() { return ProjectCreateJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ProjectCreateJobComponent = /** @class */ (function () {
    function ProjectCreateJobComponent() {
        this.saveNewJob = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancelNewJob = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.jobTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.newJobForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ jobTitle: this.jobTitle });
    }
    ProjectCreateJobComponent.prototype.ngOnInit = function () {
        setTimeout(this.doSetfocus, 700);
    };
    ProjectCreateJobComponent.prototype.doSetfocus = function () {
        $('[autofocus]').focus();
    };
    ProjectCreateJobComponent.prototype.validControl = function (controlName) {
        return this.newJobForm.controls[controlName].valid || this.newJobForm.controls[controlName].untouched;
    };
    ProjectCreateJobComponent.prototype.saveNewJob_local = function (formValue) {
        console.log('project-create-job.component - 201009-1546');
        console.log(formValue);
        console.log("Valid: " + this.newJobForm.valid);
        if (this.newJobForm.valid) {
            this.saveNewJob.emit(formValue);
        }
    };
    ProjectCreateJobComponent.prototype.cancelNewJob_local = function (formValue) {
        this.cancelNewJob.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectCreateJobComponent.prototype, "saveNewJob", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectCreateJobComponent.prototype, "cancelNewJob", void 0);
    ProjectCreateJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-create-job',
            template: __webpack_require__(/*! ./project-create-job.component.html */ "./src/app/projects/project-create-job/project-create-job.component.html"),
            styles: [__webpack_require__(/*! ./project-create-job.component.css */ "./src/app/projects/project-create-job/project-create-job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectCreateJobComponent);
    return ProjectCreateJobComponent;
}());



/***/ }),

/***/ "./src/app/projects/project-job-detail/project-job-detail.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/projects/project-job-detail/project-job-detail.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh5 {\r\n  margin: 5px;\r\n  padding: 0px;\r\n}\r\n\r\n.mainDiv {\r\n  margin: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1qb2ItZGV0YWlsL3Byb2plY3Qtam9iLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1qb2ItZGV0YWlsL3Byb2plY3Qtam9iLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmg1IHtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5tYWluRGl2IHtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/projects/project-job-detail/project-job-detail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/projects/project-job-detail/project-job-detail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div  (click)=\"toggleContent()\" class=\"well mainDiv\" title=\"Click to toggle content.\">\r\n\r\n  <h5>\r\n    <ng-content select=\"[div-title]\"></ng-content>\r\n\r\n  </h5>\r\n\r\n  <ng-content *ngIf=\"visible\" select=\"[div-body]\" ></ng-content>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/projects/project-job-detail/project-job-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/projects/project-job-detail/project-job-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProjectJobDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectJobDetailComponent", function() { return ProjectJobDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// 10/09/2019 08:32 pm - SSN - [20191009-1302] - [009] - M09 - Reusing components with content projection


var ProjectJobDetailComponent = /** @class */ (function () {
    function ProjectJobDetailComponent() {
        this.visible = false;
    }
    ProjectJobDetailComponent.prototype.ngOnInit = function () {
    };
    ProjectJobDetailComponent.prototype.toggleContent = function () {
        this.visible = !this.visible;
    };
    ProjectJobDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-job-detail',
            template: __webpack_require__(/*! ./project-job-detail.component.html */ "./src/app/projects/project-job-detail/project-job-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-job-detail.component.css */ "./src/app/projects/project-job-detail/project-job-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectJobDetailComponent);
    return ProjectJobDetailComponent;
}());



/***/ }),

/***/ "./src/app/projects/project-jobs-list/project-jobs-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/projects/project-jobs-list/project-jobs-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3Qtam9icy1saXN0L3Byb2plY3Qtam9icy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/projects/project-jobs-list/project-jobs-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/projects/project-jobs-list/project-jobs-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"col-md-2\">\r\n\r\n  <strong>Jobs List</strong>\r\n</div>\r\n\r\n<div class=\"col-md-4\">\r\n  <a *ngIf=\"!addMode\" (click)=\"addJob()\">Add new job</a>\r\n  <a *ngIf=\"addMode\" (click)=\"cancelAddJob()\">Cancel adding new job</a>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!addMode\">\r\n  <div class=\"container row\" *ngFor=\"let job of filteredJobs\">\r\n\r\n    <div class=\"col-md-10 col-md-offset-2 \">\r\n\r\n      <app-project-job-detail>\r\n\r\n        <div div-title>\r\n          {{job.jobTitle}} \r\n        </div>\r\n\r\n        <div div-body>\r\n\r\n          <dl class=\"dl-horizontal\">\r\n            <dt>Job Status</dt>\r\n            <dd>{{job.job_StatusID | jobStatus}} </dd>\r\n            <dt>Age</dt>\r\n            <dd>{{job.activityAge_ToString}}</dd>\r\n            <dt>Date Added</dt>\r\n            <dd>{{job.dateAdded | date:'MM/dd/yyyy hh:mm a'}}</dd>\r\n            <dt>Date Updated</dt>\r\n            <dd>{{job.dateUpdated | date:'MM/dd/yyyy hh:mm a'}}</dd>\r\n\r\n          </dl>\r\n\r\n        </div>\r\n\r\n      </app-project-job-detail>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-project-create-job *ngIf=\"addMode\" (saveNewJob)=\"saveNewProjectJob($event)\" (cancelNewJob)=\"cancelNewProjectJob($event)\"></app-project-create-job>\r\n\r\n"

/***/ }),

/***/ "./src/app/projects/project-jobs-list/project-jobs-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/projects/project-jobs-list/project-jobs-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectJobsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectJobsListComponent", function() { return ProjectJobsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectJobsListComponent = /** @class */ (function () {
    function ProjectJobsListComponent() {
        this.filterBy = 0;
        this.inAddMode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addMode = false;
    }
    ProjectJobsListComponent.prototype.ngOnInit = function () {
    };
    // 10/10/2019 11:19 am - SSN - [20191010-1059] - [002] - M10-05 - Creating filtering display
    ProjectJobsListComponent.prototype.ngOnChanges = function (changes) {
        if (this.jobs) {
            this.filterJobs();
        }
    };
    ProjectJobsListComponent.prototype.filterJobs = function () {
        var _this = this;
        if (this.filterBy > 0) {
            this.filteredJobs = this.jobs.filter(function (r) { return r.job_StatusID == _this.filterBy; });
        }
        else {
            this.filteredJobs = this.jobs;
        }
    };
    ProjectJobsListComponent.prototype.addJob = function () {
        this.setAddMode(true);
    };
    ProjectJobsListComponent.prototype.cancelAddJob = function () {
        this.setAddMode(false);
    };
    ProjectJobsListComponent.prototype.saveNewProjectJob = function (newJob) {
        console.log('project-jobs-list.component - 20191009-1611');
        console.log(newJob);
        newJob.job_StatusID = 1;
        this.jobs.unshift(newJob);
        this.setAddMode(false);
    };
    ProjectJobsListComponent.prototype.cancelNewProjectJob = function () {
        this.setAddMode(false);
    };
    ProjectJobsListComponent.prototype.setAddMode = function (setting) {
        this.addMode = setting;
        this.inAddMode.emit(setting);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectJobsListComponent.prototype, "jobs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProjectJobsListComponent.prototype, "filterBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectJobsListComponent.prototype, "inAddMode", void 0);
    ProjectJobsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-jobs-list',
            template: __webpack_require__(/*! ./project-jobs-list.component.html */ "./src/app/projects/project-jobs-list/project-jobs-list.component.html"),
            styles: [__webpack_require__(/*! ./project-jobs-list.component.css */ "./src/app/projects/project-jobs-list/project-jobs-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectJobsListComponent);
    return ProjectJobsListComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects-list/projects-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/projects/projects-list/projects-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.projectDiv {\r\n  margin: 0px 0px 40px 0px;\r\n}\r\n\r\nhr{\r\n  margin:0px 0px 10px 0px;\r\n}\r\n\r\n.filterOptions {\r\n  position: fixed;\r\n  background-color: white;\r\n  z-index: 1;\r\n  margin: 0px;\r\n  padding: 0px;\r\n\r\n}\r\n\r\n.filterOptions button {\r\n    margin-left: 5px;\r\n    border: 1px solid #eee;\r\n  }\r\n\r\n@media screen and (min-width: 480px) {\r\n  .filterOptions button {\r\n    margin-left: 10px;\r\n    border: 1px solid #eee;\r\n  }\r\n}\r\n\r\n.filterOptions + .container {\r\n    margin-top: 100px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMtbGlzdC9wcm9qZWN0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUdBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7O0FBRWQ7O0FBRUU7SUFDRSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0VBQ3hCOztBQUVGO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUU7SUFDRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy1saXN0L3Byb2plY3RzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucHJvamVjdERpdiB7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDQwcHggMHB4O1xyXG59XHJcblxyXG5ocntcclxuICBtYXJnaW46MHB4IDBweCAxMHB4IDBweDtcclxufVxyXG5cclxuXHJcbi5maWx0ZXJPcHRpb25zIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcblxyXG59XHJcblxyXG4gIC5maWx0ZXJPcHRpb25zIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gIC5maWx0ZXJPcHRpb25zIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgfVxyXG59XHJcblxyXG4gIC5maWx0ZXJPcHRpb25zICsgLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/projects/projects-list/projects-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/projects/projects-list/projects-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"filterOptions \" *ngIf=\"!childInAddMode\">\r\n\r\n  <div class=\"col-md-9\">\r\n\r\n    <dl class=\"dl-horizontal\">\r\n      <dt>\r\n        Filter Project:\r\n      </dt>\r\n      <dd>\r\n        <button class=\"btn-default btn-sm\" [class.active]=\"!ProjectWithJobsOnly\" (click)=\"setProjectWithJobsOnly(false)\"> All Project</button>\r\n        <button class=\"btn-default btn-sm\" [class.active]=\"ProjectWithJobsOnly\" (click)=\"setProjectWithJobsOnly(true)\"> With jobs only</button>\r\n      </dd>\r\n      <dt>\r\n        Filter Job Status:\r\n      </dt>\r\n      <dd>\r\n        <button class=\"btn-default  btn-sm\" [class.active]=\"filterBy===0\" (click)=\"setFilter(0)\">All</button>\r\n        <span *ngFor=\"let job_status of job_statuses\">\r\n          <button class=\"btn-default  btn-sm\" [class.active]=\"filterBy===job_status.id\" (click)=\"setFilter(job_status.id)\">  {{job_status.status}}</button>\r\n        </span>\r\n\r\n      </dd>\r\n    </dl>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"col-md-3\">\r\n\r\n    <form id=\"serachForm\" (ngSubmit)=\"searchProjects()\" autocomplete=\"off\" novalidate>\r\n      <div class=\"form-group\">\r\n        <input [(ngModel)]=\"searchTerm\" name=\"searchTerm\" type=\"search\" class=\"form-control\" placeholder=\"Search all timlog tables...\" />\r\n      </div>\r\n      <button class=\"btn btn-default\">Search</button>\r\n    </form>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"projectDiv\" *ngFor=\"let project of filteredProjects\">\r\n\r\n      <h3>{{project.projectTitle}}</h3>\r\n      <hr />\r\n      <app-project-jobs-list [jobs]=\"project?.jobs\" (inAddMode)=\"inAddMode($event)\" filterBy=\"{{filterBy}}\"></app-project-jobs-list>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/projects/projects-list/projects-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/projects/projects-list/projects-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function() { return ProjectsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _util_ErrorHandlingHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/ErrorHandlingHelpers */ "./src/app/util/ErrorHandlingHelpers.ts");
// 10/09/2019 01:14 pm - SSN - [20191009-1302] - [002] - M09 - Reusing components with content projection




var ProjectsListComponent = /** @class */ (function () {
    function ProjectsListComponent(dataService) {
        this.dataService = dataService;
        this.childInAddMode = false;
        this.filterBy = 0;
        this.ProjectWithJobsOnly = false;
        // 10/11/2019 12:27 am - SSN - [20191011-0027] - [001] - M12 - Creating directives and advanced components in Angular
        this.searchTerm = "";
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
        this.dataService.getProjects().then(this.getProjectsSuccess.bind(this), this.getProjectsError.bind(this));
        this.dataService.getJobStatuses().then(this.getJobStatusesSuccess.bind(this), this.getJobStatusesError.bind(this));
    };
    ProjectsListComponent.prototype.getProjectsSuccess = function (response) {
        console.log('project-list - success - 20191009-1316');
        console.log(response);
        this.projects = response;
        this.filteredProjects = response;
    };
    ProjectsListComponent.prototype.getProjectsError = function (response) {
        console.log('project-list - Error - 20191009-1317');
        console.log(response);
    };
    ProjectsListComponent.prototype.getJobStatusesSuccess = function (response) {
        console.log('project-list - jobStatus success - 20191010-1102');
        console.log(response);
        this.job_statuses = response;
    };
    ProjectsListComponent.prototype.getJobStatusesError = function (response) {
        console.log('project-list - jobStatus Error - 20191010-1103');
        console.log(response);
    };
    ProjectsListComponent.prototype.setProjectWithJobsOnly = function (projectsWithJobsOnly, _filterBy) {
        if (_filterBy == null) {
            _filterBy = this.filterBy;
        }
        this.ProjectWithJobsOnly = projectsWithJobsOnly;
        if (projectsWithJobsOnly) {
            this.filteredProjects = this.projects.filter(function (r) { return r.jobs.some(function (r2) { return (r2.job_StatusID === (_filterBy == 0 ? r2.job_StatusID : _filterBy)); }); });
        }
        else {
            this.filteredProjects = this.projects.slice(0);
        }
        if (_filterBy != this.filterBy) {
            console.log('set filter');
            this.filterBy = _filterBy;
        }
    };
    ProjectsListComponent.prototype.setFilter = function (_filterBy) {
        this.setProjectWithJobsOnly(this.ProjectWithJobsOnly, _filterBy);
    };
    ProjectsListComponent.prototype.inAddMode = function (setting) {
        this.childInAddMode = setting;
    };
    // 10/11/2019 12:28 am - SSN - [20191011-0027] - [002] - M12 - Creating directives and advanced components in Angular
    ProjectsListComponent.prototype.searchProjects = function () {
        console.log("projects-list.components - 20191011-0028");
        console.log(this.searchTerm);
        var data = {
            searchText: this.searchTerm,
            selectedTablesIDs: "12"
        };
        this.dataService.getProjectsWithStatus(data).then(this.searchResultSuccess.bind(this), this.searchResultError.bind(this));
    };
    ProjectsListComponent.prototype.searchResultSuccess = function (response) {
        console.log('projects-list.component - searchresult Success - 20191011-1422');
        console.log(response);
    };
    ProjectsListComponent.prototype.searchResultError = function (response) {
        console.log('projects-list.component - searchresult Error - 20191011-1423');
        console.log(response);
        _util_ErrorHandlingHelpers__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlingHelpers"].showHtmlErrorResponse(response);
    };
    ProjectsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects-list',
            template: __webpack_require__(/*! ./projects-list.component.html */ "./src/app/projects/projects-list/projects-list.component.html"),
            styles: [__webpack_require__(/*! ./projects-list.component.css */ "./src/app/projects/projects-list/projects-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());



/***/ }),

/***/ "./src/app/resolvers/timesheet-resolver.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/resolvers/timesheet-resolver.service.ts ***!
  \*********************************************************/
/*! exports provided: TimesheetResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetResolverService", function() { return TimesheetResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// 10/06/2019 05:00 pm - SSN - [20191006-1643] - [002] - Adding Angular 7 - Observables and resolvers




var TimesheetResolverService = /** @class */ (function () {
    function TimesheetResolverService(dataService) {
        this.dataService = dataService;
    }
    TimesheetResolverService.prototype.resolve = function () {
        var obj2 = this.dataService.getTimesheets().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (timesheets) { return timesheets; }));
        return obj2;
    };
    TimesheetResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], TimesheetResolverService);
    return TimesheetResolverService;
}());



/***/ }),

/***/ "./src/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
// 10/03/2019 03:45 pm - SSN - [20191003-1557] - [001] - Adding data service to Angular7



var DataService = /** @class */ (function () {
    // 10/03/2019 05:01 pm - SSN - [20191003-1557] - [007] - Adding data service to Angular7
    // Inject httpClient
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getTimesheets = function () {
        return this.http.get("/api/timelogapi");
    };
    // 10/21/2019 10:18 pm - SSN - [20191021-2033] - [004] - Revise timelog search returned result
    DataService.prototype.getTimesheets_search = function (data) {
        return this.http.post("/api/timelogapi/search", data);
    };
    // 10/21/2019 08:18 am - SSN - [20191021-0444] - [010] - M12 - Creating directives and advanced components in Angular.
    DataService.prototype.getTimelogSearch = function (data) {
        return this.http.post('/api/timelogapi/search', data).toPromise();
    };
    // 10/05/2019 02:52 pm - SSN - [20191003-1557] - [014] - Adding data service to Angular7
    DataService.prototype.getTimesheet = function (id) {
        return this.http.get("/api/timelogapi/get_custom/" + id);
    };
    // 10/07/2019 10:58 am - SSN - [20191007-1020] - [005] - Adding Angular 7 - Collecting data with Angular forms and validations - Authenticate user
    DataService.prototype.authenticateUser = function (userObject) {
        // 10/11/2019 07:38 pm - SSN - [20191011-1804] - [005] - Adding broadcastutil
        var requestOptions = {
            headers: {
                'RequestVerificationToken': userObject.forgeryToken,
                'X-XSRF-Token': userObject.forgeryToken
            }
        };
        return this.http.post("/api/authenticateUserAPI/", userObject, requestOptions);
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
    // 10/11/2019 02:20 pm - SSN - [20191011-0027] - [004] - M12 - Creating directives and advanced components in Angular
    DataService.prototype.getProjectsWithStatus = function (data) {
        console.log('data.service.ts - getProjectWithStatus - 20191011-2043');
        console.log(data);
        return this.http.post("/api/projectAPI/search", data).toPromise();
    };
    // 10/10/2019 10:59 am - SSN - [20191010-1059] - [001] - M10-05 - Creating filtering display
    DataService.prototype.getJobStatuses = function () {
        return this.http.get('/api/job_StatusAPI').toPromise();
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/default-page-parts/default-page-parts.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/default-page-parts/default-page-parts.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZWZhdWx0LXBhZ2UtcGFydHMvZGVmYXVsdC1wYWdlLXBhcnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/default-page-parts/default-page-parts.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/default-page-parts/default-page-parts.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"showDomainNameOnMainPage\" [ngClass]=\"SITE_ALERT_CSS_NAME\" [innerText]=\"locationHostName\"></span>\r\n<span *ngIf=\"showCopyright\" [innerHtml]=\"showCopyright_String\"></span>\r\n"

/***/ }),

/***/ "./src/app/shared/default-page-parts/default-page-parts.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/default-page-parts/default-page-parts.component.ts ***!
  \***************************************************************************/
/*! exports provided: DefaultPagePartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPagePartsComponent", function() { return DefaultPagePartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
// 10/22/2019 09:47 pm - SSN - [20191022-2147] - [001] - Adding DefaultPagePartsComponent



var DefaultPagePartsComponent = /** @class */ (function () {
    function DefaultPagePartsComponent(location) {
        this.location = location;
        this.locationHostName = "";
        this.showDomainNameOnMainPage = false;
        this.showCopyright = false;
        this.showCopyright_String = "";
        this.currentPageTitle = "";
        this.SITE_ALERT_CSS_NAME = "";
    }
    DefaultPagePartsComponent.prototype.ngOnInit = function () {
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
    };
    DefaultPagePartsComponent.prototype.setPageTitle = function () {
        if (this.currentPageTitle) {
            document.title = this.currentPageTitle + " - " + this.locationHostName;
        }
        else {
            document.title = this.locationHostName;
        }
    };
    DefaultPagePartsComponent.prototype.setCopyright = function () {
        var currentYear = (new Date()).getFullYear();
        this.showCopyright_String = "<p>&copy; 2018 - " + this.locationHostName + "</p>";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DefaultPagePartsComponent.prototype, "requestedSection", void 0);
    DefaultPagePartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default-page-parts',
            template: __webpack_require__(/*! ./default-page-parts.component.html */ "./src/app/shared/default-page-parts/default-page-parts.component.html"),
            styles: [__webpack_require__(/*! ./default-page-parts.component.css */ "./src/app/shared/default-page-parts/default-page-parts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], DefaultPagePartsComponent);
    return DefaultPagePartsComponent;
}());



/***/ }),

/***/ "./src/app/shared/e404/e404.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/e404/e404.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.errorMessage {\r\n  margin-top:150px;\r\n  font-size:48px;\r\n  text-align:center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2U0MDQvZTQwNC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2U0MDQvZTQwNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5lcnJvck1lc3NhZ2Uge1xyXG4gIG1hcmdpbi10b3A6MTUwcHg7XHJcbiAgZm9udC1zaXplOjQ4cHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/e404/e404.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/e404/e404.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"errorMessage\">Invalid Request</h1>\r\n"

/***/ }),

/***/ "./src/app/shared/e404/e404.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/e404/e404.component.ts ***!
  \***********************************************/
/*! exports provided: E404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E404Component", function() { return E404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// 10/06/2019 01:28 pm - SSN - [20191006-1211] - [004] - Adding Angular 7
var E404Component = /** @class */ (function () {
    function E404Component() {
    }
    E404Component.prototype.ngOnInit = function () {
    };
    E404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-e404',
            template: __webpack_require__(/*! ./e404.component.html */ "./src/app/shared/e404/e404.component.html"),
            styles: [__webpack_require__(/*! ./e404.component.css */ "./src/app/shared/e404/e404.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], E404Component);
    return E404Component;
}());



/***/ }),

/***/ "./src/app/shared/j-query.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/j-query.service.ts ***!
  \*******************************************/
/*! exports provided: JQ_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JQ_TOKEN", function() { return JQ_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// 10/21/2019 05:38 am - SSN - [20191021-0444] - [003] - M12 - Creating directives and advanced components in Angular.

var JQ_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('jQuery');


/***/ }),

/***/ "./src/app/shared/modal-trigger.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/modal-trigger.directive.ts ***!
  \***************************************************/
/*! exports provided: ModalTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTriggerDirective", function() { return ModalTriggerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _j_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./j-query.service */ "./src/app/shared/j-query.service.ts");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/npm.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_3__);
// 10/21/2019 06:21 am - SSN - [20191021-0444] - [007] - M12 - Creating directives and advanced components in Angular.




var ModalTriggerDirective = /** @class */ (function () {
    function ModalTriggerDirective(ref, $) {
        this.$ = $;
        this.el = ref.nativeElement;
    }
    ModalTriggerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.el.addEventListener('click', function (e) {
            console.log('modal-trigger.directive - 20191021-0638');
            _this.$("#" + _this.app_modal_trigger_container_ID).modal({});
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('app-modal-trigger'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalTriggerDirective.prototype, "app_modal_trigger_container_ID", void 0);
    ModalTriggerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[app-modal-trigger]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_j_query_service__WEBPACK_IMPORTED_MODULE_2__["JQ_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])
    ], ModalTriggerDirective);
    return ModalTriggerDirective;
}());



/***/ }),

/***/ "./src/app/shared/pager-custom.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pager-custom.component.ts ***!
  \**************************************************/
/*! exports provided: AppPageV02Custom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPageV02Custom", function() { return AppPageV02Custom; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//<span  * ngFor="let item of data" > <span>{{ item }}</span> &nbsp; &nbsp; <span (click)='removeTag_local(\"" +   item + "\")'>X</span > & nbsp;  & nbsp; </span> 
var AppPageV02Custom = /** @class */ (function () {
    function AppPageV02Custom() {
        this.skipActionOwner = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.previousButtonEnabled = false;
        this.nextButtonEnabled = true;
        this.haveRecords = false;
    }
    AppPageV02Custom.prototype.ngOnChanges = function (changes) {
        this.haveRecords = false;
        if (this.sqlStatsRecord) {
            if (this.sqlStatsRecord.currentPageNo > 0 && this.sqlStatsRecord.totalRecordCount > 0) {
                var totalPageCount = Math.ceil(this.sqlStatsRecord.totalRecordCount / this.sqlStatsRecord.recordsPerPage);
                this.sayWhatpageWeAreon = "Page " + this.sqlStatsRecord.currentPageNo + " of " + totalPageCount;
                this.previousButtonEnabled = this.sqlStatsRecord.currentPageNo > 1 && totalPageCount > 1;
                this.nextButtonEnabled = this.sqlStatsRecord.currentPageNo < totalPageCount;
                this.haveRecords = this.sqlStatsRecord.totalRecordCount > 0;
                this.CSSClasses = [];
            }
            else {
                this.sayWhatpageWeAreon = "No records available.";
                this.CSSClasses = ['info_bad', 'padded_v02'];
            }
        }
    };
    AppPageV02Custom.prototype.doSkip = function (value) {
        this.skipActionOwner.emit({ value: value, sqlStatsRecord: this.sqlStatsRecord });
        if (this.scrollIntoViewSelector) {
            var obj1 = document.querySelector(this.scrollIntoViewSelector);
            if (obj1) {
                obj1.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppPageV02Custom.prototype, "sqlStatsRecord", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppPageV02Custom.prototype, "scrollIntoViewSelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppPageV02Custom.prototype, "skipActionOwner", void 0);
    AppPageV02Custom = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-v02-custom',
            template: "\n<p><span [ngClass]=\"CSSClasses\">{{sayWhatpageWeAreon}}</span></p>\n<div *ngIf=\"haveRecords\">\n  <button cmd-name=\"smooth-scroll\" jQueryObjectName=\"[ssnobject]\" [disabled]=\"!previousButtonEnabled\" appPagerCustom class=\"btn btn-default\" (click)=\"doSkip(-1)\" >Previous</button> &nbsp; \n  <button cmd-name=\"smooth-scroll\" jQueryObjectName=\"[ssnobject]\" [disabled]=\"!nextButtonEnabled\" appPagerCustom class=\"btn btn-default\" (click)=\"doSkip(1)\" >Next</button>\n</div>\n \n"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppPageV02Custom);
    return AppPageV02Custom;
}());



/***/ }),

/***/ "./src/app/shared/timelog-modal/timelog-modal.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shared/timelog-modal/timelog-modal.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.modal-body{\r\n\r\n  height: 250px;\r\n  overflow-y:scroll;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RpbWVsb2ctbW9kYWwvdGltZWxvZy1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsaUJBQWlCOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90aW1lbG9nLW1vZGFsL3RpbWVsb2ctbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubW9kYWwtYm9keXtcclxuXHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBvdmVyZmxvdy15OnNjcm9sbDtcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/timelog-modal/timelog-modal.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/timelog-modal/timelog-modal.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"{{elementId}}\" #modalContainer class=\"modal fade\" tabindex=\"-1\">\r\n\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          <span >&times;</span>\r\n        </button>\r\n\r\n        <h4 class=\"modal-title\">{{title}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\" (click)=\"closeModal()\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/timelog-modal/timelog-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/timelog-modal/timelog-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: TimelogModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelogModalComponent", function() { return TimelogModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _j_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../j-query.service */ "./src/app/shared/j-query.service.ts");



var TimelogModalComponent = /** @class */ (function () {
    function TimelogModalComponent($) {
        this.$ = $;
    }
    TimelogModalComponent.prototype.ngOnInit = function () {
    };
    TimelogModalComponent.prototype.closeModal = function () {
        var _closeOnClick = true;
        console.log('timelog-modal.compoent - 20191021-1315');
        console.log(typeof (this.closeOnClick));
        if (typeof (this.closeOnClick) === "string" && this.closeOnClick.toLowerCase() !== "true") {
            _closeOnClick = false;
        }
        if (_closeOnClick) {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TimelogModalComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TimelogModalComponent.prototype, "elementId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TimelogModalComponent.prototype, "closeOnClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TimelogModalComponent.prototype, "containerEl", void 0);
    TimelogModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timelog-modal',
            template: __webpack_require__(/*! ./timelog-modal.component.html */ "./src/app/shared/timelog-modal/timelog-modal.component.html"),
            styles: [__webpack_require__(/*! ./timelog-modal.component.css */ "./src/app/shared/timelog-modal/timelog-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_j_query_service__WEBPACK_IMPORTED_MODULE_2__["JQ_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TimelogModalComponent);
    return TimelogModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/toastr.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/toastr.service.ts ***!
  \******************************************/
/*! exports provided: TOASTR_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOASTR_TOKEN", function() { return TOASTR_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// 10/04/2019 11:25 pm - SSN - [20191003-1557] - [013] - Adding data service to Angular7
// 10/10/2019 11:39 pm - SSN - [20191010-1354] - [001] - M11 - Understanding Angular's Dependency Injection

var TOASTR_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('toast');


/***/ }),

/***/ "./src/app/test-component/test-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/test-component/test-component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtY29tcG9uZW50L3Rlc3QtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test-component/test-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/test-component/test-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test-component works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/test-component/test-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/test-component/test-component.component.ts ***!
  \************************************************************/
/*! exports provided: TestComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponentComponent", function() { return TestComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponentComponent = /** @class */ (function () {
    function TestComponentComponent() {
    }
    TestComponentComponent.prototype.ngOnInit = function () {
    };
    TestComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-component',
            template: __webpack_require__(/*! ./test-component.component.html */ "./src/app/test-component/test-component.component.html"),
            styles: [__webpack_require__(/*! ./test-component.component.css */ "./src/app/test-component/test-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponentComponent);
    return TestComponentComponent;
}());



/***/ }),

/***/ "./src/app/timesheet/create-timelog/create-timelog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/timesheet/create-timelog/create-timelog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nem {\r\n  float: right;\r\n  color: #e05c65;\r\n  /*padding-left: 10px;*/\r\n}\r\n\r\n.error {\r\n  padding: 0px;\r\n}\r\n\r\n.error input {\r\n    background-color: #e3c3c5;\r\n  }\r\n\r\n.error ::-webkit-input-placeholder {\r\n    color: #999;\r\n  }\r\n\r\n.error::-moz-placeholder {\r\n    color: #999;\r\n  }\r\n\r\n.error :ms-input-placeholder {\r\n    color: #999;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXNoZWV0L2NyZWF0ZS10aW1lbG9nL2NyZWF0ZS10aW1lbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUU7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC90aW1lc2hlZXQvY3JlYXRlLXRpbWVsb2cvY3JlYXRlLXRpbWVsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5lbSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZTA1YzY1O1xyXG4gIC8qcGFkZGluZy1sZWZ0OiAxMHB4OyovXHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4gIC5lcnJvciBpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNjM2M1O1xyXG4gIH1cclxuXHJcbiAgLmVycm9yIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICB9XHJcblxyXG4gIC5lcnJvcjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICB9XHJcblxyXG4gIC5lcnJvciA6bXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/timesheet/create-timelog/create-timelog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/timesheet/create-timelog/create-timelog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--// Tempalte-based form\r\n    // 10/09/2019 09:53 am - SSN - [20191009-0144] - [002] - M07-09 - Template-based form validation\r\n-->\r\n\r\n\r\n<div class=\"container col-md-6\">\r\n  <h3>Create new timelog</h3>\r\n\r\n  <form #newTimelogForm=\"ngForm\" (ngSubmit)=\"saveTimelog(newTimelogForm.value)\" autocomplete=\"off\" novalidate>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{'error':!isValidControl( newTimelogForm , 'projectTitle')}\">\r\n      <label for=\"projectTitle\">Project Title</label>\r\n      <em *ngIf=\"!isValidControl( newTimelogForm , 'projectTitle')\">Required</em>\r\n      <input (ngModel)=\"timelog.job.project.projectTitle\" name=\"projectTitle\" id=\"projectTitle\" class=\"form-control\" placeholder=\"Project title...\" required />\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{'error':!isValidControl( newTimelogForm , 'jobTitle')}\">\r\n      <label for=\"timelog.job.jobTitle\">Job Title</label>\r\n      <em *ngIf=\"!isValidControl( newTimelogForm , 'jobTitle')\">Required</em>\r\n      <input [(ngModel)]=\"timelog.job.jobTitle\" name=\"jobTitle\"  id=\"jobTitle\" class=\"form-control\" placeholder=\"Job title...\" required />\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{'error':!isValidControl( newTimelogForm , 'workDetail2')}\">\r\n      <label for=\"workDetail\">workDetail</label>\r\n      <em *ngIf=\"!isValidControl( newTimelogForm , 'workDetail2')\">Required</em>\r\n      <input [(ngModel)]=\"timelog.workDetail\" name=\"workDetail2\"   id=\"workDetail\" class=\"form-control\" placeholder=\"Work detail...\" required/>\r\n    </div>\r\n\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button> &nbsp;\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\r\n\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/timesheet/create-timelog/create-timelog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/timesheet/create-timelog/create-timelog.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateTimelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTimelogComponent", function() { return CreateTimelogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// 10/06/2019 01:20 pm - SSN - [20191006-1211] - [003] - Adding Angular 7
// Tempalte-based form
var CreateTimelogComponent = /** @class */ (function () {
    function CreateTimelogComponent(router) {
        this.router = router;
        this.isDirty = true;
    }
    CreateTimelogComponent.prototype.ngOnInit = function () {
        console.log('create-timelog.component - 20191009-0154');
        this.timelog = {
            dateAdded: null,
            dateModified: null,
            disciplineID: 0,
            job: {
                jobTitle: "",
                project: {
                    projectTitle: "Some job title"
                }
            },
            jobId: null,
            startTime: null,
            timeLogId: 0,
            totalSeconds: null,
            workDetail: "From db"
        };
    };
    CreateTimelogComponent.prototype.isValidControl = function (formControl, theControlName) {
        if (!formControl.controls[theControlName]) {
            return;
        }
        return formControl.controls[theControlName].valid || formControl.controls[theControlName].untouched;
    };
    CreateTimelogComponent.prototype.cancel = function () {
        this.router.navigate(['/timesheet']);
    };
    CreateTimelogComponent.prototype.saveTimelog = function (formValue) {
        console.log('create-timelog.component - 20191009-0147');
        console.log(formValue);
    };
    CreateTimelogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-timelog',
            template: __webpack_require__(/*! ./create-timelog.component.html */ "./src/app/timesheet/create-timelog/create-timelog.component.html"),
            styles: [__webpack_require__(/*! ./create-timelog.component.css */ "./src/app/timesheet/create-timelog/create-timelog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateTimelogComponent);
    return CreateTimelogComponent;
}());



/***/ }),

/***/ "./src/app/timesheet/thumbnail/thumbnail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/timesheet/thumbnail/thumbnail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.customThumbnail {\r\n  min-height: 260px;\r\n}\r\n\r\n.colorPadded {\r\n  padding: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.green {\r\n  color: green;\r\n  background-color:yellow\r\n}\r\n\r\n.red {\r\n  color: red;\r\n}\r\n\r\n.yellow {\r\n  color: yellow;\r\n  background-color: darkslategrey;\r\n}\r\n\r\n.bold {\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXNoZWV0L3RodW1ibmFpbC90aHVtYm5haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdGltZXNoZWV0L3RodW1ibmFpbC90aHVtYm5haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY3VzdG9tVGh1bWJuYWlsIHtcclxuICBtaW4taGVpZ2h0OiAyNjBweDtcclxufVxyXG5cclxuLmNvbG9yUGFkZGVkIHtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5ncmVlbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6eWVsbG93XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi55ZWxsb3cge1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/timesheet/thumbnail/thumbnail.component.html?v=1":
/*!******************************************************************!*\
  !*** ./src/app/timesheet/thumbnail/thumbnail.component.html?v=1 ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"well hoverwell thumbnail customThumbnail\">\r\n\r\n  <h3><a [routerLink]=\"['/timelog',timesheet.timeLogId]\">[{{timesheet.timeLogId}}] - {{timesheet.job.project.projectTitle}}</a></h3>\r\n  <hr />\r\n  <div>\r\n\r\n    {{timesheet.discipline.disciplineShort}}<br />\r\n    {{timesheet.job.jobTitle}}<br />\r\n\r\n    {{timesheet.job.job_StatusID | jobStatus}} <br />\r\n\r\n    <br/>\r\n    <span [ngClass]=\"setTotalSecondsClass()\">\r\n\r\n      {{timesheet.totalSeconds}}\r\n    </span>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n<button class=\"btn btn-primary\" (click)=\"handleClickMe101(timesheet)\">Click Me!</button> &nbsp;\r\n"

/***/ }),

/***/ "./src/app/timesheet/thumbnail/thumbnail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/timesheet/thumbnail/thumbnail.component.ts ***!
  \************************************************************/
/*! exports provided: ThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailComponent", function() { return ThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// 10/04/2019 05:29 pm - SSN - [20191003-1557] - [009] - Adding data service to Angular7
var ThumbnailComponent = /** @class */ (function () {
    function ThumbnailComponent() {
        this.eventClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ThumbnailComponent.prototype.ngOnInit = function () {
    };
    ThumbnailComponent.prototype.handleClickMe101 = function (timesheet) {
        console.log("Clicked me!");
        this.eventClick.emit(timesheet.job.jobTitle);
    };
    ThumbnailComponent.prototype.testFunction = function () {
        console.log("Output from testFunction");
    };
    ThumbnailComponent.prototype.setTotalSecondsClass = function () {
        if (!this.timesheet)
            return;
        if (!this.timesheet.totalSeconds)
            return;
        if (this.timesheet.totalSeconds < 3600)
            return ["green", "bold", "colorPadded"];
        if (this.timesheet.totalSeconds < 7200)
            return { yellow: true, colorPadded: true };
        return { red: true };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThumbnailComponent.prototype, "timesheet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThumbnailComponent.prototype, "eventClick", void 0);
    ThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thumbnail',
            template: __webpack_require__(/*! ./thumbnail.component.html?v=1 */ "./src/app/timesheet/thumbnail/thumbnail.component.html?v=1"),
            styles: [__webpack_require__(/*! ./thumbnail.component.css */ "./src/app/timesheet/thumbnail/thumbnail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThumbnailComponent);
    return ThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/timesheet/timelog/timelog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/timesheet/timelog/timelog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVzaGVldC90aW1lbG9nL3RpbWVsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timesheet/timelog/timelog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/timesheet/timelog/timelog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div *ngIf=\"!timelog\" class=\"container info_bad\">\r\n  Failed to retrieve record.\r\n</div>\r\n\r\n<div *ngIf=\"timelog\" class=\"container\">\r\n\r\n\r\n  <h1>[{{timelog.timeLogId}}]</h1>\r\n  <hr />\r\n  <dl class=\"dl-horizontal\">\r\n\r\n    <dt>\r\n      Project Title:\r\n    </dt>\r\n    <dd>\r\n      {{timelog?.job?.project.projectTitle}}\r\n\r\n    </dd>\r\n\r\n    <dt>\r\n      JobTitle\r\n    </dt>\r\n    <dd>\r\n      <a href=\"/jobs/Details\" asp-route-id=\"@Model.TimeLog.JobId\">\r\n        {{timelog?.job?.jobTitle}}\r\n      </a>\r\n    </dd>\r\n\r\n    <dt>\r\n      Discipline\r\n    </dt>\r\n    <dd>\r\n      {{timelog?.discipline?.disciplineShort}}\r\n    </dd>\r\n\r\n\r\n    <dt>\r\n      StartTime\r\n    </dt>\r\n    <dd>\r\n      {{timelog.startTime}}\r\n    </dd>\r\n\r\n\r\n    <dt>\r\n      StopTime_AsString\r\n    </dt>\r\n    <dd>\r\n      {{timelog.stopTime_AsString}}\r\n    </dd>\r\n\r\n\r\n    <dt>\r\n      TotalSeconds_ToTimeSpanFormat_T\r\n    </dt>\r\n    <dd>\r\n      {{timelog.totalSeconds_ToTimeSpanFormat_T}}\r\n    </dd>\r\n\r\n\r\n\r\n\r\n\r\n    <dt>\r\n      Date Added\r\n    </dt>\r\n    <dd>\r\n      {{timelog.dateAdded}}\r\n    </dd>\r\n    <dt>\r\n      Date Modified\r\n    </dt>\r\n    <dd>\r\n      {{timelog.dateModified}}\r\n    </dd>\r\n    <dt>\r\n      Work Detail\r\n    </dt>\r\n    <dd>\r\n      {{timelog.workDetail}}\r\n    </dd>\r\n\r\n  </dl>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/timesheet/timelog/timelog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/timesheet/timelog/timelog.component.ts ***!
  \********************************************************/
/*! exports provided: TimelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelogComponent", function() { return TimelogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// 10/05/2019 03:14 pm - SSN - [20191003-1557] - [016] - Adding data service to Angular7




var TimelogComponent = /** @class */ (function () {
    function TimelogComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    TimelogComponent.prototype.ngOnInit = function () {
        this.timelog = {};
        this.timelog.timeLogId = -999;
        // 10/06/2019 12:12 pm - SSN - [20191006-1211] - [001] - Adding Angular 7
        // 10/21/2019 11:58 am - SSN - [20191021-0444] - [014] - M12 - Creating directives and advanced components in Angular.
        var id = 0;
        var promise;
        var useOriginalVersion = true;
        if (useOriginalVersion) {
            id = +this.route.snapshot.params['id'];
        }
        else {
            this.route.params.forEach(function (params) {
                id = +params['id'];
            });
        }
        promise = this.dataService.getTimesheet(id).toPromise();
        promise.then(this.getTimesheetSuccess.bind(this), this.getTimesheetError).catch(this.getTimesheetCatch);
    };
    TimelogComponent.prototype.getTimesheetSuccess = function (response) {
        this.timelog = response;
    };
    TimelogComponent.prototype.getTimesheetError = function (response) {
        console.log('timelog.component - getTimehseetError - 20191005-1524');
        console.log(response);
    };
    TimelogComponent.prototype.getTimesheetCatch = function (response) {
        console.log('timelog.component - getTimehseetCatch - 20191005-1526');
        console.log(response);
    };
    TimelogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timelog',
            template: __webpack_require__(/*! ./timelog.component.html */ "./src/app/timesheet/timelog/timelog.component.html"),
            styles: [__webpack_require__(/*! ./timelog.component.css */ "./src/app/timesheet/timelog/timelog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TimelogComponent);
    return TimelogComponent;
}());



/***/ }),

/***/ "./src/app/timesheet/timesheet.component.css":
/*!***************************************************!*\
  !*** ./src/app/timesheet/timesheet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVzaGVldC90aW1lc2hlZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timesheet/timesheet.component.html":
/*!****************************************************!*\
  !*** ./src/app/timesheet/timesheet.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<a ssnobject2=\"topOfThePage2\"></a>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n\r\n    <!-- 10/21/2019 04:51 am - SSN - [20191021-0444] - [002] - M12 - Creating directives and advanced components in Angular. -->\r\n\r\n    <form id=\"serachForm\" (ngSubmit)=\"searchTimesheets()\" autocomplete=\"off\" novalidate>\r\n      <div class=\"form-group\">\r\n        <input [(ngModel)]=\"searchTerm\" name=\"searchTerm\" type=\"search\" class=\"form-control\" placeholder=\"Search timelog entries...\" />\r\n\r\n        <!--app-modal-trigger=\"timelogSearchResults\"-->\r\n\r\n        <button class=\"btn btn-default\">Search</button>\r\n        <button class=\"btn btn-default\" (click)=\"resetSearch()\">Reset</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- 10/21/2019 05:47 am - SSN - [20191021-0444] - [005] - M12 - Creating directives and advanced components in Angular. -->\r\n<app-timelog-modal elementId=\"timelogSearchResults\" title=\"Matching Timelog Entries\" closeOnClick=\"true\">\r\n  <div class=\"list-group\">\r\n    <!--\r\n              [routerLink]=\"['/timelog',timesheet_modal.timelogId]\"\r\n              app-modal-trigger=\"timelogShowSelected\"\r\n    -->\r\n    <a class=\"list-group-item\" *ngFor=\"let timesheet_modal of timesheets_for_modal\" [routerLink]=\"['/timelog',timesheet_modal.timelogId]\">\r\n      [{{timesheet_modal.projectTitle}}] - [{{timesheet_modal.jobTitle}}] - [{{timesheet_modal.disciplineShort}}]\r\n    </a>\r\n  </div>\r\n</app-timelog-modal>\r\n\r\n\r\n<!-- // 10/21/2019 12:30 pm - SSN - [20191021-1230] - [001] - Modal for displaying selectd entry -->\r\n<app-timelog-modal elementId=\"timelogShowSelected\" title=\"Selected Entry\">\r\n  <h1>Show-1232</h1>\r\n</app-timelog-modal>\r\n\r\n<div class=\"row\">\r\n\r\n  <div *ngFor=\"let timesheet of timesheets\" class=\"col-md-5\">\r\n\r\n    <!-- timesheetThumnail: template variable -->\r\n    <app-thumbnail #timesheetThumbnail [timesheet]=\"timesheet\" (eventClick)=\"handleThumbnailClick($event)\"></app-thumbnail>\r\n    <button class=\"btn btn-info\" (click)=\"timesheetThumbnail.testFunction()\">Call thumbnail test</button>\r\n    <br />\r\n    <br />\r\n    <br />\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<app-page-v02-custom (skipActionOwner)=\"skipTimelog($event)\" [sqlStatsRecord]=\"sqlStatsRecord\" [scrollIntoViewSelector]=\"'[ssnobject2=topOfThePage2]'\"></app-page-v02-custom>\r\n"

/***/ }),

/***/ "./src/app/timesheet/timesheet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timesheet/timesheet.component.ts ***!
  \**************************************************/
/*! exports provided: TimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetComponent", function() { return TimesheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/toastr.service */ "./src/app/shared/toastr.service.ts");
/* harmony import */ var _util_ErrorHandlingHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/ErrorHandlingHelpers */ "./src/app/util/ErrorHandlingHelpers.ts");






var TimesheetComponent = /** @class */ (function () {
    // 10/04/2019 11:24 pm - SSN - [20191003-1557] - [012] - Adding data service to Angular7
    // Add toastrService
    // 10/06/2019 05:11 pm - SSN - [20191006-1643] - [006] - Adding Angular 7 - Observables and resolvers - Adding ActivatedRoute
    function TimesheetComponent(dataService, 
    // 10/10/2019 11:56 pm - SSN - [20191010-1354] - [006] - M11 - Understanding Angular's Dependency Injection
    toastrService, route) {
        this.dataService = dataService;
        this.toastrService = toastrService;
        this.route = route;
        this.searchTerm = "";
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        this.timesheets = [];
        this.sqlStatsRecord = null;
        //let promise = this.dataService.getTimesheets().toPromise();
        //promise.then(this.getTimesheetSuccess.bind(this), this.getTimesheetError);
        // 10/06/2019 05:10 pm - SSN - [20191006-1643] - [005] - Adding Angular 7 - Observables and resolvers - Pickup data from resolver
        this.timesheets = this.route.snapshot.data['timesheets_resolver'];
    };
    TimesheetComponent.prototype.getTimesheetSuccess = function (response) {
        this.timesheets = response;
        this.sqlStatsRecord = null;
    };
    TimesheetComponent.prototype.getTimesheetError = function (response) {
        console.log('timesheetComponent  20191003-1715 - Error');
        console.log(response);
        _util_ErrorHandlingHelpers__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingHelpers"].showHtmlErrorResponse(response);
    };
    TimesheetComponent.prototype.handleThumbnailClick = function (data) {
        this.toastrService.success('Loaded [' + data + ']...', 'some title');
    };
    // 10/21/2019 04:48 am - SSN - [20191021-0444] - [001] - M12 - Creating directives and advanced components in Angular.
    TimesheetComponent.prototype.searchTimesheets = function () {
        var data = {
            searchTerm: this.searchTerm
        };
        this.dataService.getTimelogSearch(data).then(this.getTimelogSearchSuccess.bind(this), this.getTimelogSearchError.bind(this));
    };
    TimesheetComponent.prototype.resetSearch = function () {
        var data = {
            searchTerm: ""
        };
        this.dataService.getTimelogSearch(data).then(this.getTimelogSearchSuccess.bind(this), this.getTimelogSearchError.bind(this));
    };
    TimesheetComponent.prototype.getTimelogSearchSuccess = function (result) {
        // this.timesheets_for_modal = result.dataList;
        this.timesheets = result.dataList;
        this.sqlStatsRecord = result.sqlStatsRecord;
    };
    TimesheetComponent.prototype.getTimelogSearchError = function (response) {
        console.log('timesheet.Component - 20191021-0824  - Error ');
        console.log(response);
        _util_ErrorHandlingHelpers__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingHelpers"].showHtmlErrorResponse(response);
    };
    TimesheetComponent.prototype.skipTimelog = function (data) {
        data.sqlStatsRecord.currentPageNo = data.sqlStatsRecord.currentPageNo + data.value;
        console.log(data.sqlStatsRecord);
        this.dataService.getTimelogSearch(data.sqlStatsRecord).then(this.getTimelogSearchSuccess.bind(this), this.getTimelogSearchError.bind(this));
    };
    TimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timesheet',
            template: __webpack_require__(/*! ./timesheet.component.html */ "./src/app/timesheet/timesheet.component.html"),
            styles: [__webpack_require__(/*! ./timesheet.component.css */ "./src/app/timesheet/timesheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_shared_toastr_service__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TimesheetComponent);
    return TimesheetComponent;
}());



/***/ }),

/***/ "./src/app/users/authenticate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/users/authenticate.service.ts ***!
  \***********************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");
// 10/07/2019 10:20 am - SSN - [20191007-1020] - [001] - Adding Angular 7 - Collecting data with Angular forms and validations - Authenticate user



var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(dataService) {
        this.dataService = dataService;
        this.currentUser = null;
        this.counter = 0;
    }
    AuthenticateService.prototype.loginUser = function (forgeryToken, email, password) {
        return this.dataService.authenticateUser({ forgeryToken: forgeryToken, email: email, password: password }).toPromise();
    };
    AuthenticateService.prototype.isAuthenticated = function () {
        this.counter += 1;
        if (!this.currentUser)
            return false;
        return this.currentUser.isAuthenticated;
    };
    // 10/08/2019 06:44 pm - SSN - [20191008-1232] - [011] - X-XSRF-TOKEN
    AuthenticateService.prototype.isLoggedIn = function () {
        return this.dataService.isLoggedIn().toPromise();
    };
    // 10/08/2019 02:09 pm - SSN - [20191008-1232] - [006] - X-XSRF-TOKEN
    AuthenticateService.prototype.logoutUser = function (token) {
        return this.dataService.logoutUser(token).toPromise();
    };
    AuthenticateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "./src/app/util/ErrorHandlingHelpers.ts":
/*!**********************************************!*\
  !*** ./src/app/util/ErrorHandlingHelpers.ts ***!
  \**********************************************/
/*! exports provided: ErrorHandlingHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingHelpers", function() { return ErrorHandlingHelpers; });
// 10/11/2019 09:09 pm - SSN
var ErrorHandlingHelpers = /** @class */ (function () {
    function ErrorHandlingHelpers() {
    }
    ErrorHandlingHelpers.showHtmlErrorResponse = function (response) {
        if (response.error[0] == "<") {
            console.log('ErrorHandlingHelpers - showHtmlErrorResponse - 20191011-2117 - Opening error window...');
            var tempWin = window.open();
            tempWin.document.write(response.error);
        }
    };
    return ErrorHandlingHelpers;
}());



/***/ }),

/***/ "./src/app/util/job-status.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/util/job-status.pipe.ts ***!
  \*****************************************/
/*! exports provided: JobStatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobStatusPipe", function() { return JobStatusPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// 10/09/2019 10:58 pm - SSN - [20191009-2256] - [001] - M10 - Displaying data with pipes.


var JobStatusPipe = /** @class */ (function () {
    function JobStatusPipe() {
    }
    JobStatusPipe.prototype.transform = function (value) {
        switch (value) {
            case 1:
                return '*Open';
            case 2:
                return '*Pending';
            case 3:
                return '*Completed';
            case 4:
                return '*Canceled';
        }
        return "Invalid status code [" + value + "]";
    };
    JobStatusPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'jobStatus'
        })
    ], JobStatusPipe);
    return JobStatusPipe;
}());



/***/ }),

/***/ "./src/app/util/timelog-route-activator.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/util/timelog-route-activator.service.ts ***!
  \*********************************************************/
/*! exports provided: TimelogRouteActivatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelogRouteActivatorService", function() { return TimelogRouteActivatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");
// 10/06/2019 01:31 pm - SSN - [20191006-1211] - [006] - Adding Angular 7




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
    TimelogRouteActivatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TimelogRouteActivatorService);
    return TimelogRouteActivatorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Sams\DevSitesIndex\DevSitesIndex\timesheetsSupport7\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map