webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <br>\r\n  <app-srv-blocked></app-srv-blocked>\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/esm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_get_prices_service__ = __webpack_require__("./src/app/services/get-prices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_sell_buy_service__ = __webpack_require__("./src/app/services/sell-buy.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_buy_buy_component__ = __webpack_require__("./src/app/components/buy/buy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_sell_sell_component__ = __webpack_require__("./src/app/components/sell/sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_logdiv_logdiv_component__ = __webpack_require__("./src/app/components/logdiv/logdiv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_sell_buy_sell_buy_component__ = __webpack_require__("./src/app/components/sell-buy/sell-buy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__max_ctrl_directive__ = __webpack_require__("./src/app/max-ctrl.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_srv_blocked_srv_blocked_component__ = __webpack_require__("./src/app/components/srv-blocked/srv-blocked.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'transaction', component: __WEBPACK_IMPORTED_MODULE_21__components_sell_buy_sell_buy_component__["a" /* SellBuyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_buy_buy_component__["a" /* BuyComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_sell_sell_component__["a" /* SellComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_logdiv_logdiv_component__["a" /* LogdivComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_sell_buy_sell_buy_component__["a" /* SellBuyComponent */],
                __WEBPACK_IMPORTED_MODULE_22__max_ctrl_directive__["a" /* MaxCtrlDirective */],
                __WEBPACK_IMPORTED_MODULE_23__components_srv_blocked_srv_blocked_component__["a" /* SrvBlockedComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot({
                    confirmButtonType: 'info' // set defaults here
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__services_get_prices_service__["a" /* GetPricesService */], __WEBPACK_IMPORTED_MODULE_11__services_sell_buy_service__["a" /* SellBuyService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/buy/buy.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/buy/buy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\r\n    <div class=\"card-header\"><h4>Stock prices</h4></div>\r\n    <div class=\"card-body p-0\">\r\n        <table class=\"table table-hover text-center mb-4\">\r\n          <thead class=\"thead-dark\">\r\n            <tr>\r\n              <th scope=\"col\">Company</th>\r\n              <th scope=\"col\">Value</th>\r\n              <th scope=\"col\">Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"prices.currPrices\">\r\n            <tr *ngFor=\"let unit of prices.Units; let i = index\">\r\n              <th scope=\"row\">{{ prices.Codes[i] }}</th>\r\n              <td>{{ prices.currPrices.items[i].price }}</td>\r\n              <td><button class=\"btn btn-info\" (click)=\"buyCurrency(i)\" id=\"i\" [disabled]=\"(auth.user.wallet.PLN < prices.currPrices.items[i].price) || prices.srvBlocked\">Buy</button></td>\r\n            </tr>\r\n          </tbody>\r\n        </table> \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/buy/buy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_prices_service__ = __webpack_require__("./src/app/services/get-prices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sell_buy_service__ = __webpack_require__("./src/app/services/sell-buy.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BuyComponent = /** @class */ (function () {
    function BuyComponent(prices, sellBuy, router, auth) {
        this.prices = prices;
        this.sellBuy = sellBuy;
        this.router = router;
        this.auth = auth;
    }
    BuyComponent.prototype.ngOnInit = function () {
        this.prices.restorePrices();
        this.auth.getUser();
    };
    BuyComponent.prototype.buyCurrency = function (i) {
        this.prices.updatePrices();
        this.sellBuy.buy = true;
        this.sellBuy.i = i;
        this.sellBuy.storeNumCode(i);
        this.router.navigate(['transaction']);
    };
    BuyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buy',
            template: __webpack_require__("./src/app/components/buy/buy.component.html"),
            styles: [__webpack_require__("./src/app/components/buy/buy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_get_prices_service__["a" /* GetPricesService */],
            __WEBPACK_IMPORTED_MODULE_2__services_sell_buy_service__["a" /* SellBuyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], BuyComponent);
    return BuyComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"alert alert-danger\" *ngIf=\"srvBlocked\">\r\n    <p>Our server is currently under maintenance, all transactions temporarily suspended. Sorry for the inconvenience.</p>\r\n</div> -->\r\n<app-logdiv *ngIf=\"!auth.loggedIn()\"></app-logdiv>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n      <app-buy *ngIf=\"auth.loggedIn()\"></app-buy>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n      <app-sell *ngIf=\"auth.loggedIn()\"></app-sell>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/logdiv/logdiv.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/logdiv/logdiv.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron text-center\">\r\n  <h1>Welcome to my Exchange Office</h1>\r\n  <p class=\"lead\">Please log in or register.</p>\r\n  <div>\r\n      <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/login']\">Login</a>\r\n      <a class=\"btn btn-success btn-lg\" [routerLink]=\"['/register']\">Register</a> \r\n  </div>\r\n</div>  \r\n"

/***/ }),

/***/ "./src/app/components/logdiv/logdiv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogdivComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogdivComponent = /** @class */ (function () {
    function LogdivComponent() {
    }
    LogdivComponent.prototype.ngOnInit = function () {
    };
    LogdivComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logdiv',
            template: __webpack_require__("./src/app/components/logdiv/logdiv.component.html"),
            styles: [__webpack_require__("./src/app/components/logdiv/logdiv.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogdivComponent);
    return LogdivComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"card mb-3 center-block\" style=\"width: 80%; margin: 0 auto;\">\r\n  <div class=\"card-header\"><h4>Log in</h4></div>\r\n  <div class=\"card-body\">\r\n    <form (submit)=\"onLoginSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label>Username</label>\r\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Password</label>\r\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n      </div>\r\n      <input type=\"submit\" class=\"btn btn-primary btn-lg\" value=\"Login\">\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(flashMessage, auth, router) {
        this.flashMessage = flashMessage;
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.auth.loginUser(user)
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
            else {
                _this.auth.storeData(data.token, data.user);
                // console.log(this.auth.user);
                // this.auth.getUser();
                _this.flashMessage.show("You are now logged in as " + data.user.username, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['']);
            }
        }, function (err) {
            console.log(err);
            _this.flashMessage.show("Sorry, something went wrong, please try again later.", { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\r\n        <a class=\"navbar-brand\" href=\"#\">Stocks</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n        <ul class=\"navbar-nav mr-auto \">\r\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/']\"><i class=\"fas fa-home fa-2x\"></i></a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav right \">\r\n            <li *ngIf=\"!auth.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n            </li>\r\n            <li *ngIf=\"!auth.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n            </li>\r\n            <li *ngIf=\"auth.loggedIn()\" class=\"nav-item\">\r\n                <p class=\"nav-link mb-0\">Logged in as: {{auth.user.username}}</p> \r\n            </li>\r\n            <li *ngIf=\"auth.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/profile']\"><i class=\"fas fa-cog fa-2x\"></i></a>\r\n            </li>\r\n            <li *ngIf=\"auth.loggedIn()\" class=\"nav-item\">\r\n                <a class=\"nav-link\" (click)=\"onClickLogout()\" href=\"#\"><i class=\"fas fa-power-off fa-2x\"></i></a>\r\n            </li>\r\n        </ul>\r\n\r\n        </div>\r\n    </nav>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(flashMessage, auth, router) {
        this.flashMessage = flashMessage;
        this.auth = auth;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (!this.auth.user && this.auth.loggedIn()) {
            this.auth.getUser();
        }
    };
    NavbarComponent.prototype.onClickLogout = function () {
        this.flashMessage.show("You've been logged out. See you soon, " + this.auth.user.name + "!", { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        this.auth.logout();
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"card mb-3 center-block\" style=\"width: 80%; margin: 0 auto;\" *ngIf=\"auth.loggedIn()\">\r\n  <div class=\"card-header\"><h4>Your Profile</h4></div>\r\n  <div class=\"card-body\">\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">Username: {{auth.user.username}} </li>\r\n      <li class=\"list-group-item\">Name: {{auth.user.name}} </li>\r\n      <li class=\"list-group-item\">Email: {{auth.user.email}} </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"card mb-3 center-block\" style=\"width: 80%; margin: 0 auto;\">\r\n  <div class=\"card-header\"><h4>Register </h4></div>\r\n  <div class=\"card-body\">\r\n    <form (ngSubmit)=\"onRegisterSubmit()\" #regForm=\"ngForm\" [hidden]=\"submitted\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" required \r\n            [(ngModel)]=\"name\" name=\"name\" #fname=\"ngModel\"\r\n            minlength=\"2\" maxlength=\"40\" pattern=\"^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ ]+(([',. -][a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ ])?[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]*)*$\">\r\n        \r\n        <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\"\r\n          class=\"alert alert-danger ngValid\">\r\n          <div *ngIf=\"fname.errors.required\">\r\n            Name is required.\r\n          </div>\r\n          <div *ngIf=\"fname.errors.minlength || fname.errors.maxlength\">\r\n            Name must be at between 2 and 40 characters long.\r\n          </div>\r\n          <div *ngIf=\"fname.errors.pattern\">\r\n            Invalid name.\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Userame</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"username\" required \r\n            [(ngModel)]=\"username\" name=\"username\" #fusername=\"ngModel\"\r\n            minlength=\"2\" maxlength=\"20\" pattern=\"^[a-z]+([.-][a-z]+)?$\">\r\n        \r\n        <div *ngIf=\"fusername.invalid && (fusername.dirty || fusername.touched)\"\r\n          class=\"alert alert-danger ngValid\">\r\n          <div *ngIf=\"fusername.errors.required\">\r\n            Username is required.\r\n          </div>\r\n          <div *ngIf=\"fusername.errors.minlength || fusername.errors.maxlength\">\r\n            Name must be at between 2 and 20 characters long.\r\n          </div>\r\n          <div *ngIf=\"fusername.errors.pattern\">\r\n            Username must start and end with a letter. Only small letters allowed. In between can contain only a dot or a hyphen.\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"email\" required \r\n            [(ngModel)]=\"email\" name=\"email\" #femail=\"ngModel\"\r\n            pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$\">\r\n        \r\n        <div *ngIf=\"femail.invalid && (femail.dirty || femail.touched)\"\r\n          class=\"alert alert-danger ngValid\">\r\n          <div *ngIf=\"femail.errors.required\">\r\n            Email is required.\r\n          </div>\r\n          <div *ngIf=\"femail.errors.pattern\">\r\n            Invalid email address.\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"password\" required \r\n            [(ngModel)]=\"password\" name=\"password\" #fpassword=\"ngModel\">\r\n        \r\n        <div *ngIf=\"fpassword.invalid && (fpassword.dirty || fpassword.touched)\"\r\n          class=\"alert alert-danger ngValid\">\r\n          <div *ngIf=\"fpassword.errors.required\">\r\n            Password is required.\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"PLN\">Amount of PLN</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"PLN\"\r\n            [(ngModel)]=\"PLN\" name=\"PLN\" #fPLN=\"ngModel\"\r\n            pattern=\"^\\+?(0|[1-9]\\d*)$\">\r\n        \r\n        <div *ngIf=\"fPLN.invalid && (fPLN.dirty || fPLN.touched)\"\r\n          class=\"alert alert-danger ngValid\">\r\n          <div *ngIf=\"fPLN.errors.pattern\">\r\n            This is not a non-negative integer. Please correct the value or leave it empty.\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"FP\">Amount of unit shares of FP</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"FP\" \r\n            [(ngModel)]=\"FP\" name=\"FP\" #fFP=\"ngModel\"\r\n            pattern=\"^\\+?(0|[1-9]\\d*)$\">\r\n        \r\n        <div *ngIf=\"fFP.invalid && (fFP.dirty || fFP.touched)\"\r\n          class=\"alert alert-danger ngValid\">\r\n          This is not a non-negative integer. Please correct the value or leave it empty.\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"FPL\">Amount of unit shares of FPL</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"FPL\" \r\n            [(ngModel)]=\"FPL\" name=\"FPL\" #fFPL=\"ngModel\"\r\n            pattern=\"^\\+?(0|[1-9]\\d*)$\">\r\n        \r\n        <div *ngIf=\"fFPL.invalid && (fFPL.dirty || fFPL.touched)\"\r\n          class=\"alert alert-danger ngValid\">\r\n          This is not a non-negative integer. Please correct the value or leave it empty.\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"FPC\">Amount of unit shares of FPC</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"FPC\" \r\n            [(ngModel)]=\"FPC\" name=\"FPC\" #fFPC=\"ngModel\"\r\n            pattern=\"^\\+?(0|[1-9]\\d*)$\">\r\n        \r\n        <div *ngIf=\"fFPC.invalid && (fFPC.dirty || fFPC.touched)\"\r\n          class=\"alert alert-danger ngValid\">\r\n          This is not a non-negative integer. Please correct the value or leave it empty.\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"PGB\">Amount of unit shares of PGB</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"PGB\" \r\n            [(ngModel)]=\"PGB\" name=\"PGB\" #fPGB=\"ngModel\"\r\n            pattern=\"^\\+?(0|[1-9]\\d*)$\">\r\n        \r\n        <div *ngIf=\"fPGB.invalid && (fPGB.dirty || fPGB.touched)\"\r\n          class=\"alert alert-danger ngValid\">\r\n          This is not a non-negative integer. Please correct the value or leave it empty.\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"FPA\">Amount of unit shares of FPA</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"FPA\" \r\n            [(ngModel)]=\"FPA\" name=\"FPA\" #fFPA=\"ngModel\"\r\n            pattern=\"^\\+?(0|[1-9]\\d*)$\">\r\n        \r\n        <div *ngIf=\"fFPA.invalid && (fFPA.dirty || fFPA.touched)\"\r\n          class=\"alert alert-danger ngValid\">\r\n          This is not a non-negative integer. Please correct the value or leave it empty.\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"DL24\">Amount of unit shares of DL24</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"DL24\" \r\n            [(ngModel)]=\"DL24\" name=\"DL24\" #fDL24=\"ngModel\"\r\n            pattern=\"^\\+?(0|[1-9]\\d*)$\">\r\n        \r\n        <div *ngIf=\"fDL24.invalid && (fDL24.dirty || fDL24.touched)\"\r\n          class=\"alert alert-danger ngValid\">\r\n          This is not a non-negative integer. Please correct the value or leave it empty.\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-info btn-lg\" [disabled]=\"!regForm.form.valid\">Submit</button>\r\n    </form>\r\n\r\n    <div [hidden]=\"!submitted\" class=\"text-center\">\r\n      <p class=\"my-3\">The following username is already taken: {{username}}. Please change username and submit again.</p>\r\n      <button class=\"btn btn-info btn-lg mt-4\" (click)=\"onClickAgain()\">Change registration data</button>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_get_prices_service__ = __webpack_require__("./src/app/services/get-prices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(flashMessage, auth, prices, router) {
        this.flashMessage = flashMessage;
        this.auth = auth;
        this.prices = prices;
        this.router = router;
        this.name = "Name";
        this.username = "user-name";
        this.email = "email@com";
        this.FP = 0;
        this.FPL = 0;
        this.FPC = 0;
        this.PGB = 0;
        this.FPA = 0;
        this.DL24 = 0;
        this.PLN = 5000;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.prices.getPrices();
        this.submitted = false;
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            wallet: {
                FP: this.FP,
                FPL: this.FPL,
                FPC: this.FPC,
                PGB: this.PGB,
                FPA: this.FPA,
                DL24: this.DL24,
                PLN: this.PLN
            }
        };
        this.auth.registerUser(user)
            .subscribe(function (data) {
            // console.log(data);
            if (!data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/register']);
                _this.submitted = true;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    RegisterComponent.prototype.onClickAgain = function () {
        this.username = "";
        this.submitted = false;
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_get_prices_service__["a" /* GetPricesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/sell-buy/sell-buy.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sell-buy/sell-buy.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"card mb-3 center-block\" style=\"width: 80%; margin: 0 auto;\" *ngIf=\"sellBuy.buy\">\r\n  <div class=\"card-header\"><h4>Buy shares of {{prices.Codes[sellBuy.i]}} </h4></div>\r\n  <div class=\"card-body\">\r\n    <form (ngSubmit)=\"onSubmitDelay()\" #buyForm=\"ngForm\">\r\n      <div>\r\n        <p class=\"mb-4\">You currently have {{auth.user.wallet.PLN}} PLN</p>\r\n      </div>\r\n      <div class=\"mb-2 form-row\">\r\n        <div class=\"col text-right\">\r\n            <label for=\"buy\" class=\"col-form-label\">Buy: </label>\r\n        </div>\r\n        <div class=\"col\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"buy_units\" name=\"buy_units\"\r\n          pattern=\"^\\+?([1-9]\\d*)$\" maxValidator=\"{{auth.user.wallet.PLN / prices.currPrices.items[sellBuy.i].price}}\"\r\n          #fbuy=\"ngModel\" required>\r\n\r\n          <div *ngIf=\"fbuy.invalid && (fbuy.dirty || fbuy.touched)\"\r\n            class=\"alert alert-danger ngValid\">\r\n            <div *ngIf=\"fbuy.errors.required\">\r\n              You need to specify number of units you want to buy.\r\n            </div>\r\n            <div *ngIf=\"fbuy.errors.pattern\">\r\n              This in is not a positive integer.\r\n            </div>\r\n            <div *ngIf=\"fbuy.errors.maxExceeded\">\r\n                You don't have enough money for this transaction.\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"col\">\r\n            <label class=\"col-form-label\">{{prices.Codes[sellBuy.i]}} unit(s)</label> \r\n        </div>\r\n        <div class=\"col\">\r\n            <label class=\"col-form-label\"> for {{ (prices.currPrices.items[sellBuy.i].price * buy_units).toFixed(2) }} PLN</label> \r\n        </div>\r\n        <div class=\"col\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-lg\" mwlConfirmationPopover\r\n            [disabled]=\"prices.srvBlocked || !buyForm.form.valid\"\r\n            [popoverTitle]=\"popoverTitle\"\r\n            [popoverMessage]=\"popoverMessage\"\r\n            placement=\"bottom\"\r\n            (confirm)=\"onClickBuy()\"\r\n            (cancel)=\"cancelClicked = true\">\r\n            Buy Shares\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card mb-3 center-block\" style=\"width: 80%; margin: 0 auto;\" *ngIf=\"!sellBuy.buy\">\r\n    <div class=\"card-header\"><h4>Sell shares of {{prices.Codes[sellBuy.i]}} </h4></div>\r\n    <div class=\"card-body\">\r\n      <form (ngSubmit)=\"onSubmitDelay()\" #sellForm=\"ngForm\">\r\n        <div>\r\n          <p>You currently have {{auth.user.wallet[prices.Codes[sellBuy.i]]}} unit(s) of {{prices.Codes[sellBuy.i]}}</p>\r\n        </div>\r\n        <div class=\"mb-2 form-row\">\r\n          <div class=\"col text-right\">\r\n              <label for=\"sell\" class=\"col-form-label\">Sell: </label>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"sell_units\" name=\"sell_units\"\r\n            maxValidator=\"{{auth.user.wallet[prices.Codes[sellBuy.i]]}}\" pattern=\"^\\+?([1-9]\\d*)$\"\r\n            #fsell=\"ngModel\" required>\r\n\r\n            <div *ngIf=\"fsell.invalid && (fsell.dirty || fsell.touched)\"\r\n              class=\"alert alert-danger ngValid\">\r\n              <div *ngIf=\"fsell.errors.required\">\r\n                You need to specify number of units you want to sell.\r\n              </div>\r\n              <div *ngIf=\"fsell.errors.maxExceeded\">\r\n                You don't have enough units for this transaction.\r\n              </div>\r\n              <div *ngIf=\"fsell.errors.pattern\">\r\n                This in is not a positive integer.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n                    \r\n          <div class=\"col\">\r\n              <label class=\"col-form-label\">{{prices.Codes[sellBuy.i]}} unit(s)</label> \r\n          </div>\r\n          <div class=\"col\">\r\n            <label class=\"col-form-label\"> for {{ (prices.currPrices.items[sellBuy.i].price * sell_units).toFixed(2) }} PLN</label> \r\n        </div>\r\n          <!-- <div class=\"col\">\r\n              <label class=\"col-form-label\">for {{ (prices.currPrices.items[this.sellBuy.i].price * buyUnits).toFixed(2) }} PLN</label> \r\n          </div> -->\r\n          <div class=\"col\">\r\n              <button class=\"btn btn-primary btn-lg\" mwlConfirmationPopover \r\n              [disabled]=\"prices.srvBlocked || !sellForm.form.valid\"\r\n              [popoverTitle]=\"popoverTitle\"\r\n              [popoverMessage]=\"popoverMessage\"\r\n              placement=\"bottom\"\r\n              (confirm)=\"onClickSell()\"\r\n              (cancel)=\"cancelClicked = true\">\r\n              Sell Shares\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n        "

/***/ }),

/***/ "./src/app/components/sell-buy/sell-buy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellBuyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_prices_service__ = __webpack_require__("./src/app/services/get-prices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sell_buy_service__ = __webpack_require__("./src/app/services/sell-buy.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SellBuyComponent = /** @class */ (function () {
    function SellBuyComponent(auth, prices, sellBuy, flashMessage, router) {
        this.auth = auth;
        this.prices = prices;
        this.sellBuy = sellBuy;
        this.flashMessage = flashMessage;
        this.router = router;
        this.buy_units = 1;
        this.sell_units = 1;
        this.delay = 10000;
        this.popoverTitle = 'Confirmation';
        this.popoverMessage = "Are you sure you want to make the transaction?";
        // public popoverMessage: string;
        this.cancelClicked = false;
    }
    SellBuyComponent.prototype.ngOnInit = function () {
        this.sellBuy.restoreNumCode();
        this.auth.getUser();
        this.prices.restorePrices();
    };
    // onClickUpdate(){
    //   this.popoverMessage = `Are you sure you want to buy ${ this.buyUnits * this.prices.currUnits[this.sellBuy.i] } ${ this.prices.currCodes[this.sellBuy.i] } for ${ (this.prices.currPrices.items[this.sellBuy.i].sellPrice * this.buyUnits).toFixed(2)} PLN?`;
    // }
    //if user in the meantime haven't hidden the popover in any way, after delay hide the popover
    SellBuyComponent.prototype.onSubmitDelay = function () {
        var mouseClick = new MouseEvent('click');
        setTimeout(function () {
            var cancelBtn = document.getElementsByClassName("btn-default")[0];
            //check if popover still opened
            if (cancelBtn) {
                cancelBtn.dispatchEvent(mouseClick);
            }
        }, this.delay);
    };
    SellBuyComponent.prototype.onClickBuy = function () {
        var _this = this;
        this.sellBuy.data.units = this.buy_units;
        this.sellBuy.data.num_code = this.sellBuy.i;
        this.sellBuy.data.user_id = this.auth.user.id;
        this.prices.buyUnits(this.sellBuy.data)
            .subscribe(function (response) {
            if (!response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            else {
                _this.auth.updateWallet(response.wallet);
                _this.flashMessage.show(response.msg, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['']);
            }
        }, function (err) {
            console.log(err);
            _this.flashMessage.show("Sorry, something went wrong, please try again later.", { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    SellBuyComponent.prototype.onClickSell = function () {
        var _this = this;
        this.sellBuy.data.units = this.sell_units;
        this.sellBuy.data.num_code = this.sellBuy.i;
        this.sellBuy.data.user_id = this.auth.user.id;
        this.prices.sellUnits(this.sellBuy.data)
            .subscribe(function (response) {
            if (!response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            else {
                _this.auth.updateWallet(response.wallet);
                _this.flashMessage.show(response.msg, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['']);
            }
        }, function (err) {
            console.log(err);
            _this.flashMessage.show("Sorry, something went wrong, please try again later.", { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    SellBuyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sell-buy',
            template: __webpack_require__("./src/app/components/sell-buy/sell-buy.component.html"),
            styles: [__webpack_require__("./src/app/components/sell-buy/sell-buy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_get_prices_service__["a" /* GetPricesService */],
            __WEBPACK_IMPORTED_MODULE_3__services_sell_buy_service__["a" /* SellBuyService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], SellBuyComponent);
    return SellBuyComponent;
}());



/***/ }),

/***/ "./src/app/components/sell/sell.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sell/sell.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\r\n    <div class=\"card-header\"><h4>My wallet</h4></div>\r\n    <div class=\"card-body p-0\">\r\n        <table class=\"table table-hover text-center mb-4\">\r\n          <thead class=\"thead-dark\">\r\n            <tr>\r\n              <th scope=\"col\">Company</th>\r\n              <th scope=\"col\">Unit price</th>\r\n              <th scope=\"col\">Amount</th>\r\n              <th scope=\"col\">Value</th>\r\n              <th scope=\"col\">Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody  *ngIf=\"prices.currPrices\">\r\n            <tr *ngFor=\"let unit of prices.Units; let i = index\">\r\n              <th scope=\"row\">{{ prices.Codes[i] }}</th>\r\n              <td>{{ prices.currPrices.items[i].price }}</td>\r\n              <td>{{ auth.user.wallet[prices.Codes[i]] }}</td>\r\n              <!--  +num.toFixed(2) to drop extra 0s at the end, (\"0 + foo\"), \r\n                    result (string) changed again into number => it uses only as many digits as necessary-->\r\n              <td>{{ +(auth.user.wallet[prices.Codes[i]] * prices.currPrices.items[i].price).toFixed(2) }}</td>\r\n              <td><button class=\"btn btn-primary\" (click)=\"sellCurrency(i)\" id=\"i\" [disabled]=\"!auth.user.wallet[prices.Codes[i]] || prices.srvBlocked\">Sell</button></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <hr>\r\n         <h5 class=\"m-4\">Available money: {{ +auth.user.wallet.PLN.toFixed(2) }} PLN</h5>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/sell/sell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_prices_service__ = __webpack_require__("./src/app/services/get-prices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sell_buy_service__ = __webpack_require__("./src/app/services/sell-buy.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SellComponent = /** @class */ (function () {
    function SellComponent(auth, prices, sellBuy, router) {
        this.auth = auth;
        this.prices = prices;
        this.sellBuy = sellBuy;
        this.router = router;
    }
    SellComponent.prototype.ngOnInit = function () {
        this.auth.getUser();
        this.prices.restorePrices();
    };
    SellComponent.prototype.sellCurrency = function (i) {
        this.prices.updatePrices();
        this.sellBuy.buy = false;
        this.sellBuy.i = i;
        this.sellBuy.storeNumCode(i);
        this.router.navigate(['transaction']);
    };
    SellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sell',
            template: __webpack_require__("./src/app/components/sell/sell.component.html"),
            styles: [__webpack_require__("./src/app/components/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_get_prices_service__["a" /* GetPricesService */],
            __WEBPACK_IMPORTED_MODULE_3__services_sell_buy_service__["a" /* SellBuyService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], SellComponent);
    return SellComponent;
}());



/***/ }),

/***/ "./src/app/components/srv-blocked/srv-blocked.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/srv-blocked/srv-blocked.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-warning\" *ngIf=\"prices.srvBlocked\">\r\n    <p>Our servers are currently under maintenace. Temporarily all transactions are suspended. Sorry for the inconvenience.</p>\r\n</div>\r\n<div class=\"alert alert-success\" *ngIf=\"!prices.srvBlocked && prices.displayLocal\">\r\n    Current prices from: {{prices.displayLocal}}.\r\n</div>"

/***/ }),

/***/ "./src/app/components/srv-blocked/srv-blocked.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvBlockedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_prices_service__ = __webpack_require__("./src/app/services/get-prices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SrvBlockedComponent = /** @class */ (function () {
    function SrvBlockedComponent(prices) {
        this.prices = prices;
    }
    SrvBlockedComponent.prototype.ngOnInit = function () {
    };
    SrvBlockedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-srv-blocked',
            template: __webpack_require__("./src/app/components/srv-blocked/srv-blocked.component.html"),
            styles: [__webpack_require__("./src/app/components/srv-blocked/srv-blocked.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_get_prices_service__["a" /* GetPricesService */]])
    ], SrvBlockedComponent);
    return SrvBlockedComponent;
}());



/***/ }),

/***/ "./src/app/max-ctrl.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MaxValidator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaxCtrlDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** A hero's name can't match the given regular expression */
function MaxValidator(numStr) {
    return function (control) {
        var forbidden = parseInt(numStr) < parseInt(control.value);
        return forbidden ? { 'maxExceeded': { value: control.value } } : null;
    };
}
var MaxCtrlDirective = /** @class */ (function () {
    function MaxCtrlDirective() {
    }
    MaxCtrlDirective_1 = MaxCtrlDirective;
    MaxCtrlDirective.prototype.validate = function (control) {
        return this.maxExceeded ? MaxValidator(this.maxExceeded)(control) : null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('maxValidator'),
        __metadata("design:type", String)
    ], MaxCtrlDirective.prototype, "maxExceeded", void 0);
    MaxCtrlDirective = MaxCtrlDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[maxValidator]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: MaxCtrlDirective_1, multi: true }]
        })
    ], MaxCtrlDirective);
    return MaxCtrlDirective;
    var MaxCtrlDirective_1;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, flashMessage) {
        this.auth = auth;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.flashMessage.show('Please login first. You are unauthorized to enter desired destination.', { cssClass: 'alert-danger', timeout: 5000 });
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
        // .toPromise()
        // .then(res => res.json());
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.getToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    AuthService.prototype.getUser = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    AuthService.prototype.updateWallet = function (wallet) {
        this.user.wallet = wallet;
        localStorage.setItem('user', JSON.stringify(this.user));
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/get-prices.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetPricesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetPricesService = /** @class */ (function () {
    function GetPricesService(http, auth, flashMessage) {
        var _this = this;
        this.http = http;
        this.auth = auth;
        this.flashMessage = flashMessage;
        this.Codes = ["FP", "FPL", "FPC", "PGB", "FPA", "DL24"];
        this.Units = [1, 100, 1, 50, 50, 100];
        this.timer = 3000;
        this.updatePrices();
        this.interval = setInterval(function () {
            _this.updatePrices();
        }, this.timer);
    }
    //checks if receive prices are new
    GetPricesService.prototype.handleTime = function (newDate) {
        if (this.lastDate != newDate) {
            //new prices      
            this.lastDate = newDate;
            this.dateTime = new Date(newDate);
            this.displayLocal = this.dateTime.toLocaleString();
            return true;
        }
        else {
            //current prices are up to date
            return false;
        }
    };
    GetPricesService.prototype.getPrices = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('stocks/current', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GetPricesService.prototype.buyUnits = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.auth.getToken();
        headers.append('Authorization', this.auth.authToken);
        return this.http.post('stocks/buy', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GetPricesService.prototype.sellUnits = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.auth.getToken();
        headers.append('Authorization', this.auth.authToken);
        return this.http.post('stocks/sell', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GetPricesService.prototype.storePrices = function (prices) {
        localStorage.setItem('prices', JSON.stringify(prices));
        this.currPrices = prices;
    };
    GetPricesService.prototype.restorePrices = function () {
        if (!this.currPrices) {
            this.currPrices = JSON.parse(localStorage.getItem('prices'));
        }
    };
    GetPricesService.prototype.updatePrices = function () {
        var _this = this;
        this.getPrices()
            .subscribe(function (data) {
            _this.srvBlocked = data.srvBlocked;
            if (!data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            else {
                if (_this.handleTime(data.current.publicationDate)) {
                    _this.storePrices(data.current);
                }
            }
        }, function (err) {
            // this.flashMessage.show("Our servers are currently under maintenace. Temporarily all transactions are suspended. Sorry for the inconvenience.", 
            // { cssClass: 'alert-danger', timeout: this.timer });
            console.log(err);
            _this.srvBlocked = true;
        });
    };
    GetPricesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], GetPricesService);
    return GetPricesService;
}());



/***/ }),

/***/ "./src/app/services/sell-buy.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellBuyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SellBuyService = /** @class */ (function () {
    function SellBuyService() {
        this.buy = true; // if true -> buy, if false -> sell
        this.i = 0;
        this.data = {};
    }
    SellBuyService.prototype.storeNumCode = function (num_code) {
        localStorage.setItem('num_code', JSON.stringify(num_code));
        this.i = num_code;
    };
    SellBuyService.prototype.restoreNumCode = function () {
        this.i = JSON.parse(localStorage.getItem('num_code'));
    };
    SellBuyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SellBuyService);
    return SellBuyService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateData = function (user) {
        if ((user.name == undefined) || (user.username == undefined) || (user.email == undefined) || (user.password == undefined)) {
            return false;
        }
        return true;
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService.prototype.validatePassword = function (password) {
        if (password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.isNormal = function (num) {
        return /^\+?(0|[1-9]\d*)$/.test(num);
    };
    ValidateService.prototype.validateAmounts = function (obj) {
        for (var o in obj) {
            //if empty field
            if (!obj[o]) {
                obj[o] = 0;
            }
            if (!this.isNormal(obj[o])) {
                return {
                    success: false,
                    msg: 'Amount of unit shares of ' + o + ' is not a non-negative integer. Please correct the value.'
                };
            }
        }
        return {
            success: true
        };
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map