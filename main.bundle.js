webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tbar{\r\n    background-color: rgb(230, 116, 9);\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    bottom: 50px;\r\n    z-index: 1000;\r\n    height: 50px;\r\n}\r\n\r\n.spacer{\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n}\r\n.spacet{\r\n   margin-top: 60px;\r\n}\r\n.filter{\r\n    background-color: #131111;\r\n    color: #ffffff;\r\n    border-bottom: 1px solid #383737;\r\n}\r\n.mat-menu-content{\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n.pd-8{\r\n    margin-top: -8px;\r\n    margin-bottom: -8px;\r\n}\r\nspan.back{\r\n    width: 10%;\r\n    font-size: 30px;\r\n  margin-top: 20px;\r\n\r\n    height: 50px;\r\n   \r\n}\r\nspan.title{\r\n    margin-left: 20px;\r\n}\r\n.material-icons{\r\n    font-size: 24pt;\r\n}\r\n\r\n\r\n\r\n\r\na{\r\n    color: #ffffff;\r\n    text-decoration: none;\r\n}\r\n.pd{\r\n    padding-left: 10px;\r\n    padding-right: 40px;\r\n\r\n}\r\n.st-a{\r\n    width: 90px;\r\n}\r\n.badge{\r\n    width: 90px;\r\n}\r\n.btn-ad{\r\n    position: absolute;\r\n    right: 20px;\r\n    bottom: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Toolbar-->\n<mat-toolbar class=\"tbar\">\n  <span class=\"back\" (click)=\"backClicked()\">\n    <i class=\"material-icons\">keyboard_arrow_left</i>\n  </span>\n  <span class=\"title\">Cửa hàng VH</span>\n  <span class=\"spacer\"></span>\n  <!--Button menu-->\n  <button mat-icon-button class=\"\" [matMenuTriggerFor]=\"menu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n  <!--Filter-->\n  <mat-menu #menu=\"matMenu\" class=\"btnmenu\">\n    <div class=\"pd-8\">\n      <button mat-menu-item class=\"filter\" (click)=\"filterstate(filter)\" *ngFor='let filter of filters'>\n        <a class = \"st-a\"routerLink=\"xem-don-hang/{{filter.name}}\">\n          <span >{{filter.count}}</span>\n          <span class=\"badge\">{{filter.name}}</span>\n        </a>\n      </button>\n    </div>\n  </mat-menu>\n\n</mat-toolbar>\n<!--end toolbar -->\n\n<div class=\"spacet\"></div>\n\n<!--List donhang-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_data_service__ = __webpack_require__("../../../../../src/app/share/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(route, dataService, _location) {
        var _this = this;
        this.route = route;
        this.dataService = dataService;
        this._location = _location;
        this.filters = [];
        this.state = "Tất cả";
        this.filters = this.dataService.filters;
        this.dataService.getDonhangs().subscribe(function (donhangs) {
            _this.donhangs = donhangs;
            _this.dataService.countState(_this.donhangs, _this.donhangs.length);
            //console.log("viewdonhang",this.donhangs[0].ngaygiao.getDate().toString());
        });
        this.dataService.getBks().subscribe(function (bks) {
            _this.bk = bks;
            // console.log("viewdonhang-bk",this.bk);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        //     this.route.paramMap.subscribe((param: ParamMap) => {
        //       return this.state = param.get('state');
        //     });
        // console.log("state", this.state);
    };
    AppComponent.prototype.backClicked = function () {
        this._location.back();
    };
    AppComponent.prototype.filterstate = function (filter) {
        this.state = filter.name;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__share_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__share_authenticationGuard_service__ = __webpack_require__("../../../../../src/app/share/authenticationGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__share_authentication_service__ = __webpack_require__("../../../../../src/app/share/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__share_data_service__ = __webpack_require__("../../../../../src/app/share/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__share_upload_service__ = __webpack_require__("../../../../../src/app/share/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__share_reverse_pipe__ = __webpack_require__("../../../../../src/app/share/reverse.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__view_view_component__ = __webpack_require__("../../../../../src/app/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__xem_don_hang_xem_don_hang_component__ = __webpack_require__("../../../../../src/app/xem-don-hang/xem-don-hang.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__view_detail_view_detail_component__ = __webpack_require__("../../../../../src/app/view-detail/view-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sign_sign_component__ = __webpack_require__("../../../../../src/app/sign/sign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ta_don_hang_ta_don_hang_component__ = __webpack_require__("../../../../../src/app/ta-don-hang/ta-don-hang.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__view_view_component__["a" /* ViewComponent */],
                __WEBPACK_IMPORTED_MODULE_19__xem_don_hang_xem_don_hang_component__["a" /* XemDonHangComponent */],
                __WEBPACK_IMPORTED_MODULE_20__view_detail_view_detail_component__["a" /* ViewDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_21__dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_22__sign_sign_component__["a" /* SignComponent */],
                __WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_24__ta_don_hang_ta_don_hang_component__["a" /* TaDonHangComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */] },
                    { path: 'xem-don-hang/:state/tao-don-hang', component: __WEBPACK_IMPORTED_MODULE_24__ta_don_hang_ta_don_hang_component__["a" /* TaDonHangComponent */] },
                    { path: 'xem-don-hang/:state', component: __WEBPACK_IMPORTED_MODULE_19__xem_don_hang_xem_don_hang_component__["a" /* XemDonHangComponent */] },
                    { path: 'xem-don-hang/:state/xem-chi-tiet/:id', component: __WEBPACK_IMPORTED_MODULE_20__view_detail_view_detail_component__["a" /* ViewDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__share_authenticationGuard_service__["a" /* AuthenticationGuard */]] },
                    { path: 'xem-don-hang/:state/xem-chi-tiet/:id/sign', component: __WEBPACK_IMPORTED_MODULE_22__sign_sign_component__["a" /* SignComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__share_authenticationGuard_service__["a" /* AuthenticationGuard */]] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                ]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__share_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_15__share_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_13__share_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_12__share_authenticationGuard_service__["a" /* AuthenticationGuard */],
                __WEBPACK_IMPORTED_MODULE_16__share_reverse_pipe__["a" /* ReversePipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_21__dialog_dialog_component__["a" /* DialogComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>Xóa {{data.tenhang}}?</h3>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"isDel\" tabindex=\"2\">Xóa</button>\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Hủy bỏ</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.isDel = true;
    }
    DialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialog/dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_authentication_service__ = __webpack_require__("../../../../../src/app/share/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.email = "abc@gmail.com";
        this.password = "123456";
        this.authService.login({ email: this.email, password: this.password })
            .then(function (resolve) { return _this.router.navigate(['xem-don-hang/Tất cả']); })
            .catch(function (e) { return _this.eMsg = e.message; });
    }
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return upload; });
var upload = (function () {
    function upload(file) {
        this.createOn = new Date();
        this.file = file;
    }
    return upload;
}());



/***/ }),

/***/ "../../../../../src/app/share/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(afAuth) {
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    AuthenticationService.prototype.login = function (user) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    AuthenticationService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthenticationService.prototype.authUser = function () {
        return this.user;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/share/authenticationGuard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationGuard = (function () {
    function AuthenticationGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.user = afAuth.authState;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.user.map(function (auth) {
            if (!auth) {
                _this.router.navigateByUrl('/login');
                return false;
            }
            return true;
        }).take(1);
    };
    AuthenticationGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "../../../../../src/app/share/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(afs) {
        this.afs = afs;
        this.filters = [
            { name: "Tất cả", count: 0 },
            { name: "Chưa giao", count: 0 },
            { name: "Đã giao", count: 0 },
            { name: "Đang bốc hàng", count: 0 },
            { name: "Đang đi giao", count: 0 },
            { name: "Đơn bị hủy", count: 0 }
        ];
    }
    DataService.prototype.ngOninit = function () { };
    ;
    DataService.prototype.getDonhangs = function () {
        //console.log("getdonhang");
        this.donhang = this.afs.collection('donhangs');
        this.donhangs = this.donhang.snapshotChanges().map(function (changes) {
            //  console.log("change");
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.ma = a.payload.doc.id;
                // console.log("donhangs");
                return data;
            });
        });
        return this.donhangs;
    };
    ;
    DataService.prototype.getBks = function () {
        this.bk = this.afs.collection('bks');
        this.bks = this.bk.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.ma = a.payload.doc.id;
                return data;
            });
        });
        return this.bks;
    };
    ;
    DataService.prototype.getBk = function (id) {
        this.bk = this.afs.collection('bks', function (ref) { return ref.where('id', '==', id); });
        this.bks = this.bk.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.ma = a.payload.doc.id;
                return data;
            });
        });
        // console.log("getdonhang", this.bks);
        return this.bks;
    };
    DataService.prototype.getMathangs = function () {
        this.mathangs = this.afs.collection('mathang').snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                return data;
            });
        });
        return this.mathangs;
    };
    ;
    DataService.prototype.getXes = function () {
        this.xes = this.afs.collection('xe').snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                return data;
            });
        });
        return this.xes;
    };
    ;
    DataService.prototype.addDonhang = function (dh) {
        this.donhang.add(dh);
    };
    ;
    DataService.prototype.updateDh = function (dh) {
        this.donhangDoc = this.afs.doc("donhangs/" + dh.ma);
        console.log("bkDoc", this.donhangDoc);
        this.donhangDoc.update(dh);
    };
    ;
    DataService.prototype.addBk = function (bangke) {
        console.log("bk", this.bk);
        console.log("bangke", bangke);
        this.bk.add(bangke);
    };
    ;
    DataService.prototype.addBks = function (bangke) {
        for (var i = 0; i < bangke.length; i++) {
            this.bk.add(bangke[i]);
        }
    };
    ;
    DataService.prototype.removeBk = function (bangke) {
        console.log("remove", bangke);
        this.bkDoc = this.afs.doc("bks/" + bangke.ma);
        console.log("bkDoc", this.bkDoc);
        this.bkDoc.delete();
        console.log("delete");
    };
    ;
    DataService.prototype.removeBks = function (id, bke) {
        console.log("xóa");
        var lgth;
        var bangke;
        for (var i = 0; i < bke.length; i++) {
            console.log("for", i);
            console.log("ma", bke[i].ma);
            this.bkDoc = this.afs.doc("bks/" + bke[i].ma);
            this.bkDoc.delete();
        }
    };
    ;
    DataService.prototype.updatebk = function (bangke) {
        this.bkDoc = this.afs.doc("bks/" + bangke.ma);
        this.bkDoc.update(bangke);
    };
    DataService.prototype.counts = function (state, donhangs, length) {
        var cnt = 0;
        for (var i = 0; i < length; i++) {
            if (donhangs[i].trangthai == state) {
                cnt++;
            }
        }
        return cnt;
    };
    ;
    DataService.prototype.countState = function (donhangs, length) {
        console.log(length);
        this.filters[0].count = length;
        for (var index = 1; index < this.filters.length; index++) {
            this.filters[index].count = this.counts(this.filters[index].name, donhangs, length);
        }
    };
    ;
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/share/reverse.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (arr) {
        return arr.slice().reverse();
    };
    ReversePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "../../../../../src/app/share/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = (function () {
    // upload: Observable<donhang>;
    function UploadService(ngFile, db) {
        this.ngFile = ngFile;
        this.db = db;
        this.basePath = '/uploads';
    }
    UploadService.prototype.uploadFile = function (upload) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + upload.file.name)
            .put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED),
            function (snapshot) {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
                console.log(upload.progress);
            },
            function (error) {
                console.log(error);
            },
            function () {
                upload.url = uploadTask.snapshot.downloadURL;
                upload.name = upload.file.name;
                _this.saveFile(upload);
            };
    };
    ;
    UploadService.prototype.saveFile = function (upload) {
        this.db.list(this.basePath + "/").push(upload);
        console.log("File save: " + upload.url);
    };
    ;
    UploadService.prototype.getImages = function (name, src) {
        var storage = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]();
        var ref = "uploads/" + name + ".png";
        var bkRef = storage.ref(ref).getDownloadURL()
            .then(function (url) {
            console.log(url);
            return src = url;
        }).catch(function (error) {
            console.log(error);
        });
        return src;
    };
    ;
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "../../../../../src/app/sign/sign.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-bs{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding: 7px 8px;\r\n    background-color:black;\r\n    color: white;\r\n    border: none; \r\n    margin-right: 15px;\r\nposition: fixed;\r\n}\r\n.btn-bx{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding: 7px 8px;\r\n    background-color:black;\r\n    color: white;\r\n    border: none; \r\n    margin-right: 15px;\r\nposition: fixed;\r\nmargin-left: 23%;\r\n}\r\n\r\n.btn-x{\r\n    color: rgb(163, 8, 8);\r\n    background-color: white;\r\n    border: none; \r\n    font-size: 20px;\r\n    right: 15px;\r\n    position: absolute;\r\n    margin-top: 5px;\r\n    position: fixed;\r\n   \r\n}\r\n.cv{\r\n    background:while; \r\n    position:fixed;\r\n    margin-top: 30px;\r\n    left: 0px;\r\n    right: 0px;\r\n \r\n\r\n}\r\n.ctr-btn{\r\n    margin-left: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign/sign.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ctr-btn\">\n<button class=\"btn-bs\" (click) = \"savesign()\">Lưu lại</button>\n<button class=\"btn-bx\" (click) = \"clearsign()\">Xóa</button>\n<button class=\"btn-x\" (click) = \"back()\"> X </button>\n</div>\n<div>\n\n<canvas #myCanvas class=\"cv\" width=\"{{width}}\" height=\"{{height-100}}\"  \n(touchmove) =\"tick($event)\" (touchstart)=\"engage($event)\" (touchend)=\"disengage()\"></canvas>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/sign/sign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_data_service__ = __webpack_require__("../../../../../src/app/share/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_upload_service__ = __webpack_require__("../../../../../src/app/share/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_upload__ = __webpack_require__("../../../../../src/app/models/upload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { request } from 'https';
var SignComponent = (function () {
    // @ViewChild("canvasImg") canvasImg;
    function SignComponent(dataService, uploadService, route, location) {
        var _this = this;
        this.dataService = dataService;
        this.uploadService = uploadService;
        this.route = route;
        this.location = location;
        this.id = "";
        this.dragging = false;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.tick = function (event) {
            //console.log("event",event);
            var ctx = this.context;
            ctx.lineWidth = 1.8;
            if (this.dragging) {
                // console.log(event.touches[0].clientX );
                // console.log( event.touches[0].clientY-60);
                // ctx.clearRect(0, 0, 400, 400);
                // ctx.fillStyle = this.rectColor;
                // ctx.fillRect(0, 0, this.rectW, this.rectH);
                ctx.lineTo(event.touches[0].clientX, event.touches[0].clientY - 80);
                ctx.stroke();
                ctx.beginPath();
                //ctx.fillRect(event.offsetX, event.offsetY, 10,  Math.PI*2);
                ctx.fillRect(event.touches[0].clientX, event.touches[0].clientY - 80, 0.5, 0.5);
                //ctx.arc(event.touches[0].clientX, event.touches[0].clientY, 10, 0, Math.PI*2);
                ctx.fillStyle = "black";
                ctx.beginPath();
                ctx.moveTo(event.touches[0].clientX, event.touches[0].clientY - 80);
                //console.log ("tick",this.context);
            }
        };
        this.engage = function (event) {
            // requestAnimationFrame(()=>{
            //   this.engage(event);
            // });
            console.log("event", event.touches[0].clientX);
            console.log("engage");
            this.dragging = true;
            this.tick(event);
        };
        this.disengage = function () {
            var ctx = this.context;
            this.dragging = false;
            ctx.beginPath();
        };
        this.dataService.getDonhangs().subscribe(function (donhangs) {
            _this.donhangs = donhangs;
        });
        this.route.paramMap.subscribe(function (param) {
            _this.id = param.get('id');
            console.log('id', _this.id);
            return _this.id;
        });
        //  console.log(this.donhang.id);
    }
    SignComponent.prototype.ngAfterViewInit = function () {
        var canvas = this.myCanvas.nativeElement;
        this.context = canvas.getContext("2d");
        // this.tick();
        //console.log("data",canvas.todataURL())
    };
    SignComponent.prototype.uploadFile = function (f) {
        var fileToUpLoad = f;
        this.upload = new __WEBPACK_IMPORTED_MODULE_3__models_upload__["a" /* upload */](fileToUpLoad);
        this.uploadService.uploadFile(this.upload);
    };
    SignComponent.prototype.savesign = function () {
        //   var data = canvas.todataURL();
        //       console.log("data", data)
        // }
        var ctx = this.context;
        //var imgData = ctx.getImageData(0, 0, this.width, this.height);
        // ctx.putImageData(imgData, 1, 70);
        // console.log("id",id);
        //this.donhangs[0].chuky = ;
        this.dataService.updateDh(this.donhangs[0]);
        var dataUrl = this.myCanvas.nativeElement.toDataURL('image/png', 0.7); //.replace("image/png", "image/octet-stream"); 
        console.log(dataUrl);
        var f = this.b64toFile(dataUrl, this.id);
        console.log(f);
        this.uploadFile(f);
        for (var i = 0; i < this.donhangs.length; i++) {
            if (this.donhangs[i].id == this.id) {
                console.log('donhang', this.donhangs[i]);
                this.donhangs[i].trangthai = "Đã giao";
                this.dataService.updateDh(this.donhangs[i]);
            }
        }
        this.back();
        //window.location.reload();
        // fetch(dataUrl)
        //   .then(res => res.blob())
        //   .then(blob => {
        //     var fd = new FormData()
        //     fd.append('image', blob, 'filename');
        //      console.log(blob);
        //     console.log(fd)
        //     return <File>blob;
        //   });
    };
    SignComponent.prototype.back = function () {
        this.location.back();
    };
    SignComponent.prototype.clearsign = function () {
        var ctx = this.context;
        ctx.clearRect(0, 0, this.width, this.height - 20);
    };
    SignComponent.prototype.b64toFile = function (dataURI, id) {
        // convert the data URL to a byte string
        var byteString = atob(dataURI.split(',')[1]);
        // pull out the mime type from the data URL
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // Convert to byte array
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        // Create a blob that looks like a file.
        var blob = new Blob([ab], { 'type': mimeString });
        blob['lastModifiedDate'] = (new Date()).toISOString();
        blob['name'] = id;
        // Figure out what extension the file should have
        switch (blob.type) {
            case 'image/jpeg':
                blob['name'] += '.jpg';
                break;
            case 'image/png':
                blob['name'] += '.png';
                break;
        }
        // cast to a File
        return blob;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("myCanvas"),
        __metadata("design:type", Object)
    ], SignComponent.prototype, "myCanvas", void 0);
    SignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-sign",
            template: __webpack_require__("../../../../../src/app/sign/sign.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign/sign.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__share_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]])
    ], SignComponent);
    return SignComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ta-don-hang/ta-don-hang.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3{\r\n    font-family: sans-serif;\r\n    font-size: 13pt;\r\n    margin-left: 10px;\r\n}\r\n.mat-form-field {\r\n    display: inline-block;\r\n    position: relative;\r\n    text-align: left;\r\n    margin-left: 20px;\r\n    width: 85%;\r\n    margin-bottom: -5px;\r\n    margin-top: -5px;\r\n}\r\n.dvt{\r\n    margin-right: 20px;\r\n    margin-left: 10px;\r\n}\r\n.sl{\r\n    width: 40%;\r\n}\r\n.btn-ad{\r\n    margin-left: 7%;\r\n    background-color: black;\r\n    color: white;\r\n    border: none;\r\n    padding: 5px 10px;\r\n}\r\n.bd-bt{\r\n    border-bottom: 1px solid #f8e6d2;\r\n    margin: -1px 10px;\r\n}\r\n.mat-list{\r\n    margin-top: -10px;\r\n    margin-left: 10px;\r\n}\r\n.mat-list-item{\r\n    margin-top: -5px;\r\n}\r\n.btn-tao{\r\n    background-color:rgb(230, 116, 9); \r\n  \r\n    position:fixed;\r\n    right: 30px;\r\n    bottom: 20px;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ta-don-hang/ta-don-hang.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Thông tin khách hàng</h3>\n  <mat-form-field>\n    <input matInput placeholder=\"Tên khách hàng\" [(ngModel)]=\"tenkh\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"SĐT\" [(ngModel)]=\"sdt\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Địa chỉ\" [(ngModel)]=\"dc\">\n  </mat-form-field>\n  <mat-divider></mat-divider>\n  <h3>Bảng kê hàng</h3>\n  <mat-list>\n    <mat-list-item class=\"bd-bt\" *ngFor=\"let item of items, let ind = index\">\n      <h3 matLine> {{item.tenhang}} </h3>\n      <p matLine style=\"padding-top:10px; font-size:10pt;\">\n        <span> {{item.soluong}} </span>\n        <span class=\"dvt\"> m3 </span>\n      </p>\n      <p style=\"width:19px; margin-right: -8px;\">\n\n        <!--btn edit delete-->\n        <span class=\"line btn-bk\" (click)=\"removeBk(ind)\">\n          <i class=\"material-icons mg-l\" style=\"font-size:17px; color:black\">delete</i>\n        </span>\n        <span class=\"line btn-bk\" (click)=\"updateBk(ind)\" >\n          <i class=\"material-icons mg-l\" style=\"font-size:17px; color:black\" *ngIf=\"!editbk\">mode_edit</i>\n\n        </span>\n\n      </p>\n    </mat-list-item>\n  </mat-list>\n  <br>\n  <mat-form-field >\n    <mat-select placeholder=\"Chọn mặt hàng\" [(ngModel)]=\"tenhang\">\n      <mat-option value=\"{{mh.tenhang}}\" *ngFor='let mh of mhs'>{{mh.tenhang}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"sl\">\n    <input matInput type=\"number\" placeholder=\"Số lượng\" [(ngModel)]=\"soluong\"> \n  </mat-form-field>\n  <span class=\"dvt\">m3</span>\n  <button  (click)=\"addTemp()\" class=\"btn-ad\">Thêm</button>\n  <mat-divider></mat-divider>\n\n  \n        \n          <mat-form-field class=\"st-fr\" >\n            <input matInput class=\"input-bk\" type=\"text\" [(ngModel)]=\"thanhtoan\" placeholder=\"Đã thanh toán\">\n          </mat-form-field>\n      \n\n  <br>\n  <mat-divider></mat-divider>\n  <h3>Giao hàng</h3>\n  <mat-form-field class=\"st-fr\">\n    <input matInput class=\"input-bk-ct\" type=\"text\" [(ngModel)]=\"laixe\" placeholder=\"Lái xe\">\n  </mat-form-field>\n  <mat-form-field class=\"st-fr\">\n    <input matInput class=\"input-bk-ct\" type=\"text\" [(ngModel)]=\"bienso\" placeholder=\"Xe\">\n  </mat-form-field>\n  <mat-form-field class=\"st-fr\">\n    <input matInput class=\"input-bk-ct\" type=\"date\" [(ngModel)]=\"ngaygiao\" placeholder=\"Ngày giao hàng\">\n  </mat-form-field>\n  <button mat-raised-button class=\"btn-tao\"  (click)=\"taodon()\">Tạo đơn hàng</button>\n  <div style=\"height:30px;\"></div>\n  <br>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ta-don-hang/ta-don-hang.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaDonHangComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_data_service__ = __webpack_require__("../../../../../src/app/share/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaDonHangComponent = (function () {
    function TaDonHangComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.now = new Date();
        this.mhs = [{ tenhang: 'Cát VP', dvt: 'm3' },
            { tenhang: 'Đá 1/2', dvt: 'm3' },
            { tenhang: 'Cát đen', dvt: 'm3' },
            { tenhang: 'Đá mạt', dvt: 'm3' }];
        this.items = [];
        this.item = { tenhang: "", soluong: 0, dvt: "m3" };
        this.dataService.getDonhangs().subscribe(function (d) {
            _this.lengthdh = d.length;
        });
        this.dataService.getXes().subscribe(function (x) {
            _this.xe = x;
            console.log("xes", _this.xe);
        });
    }
    TaDonHangComponent.prototype.ngOnInit = function () {
    };
    TaDonHangComponent.prototype.addTemp = function () {
        if (this.tenhang != "" && this.soluong != 0) {
            this.item.tenhang = this.tenhang;
            this.item.dvt = "m3";
            this.item.soluong = this.soluong;
            this.items.push(this.item);
            this.item = { tenhang: "", soluong: null, dvt: "m3" };
            console.log('items', this.items);
            this.tenhang = "";
            this.soluong = null;
        }
    };
    TaDonHangComponent.prototype.taodon = function () {
        var _this = this;
        if (this.tenkh != "" && this.sdt != "" && this.dc != "") {
            var i = this.lengthdh + 1;
            var kh = { tenkh: this.tenkh, sdt: this.sdt, dc: this.dc };
            var x;
            for (var i_1 = 0; i_1 < this.xe.length; i_1++) {
                if (this.xe[i_1].bienso == this.bienso) {
                    x = this.xe[i_1];
                }
                else {
                    console.log("xe - k");
                    x = { bienso: this.bienso, taitrong: 0 };
                }
            }
            ;
            console.log("gan dh");
            var donhang = {
                id: "bk" + i, kh: kh, trangthai: "Chưa giao", thanhtoan: this.thanhtoan == null ? 0 : this.thanhtoan,
                tong: 0, nolai: 0, ngaytao: this.now, ngaygiao: this.ngaygiao, laixe: this.laixe, xe: x
            };
            console.log("add dh");
            this.dataService.addDonhang(donhang);
        }
        for (var i_2 = 0; i_2 < this.items.length; i_2++) {
            console.log("add bk");
            var mh;
            mh = { tenhang: this.items[i_2].tenhang, dvt: this.items[i_2].dvt, dongia: 0 };
            var it = { id: donhang.id, mathang: mh, soluong: this.items[i_2].soluong, thanhtien: 0 };
            this.dataService.addBk(it);
        }
        this.dataService.getDonhangs().subscribe(function (donhangs) {
            _this.donhangs = donhangs;
            _this.dataService.countState(_this.donhangs, _this.donhangs.length);
            //console.log("viewdonhang",this.donhangs[0].ngaygiao.getDate().toString());
        });
    };
    TaDonHangComponent.prototype.updateBk = function (ind) {
        console.log(ind);
        this.statebk = false;
        this.tenhang = this.items[ind].tenhang;
        this.soluong = this.items[ind].soluong;
        this.items.splice(ind, 1);
    };
    TaDonHangComponent.prototype.removeBk = function (index) {
        //console.log(this.bks[index]);
        // var bktemp: bk = this.bks[index];
        this.items.splice(index, 1);
    };
    TaDonHangComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ta-don-hang',
            template: __webpack_require__("../../../../../src/app/ta-don-hang/ta-don-hang.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ta-don-hang/ta-don-hang.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */]])
    ], TaDonHangComponent);
    return TaDonHangComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-detail/view-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".donhang-card {\r\n  \r\n\r\n    background-color: #fffffd;\r\n    padding: 0px;\r\n    margin: 7px auto;\r\n    box-shadow: white;\r\n}\r\n.state{\r\n   \r\n    color:#ffffff;\r\n    width: 100%;\r\n    margin: 0px;\r\n    float: left;\r\n    font-size: 1.15em;\r\n  \r\n    -webkit-margin-after: 0.4em;\r\n    font-weight: 500;\r\n}\r\n.state-donhang{\r\n    width: 5%;\r\n}\r\n.fl{\r\n    float: left;\r\n}\r\n.content{\r\n    clear: both;\r\n}\r\n.mg-t-10{\r\n    margin-top: 10px;\r\n}\r\n.mg-r-20{\r\n    margin-right: 20px;\r\n}\r\n.mg-0{\r\n    margin: 0px;\r\n}\r\n.mg-au{\r\n    margin: 10px auto;\r\n}\r\n.material-icons{\r\n    margin-top: 5px;\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n   \r\n}\r\n.mat-card-subtitle {\r\n    display: block;\r\n    float: left;\r\n    margin-top: 20px;\r\n    margin-bottom: 0px;\r\n    width: 100%;\r\n    \r\n}\r\n.mat-list-option{\r\n    height:30px;\r\n}\r\n.mat-list{\r\n    padding: 0px;\r\n}\r\n.mat-grid-tile{\r\n    height: 50px;\r\n    padding: 0px;\r\n}\r\n.mat-list-item{\r\nheight: 30px;\r\n}\r\n.bd-bt{\r\n    border-bottom: 1px solid #f8e6d2;\r\n    margin: -1px 10px;\r\n}\r\nfigure{\r\n    height: 50px;\r\n}\r\n.sm-col{\r\n    width: 10px;\r\n}\r\n.mat-2-line{\r\n    height:50px;\r\n}\r\n.mg-5{\r\n    margin-top:-5px ;\r\n    margin-bottom: -5px; \r\n}\r\n.mg-10{\r\n    margin-top:-10px ;\r\n    margin-bottom: -10px; \r\n}\r\n.mg-r-5{\r\n    margin-right:-5px ;\r\n    margin-left: -2px;\r\n    \r\n}\r\n.mg-l-5{\r\n    margin-left:-5px ;\r\n    \r\n}\r\n.pd-bt{\r\nmargin-top: 7px;\r\n}\r\n.spacer{\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n}\r\n.mg-l{\r\nmargin-left: 5px;\r\nmargin-right: 0px;\r\n}\r\n.mat-list-item-content{\r\n    padding: 0px;\r\n}\r\n\r\n\r\nspan.line {\r\n  display: inline-block;\r\n}\r\n.label{\r\n    text-align: left;\r\n    float: left;\r\n    margin: 4px;\r\n    font-size: 11pt;\r\n  }\r\n  .value{\r\n      text-align: right;\r\n      float: right;\r\n      margin-right: 25px;\r\n      font-size: 11pt;\r\n      width: 100px;\r\n  }\r\n  span.sl{\r\n      width: 18%;\r\n      float: left;\r\n      text-align: right;\r\n  }\r\n  span.dvt{\r\n    width:16%; \r\n    float: left;\r\n    font-size: 9pt;\r\n    text-align: center;\r\n}\r\nspan.x{\r\n    width:3%; \r\n    float: left;\r\n    text-align: right;\r\n}\r\nspan.dg{\r\n    width:22%; \r\n    float: left;\r\n    text-align: right;\r\n}\r\nspan.bang{\r\n    width:7%; \r\n    float: left;\r\n    text-align: right;\r\n}\r\nspan.tt{\r\n    float: left;\r\n    width: 32%;\r\n    text-align: right;\r\n}\r\n.mat-list-item-content{\r\n    padding: 0px;\r\n}\r\n.mg-bt-20{\r\nmargin-bottom: -20px;\r\n}\r\n.mg-1-10{\r\n    margin: -1px 10px;\r\n}\r\n.tx-c{\r\n    text-align: center;\r\n}\r\n.mg-r-7{\r\n    margin-right: 7px;\r\n}\r\n.ttle{\r\n    width: 30%;\r\n    margin-left: 4px;\r\n}\r\n.inf{\r\n    display: inline;\r\n    margin-left: 4px;\r\n}\r\nspan.lxe{\r\n    width: 50px;\r\n    text-align: center;\r\n\r\n}\r\nspan.xe{\r\n    width: 85px;\r\n    text-align: center;\r\n}\r\n.mat-form-field{\r\n    font-size: 14px;\r\n    margin: -18px 0px;\r\n}\r\n.fr-date{\r\n    font-size: 14px;\r\n    width: 113px;\r\n    margin: -18px -5px;\r\n}\r\n.mat-form-field-wrapper {\r\n    padding-bottom: 0.8em;\r\n}\r\n.btn-state{\r\n\r\nmargin-top: 8px;\r\nposition: absolute;\r\nright:15px;\r\n}\r\n.mg-r-15{\r\n    margin-right: 15px;\r\n}\r\n\r\n.btn-kh{\r\n    position: absolute;\r\n    right:15px;\r\n    margin-top: 10px;\r\n}\r\n.btn-gh{\r\n    position: absolute;\r\n    right:15px;\r\n \r\n}\r\n.st-fr{\r\n    width: 92%;\r\n    margin-right: 5%;\r\n    margin-left: 3%;\r\n}\r\n.input-bk{\r\n   \r\n    text-align: right;\r\n}\r\n.input-bk-ct{\r\n    \r\n     text-align: center;\r\n }\r\n .rotate90 {\r\n    /* -webkit-transform: rotate(90deg);\r\n    -moz-transform: rotate(90deg);\r\n    -o-transform: rotate(90deg);\r\n    -ms-transform: rotate(90deg); */\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n}\r\n.sign{\r\n    padding-bottom: 30px;\r\n    padding-top: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-detail/view-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor='let donhang of donhangs'>\n  <div *ngIf=\"donhang.id === id \">\n\n    <mat-card class=\"donhang-card\">\n      <!-- Trang thai -->\n\n      <!-- chưa giao-->\n      <mat-card-header class=\"state\" *ngIf=\"donhang.trangthai=='Chưa giao'\" style=\"background-color:rgb(165, 7, 7)\">\n\n        <mat-card-title class=\"state w-100 mg-t-10 mg-au\" *ngIf=\"!inpstate\">{{donhang.trangthai}}</mat-card-title>\n\n        <mat-card-title class=\"state w-100 mg-t-10 mg-au\" *ngIf=\"inpstate\">\n          <mat-form-field>\n            <mat-select [(value)]=\"selected\" style=\"color:#ffffff\">\n              <mat-option *ngFor=\"let state of states\" [value]=\"state\" >\n                {{ state }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-card-title>\n\n        <mat-card-subtitle style=\"color:#ffffff\">\n          <i class=\"material-icons fl\">receipt</i>\n          <p class=\"ngtao mg-t-10 fl mg-r-20\">{{donhang.ngaytao|date:\"dd/MM/yyyy\"}}</p>\n          <i class=\"material-icons fl \">local_shipping</i>\n          <p class=\"ngtao mg-t-10 fl\" *ngIf=\"!inpstate\">{{donhang.ngaygiao|date:\"dd/MM/yyyy\"}}</p>\n          <p class=\"ngtao mg-t-10 fl\" *ngIf=\"inpstate\">\n            <mat-form-field class=\"fr-date\">\n              <input matInput type=\"date\" [(ngModel)]=\"donhang.ngaygiao\">\n            </mat-form-field>\n          </p>\n        </mat-card-subtitle>\n        <span class=\"spacer\"></span>\n\n        <span class=\"btn-state\" (click)=\"edit(donhang)\">\n          <i class=\"material-icons mg-l\" style=\"font-size:17px; color:rgb(255, 255, 255)\" *ngIf=\"!editstate\">mode_edit</i>\n          <i class=\"material-icons mg-l\" style=\"font-size:17px; color:rgb(255, 255, 255)\" *ngIf=\"editstate\">check</i>\n\n        </span>\n\n\n      </mat-card-header>\n      <!-- Đã giao-->\n      <mat-card-header class=\"state\" *ngIf=\"donhang.trangthai=='Đã giao'\" style=\"background-color:green\">\n        <mat-card-title class=\"state w-100 mg-t-10 mg-au\">{{donhang.trangthai}}</mat-card-title>\n\n        <mat-card-subtitle style=\"color:#ffffff\">\n          <i class=\"material-icons fl\">receipt</i>\n          <p class=\"ngtao mg-t-10 fl mg-r-20\">{{donhang.ngaytao|date:\"dd/MM/yyyy\"}}</p>\n          <i class=\"material-icons fl \">local_shipping</i>\n          <p class=\"ngtao mg-t-10 fl\">{{donhang.ngaygiao|date:\"dd/MM/yyyy\"}}</p>\n        </mat-card-subtitle>\n        <span class=\"spacer\"></span>\n\n\n\n      </mat-card-header>\n\n      <!-- Bị hủy-->\n      <mat-card-header class=\"state\" *ngIf=\"donhang.trangthai=='Đơn bị hủy'\" style=\"background-color:black\">\n\n        <mat-card-title class=\"state w-100 mg-t-10 mg-au\">{{donhang.trangthai}}</mat-card-title>\n\n        <mat-card-subtitle style=\"color:#ffffff\">\n          <i class=\"material-icons fl\">receipt</i>\n          <p class=\"ngtao mg-t-10 fl mg-r-20\">{{donhang.ngaytao|date:\"dd/MM/yyyy\"}}</p>\n          <i class=\"material-icons fl \">local_shipping</i>\n          <p class=\"ngtao mg-t-10 fl\">{{donhang.ngaygiao|date:\"dd/MM/yyyy\"}}</p>\n        </mat-card-subtitle>\n        <span class=\"spacer\"></span>\n\n\n      </mat-card-header>\n      <!--Đang xử lý-->\n      <mat-card-header class=\"state\" *ngIf=\"donhang.trangthai=='Đang bốc hàng'|| donhang.trangthai=='Đang đi giao'\" style=\"background-color:rgb(253, 186, 0)\">\n\n        <mat-card-title class=\"state w-100 mg-t-10 mg-au\" *ngIf=\"!inpstate\">{{donhang.trangthai}}</mat-card-title>\n\n        <mat-card-title class=\"state w-100 mg-t-10 mg-au\" *ngIf=\"inpstate\">\n          <mat-form-field>\n            <mat-select [(value)]=\"selected\">\n              <mat-option *ngFor=\"let state of states\" [value]=\"state\">\n                {{ state }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-card-title>\n\n        <mat-card-subtitle style=\"color:#ffffff\">\n          <i class=\"material-icons fl\">receipt</i>\n          <p class=\"ngtao mg-t-10 fl mg-r-20\">{{donhang.ngaytao|date:\"dd/MM/yyyy\"}}</p>\n          <i class=\"material-icons fl \">local_shipping</i>\n          <p class=\"ngtao mg-t-10 fl\" *ngIf=\"!inpstate\">{{donhang.ngaygiao|date:\"dd/MM/yyyy\"}}</p>\n          <p class=\"ngtao mg-t-10 fl\" *ngIf=\"inpstate\">\n            <mat-form-field class=\"fr-date\">\n              <input matInput type=\"date\" [(ngModel)]=\"donhang.ngaygiao\">\n            </mat-form-field>\n          </p>\n        </mat-card-subtitle>\n        <span class=\"spacer\"></span>\n\n        <span class=\"btn-state\" (click)=\"edit(donhang)\">\n          <i class=\"material-icons mg-l\" style=\"font-size:17px; color:rgb(255, 255, 255)\" *ngIf=\"!editstate\">mode_edit</i>\n          <i class=\"material-icons mg-l\" style=\"font-size:17px; color:rgb(255, 255, 255)\" *ngIf=\"editstate\">check</i>\n\n        </span>\n\n\n\n\n      </mat-card-header>\n\n      <!-- noi dung don hang-->\n      <mat-card-content class=\"content\">\n        <!--thong tin khach hang-->\n\n        <mat-list>\n\n          <mat-list-item class=\"mg-10\">\n            <mat-icon mat-list-icon class=\"mg-r-5 mg-10\">person</mat-icon>\n            <p mat-line *ngIf=\"!inpkh\">{{donhang.kh.tenkh}}</p>\n            <p mat-line *ngIf=\"inpkh\">\n              <mat-form-field>\n                <input matInput type=\"text\" [(ngModel)]=\"donhang.kh.tenkh\">\n              </mat-form-field>\n            </p>\n            <span class=\"btn-gh\" (click)=\"editKh(donhang)\" [style.visibility]=\"donhang.trangthai!='Đã giao' && donhang.trangthai!='Đơn bị hủy' ? 'visible' : 'hidden'\">\n              <i class=\"material-icons mg-l\" style=\"font-size:17px; color:black\" *ngIf=\"!editkh\">mode_edit</i>\n              <i class=\"material-icons mg-l\" style=\"font-size:17px; color:black\" *ngIf=\"editkh\">check</i>\n            </span>\n          </mat-list-item>\n          <mat-list-item class=\"mg-10\">\n\n            <mat-icon mat-list-icon class=\"mg-r-5 mg-10\">call</mat-icon>\n            <p mat-line *ngIf=\"!inpkh\">{{donhang.kh.sdt}}</p>\n            <p mat-line *ngIf=\"inpkh\">\n              <mat-form-field>\n                <input matInput type=\"text\" [(ngModel)]=\"donhang.kh.sdt\">\n              </mat-form-field>\n            </p>\n          </mat-list-item>\n\n          <mat-list-item class=\"mg-10\">\n\n            <mat-icon mat-list-icon class=\"mg-r-5 mg-10\">location_on</mat-icon>\n            <p mat-line *ngIf=\"!inpkh\">{{donhang.kh.dc}}</p>\n            <p mat-line *ngIf=\"inpkh\">\n              <mat-form-field>\n                <input matInput type=\"text\" [(ngModel)]=\"donhang.kh.dc\">\n              </mat-form-field>\n            </p>\n          </mat-list-item>\n        </mat-list>\n        <br>\n\n        <mat-divider></mat-divider>\n\n        <!--Bang ke-->\n\n        <mat-list>\n          <mat-list-item class=\"bd-bt\" *ngFor='let bk of bk'>\n\n            <h3 class=\" mg-10 fl pd-bt\" style=\"color:#03051a\" matLine> {{bk.mathang.tenhang}} </h3>\n            <p style=\"width:19px; margin-right: -8px;\" *ngIf=\"!editbk || (editbk && itemtoEdit.ma != bk.ma)\">\n\n              <!--btn edit delete-->\n              <span class=\"line btn-bk\" (click)=\"checkDel(bk)\" [style.visibility]=\"donhang.trangthai!='Đã giao' && donhang.trangthai!='Đơn bị hủy' ? 'visible' : 'hidden'\">\n                <i class=\"material-icons mg-l\" style=\"font-size:17px; color:black\">delete</i>\n              </span>\n              <span class=\"line btn-bk\" (click)=\"editBk(donhang,bk)\" [style.visibility]=\"donhang.trangthai!='Đã giao' && donhang.trangthai!='Đơn bị hủy' ? 'visible' : 'hidden'\">\n                <i class=\"material-icons mg-l\" style=\"font-size:17px; color:black\" *ngIf=\"!editbk\">mode_edit</i>\n\n              </span>\n\n            </p>\n\n            <p style=\"padding-top:7px; font-size:10.2pt;\" matLine *ngIf=\"!inpbk || (inpbk && itemtoEdit.ma != bk.ma) \">\n              <span class=\"sl\">{{bk.soluong}} </span>\n              <span class=\"dvt\" style=\"padding-top:1px;\"> {{bk.mathang.dvt}} </span>\n              <span class=\"x\" *ngIf=\"donhang.tong!=0\">x</span>\n              <span class=\"dg\" *ngIf=\"donhang.tong!=0\"> {{bk.mathang.dongia}}</span>\n              <span class=\"bang\" *ngIf=\"donhang.tong!=0\">=</span>\n              <span class=\"tt\" *ngIf=\"donhang.tong!=0\">{{bk.thanhtien}}</span>\n            </p>\n\n            <p style=\"width:19px; margin-right: -8px;\" *ngIf=\"editbk && itemtoEdit.ma == bk.ma\">\n\n              <!--btn edit delete-->\n\n              <span class=\"line btn-bk\" (click)=\"editBk(donhang,bk)\" [style.visibility]=\"donhang.trangthai!='Đã giao' && donhang.trangthai!='Đơn bị hủy' ? 'visible' : 'hidden'\">\n\n                <i class=\"material-icons mg-l\" style=\"font-size:17px; color:black\">check</i>\n              </span>\n\n            </p>\n            <p style=\"padding-top:7px; font-size:10.2pt;\" matLine *ngIf=\"inpbk && itemtoEdit.ma == bk.ma\">\n              <span class=\"sl\">\n                <mat-form-field class=\"st-fr\">\n                  <input class=\"input-bk\" matInput type=\"text\" [(ngModel)]=\"bk.soluong\">\n                </mat-form-field>\n              </span>\n              <span class=\"dvt\"> {{bk.mathang.dvt}} </span>\n              <span class=\"x\">x</span>\n              <span class=\"dg\"> {{bk.mathang.dongia}}</span>\n              <span class=\"bang\">=</span>\n              <span class=\"tt\">{{bk.mathang.dongia*bk.soluong}}</span>\n            </p>\n\n          </mat-list-item>\n\n        </mat-list>\n\n\n\n        <!-- thong tin khac-->\n        <mat-list>\n            \n          <mat-list-item class=\"mg-bt-20\" *ngIf=\"donhang.tong!=0\">\n            <p class=\"label\">\n              <b>Tổng tiền</b>\n            </p>\n            <span class=\"spacer\"></span>\n            <p class=\"value\">\n              <b>{{donhang.tong}} </b>\n            </p>\n            \n          </mat-list-item>\n\n          <span class=\"btn-kh\" (click)=\"editTt(donhang)\" [style.visibility]=\"donhang.trangthai!='Đã giao' && donhang.trangthai!='Đơn bị hủy' ? 'visible' : 'hidden'\">\n              <i class=\"material-icons mg-l\" style=\"font-size:17px; color:black\" *ngIf=\"!edittt\">mode_edit</i>\n              <i class=\"material-icons mg-l\" style=\"font-size:17px; color:black\" *ngIf=\"edittt\">check</i>\n            </span>\n\n          <mat-list-item class=\"mg-bt-20\">\n            <p class=\"label\">\n              <b>Đã thanh toán</b>\n            </p>\n            <span class=\"spacer\"></span>\n            <p class=\"value\">\n              <b *ngIf=\"!inptt\">{{donhang.thanhtoan}}</b>\n              <b *ngIf=\"inptt\">\n                <mat-form-field class=\"st-fr\">\n                  <input matInput class=\"input-bk\" type=\"text\" [(ngModel)]=\"donhang.thanhtoan\">\n                </mat-form-field>\n              </b>\n            </p>\n          </mat-list-item>\n          <mat-list-item class=\"mg-bt-20\" *ngIf=\"donhang.tong!=0\" >\n            <p class=\"label\">\n              <b>Còn nợ lại</b>\n            </p>\n            <span class=\"spacer\"></span>\n            <p class=\"value\">\n              <b>{{donhang.tong-donhang.thanhtoan}}</b>\n            </p>\n          </mat-list-item>\n\n\n        </mat-list>\n        <br>\n        <mat-divider></mat-divider>\n        <!--Nguoi giao hang-->\n        <br>\n        <div>\n          <mat-list class=\"mg-bt-20\">\n            <mat-list-item>\n              <p class=\"label\">\n                <b>Giao hàng </b>\n              </p>\n              <p class=\"inf\" *ngIf=\"!inpgh\">\n                <span class=\"line lxe\">{{donhang.laixe}}</span> --\n                <span class=\"line xe\">{{donhang.xe.bienso}}</span>\n              </p>\n              <p class=\"inf\" *ngIf=\"inpgh\">\n                <span class=\"line lxe\">\n                  <mat-form-field class=\"st-fr\">\n                    <input matInput class=\"input-bk-ct\" type=\"text\" [(ngModel)]=\"donhang.laixe\">\n                  </mat-form-field>\n                </span> --\n                <span class=\"line xe\">\n                  <mat-form-field class=\"st-fr\">\n                    <input matInput class=\"input-bk-ct\" type=\"text\" [(ngModel)]=\"donhang.xe.bienso\">\n                  </mat-form-field>\n                </span>\n              </p>\n              <span class=\"btn-gh\" (click)=\"editGh(donhang)\" [style.visibility]=\"donhang.trangthai!='Đã giao' && donhang.trangthai!='Đơn bị hủy' ? 'visible' : 'hidden'\">\n                <i class=\"material-icons mg-l\" style=\"font-size:17px; color:black\" *ngIf=\"!editgh\">mode_edit</i>\n                <i class=\"material-icons mg-l\" style=\"font-size:17px; color:black\" *ngIf=\"editgh\">check</i>\n              </span>\n            </mat-list-item>\n            <mat-list-item class=\"sign\">\n              <p class=\"label\">\n                <b>Nhận hàng</b>\n              </p>\n              <img #imgsign *ngIf=\"donhang.trangthai=='Đã giao' \" [src]=\"url\" class=\"rotate90\" style=\" width: 40%;padding-bottom: 50px;\"/>\n              <button routerLink=\"sign\" mat-raised-button style=\"background-color:rgb(230, 116, 9); margin-left:20px;\" *ngIf=\"donhang.trangthai!='Đã giao' && donhang.trangthai!='Đơn bị hủy'\">Chữ ký</button>\n\n              <!--a routerLink =\"sign\">Chữ ký</a-->\n            </mat-list-item>\n\n          </mat-list>\n        </div>\n\n      </mat-card-content>\n\n    </mat-card>\n\n\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/view-detail/view-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_data_service__ = __webpack_require__("../../../../../src/app/share/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_upload_service__ = __webpack_require__("../../../../../src/app/share/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewDetailComponent = (function () {
    function ViewDetailComponent(dataService, route, dialog, uploadService) {
        var _this = this;
        this.dataService = dataService;
        this.route = route;
        this.dialog = dialog;
        this.uploadService = uploadService;
        this.url = {};
        this.id = "";
        this.imageUrl = '';
        this.states = ["Đã giao", "Đang đi giao", "Đang bốc hàng", "Chưa giao"];
        this.selected = "";
        //sign = false;
        this.isvisibleBk = false;
        this.editstate = false;
        this.inpstate = false;
        this.editkh = false;
        this.inpkh = false;
        this.edittt = false;
        this.inptt = false;
        this.editgh = false;
        this.inpgh = false;
        this.editbk = false;
        this.inpbk = false;
        this.route.paramMap.subscribe(function (param) {
            _this.id = param.get('id');
            console.log('id', _this.id);
            return _this.id;
        });
        // console.log(this.uploadService.getImages(this.id, this.url));
    }
    // ngAfterViewInit() {
    //   var storage = firebase.storage().ref();
    //   var path = "uploads/" + this.id + ".png";
    //   var spaceRef = storage.child(path);
    //   storage.child(path).getDownloadURL()
    //     .then(function (url) {
    //       console.log("url",url);
    //       // let img = this.imgsign.nativeElement;
    //       // img.src = url;
    //      var test = url;
    //       (<HTMLImageElement>document.getElementById('imgsign')).src = test;
    //       //this.url = url;
    //     // console.log("this url",this.url);
    //     }).catch(function (error) {
    //       console.log(error);
    //     });
    // }
    ViewDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getImageUrl();
        this.dataService.getBk(this.id).subscribe(function (bk) {
            _this.bk = bk;
        });
        this.dataService.getDonhangs().subscribe(function (donhangs) {
            _this.donhangs = donhangs;
            for (var i = 0; i < donhangs.length; i++) {
                if (donhangs[i].trangthai == "Đã giao" && donhangs[i].id == _this.id) {
                    var storage = __WEBPACK_IMPORTED_MODULE_6_firebase__["storage"]().ref();
                    var path = "uploads/" + _this.id + ".png";
                    var spaceRef = storage.child(path);
                    storage.child(path).getDownloadURL()
                        .then(function (url) {
                        console.log("url", url);
                        // let img = this.imgsign.nativeElement;
                        // img.src = url;
                        //var test = url;
                        //(<HTMLImageElement>document.getElementById('imgsign')).src = test;
                        _this.url = url;
                        // console.log("this url",this.url);
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            }
        });
    };
    ViewDetailComponent.prototype.edit = function (donhang) {
        console.log("donhang update", donhang);
        if (this.editstate) {
            console.log("selected", this.selected);
            donhang.trangthai = this.selected;
            this.dataService.updateDh(donhang);
        }
        else {
            this.selected = donhang.trangthai;
        }
        this.inpstate = !this.inpstate;
        this.editstate = !this.editstate;
        console.log(this.editstate);
    };
    ViewDetailComponent.prototype.editKh = function (donhang) {
        if (this.editkh) {
            this.dataService.updateDh(donhang);
        }
        this.inpkh = !this.inpkh;
        this.editkh = !this.editkh;
    };
    ViewDetailComponent.prototype.editBk = function (donhang, bk) {
        console.log("donhang", donhang);
        console.log("bk", bk);
        donhang.tong = 0;
        if (this.editbk) {
            bk.thanhtien = bk.mathang.dongia * bk.soluong;
            this.dataService.updatebk(bk);
        }
        else {
            this.itemtoEdit = bk;
        }
        ;
        for (var i = 0; i < this.bk.length; i++) {
            if (this.bk[i].id == donhang.id) {
                donhang.tong += this.bk[i].thanhtien;
            }
        }
        ;
        donhang.nolai = donhang.tong - donhang.thanhtoan;
        this.dataService.updateDh(donhang);
        this.inpbk = !this.inpbk;
        this.editbk = !this.editbk;
    };
    ViewDetailComponent.prototype.checkDel = function (bk) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__["a" /* DialogComponent */], {
            width: '250px',
            data: { tenhang: bk.mathang.tenhang }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dataService.removeBk(bk);
            }
        });
    };
    ViewDetailComponent.prototype.editTt = function (donhang) {
        if (this.edittt) {
            donhang.nolai = donhang.tong - donhang.thanhtoan;
            this.dataService.updateDh(donhang);
        }
        else {
        }
        ;
        this.edittt = !this.edittt;
        this.inptt = !this.inptt;
    };
    ViewDetailComponent.prototype.editGh = function (donhang) {
        if (this.editgh) {
            this.dataService.updateDh(donhang);
        }
        this.editgh = !this.editgh;
        this.inpgh = !this.inpgh;
    };
    ViewDetailComponent.prototype.getImageUrl = function () {
        console.log("get img");
        var storage = __WEBPACK_IMPORTED_MODULE_6_firebase__["storage"]();
        var ref = "uploads/" + this.id + ".png";
        var bkRef = storage.ref(ref).getDownloadURL()
            .then(function (url) {
            console.log("url", url);
            var img = this.imgsign.nativeElement;
            img.src = url;
            // this.url = url;
            console.log("this url", this.url);
        }).catch(function (error) {
            console.log(error);
        });
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("imgsign"),
        __metadata("design:type", Object)
    ], ViewDetailComponent.prototype, "imgsign", void 0);
    ViewDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-detail',
            template: __webpack_require__("../../../../../src/app/view-detail/view-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-detail/view-detail.component.css")],
            inputs: ['state']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__share_upload_service__["a" /* UploadService */]])
    ], ViewDetailComponent);
    return ViewDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".donhang-card {\r\n    border:  1px solid #1111;\r\n    height: 310px;\r\n    background-color: #fffffd;\r\n    padding: 0px;\r\n    margin: 7px auto;\r\n}\r\n.state{\r\n   \r\n    color:#ffffff;\r\n    width: 100%;\r\n    margin: 0px;\r\n    float: left;\r\n    font-size: 1.03em;\r\n  \r\n    -webkit-margin-after: 1em;\r\n    font-weight: 500;\r\n}\r\n.state-donhang{\r\n    width: 5%;\r\n}\r\n.content{\r\n    padding: 10px;\r\n}\r\n.ngtao{\r\n    margin-top: 7px;\r\n    margin-left: 5px;\r\n    font-size: 0.8em;\r\n    text-align: center;\r\n   \r\n    float: left;\r\n\r\n}\r\n.spacer{\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n}\r\n.label{\r\n  text-align: left;\r\n  float: left;\r\n  margin: 5px;\r\n}\r\n.value{\r\n    text-align: right;\r\n    float: right;\r\n    margin: 5px;\r\n}\r\n.cl{\r\n    clear: both;\r\n}\r\n.inf-gr{\r\n    display: block;\r\n   \r\n}\r\n.material-icons{\r\n    font-size: 23px;\r\n   \r\n    float: left;\r\n    margin-left: 10px;\r\n    position: relative;\r\n}\r\n.date{\r\n\r\n}\r\n.fl{\r\n    float: left\r\n}\r\n.mg-10{\r\n    margin-top: 10px;\r\n\r\n}\r\n.mg-l-40{\r\n    margin-left: 40px;\r\n}\r\n.w-140{\r\n    max-width: 120px;\r\n    min-width: 120px;\r\n}\r\n.fl-r{\r\n    float: right;\r\n}\r\n.right{\r\n    text-align: right;\r\n}\r\n.mg-l-25{\r\n    margin-left: 20%;\r\n}\r\n.w-100{\r\n    width: 120px;\r\n    -webkit-margin-before: 0.8em\r\n}\r\n.mg-4{\r\n    margin: 4px;\r\n}\r\n.w-40{\r\n    width: 40%;\r\n}\r\n.unl{\r\n    text-decoration: none;\r\n}\r\n.mg-l-15{\r\n    margin-left: 40px;\r\n   \r\n}\r\n\r\n.mat-grid-list{\r\n    margin: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"state=='Tất cả'|| state == donhang.trangthai\">\n<mat-card class=\"donhang-card\">\n  <!-- Trang thai -->\n  <!-- chưa giao-->\n  <mat-card-header class=\"state\" *ngIf=\"donhang.trangthai=='Chưa giao'\" style=\"background-color:rgb(165, 7, 7)\">\n    <div mat-card-avatar class=\"state-donhang\"></div>\n    <mat-card-title class=\"state w-100\">{{donhang.trangthai}}</mat-card-title>\n    <mat-card-subtitle style=\"color:#ffffff\">{{donhang.xe.bienso}}</mat-card-subtitle>\n    <span class=\"spacer\"></span>\n    <div class=\"inf-gr mg-10  w-140 fl-r right\">\n        <i class=\"material-icons \">receipt</i><p class=\"ngtao\">{{donhang.ngaytao|date:\"dd/MM/yyyy\"}}</p> \n        <i class=\"material-icons\">local_shipping</i><p class=\"ngtao\">{{donhang.ngaygiao|date:\"dd/MM/yyyy\"}}</p>\n        </div>\n  </mat-card-header>\n  <!-- Đã giao-->\n  <mat-card-header class=\"state\" *ngIf=\"donhang.trangthai=='Đã giao'\" style=\"background-color:green\">\n    <div mat-card-avatar class=\"state-donhang\"></div>\n    <mat-card-title class=\"state w-100\">{{donhang.trangthai}}</mat-card-title>\n    <mat-card-subtitle style=\"color:#ffffff\">{{donhang.xe.bienso}}</mat-card-subtitle>\n    <span class=\"spacer\"></span>\n    <div class=\"inf-gr mg-10 w-140\">\n    <i class=\"material-icons \">receipt</i><p class=\"ngtao\">{{donhang.ngaytao|date:\"dd/MM/yyyy\"}}</p> \n    <i class=\"material-icons\">local_shipping</i><p class=\"ngtao\">{{donhang.ngaygiao|date:\"dd/MM/yyyy\"}}</p>\n    </div>\n  </mat-card-header>\n  <!-- Bị hủy-->\n  <mat-card-header class=\"state\" *ngIf=\"donhang.trangthai=='Đơn bị hủy'\" style=\"background-color:black\">\n    <div mat-card-avatar class=\"state-donhang\"></div>\n    <mat-card-title class=\"state w-100\">{{donhang.trangthai}}</mat-card-title>\n    <mat-card-subtitle style=\"color:#ffffff\">{{donhang.xe.bienso}}</mat-card-subtitle>\n    <span class=\"spacer\"></span>\n    <div class=\"inf-gr mg-10  w-140\">\n        <i class=\"material-icons \">receipt</i><p class=\"ngtao\">{{donhang.ngaytao|date:\"dd/MM/yyyy\"}}</p> \n        <i class=\"material-icons\">local_shipping</i><p class=\"ngtao\">{{donhang.ngaygiao|date:\"dd/MM/yyyy\"}}</p>\n        </div>\n  </mat-card-header>\n  <!--Đang xử lý-->\n  <mat-card-header class=\"state\" *ngIf=\"donhang.trangthai=='Đang bốc hàng'|| donhang.trangthai=='Đang đi giao'\" style=\"background-color:rgb(253, 186, 0)\">\n    <div mat-card-avatar class=\"state-donhang\"></div>\n    <mat-card-title class=\"state w-100\">{{donhang.trangthai}}</mat-card-title>\n    <mat-card-subtitle style=\"color:#ffffff\">{{donhang.xe.bienso}}</mat-card-subtitle>\n    <span class=\"spacer\"></span>\n    <div class=\"inf-gr mg-10  w-140 fl-r\">\n        <i class=\"material-icons \">receipt</i><p class=\"ngtao\">{{donhang.ngaytao|date:\"dd/MM/yyyy\"}}</p> \n        <i class=\"material-icons\">local_shipping</i><p class=\"ngtao\">{{donhang.ngaygiao|date:\"dd/MM/yyyy\"}}</p>\n        </div>\n\n   \n  </mat-card-header>\n  \n  <!-- noi dung don hang-->\n  <mat-card-content class=\"content\">\n    <!--thong tin khach hang-->\n    <i class=\"material-icons fl\">person</i><p class=\" mg-l-15 mg-10\" style=\"margin-bottom: 4px\">{{donhang.kh.tenkh}}</p>\n    <br>\n    <i class=\"material-icons cl \" style=\"font-size: 21px\">call</i><p class=\"mg-l-15 mg-4\"> {{donhang.kh.sdt}}</p>\n    <br>\n    <i class=\"material-icons cl\">location_on</i><p class=\"mg-l-15 mg-4\"> {{donhang.kh.dc}}</p>\n    <hr>\n    <!-- thong tin khac-->\n    <div class=\"inf-gr\">\n    <p class=\"label\">Tổng tiền</p> <p class=\"value\">{{donhang.tong}}</p></div>\n    <p class=\"label cl\">Đã thanh toán</p><p class=\"value\">{{donhang.thanhtoan}}</p>\n    <p class=\"label cl\">Còn nợ lại</p> <p class=\"value\">{{donhang.nolai}}</p>\n    \n\n  </mat-card-content>\n\n</mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewComponent = (function () {
    function ViewComponent() {
        this.tong = 0;
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view',
            template: __webpack_require__("../../../../../src/app/view/view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/view.component.css")],
            inputs: ['donhang', 'state']
        }),
        __metadata("design:paramtypes", [])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/xem-don-hang/xem-don-hang.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    text-decoration: none;\r\n}\r\n.btn-ad{\r\n    position: fixed;\r\n   z-index: 1000;\r\n   right: 25px;\r\n   bottom: 20px;\r\n   background-color: rgba(255, 255, 255, 0.527);\r\n   border: 1px solid rgb(230, 116, 9);\r\n}\r\n.material-icons{\r\ncolor:  rgb(230, 116, 9);\r\nfont-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/xem-don-hang/xem-don-hang.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink = \"xem-chi-tiet/{{donhang.id}}\" class=\"view\" *ngFor='let donhang of donhangs'>\n    <!--donhang-->\n    <app-view [state] = \"state\" [donhang]=\"donhang\" ></app-view>\n    <!-- -->\n  \n</a>\n<a  routerLink=\"tao-don-hang\"><button mat-mini-fab class=\"btn-ad\">\n    <mat-icon aria-label=\"addDh\">add</mat-icon>\n  </button></a>"

/***/ }),

