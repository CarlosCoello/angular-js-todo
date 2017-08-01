webpackJsonp([1,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosComponent = (function () {
    function TodosComponent(firebaseService) {
        this.firebaseService = firebaseService;
        this.editInProcess = false;
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    TodosComponent.prototype.getTodos = function () {
        var _this = this;
        this.firebaseService.getData().subscribe(function (todos) {
            console.log(todos);
            _this.todos = todos;
        });
    };
    TodosComponent.prototype.editTodoItem = function (todo) {
        this.todoObj = todo;
        this.todoEdit = todo.todo;
        this.editInProcess = true;
    };
    TodosComponent.prototype.addToList = function () {
        this.firebaseService.addTodo(this.todo);
        this.form.reset();
    };
    TodosComponent.prototype.updateTodo = function (todoObj) {
        this.firebaseService.editTodo(todoObj.$key, this.todoEdit);
        this.form.reset();
        this.editInProcess = false;
    };
    TodosComponent.prototype.deleteTodoItem = function (todo) {
        this.firebaseService.removeTodo(todo.$key);
    };
    TodosComponent.prototype.goBack = function () {
        this.editInProcess = false;
    };
    return TodosComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('f'),
    __metadata("design:type", Object)
], TodosComponent.prototype, "form", void 0);
TodosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-todos',
        template: __webpack_require__(292),
        styles: [__webpack_require__(241)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
], TodosComponent);

var _a;
//# sourceMappingURL=todos.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD2FctPCALkGkDwct0U1qdTk6o_eSYAG5M",
        authDomain: "test-f03b1.firebaseapp.com",
        databaseURL: "https://test-f03b1.firebaseio.com",
        projectId: "test-f03b1",
        storageBucket: "",
        messagingSenderId: "724649040119"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 164;


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_routes__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(95);






if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_4__app_app_routes__["a" /* APP_ROUTES_PROVIDER */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* RequestOptions */]]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(289),
        styles: [__webpack_require__(238)],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_routes__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keys_pipe__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todos_todos_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_firebase_service__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
//StackOverflow Attribution regarding ERROR in ./~/firebase/app/shared_promise.js
//question author bekamais
//question author stackoverflow profile link https://stackoverflow.com/users/7871788/bekamais
//answer author Zafer
//question author stackoverflow profile https://stackoverflow.com/users/7340228/zafer
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_7__todos_todos_component__["a" /* TodosComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__keys_pipe__["a" /* KeysPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_routes__["a" /* APP_ROUTES_PROVIDER */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_firebase_service__["a" /* FirebaseService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'keys'
    })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".container {\n  width: 100%;\n}\n\n.navbar-brand {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 22px;\n}\n\n.navbar-default .navbar-nav li a {\n  font-size: 16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" [routerLink]=\"['/']\">TODO Web app</a>\n      </div><!-- .navbar-header -->\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n          <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['todos']\">Todos List</a></li>\n          <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['contact']\">Contact</a></li>\n        </ul>\n      </div><!--/.nav-collapse -->\n    </div><!-- .container -->\n  </nav><!-- .navbar-inverse -->\n</header><!-- header -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group has-feedback\" [ngClass]=\"{\n      'has-success': name?.valid && (name?.dirty || name?.touched),\n      'has-error': name?.invalid && (name?.dirty || name?.touched)\n    }\">\n      <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\" placeholder=\"Name\" required #name=\"ngModel\">\n      <div class=\"form-control-feedback\" style=\"position:relative; width: 100%; text-align:left; top: 0;\" *ngIf=\"name.errors && (name.dirty || name.touched)\">\n        <p *ngIf=\"name.errors.required\">Name is required</p>\n      </div>\n    </div>\n    <div class=\"form-group has-feedback\" [ngClass]=\"{\n      'has-success': email?.valid && (email?.dirty || email?.touched),\n      'has-error': email?.invalid && (email?.dirty || email?.touched)\n    }\">\n      <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" placeholder=\"Email\" required pattern=\"[^ @]*@[^ @]*\" #email=\"ngModel\">\n      <div class=\"form-control-feedback\" style=\"position:relative; width: 100%; text-align:left; top: 0;\" *ngIf=\"email.errors && (email.dirty || email.touched)\">\n        <p *ngIf=\"email.errors.required\">Email is required</p>\n        <p *ngIf=\"email.errors.pattern\">Email must contain at least the @ character</p>\n      </div>\n      <br>\n      <pre>Dirty? {{f.form.controls.email?.dirty}}</pre>\n      <pre>Pristine? {{f.form.controls.email?.pristine}}</pre>\n      <pre>Touched? {{f.form.controls.email?.touched}}</pre>\n      <pre>UnTouched? {{f.form.controls.email?.untouched}}</pre>\n      <pre>Valid? {{f.form.controls.email?.valid}}</pre>\n      <pre>InValid? {{f.form.controls.email?.invalid}}</pre>\n    </div>\n    <div class=\"form-group has-feedback\" [ngClass]=\"{\n      'has-success': message?.valid && (message?.dirty || message?.touched),\n      'has-error': message?.invalid && (message?.dirty || message?.touched)\n    }\">\n      <textarea name=\"message\" class=\"form-control\" [(ngModel)]=\"model.message\" rows=\"8\" cols=\"80\" placeholder=\"Type Message\" required #message=\"ngModel\"></textarea>\n      <div class=\"form-control-feedback\" style=\"position:relative; width: 100%; text-align:left; top: 0;\" *ngIf=\"message.errors && (message.dirty || message.touched)\">\n        <p *ngIf=\"message.errors.required\">Message is required</p>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"f.invalid\">Submit</button>\n    <pre> {{ f.value | json }} </pre>\n  </form><!-- form -->\n</div><!-- .container -->\n"

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = "<header class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>TODO LIST APP!</h1>\n    <p>Have you every forgot to do a task during the day? Well you will no more have to memorize it because with this APP now you can just add it to the TODO LIST and that is it. Easy right!</p>\n    <p>Well, what are you waiting for start doing your list :)\n      <p>\n        <p><a class=\"btn btn-primary btn-lg\" [routerLink]=\"['todos']\" role=\"button\">Go to TODOS LIST</a></p>\n  </div><!-- .jumbotron -->\n</header><!-- .container -->\n"

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <section class=\"todo-forms\">\n    <div *ngIf=\"!editInProcess\" class=\"add-todo\">\n      <header>\n        <h2>Add your TODO LIST Below:</h2>\n      </header>\n      <form novalidate #f=\"ngForm\" (ngSubmit)=\"addToList()\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todo\" name=\"task\" placeholder=\"Enter TODO\">\n        <button type=\"submit\" class=\"btn btn-success\">Add TODO</button>\n      </form>\n    </div><!-- .add-todo -->\n\n    <div *ngIf=\"editInProcess\" class=\"edit-todo\">\n      <header>\n        <h2>Edit and Update your TODO LIST Below:</h2>\n      </header>\n      <form novalidate #f=\"ngForm\" (ngSubmit)=\"updateTodo(todoObj)\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todoEdit\" name=\"taskedit\">\n        <button type=\"submit\" class=\"btn btn-success\">Update TODO</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"goBack()\">Add TODO</button>\n      </form>\n    </div><!-- .edit-todo -->\n  </section><!-- .todo-forms -->\n\n  <br>\n  <section class=\"todo-list\">\n    <header>\n      <h3>Current TODO LIST</h3>\n    </header>\n    <br>\n    <ul>\n      <li *ngFor=\"let todo of todos\" class=\"well well-sm\" style=\"list-style: none;font-size: 16px;\">\n          {{ todo.todo }}\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editTodoItem(todo)\">Edit</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteTodoItem(todo)\">Delete</button>\n      </li>\n     </ul>\n  </section><!-- .todo-list -->\n</div>\n"

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(165);


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_contact_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todos_todos_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES_PROVIDER; });




var APP_ROUTES = [
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_0__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'todos',
        component: __WEBPACK_IMPORTED_MODULE_1__todos_todos_component__["a" /* TodosComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    }
];
var APP_ROUTES_PROVIDER = [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES)];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* unused harmony export FormM */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.model = new FormM();
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function () {
        console.log('Form Submitted');
        console.log(this.form.value);
        console.log(this.form.value.name);
        this.form.reset();
    };
    return ContactComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('f'),
    __metadata("design:type", Object)
], ContactComponent.prototype, "form", void 0);
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(290),
        styles: [__webpack_require__(239)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

var FormM = (function () {
    function FormM(name, email, message) {
        if (name === void 0) { name = ''; }
        if (email === void 0) { email = ''; }
        if (message === void 0) { message = ''; }
        this.name = name;
        this.email = email;
        this.message = message;
    }
    return FormM;
}());

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(291),
        styles: [__webpack_require__(240)],
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.getData = function () {
        this.todos = this.db.list('/todos');
        return this.todos;
    };
    FirebaseService.prototype.addTodo = function (todo) {
        return this.todos.push({ todo: todo });
    };
    FirebaseService.prototype.editTodo = function (key, todo) {
        return this.todos.update(key, { todo: todo });
    };
    FirebaseService.prototype.removeTodo = function (key) {
        return this.todos.remove(key);
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], FirebaseService);

var _a;
//# sourceMappingURL=firebase.service.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.bundle.js.map