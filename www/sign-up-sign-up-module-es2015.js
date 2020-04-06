(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-up/sign-up.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-up/sign-up.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Sign up'\"></app-header>\n\n<ion-content >\n  <form  #form=\"ngForm\" (ngSubmit)=\"signUp(login.value,motDePasse.value,confirmLogin.value,confirmMotDePasse.value)\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>Create your account!</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-input  name=\"email\" type=\"email\" placeholder=\"your@email.com\" ngModel required #login></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"confirmemail\" type=\"email\" placeholder=\"your@email.com again\" ngModel required #confirmLogin></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required #motDePasse></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"confirm\" type=\"password\" placeholder=\"Password again\" ngModel required #confirmMotDePasse></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button  size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Register</ion-button>\n          </div>\n          <div padding>\n            <ion-text color=\"danger\" *ngIf=\"!hideErrMessage\">{{errMessage}}</ion-text>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n\n\n\n<!-- <ion-content>\n  <ion-input #login type=\"text\">Adresse Mail</ion-input>\n  <ion-input #confirmLogin type=\"text\">Confirmation adresse mail</ion-input>\n  <ion-input #motDePasse type=\"text\">Mot de passe</ion-input>\n  <ion-input #confirmMotDePasse type=\"text\">Confirmation mot de passe</ion-input>\n  <ion-button (click)=signUp(login.value,motDePasse.value,confirmLogin.value,confirmMotDePasse.value)>Sign-Up</ion-button>\n</ion-content> -->\n"

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



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _authentification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentification.service */ "./src/app/services/authentification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UsersService = class UsersService {
    constructor(db, authServ) {
        this.db = db;
        this.authServ = authServ;
        this.usersCorrespCollection = this.db.collection('users');
        this.usersCorrespObs = this.usersCorrespCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        this.usersCorrespObs.subscribe(res => this.usersCorresp = res);
    }
    addUser(newUser) {
        return this.usersCorrespCollection.add(newUser);
    }
    userExist(mail) {
        let ret = false;
        this.usersCorresp.forEach(val => {
            if (val.email == mail)
                ret = true;
        }, this);
        return ret;
    }
    getUserId(mail) {
        let ret;
        this.usersCorresp.forEach(val => {
            if (val.email == mail)
                ret = val.uid;
        }, this);
        return ret;
    }
    getUserMail(uid) {
        let ret;
        this.usersCorresp.forEach(val => {
            if (val.uid == uid)
                ret = val.email;
        }, this);
        return ret;
    }
};
UsersService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], UsersService);



/***/ }),

/***/ "./src/app/sign-up/sign-up-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SignUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function() { return SignUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ "./src/app/sign-up/sign-up.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/app/sign-up/sign-up-routing.module.ts");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");
/* harmony import */ var _small_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../small-components/header/header.module */ "./src/app/small-components/header/header.module.ts");








let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"],
            _small_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
    })
], SignUpPageModule);



/***/ }),

/***/ "./src/app/sign-up/sign-up.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentification.service */ "./src/app/services/authentification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");





let SignUpPage = class SignUpPage {
    constructor(authServ, users, router) {
        this.authServ = authServ;
        this.users = users;
        this.router = router;
    }
    ngOnInit() {
        this.hideErrMessage = true;
        this.errMessage = "";
    }
    signUp(log, mdp, conflog, confmdp) {
        //this.authServ.login(log, mdp);
        if (log !== conflog) {
            // console.log("Les deux adresse mails doivent être les même");
            this.hideErrMessage = false;
            this.errMessage = "Les deux adresse mails doivent être les même";
        }
        else if (mdp !== confmdp) {
            // console.log("Les mots de passe doivent correspondrent");
            this.hideErrMessage = false;
            this.errMessage = "Les mots de passe doivent correspondrent";
        }
        else {
            this.authServ.signup(log, mdp).then(value => {
                console.log('Success!', value);
                const newUser = { email: log, uid: this.authServ.getUserID() };
                this.users.addUser(newUser);
                this.hideErrMessage = true;
                this.router.navigate(['/login']);
            })
                .catch(err => {
                this.hideErrMessage = false;
                this.errMessage = err.message;
                console.log('Something went wrong:', err.message);
            });
        }
    }
};
SignUpPage.ctorParameters = () => [
    { type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__(/*! raw-loader!./sign-up.page.html */ "./node_modules/raw-loader/index.js!./src/app/sign-up/sign-up.page.html"),
        styles: [__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/sign-up/sign-up.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SignUpPage);



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module-es2015.js.map