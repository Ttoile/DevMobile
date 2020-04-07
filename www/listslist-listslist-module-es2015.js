(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listslist-listslist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/listslist/listslist.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listslist/listslist.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Available Lists'\"></app-header>\n\n<ion-content fullscreen>\n  <br>\n  <ion-title>My lists</ion-title>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let list of lists\">\n      <ion-item ion-button [routerLink]=\"['/todoslist', list.id]\">\n        <ion-label>\n          <h2>{{ list.title }}</h2>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"delete(list)\">\n          <ion-icon slot=\"top\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <section>\n    <ion-button expand=\"block\" [routerLink]=\"['/add-list']\">Add a New list</ion-button>\n  </section>\n  <br>\n  <ion-title>Lists shared - read only</ion-title>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let list of listsWatchOnly\">\n      <ion-item ion-button [routerLink]=\"['/todoslist', list.id]\">\n        <ion-label>\n          <h2>{{ list.title }}</h2>\n        </ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n  <br>\n  <ion-title>Lists shared - read and write</ion-title>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let list of listsShared\">\n      <ion-item ion-button [routerLink]=\"['/todoslist', list.id]\">\n        <ion-label>\n          <h2>{{ list.title }}</h2>\n        </ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/listslist/listslist-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/listslist/listslist-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ListslistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListslistPageRoutingModule", function() { return ListslistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _listslist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listslist.page */ "./src/app/listslist/listslist.page.ts");




const routes = [
    {
        path: '',
        component: _listslist_page__WEBPACK_IMPORTED_MODULE_3__["ListslistPage"]
    }
];
let ListslistPageRoutingModule = class ListslistPageRoutingModule {
};
ListslistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListslistPageRoutingModule);



/***/ }),

/***/ "./src/app/listslist/listslist.module.ts":
/*!***********************************************!*\
  !*** ./src/app/listslist/listslist.module.ts ***!
  \***********************************************/
/*! exports provided: ListslistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListslistPageModule", function() { return ListslistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listslist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listslist-routing.module */ "./src/app/listslist/listslist-routing.module.ts");
/* harmony import */ var _listslist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listslist.page */ "./src/app/listslist/listslist.page.ts");
/* harmony import */ var _small_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../small-components/header/header.module */ "./src/app/small-components/header/header.module.ts");








let ListslistPageModule = class ListslistPageModule {
};
ListslistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listslist_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListslistPageRoutingModule"],
            _small_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
        ],
        declarations: [_listslist_page__WEBPACK_IMPORTED_MODULE_6__["ListslistPage"]]
    })
], ListslistPageModule);



/***/ }),

/***/ "./src/app/listslist/listslist.page.scss":
/*!***********************************************!*\
  !*** ./src/app/listslist/listslist.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RzbGlzdC9saXN0c2xpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/listslist/listslist.page.ts":
/*!*********************************************!*\
  !*** ./src/app/listslist/listslist.page.ts ***!
  \*********************************************/
/*! exports provided: ListslistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListslistPage", function() { return ListslistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_collec_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/collec-list.service */ "./src/app/services/collec-list.service.ts");
/* harmony import */ var _services_authentification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentification.service */ "./src/app/services/authentification.service.ts");




let ListslistPage = class ListslistPage {
    constructor(listService, auth) {
        this.listService = listService;
        this.auth = auth;
        this.listService.getDatabaseReloaded.subscribe(() => { this.getListsFromService(); });
        this.getListsFromService();
    }
    ngOnInit() {
    }
    getListsFromService() {
        this.listService.getLists().subscribe(res => this.lists = res);
        this.listService.getListsWatchOnly().subscribe(res => this.listsWatchOnly = res);
        this.listService.getListsShared().subscribe(res => this.listsShared = res);
    }
    delete(list) {
        this.listService.delete(list);
    }
};
ListslistPage.ctorParameters = () => [
    { type: _services_collec_list_service__WEBPACK_IMPORTED_MODULE_2__["CollecList"] },
    { type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ListslistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listslist',
        template: __webpack_require__(/*! raw-loader!./listslist.page.html */ "./node_modules/raw-loader/index.js!./src/app/listslist/listslist.page.html"),
        styles: [__webpack_require__(/*! ./listslist.page.scss */ "./src/app/listslist/listslist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_collec_list_service__WEBPACK_IMPORTED_MODULE_2__["CollecList"], _services_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], ListslistPage);



/***/ }),

/***/ "./src/app/services/authentification.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/authentification.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
        this.getLoggedInName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // signup(email: string, password: string) {
    //   firebase
    //       .auth()
    //       .createUserWithEmailAndPassword(email, password)
    //       .then(value => {
    //         console.log('Success!', value);
    //       })
    //       .catch(err => {
    //         console.log('Something went wrong:',err.message);
    //       });
    //   this.router.navigate(['/login']);
    // }
    signup(email, password) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
            .createUserWithEmailAndPassword(email, password);
    }
    login(email, password) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
            .signInWithEmailAndPassword(email, password)
            .finally(() => { this.getLoggedInName.emit(this.getUsername()); });
    }
    logout() {
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
            .signOut();
        if (this.router.url !== '/login')
            this.router.navigate(['/login']);
    }
    getUsername() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser ? firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email : "";
    }
    getUserID() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser ? firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid : "";
    }
    isConnected() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser ? true : false;
    }
    resetPassword(email) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().sendPasswordResetEmail(email);
    }
    sendEmailVerif() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.sendEmailVerification();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AuthService.prototype, "getLoggedInName", void 0);
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AuthService);



/***/ })

}]);
//# sourceMappingURL=listslist-listslist-module-es2015.js.map