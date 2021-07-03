(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular Project\ApiDemo\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cover Your Page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BOpG":
/*!************************************************************!*\
  !*** ./src/app/detail-faculty/detail-faculty.component.ts ***!
  \************************************************************/
/*! exports provided: DetailFacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFacultyComponent", function() { return DetailFacultyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _faculty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../faculty */ "Dhqx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_faculty_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-faculty.service */ "cmNk");





class DetailFacultyComponent {
    constructor(_activeroute, _api, _router) {
        this._activeroute = _activeroute;
        this._api = _api;
        this._router = _router;
        this.facultyDetail = new _faculty__WEBPACK_IMPORTED_MODULE_1__["Faculty"]();
    }
    ngOnInit() {
        this.id = this._activeroute.snapshot.params.id;
        this._api.getFacultyById(this.id).subscribe((res) => {
            this.facultyDetail = res;
        });
    }
    deleteFaculty(id) {
        this._api.deleteFaculty(id).subscribe((res) => {
            this._router.navigate(['allfaculty']);
        });
    }
    editFaculty() {
        this._router.navigate(['faculty/edit/', this.id]);
    }
}
DetailFacultyComponent.ɵfac = function DetailFacultyComponent_Factory(t) { return new (t || DetailFacultyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_faculty_service__WEBPACK_IMPORTED_MODULE_3__["ApiFacultyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DetailFacultyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailFacultyComponent, selectors: [["app-detail-faculty"]], decls: 12, vars: 4, consts: [[1, "row"], [1, "col-md-3"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "col-md-9"], ["type", "button", "value", "Delete", 1, "btn", "btn-danger", "mr-3", 3, "click"], ["type", "button", "value", "Edit", 1, "btn", "btn-warning", 3, "click"]], template: function DetailFacultyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailFacultyComponent_Template_input_click_10_listener() { return ctx.deleteFaculty(ctx.facultyDetail.FacultyID); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailFacultyComponent_Template_input_click_11_listener() { return ctx.editFaculty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.facultyDetail.FacultyImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.facultyDetail.FacultyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.facultyDetail.FacultySubjectsTaught);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.facultyDetail.FacultyProfileDescription);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtZmFjdWx0eS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailFacultyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-faculty',
                templateUrl: './detail-faculty.component.html',
                styleUrls: ['./detail-faculty.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _api_faculty_service__WEBPACK_IMPORTED_MODULE_3__["ApiFacultyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Dhqx":
/*!****************************!*\
  !*** ./src/app/faculty.ts ***!
  \****************************/
/*! exports provided: Faculty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faculty", function() { return Faculty; });
class Faculty {
    constructor() {
        this.FacultyID = 0;
        this.FacultyName = '';
        this.FacultyDesignation = '';
        this.FacultyHighestEducation = '';
        this.FacultyExperienceInYears = '';
        this.FacultyWorkingSince = '';
        this.FacultyMobileNumber = '';
        this.FacultyEmailAddress = '';
        this.FacultySeating = '';
        this.FacultyProfileDescription = '';
        this.FacultyAreaSpecialization = '';
        this.FacultySubjectsTaught = '';
        this.FacultyImage = '';
        this.FacultyDepartmentID = 0;
        this.FacultySequence = 0;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor() {
        this.title = 'ApiDemo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faculty/faculty.component */ "j6bm");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _detail_faculty_detail_faculty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail-faculty/detail-faculty.component */ "BOpG");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _add_faculty_add_faculty_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-faculty/add-faculty.component */ "swK4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_4__["FacultyComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _detail_faculty_detail_faculty_component__WEBPACK_IMPORTED_MODULE_7__["DetailFacultyComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _add_faculty_add_faculty_component__WEBPACK_IMPORTED_MODULE_9__["AddFacultyComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_4__["FacultyComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _detail_faculty_detail_faculty_component__WEBPACK_IMPORTED_MODULE_7__["DetailFacultyComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _add_faculty_add_faculty_component__WEBPACK_IMPORTED_MODULE_9__["AddFacultyComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cmNk":
/*!****************************************!*\
  !*** ./src/app/api-faculty.service.ts ***!
  \****************************************/
/*! exports provided: ApiFacultyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiFacultyService", function() { return ApiFacultyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ApiFacultyService {
    constructor(_http) {
        this._http = _http;
        this.apiUrl = "https://arjunbala.com/DFaculty/api.php/records/faculty";
        this.object1 = {
            "FacultyName": "Prof. xyz",
            "FacultyDesignation": "Assistant Professor",
            "FacultyHighestEducation": "M.E. (CE)",
            "FacultyExperienceInYears": 12,
            "FacultyWorkingSince": "Jul-199",
            "FacultyMobileNumber": "9879879861",
            "FacultyEmailAddress": "xyz@?darshan.ac.in",
            "FacultySeating": "C-202",
            "FacultyProfileDescription": "Prof. xyz obtained B.E. (Computer) in 2004 from Rajkot and M.E. (Computer) in 2014 from Junagadh. He has been associated with Darshan Institute of Engineering and Technology-Rajkot as an Assistant Professor since July-2011. His areas of interest are Database System, Data Mining, Operating System and Apps as well as Website testing.",
            "FacultyAreaSpecialization": "Database System, Data Mining, Operating System and Apps as well as Website testing",
            "FacultySubjectsTaught": "C, C++, Database Management System, Relational Database Management System, Operating System, Operating System and Design, Advance Database, Data Mining",
            "FacultyImage": "https://source.unsplash.com/300x300/?colorfull",
            "FacultyDepartmentID": 1,
            "FacultySequence": 6
        };
        this.object2 = {
            "FacultyName": "Prof. Firoz Sherasiya",
            "FacultyDesignation": "Assistant Professor",
            "FacultyHighestEducation": "M.E. (CE)",
            "FacultyExperienceInYears": 15,
            "FacultyWorkingSince": "Jul-2011",
            "FacultyMobileNumber": "9879879861",
            "FacultyEmailAddress": "firoz.sherasiya@?darshan.ac.in",
            "FacultySeating": "C-202",
            "FacultyProfileDescription": "Prof. Firoz Sherasiya obtained B.E. (Computer) in 2004 from AITS-Rajkot and M.E. (Computer) in 2014 from Noble-Junagadh. He has been associated with Darshan Institute of Engineering and Technology-Rajkot as an Assistant Professor since July-2011. His areas of interest are Database System, Data Mining, Operating System and Apps as well as Website testing.",
            "FacultyAreaSpecialization": "Database System, Data Mining, Operating System and Apps as well as Website testing",
            "FacultySubjectsTaught": "C, C++, Database Management System, Relational Database Management System, Operating System, Operating System and Design, Advance Database, Data Mining",
            "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/06CEFAS_19042019_063811AM.jpg",
            "FacultyDepartmentID": 1,
            "FacultySequence": 6
        };
        this.object3 = {
            "FacultyName": "Prof. Rupesh Vaishnav",
            "FacultyDesignation": "Assistant Professor",
            "FacultyHighestEducation": "M.E. (CE)",
            "FacultyExperienceInYears": 13,
            "FacultyWorkingSince": "Jul-2013",
            "FacultyMobileNumber": "9428037452",
            "FacultyEmailAddress": "rupesh.vaishnav@?darshan.ac.in",
            "FacultySeating": "C-203",
            "FacultyProfileDescription": "Prof. Rupesh Vaishnav had completed his B.E.(Computer Engineering) from Atmiya Institute, Saurashtra University in 2008, M.E.(Computer Engineering) from Marwadi Institute, Gujarat Technological University in 2013. Before joining Darshan Institute he had worked as an Assistant Professor in RK College, Rajkot, and Om Shanti engineering college, Rajkot. His area of research is Cloud Computing Security and he has taught various subjects like Algorithms, Data Structures, C++, and Information Security. He is a member of iOS app development team at ASWDC in the department. He is also working as a Training and Placement Officer of the computer engineering department.",
            "FacultyAreaSpecialization": "iOS Programming, Cloud Computing Security",
            "FacultySubjectsTaught": "C++\r\n• Algorithms\r\n• Data Structures\r\n• Information Security\r\n• Computer Network\r\n• Programming & Problem Solving\r\n, • Information Theory and Coding\r\n• Computer Network Security\r\n• Strategic Management",
            "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/07CERGV_19042019_063838AM.jpg",
            "FacultyDepartmentID": 1,
            "FacultySequence": 7
        };
        this.object4 = {
            "FacultyName": "Prof. Swati Sharma",
            "FacultyDesignation": "Assistant Professor",
            "FacultyHighestEducation": "M.Tech. (CSE)",
            "FacultyExperienceInYears": 13,
            "FacultyWorkingSince": "Jul-2013",
            "FacultyMobileNumber": "9727747317",
            "FacultyEmailAddress": "swati.sharma@?darshan.ac.in",
            "FacultySeating": "C-310",
            "FacultyProfileDescription": "Prof. Swati Sharma is working as Assistant Professor in the Computer Engineering department since May 2013. She had completed B.E(Computer Engineering) in 2008 from AITS-Rajkot, M.Tech(Computer Science) in 2013 from Nirma University-Ahmedabad with a specialization in the area of Network Security. She is currently involved in teaching Advanced Java and Microprocessor. Her area of Interest is Java programming, Android programming, Computer Architecture, Microprocessor, and UML Modeling. She is also a member of the Android Development Team at ASWDC.",
            "FacultyAreaSpecialization": "• Ad-hoc Network\r\n• Intrusion Detection\r\n• Java",
            "FacultySubjectsTaught": "• Java\r\n• Advanced Java(J2EE)\r\n• Object Oriended Analysis Design with UML\r\n• Microprocessor and Interfacing\r\n• Computer Organization and Architecture\r\n• Mobile Computing and Wireless Communication",
            "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/08CESRS_19042019_063912AM.jpg",
            "FacultyDepartmentID": 1,
            "FacultySequence": 8
        };
        this.object5 = {
            "FacultyName": "Dr. Gopi Sanghani",
            "FacultyDesignation": "Head, Professor",
            "FacultyHighestEducation": "Ph.D. , M.E. (CE)",
            "FacultyExperienceInYears": 20,
            "FacultyWorkingSince": "Jul-2012",
            "FacultyMobileNumber": "1234567890",
            "FacultyEmailAddress": "gopi.sanghani@?darshan.ac.in",
            "FacultySeating": "C-201",
            "FacultyProfileDescription": "Dr. G. B. Sanghani has completed BE Computer Engineering from DDIT Nadiad, ME Computer Engineering from BVM Vallabh Vidyanagar and Ph.D. from Nirma University in the field of Text Mining using Machine Learning Techniques. She has coordinated and implemented various teaching-learning strategies at the department level. She has guided various research projects at both Under Graduate and Post Graduate Level. She has published several International Conference and Journal Papers. She has successfully coordinated a number of workshops and training programs for students and faculties. Her areas of interest are Algorithms, Machine Learning, Artificial Intelligence, and Text Mining.",
            "FacultyAreaSpecialization": "Artificial Intelligence",
            "FacultySubjectsTaught": "C, Operating Systems, Design & Analysis of Algorithms, System Programming, Distributed Operating System, Artificial Intelligence, Machine Learning",
            "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/0CEGBS_19042019_063636AM_21052019_045025AM.jpg",
            "FacultyDepartmentID": 1,
            "FacultySequence": 1
        };
        this.object6 = {
            "FacultyName": "Dr. Nilesh Gambhava",
            "FacultyDesignation": "Professor",
            "FacultyHighestEducation": "Ph.D. , M.E. (CE)",
            "FacultyExperienceInYears": 18,
            "FacultyWorkingSince": "Jul-2009",
            "FacultyMobileNumber": "9727747310",
            "FacultyEmailAddress": "vp@darshan.ac.in",
            "FacultySeating": "A-108",
            "FacultyProfileDescription": "Dr. Nilesh Gambhava is working as a professor at Computer Engineering Department. He has pursued B.E. from GCET, Vallabh Vidyanagar in 2001 and M.E. from BVM, Vallabh Vidyanagar in 2004. He was awarded Gold Medal in M.E. at Sardar Patel University. He has completed Ph.D. from Nirma University in the area of \"Web Mining in Social Networking\". He is in charge of the placement cell at the institute. He is actively guiding various web and application development projects at ASWDC in the Department. Dr. Gambhava is coordinating various engineering admission activities and awareness seminars. He has designed and developed more than 25 software and ERP systems for many reputed companies.",
            "FacultyAreaSpecialization": "Genetic Algorithm, Web Mining, Social Networking",
            "FacultySubjectsTaught": "C, C++, Discrete Mathematics, DBMS, Algorithm, Unix, Software Engineering, Artificial Intelligence, Computer Graphics, Software Engineering",
            "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/01CENMG%20(2)_19042019_063552AM_21052019_044853AM.jpg",
            "FacultyDepartmentID": 1,
            "FacultySequence": 2
        };
        this.object7 = {
            "FacultyName": "Dr. Pradyumansinh Jadeja",
            "FacultyDesignation": "Associate Professor",
            "FacultyHighestEducation": "Ph.D., M.E. (CE)",
            "FacultyExperienceInYears": 15,
            "FacultyWorkingSince": "Jul-2009",
            "FacultyMobileNumber": "9879461848",
            "FacultyEmailAddress": " pradyuman.jadeja@darshan.ac.in",
            "FacultySeating": "C-303",
            "FacultyProfileDescription": "Dr. Pradyumansinh Jadeja has completed BE Information Technology from VVP Engineering College, ME Computer Engineering from BVM Vallabh Vidyanagar, and Ph.D. from Nirma University in the field of Web Mining using Machine Learning Techniques. Dr. Jadeja has a professional experience of over 15 years (Academia and Industry).",
            "FacultyAreaSpecialization": "Data Structure, Web Mining, Artificial Intelligent, Operating System, .Net, Database Management System",
            "FacultySubjectsTaught": "Operating System, Data & File Structure, Database Management System, .Net, Web Application Development",
            "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/02CEPUJ_19042019_063653AM.jpg",
            "FacultyDepartmentID": 1,
            "FacultySequence": 3
        };
        this.object8 = {
            "FacultyName": "Prof. Dixita Kagathara",
            "FacultyDesignation": "Assistant Professor",
            "FacultyHighestEducation": "M.Tech. (Web Technology)",
            "FacultyExperienceInYears": 11,
            "FacultyWorkingSince": "Jul-2009",
            "FacultyMobileNumber": "9727747317",
            "FacultyEmailAddress": "dixita.kagathara@darshan.ac.in",
            "FacultySeating": "C-310",
            "FacultyProfileDescription": "Prof. Dixita Kagathara is working as an Assistant Professor in the Computer Engineering Department since July 2009. She has completed her B.E (CE) from Atmiya Institute of Engineering and Technology, Rajkot in 2009 and M.Tech (Web Technology) from Gujarat University in 2012. Her areas of interest are Theory of Computation, Compiler Design, and Android App Development. She is a member of the ASWDC Android team, involved in the designing and development of Android Applications.",
            "FacultyAreaSpecialization": "Web Technology",
            "FacultySubjectsTaught": "Computer Programming & Utilization, Theory Of Computation, Compiler Design, System Programming, Programming for Problem Solving, Design of Language Processor",
            "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/05CEDBK_19042019_063749AM.jpg",
            "FacultyDepartmentID": 1,
            "FacultySequence": 5
        };
        this.object9 = {
            "FacultyName": "Prof. Maulik Trivedi",
            "FacultyDesignation": "Assistant Professor",
            "FacultyHighestEducation": "M.Tech. (CSE)",
            "FacultyExperienceInYears": 13,
            "FacultyWorkingSince": "Jul-2009",
            "FacultyMobileNumber": "9998265805",
            "FacultyEmailAddress": "maulik.trivedi@darshan.ac.in",
            "FacultySeating": "C-202",
            "FacultyProfileDescription": "Prof. Maulik D. Trivedi qualified with a B.E. degree in Computer Engineering from Atmiya Institute of Tech. & Science, Rajkot, in 2008 and he has done his M.Tech. in Computer Science & Engineering Engineering from Nirma University, Ahmedabad in 2012. He is associated with Darshan Institute of Engineering and Technology, Rajkot since July-2009. His areas of interest are Wireless Network, Computer Networks, Cyber Security and Google Services. He has working as department placement coordinator from 2013 to 2018. Currently he is coordinating alumni relations matter in CE department. He is a life member of the Indian Society for Technical Education (ISTE).",
            "FacultyAreaSpecialization": "Cyber Security,Wireless Network,Wireless Sensor,Network,Network Security",
            "FacultySubjectsTaught": "UG:Computer Networks, Cyber Security, Mobile Computing and Wireless Communication, Advance Computer Networks, Computer Programming & Utilization, Programming for Problem Solving,\r\nPG: Internet Technology, Wireless Communication",
            "FacultyImage": "https://www.darshan.ac.in//Upload/DIET/Faculty/CEMDT01_25042019_022618PM.jpg",
            "FacultyDepartmentID": 1,
            "FacultySequence": 4
        };
    }
    getAllFacultyes() {
        return this._http.get(this.apiUrl);
    }
    getFacultyById(id) {
        return this._http.get(this.apiUrl + "/" + id);
    }
    deleteFaculty(id) {
        return this._http.delete(this.apiUrl + "/" + id);
    }
    addFaculty(form) {
        return this._http.post(this.apiUrl, form);
    }
    update(form, id) {
        return this._http.put(this.apiUrl + "/" + id, form);
    }
}
ApiFacultyService.ɵfac = function ApiFacultyService_Factory(t) { return new (t || ApiFacultyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiFacultyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiFacultyService, factory: ApiFacultyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiFacultyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand", "active"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["aria-current", "page", "routerLink", "./", 1, "nav-link"], ["routerLink", "./allfaculty", 1, "nav-link"], ["routerLink", "./faculty/add", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "API demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Faculty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add Faculty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "footer-v1", "bg-img", "bg-dark"], [1, "footer", "no-margin"], [1, "container"], [1, "text-center", "p-2", "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Faculty Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j6bm":
/*!**********************************************!*\
  !*** ./src/app/faculty/faculty.component.ts ***!
  \**********************************************/
/*! exports provided: FacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyComponent", function() { return FacultyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_faculty_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-faculty.service */ "cmNk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FacultyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacultyComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const name_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.showDetail(name_r1.FacultyID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacultyComponent_div_1_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const name_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showDetail(name_r1.FacultyID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "view more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", name_r1.FacultyImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r1.FacultyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r1.FacultyHighestEducation);
} }
class FacultyComponent {
    constructor(_api, _router) {
        this._api = _api;
        this._router = _router;
        this.faculty = [];
    }
    ngOnInit() {
        this._api.getAllFacultyes().subscribe((res) => {
            this.faculty = res.records;
        });
    }
    showDetail(id) {
        this._router.navigate(['faculty', id]);
    }
}
FacultyComponent.ɵfac = function FacultyComponent_Factory(t) { return new (t || FacultyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_faculty_service__WEBPACK_IMPORTED_MODULE_1__["ApiFacultyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FacultyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacultyComponent, selectors: [["app-faculty"]], decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-3", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-3", 3, "click"], [1, "card", 2, "width", "18rem"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary", 3, "click"]], template: function FacultyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FacultyComponent_div_1_Template, 10, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.faculty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYWN1bHR5LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacultyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faculty',
                templateUrl: './faculty.component.html',
                styleUrls: ['./faculty.component.css'],
            }]
    }], function () { return [{ type: _api_faculty_service__WEBPACK_IMPORTED_MODULE_1__["ApiFacultyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "swK4":
/*!******************************************************!*\
  !*** ./src/app/add-faculty/add-faculty.component.ts ***!
  \******************************************************/
/*! exports provided: AddFacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFacultyComponent", function() { return AddFacultyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _faculty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../faculty */ "Dhqx");
/* harmony import */ var _api_faculty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-faculty.service */ "cmNk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddFacultyComponent_legend_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Faculty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddFacultyComponent_legend_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Faculty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddFacultyComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddFacultyComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddFacultyComponent_button_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Faculty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
} }
function AddFacultyComponent_button_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Faculty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddFacultyComponent {
    constructor(_api, _route, _activatedRout) {
        this._api = _api;
        this._route = _route;
        this._activatedRout = _activatedRout;
        this.facultyDetail = new _faculty__WEBPACK_IMPORTED_MODULE_1__["Faculty"]();
        this.id = 0;
    }
    ngOnInit() {
        this.id = this._activatedRout.snapshot.params.id;
        if (this.id === undefined) {
            this.id = 0;
        }
        else {
            this._api.getFacultyById(this.id).subscribe((res) => {
                this.facultyDetail = res;
            });
        }
    }
    insertFaculty() {
        if (this.id === 0) {
            this._api.addFaculty(this.facultyDetail).subscribe(() => {
                this._route.navigate(['allfaculty']);
            });
        }
        else {
            this._api.update(this.facultyDetail, this.id).subscribe(() => {
                this._route.navigate(['allfaculty']);
            });
        }
    }
    back() {
        this._route.navigate(['allfaculty']);
    }
}
AddFacultyComponent.ɵfac = function AddFacultyComponent_Factory(t) { return new (t || AddFacultyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_faculty_service__WEBPACK_IMPORTED_MODULE_2__["ApiFacultyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AddFacultyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddFacultyComponent, selectors: [["app-add-faculty"]], decls: 72, vars: 20, consts: [[1, "container"], [3, "ngSubmit"], ["FacultyForm", "ngForm"], [4, "ngIf"], [1, "form-group", "row"], ["for", "email", 1, "col-md-3"], ["type", "text", "name", "FacultyName", "required", "", 1, "col-md-6", 3, "ngModel", "ngModelChange"], ["FacultyName", "ngModel"], ["style", "color: red;", 4, "ngIf"], ["type", "text", "name", "FacultyDesignation", 1, "col-md-6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "FacultyHighestEducation", 1, "col-md-6", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "FacultyExperienceInYears", 1, "col-md-6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "FacultyWorkingSince", 1, "col-md-6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "FacultyMobileNumber", "pattern", "^[0-9]{10}$", "required", "", 1, "col-md-6", 3, "ngModel", "ngModelChange"], ["FacultyMobileNumber", "ngModel"], ["type", "text", "name", "FacultyEmailAddress", 1, "col-md-6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "FacultySeating", 1, "col-md-6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "FacultyProfileDescription", 1, "col-md-6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "FacultyAreaSpecialization", 1, "col-md-6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "FacultySubjectsTaught", 1, "col-md-6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "FacultyImage", 1, "col-md-6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "FacultyDepartmentID", 1, "col-md-6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "FacultySequence", 1, "col-md-6", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], ["id", "button1id", "name", "button1id", "class", "btn btn-success", 3, "disabled", 4, "ngIf"], ["id", "button1id", "name", "button1id", "class", "btn btn-success", 4, "ngIf"], ["id", "button2id", "name", "button2id", 1, "btn", "btn-danger", 3, "click"], [2, "color", "red"], ["id", "button1id", "name", "button1id", 1, "btn", "btn-success", 3, "disabled"], ["id", "button1id", "name", "button1id", 1, "btn", "btn-success"]], template: function AddFacultyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddFacultyComponent_Template_form_ngSubmit_1_listener() { return ctx.insertFaculty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddFacultyComponent_legend_3_Template, 2, 0, "legend", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddFacultyComponent_legend_4_Template, 2, 0, "legend", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enter FacultyName:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_8_listener($event) { return ctx.facultyDetail.FacultyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddFacultyComponent_span_10_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter FacultyDesignation:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_14_listener($event) { return ctx.facultyDetail.FacultyDesignation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Enter FacultyHighestEducation:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_18_listener($event) { return ctx.facultyDetail.FacultyHighestEducation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enter FacultyExperienceInYears:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_22_listener($event) { return ctx.facultyDetail.FacultyExperienceInYears = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enter FacultyWorkingSince:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_26_listener($event) { return ctx.facultyDetail.FacultyWorkingSince = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Enter FacultyMobileNumber:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_30_listener($event) { return ctx.facultyDetail.FacultyMobileNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddFacultyComponent_span_32_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Enter FacultyEmailAddress:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_36_listener($event) { return ctx.facultyDetail.FacultyEmailAddress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Enter FacultySeating:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_40_listener($event) { return ctx.facultyDetail.FacultySeating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Enter FacultyProfileDescription:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_44_listener($event) { return ctx.facultyDetail.FacultyProfileDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Enter FacultyAreaSpecialization:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_48_listener($event) { return ctx.facultyDetail.FacultyAreaSpecialization = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Enter FacultySubjectsTaught:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_52_listener($event) { return ctx.facultyDetail.FacultySubjectsTaught = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Enter FacultyImage:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_56_listener($event) { return ctx.facultyDetail.FacultyImage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Enter FacultyDepartmentID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_60_listener($event) { return ctx.facultyDetail.FacultyDepartmentID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Enter FacultySequence:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddFacultyComponent_Template_input_ngModelChange_64_listener($event) { return ctx.facultyDetail.FacultySequence = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, AddFacultyComponent_button_68_Template, 2, 1, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AddFacultyComponent_button_69_Template, 2, 0, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddFacultyComponent_Template_a_click_70_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultyDesignation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultyHighestEducation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultyExperienceInYears);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultyWorkingSince);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultyMobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultyEmailAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultySeating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultyProfileDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultyAreaSpecialization);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultySubjectsTaught);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultyImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultyDepartmentID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.facultyDetail.FacultySequence);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id !== 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZmFjdWx0eS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddFacultyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-faculty',
                templateUrl: './add-faculty.component.html',
                styleUrls: ['./add-faculty.component.css']
            }]
    }], function () { return [{ type: _api_faculty_service__WEBPACK_IMPORTED_MODULE_2__["ApiFacultyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_faculty_add_faculty_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-faculty/add-faculty.component */ "swK4");
/* harmony import */ var _detail_faculty_detail_faculty_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-faculty/detail-faculty.component */ "BOpG");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faculty/faculty.component */ "j6bm");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");








const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: "allfaculty", component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_4__["FacultyComponent"] },
    { path: "faculty/add", component: _add_faculty_add_faculty_component__WEBPACK_IMPORTED_MODULE_2__["AddFacultyComponent"] },
    { path: "faculty/edit/:id", component: _add_faculty_add_faculty_component__WEBPACK_IMPORTED_MODULE_2__["AddFacultyComponent"] },
    { path: "faculty/:id", component: _detail_faculty_detail_faculty_component__WEBPACK_IMPORTED_MODULE_3__["DetailFacultyComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map