/***/ "../../../../../src/app/xem-don-hang/xem-don-hang.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XemDonHangComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_data_service__ = __webpack_require__("../../../../../src/app/share/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var XemDonHangComponent = (function () {
    function XemDonHangComponent(route, dataService) {
        var _this = this;
        this.route = route;
        this.dataService = dataService;
        this.state = "";
        this.dataService.getDonhangs().subscribe(function (donhangs) {
            _this.donhangs = donhangs;
            console.log(_this.donhangs);
        });
        this.route.paramMap.subscribe(function (param) {
            _this.state = param.get('state');
            return _this.state;
        });
    }
    XemDonHangComponent.prototype.ngOnInit = function () {
    };
    XemDonHangComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-xem-don-hang',
            template: __webpack_require__("../../../../../src/app/xem-don-hang/xem-don-hang.component.html"),
            styles: [__webpack_require__("../../../../../src/app/xem-don-hang/xem-don-hang.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__share_data_service__["a" /* DataService */]])
    ], XemDonHangComponent);
    return XemDonHangComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBLzzMBHCJmHPe8JHRBcJfImHmZAinQA8M",
        authDomain: "quanlygiaohang-cb907.firebaseapp.com",
        databaseURL: "https://quanlygiaohang-cb907.firebaseio.com",
        projectId: "quanlygiaohang-cb907",
        storageBucket: "quanlygiaohang-cb907.appspot.com",
        messagingSenderId: "744669230842"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map