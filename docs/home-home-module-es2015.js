(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"search\" [translucent]=\"true\" color=\"translucent\" no-border no-shadow>\n  <ion-toolbar color=\"translucent\">\n\n    <img class=\"about-icon\" slot=\"start\" src=\"assets/icon/favicon.png\" (click)=\"openAboutModal()\">\n    <!-- <ion-icon slot=\"end\" name=\"search\" (click)=\"search = true\"></ion-icon> -->\n\n    <ion-searchbar showCancelButton=\"always\" type=\"text\" placeholder=\"Search\" inputmode=\"text\" debounce=\"350\" animated=\"true\"  (ionChange)=\"getItems($event)\" (ionCancel)=\"closeEverything();\"></ion-searchbar>\n    <ion-list class=\"search-filters\" *ngIf=\"itemAvailable\">\n      <ion-item *ngFor=\"let it of filteredItems\" (click)=\"closeEverything(); goToItem(it);\">\n        <img class=\"search-icon\" *ngIf=\"it['ICON']\" src=\"{{it['ICON']}}\" slot=\"end\">\n        <!-- building does not have icon -->\n        <img class=\"search-icon\" *ngIf=\"!it['ICON']\" src=\"svg/business-outline.svg\" slot=\"end\">\n\n        <ion-label slot=\"start\">\n          <p *ngIf=\"it['TITLE']\">{{it['TITLE']}}</p>\n          <p *ngIf=\"!it['TITLE']\">{{it['SHORTENED_NAME']}}</p>\n          <small class=\"ion-text-nowrap des\">{{it['DESCRIPTION']}}</small>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <!-- <ion-button (click)=\"printData()\">print</ion-button> -->\n  </ion-toolbar>\n</ion-header>\n\n<!-- [fullscreen]=\"true -->\n\n<ion-content padding>\n  <div [ngClass]=\"{'search' : search, 'nosearch' : !search}\" id=\"map_canvas\">\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button color=\"success\">\n        <ion-icon name=\"color-filter-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"bottom\">\n        <ion-fab-button class=\"fab-button-show\" *ngFor=\"let filter of filters\" (click)=\"stop_close($event); filter['ACTIVE'] = !filter['ACTIVE']; publishEvent(filter['FILTER_NAME'], filter);\" (press)=\"onPress(filter)\" (pressup)=\"onPressUp()\">\n          <ion-icon *ngIf=\"!filter['ACTIVE']\" [name]=\"filter['ICON']\"></ion-icon>\n          <ion-icon *ngIf=\"filter['ACTIVE']\" [name]=\"filter['ICON-SELECTED']\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab-list>\n      <ion-fab-list side=\"end\">\n        <ion-fab-button>\n          <ion-icon name=\"business-outline\" (click)=\"openBuildingListModal();\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button>\n          <ion-icon name=\"search-circle-outline\" (click)=\"search = !search\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button>\n          <ion-icon name=\"settings-outline\" (click)=\"openAboutModal();\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _building_modal_building_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../building-modal/building-modal.module */ "./src/app/building-modal/building-modal.module.ts");
/* harmony import */ var _filter_modal_filter_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../filter-modal/filter-modal.module */ "./src/app/filter-modal/filter-modal.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../about/about.module */ "./src/app/about/about.module.ts");










let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _building_modal_building_modal_module__WEBPACK_IMPORTED_MODULE_7__["BuildingModalPageModule"],
            _filter_modal_filter_modal_module__WEBPACK_IMPORTED_MODULE_8__["FilterModalPageModule"],
            _about_about_module__WEBPACK_IMPORTED_MODULE_9__["AboutPageModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
        entryComponents: []
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search {\n  top: 0vh;\n  width: 100%;\n  height: 94vh;\n  z-index: 1;\n}\n\n.nosearch {\n  top: 0vh;\n  width: 100%;\n  height: 100vh;\n  z-index: 1;\n}\n\nion-icon {\n  font-size: 24px;\n}\n\n.search-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.des {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.search-filters {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  width: 100%;\n  max-height: 40vh;\n}\n\nion-searchbar {\n  padding: 0px;\n  margin: 1px;\n  height: 6vh;\n}\n\n.about-icon {\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n  margin-top: 2px;\n}\n\nion-header {\n  height: 6vh;\n  z-index: 5;\n}\n\n.title {\n  height: 6vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9hcm1hYS9EZXNrdG9wL2NvZGluZy9zdXNXb3JrL3N1c01hcHYxL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNIRjs7QURNQTtFQUNFLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwX2NhbnZhcyB7XG5cbn1cblxuLnNlYXJjaCB7XG4gIHRvcDogMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NHZoO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubm9zZWFyY2gge1xuICB0b3A6IDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDE7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uc2VhcmNoLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uZGVzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zZWFyY2gtZmlsdGVycyB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNDB2aDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAxcHg7XG4gIGhlaWdodDogNnZoO1xufVxuXG4uYWJvdXQtaWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG5pb24taGVhZGVyIHtcbiAgaGVpZ2h0OiA2dmg7XG4gIHotaW5kZXg6IDU7XG59XG5cbi50aXRsZSB7XG4gIGhlaWdodDogNnZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiLnNlYXJjaCB7XG4gIHRvcDogMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NHZoO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubm9zZWFyY2gge1xuICB0b3A6IDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDE7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uc2VhcmNoLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uZGVzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zZWFyY2gtZmlsdGVycyB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNDB2aDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAxcHg7XG4gIGhlaWdodDogNnZoO1xufVxuXG4uYWJvdXQtaWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG5pb24taGVhZGVyIHtcbiAgaGVpZ2h0OiA2dmg7XG4gIHotaW5kZXg6IDU7XG59XG5cbi50aXRsZSB7XG4gIGhlaWdodDogNnZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _mapStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapStyle */ "./src/app/home/mapStyle.ts");
/* harmony import */ var _events_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../events/event.service */ "./src/app/events/event.service.ts");
/* harmony import */ var _services_app_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/app-data.service */ "./src/app/services/app-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _building_modal_building_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../building-modal/building-modal.page */ "./src/app/building-modal/building-modal.page.ts");
/* harmony import */ var _filter_modal_filter_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../filter-modal/filter-modal.page */ "./src/app/filter-modal/filter-modal.page.ts");
/* harmony import */ var _building_list_modal_building_list_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../building-list-modal/building-list-modal.page */ "./src/app/building-list-modal/building-list-modal.page.ts");
/* harmony import */ var _about_about_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../about/about.page */ "./src/app/about/about.page.ts");













let HomePage = class HomePage {
    constructor(toastCtrl, platform, menu, events, appData, router, zone, loadingController, modalController) {
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.menu = menu;
        this.events = events;
        this.appData = appData;
        this.router = router;
        this.zone = zone;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.htmlInfoWindow = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["HtmlInfoWindow"]();
        this.buildings = [];
        this.filters = [];
        this.dataFlag = false; //used in couplation of loading controller
        // @ViewChild('filter_fab', {static: false}) filterFab: IonFab;
        this.pressFlag = false; //press and hold for filter items
        this.search = false; //for search functionality
        this.itemAvailable = false; //for search functionality
        this.filteredItems = []; //for search functionality
        this.toSearch = []; //for search functionality
        this.about = {};
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.htmlInfoWindow.close();
            }
            catch (error) {
            }
        });
    }
    ionViewDidEnter() {
        this.menu.enable(true, 'insideMap');
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //get building data and filter names
            yield this.events.subscribe("Building and Filter Names", (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.buildings = data[0];
                this.filters = data[1];
                console.log("got it");
                //load the map
                yield this.loadMap();
                //close the fab when map is clicked
                this.map.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MAP_CLICK).subscribe((params) => {
                    console.log("map click");
                    this.closeEverything();
                });
                //below is only possible with the data recieved
                // add the buildings
                this.addBuildings();
                //get the filter data whenever
                this.appData.getAllFilterData(true).then((data) => {
                    this.filters = data;
                    var promArr = [];
                    for (let i = 0; i < this.filters.length; i++) {
                        promArr.push(this.createFilterMarkers(this.filters[i]["DATA"]));
                    }
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(promArr).subscribe((data) => {
                        //following must be included after the filters
                        for (let i = 0; i < this.filters.length; i++) {
                            this.map.addEventListener(this.filters[i]['FILTER_NAME']).subscribe(() => {
                                for (let j = 0; j < this.filters[i]['DATA'].length; j++) {
                                    //set each marker visible according to active status
                                    this.filters[i]['DATA'][j]['MARKER'].setVisible(this.filters[i]['ACTIVE']);
                                }
                            });
                        }
                        this.dataFlag = true;
                        //try to dismiss the loading if it is necessary
                        try {
                            this.loading.dismiss();
                        }
                        catch (error) {
                            console.log("not needed: " + error);
                        }
                        console.log("added all markers and listeners");
                    });
                });
                // updated event filters active status from menu
                for (let i = 0; i < this.filters.length; i++) {
                    //make filter active/not active
                    yield this.events.subscribe(this.filters[i]['FILTER_NAME'], (data) => {
                        // update active status
                        this.filters[i]['ACTIVE'] = data['ACTIVE'];
                        //first check if data has come in
                        if (!this.dataFlag) {
                            console.log("U GOTTA WAIT");
                            this.loading.present().then(() => {
                                this.loading.onWillDismiss.then(() => {
                                    this.changeStatus(this.filters[i]['FILTER_NAME']);
                                });
                            });
                        }
                        else {
                            if (!this.filters[i]['DATA'][0]['MARKER']) {
                                console.log("NO MARKER....AHH SHIT");
                            }
                            //if it has then update the visible status
                            this.changeStatus(this.filters[i]['FILTER_NAME']);
                        }
                    });
                }
            }));
            // await this.appData.getBuildingFilterNames(true, "home").then((data) => {
            //   this.buildings = data[0];
            //   this.filters = data[1];
            // });
            this.loading = yield this.loadingController.create({
                spinner: "bubbles",
                duration: 500 * this.filters.length,
                message: "Fetching Data...",
                translucent: true,
                backdropDismiss: false
            });
            // Since ngOnInit() is executed before `deviceready` event,
            // you have to wait the event.
            yield this.platform.ready();
            this.aboutData(); //execute with low priority
            // setTimeout(() => {
            //   console.log("animating camera");
            // this.map.animateCamera({
            //   target: {lat: 37.363595, lng: -120.425361},
            //   zoom: 16.5,
            //   tilt: 0,
            //   // bearing: 140,
            //   duration: 15000
            // }).then(() => {
            //   alert("Camera target has been changed");
            // });
            // }, 8000);
            // this.filterFab = angular.element(document.getElementsByClassName("filter_fab"));
        });
    }
    loadMap() {
        let style = [];
        style = _mapStyle__WEBPACK_IMPORTED_MODULE_4__["mapStyle"];
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"].create('map_canvas', {
            camera: {
                target: {
                    lat: 37.363595,
                    lng: -120.425361
                },
                zoom: 16,
                tilt: 0,
            },
            'gestures': {
                'scroll': true, 'tilt': true, 'rotate': false, 'zoom': true
            },
            styles: style,
            preferences: {
                zoom: {
                    minZoom: 15,
                    maxZoom: 17.5
                },
            }
        });
        this.map.setIndoorEnabled(true);
        this.map.setCompassEnabled(false);
        this.map.setMyLocationEnabled(false);
        this.map.setMyLocationButtonEnabled(false);
    }
    animateCamera(lat, long) {
        console.log("animating camera");
        this.map.animateCamera({
            target: { lat: lat, lng: long },
            zoom: 17,
            tilt: 0,
            // bearing: 140,
            duration: 2000
        });
    }
    addBuildings() {
        for (let i = 0; i < this.buildings.length; i++) {
            const building = this.buildings[i];
            //set up for icons at this location
            this.buildings[i]["ICONS"] = [];
            // add the coordinates
            var coords = [];
            for (let coor = 1; coor <= building['NUM_COORDINATES']; coor++) {
                var latC = building['LATITUDE ' + coor];
                var longC = building['LONGITUDE ' + coor];
                var tempCoorSet = {
                    lat: latC,
                    lng: longC
                };
                coords.push(tempCoorSet);
            }
            let buildingCoor = coords;
            this.buildings[i]['COORS'] = buildingCoor;
            // create polygon
            let polygon = this.map.addPolygonSync({
                points: buildingCoor,
                strokeColor: '#537ed0',
                fillColor: '#eaf0ff',
                strokeWidth: 5,
                zIndex: 1,
                clickable: true
            });
            // when clicked open htmlinfo window.
            polygon.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].POLYGON_CLICK).subscribe((data) => {
                console.log("polygon clicked");
                // this.filterFab.close(); //close the fab
                // html info window when polygon is clicked
                let frame = document.createElement('div');
                //animate later class="animated infinite pulse"
                frame.innerHTML = `
          <div class="infoWindow ion-text-nowrap">
            ` + building['SHORTENED_NAME'] + `
          </div>`;
                frame.getElementsByClassName("infoWindow")[0].addEventListener("click", () => {
                    //open modal instead
                    this.htmlInfoWindow.close();
                    this.goToPage(building);
                });
                this.htmlInfoWindow.setContent(frame, {
                    "text-align": 'center',
                    "height": "5vh",
                    "width": "auto",
                    "padding": "0px",
                    "margin": "-5px",
                    "margin-top": "1vh"
                });
                let centerMarker = this.map.addMarkerSync({
                    position: (new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["LatLngBounds"](this.buildings[i]['COORS'])).getCenter(),
                    visible: false,
                    zIndex: 0
                });
                // this.buildings[i]['CENTER'] = centerMarker;
                this.htmlInfoWindow.open(centerMarker);
            });
            this.buildings[i]['POLYGON'] = polygon;
            this.toSearch.push(this.buildings[i]);
        }
    }
    addIconToBuilding(iconUrl, buildingID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const ind = this.buildings.findIndex(building => building['BUILDING_ID'] === buildingID);
            this.buildings[ind]["ICONS"].push(iconUrl);
        });
    }
    //array of data of json objects to create the markers for
    createFilterMarkers(arr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                for (let j = 0; j < arr.length; j++) {
                    var icon;
                    if (arr[j]['ICON'].slice(0, 3) == "data") {
                        arr[j]['ICON'] = arr[j]['ICON']; //base64 data
                    }
                    else if (arr[j]['ICON']) {
                        arr[j]['ICON'] = 'assets/icon/' + arr[j]['ICON'] + '.png';
                    }
                    else {
                        arr[j]['ICON'] = "assets/icon/favicon.png";
                    }
                    icon = {
                        url: arr[j]['ICON'],
                        size: {
                            width: 35,
                            height: 35
                        }
                    };
                    var marker = this.map.addMarkerSync({
                        position: {
                            lat: arr[j]['LATITUDE'],
                            lng: arr[j]['LONGITUDE']
                        },
                        icon: icon,
                        visible: false,
                        zIndex: 2,
                        disableAutoPan: true
                    });
                    arr[j]['MARKER'] = marker;
                    this.toSearch.unshift(arr[j]);
                    marker.addEventListener(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MARKER_CLICK).subscribe(() => {
                        // this.filterFab.close(); //close the fab
                        // html info window when marker is clicked
                        let frame = document.createElement('div');
                        frame.innerHTML = `
            <div class="markerInfoWindow">
              <h5>` + arr[j]['TITLE'] + `</h5>
              <p><small>` + arr[j]['DESCRIPTION'] + `<small></p>
            </div>
            `;
                        this.htmlInfoWindow.setContent(frame, {
                            "text-align": 'center',
                            "min-height": "20vh",
                            "max-height": "40vh",
                            "min-width": "45vw",
                            "max-width": "65vw",
                            "padding": "0px",
                            "margin": "-1vw",
                        });
                        this.htmlInfoWindow.open(arr[j]['MARKER']);
                    });
                    if (j == arr.length - 1) {
                        resolve(j);
                    }
                }
            });
        });
    }
    changeStatus(cluster) {
        this.map.trigger(cluster);
    }
    goToPage(buildingData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(buildingData);
            const modal = yield this.modalController.create({
                component: _building_modal_building_modal_page__WEBPACK_IMPORTED_MODULE_9__["BuildingModalPage"],
                componentProps: {
                    building: buildingData
                },
                swipeToClose: true,
                cssClass: 'my-modal'
            });
            modal.onDidDismiss().then((detail) => {
                try {
                    if (detail.data.redirect) {
                    }
                }
                catch (error) {
                    // console.log("no redirect");
                }
            });
            this.closeEverything();
            yield modal.present();
        });
    }
    stop_close(event) {
        event.stopPropagation();
    }
    publishEvent(eventName, data) {
        this.events.publish(eventName, data);
    }
    onPress(filterData) {
        console.log("press");
        this.pressFlag = true;
        setTimeout(() => {
            if (this.pressFlag) {
                this.openFilterModal(filterData);
            }
            else {
                // console.log("did not hold");
            }
        }, 500); //hold for 500 ms
    }
    onPressUp() {
        // console.log("press up");
        this.pressFlag = false;
    }
    openFilterModal(filterData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("filter modal");
            const modal = yield this.modalController.create({
                component: _filter_modal_filter_modal_page__WEBPACK_IMPORTED_MODULE_10__["FilterModalPage"],
                componentProps: {
                    filter: filterData
                },
                swipeToClose: true,
                cssClass: 'filter-modal'
            });
            modal.onDidDismiss().then((detail) => {
                try {
                    // console.log(detail.data);
                    if (detail.data.redirect) {
                        const loc = detail.data['marker'].getPosition();
                        this.animateCamera(loc['lat'], loc['lng']);
                        detail.data['marker'].setVisible(true);
                        detail.data['marker'].trigger(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MARKER_CLICK, loc);
                    }
                }
                catch (error) {
                    // console.log("no redirect");
                }
            });
            this.closeEverything();
            yield modal.present();
        });
    }
    getItems(ev) {
        this.filteredItems = []; //reset filteredItems
        const val = ev.target.value;
        if (val && val.trim() != "") {
            this.itemAvailable = true;
            //adding dynamically the fitlered items
            for (let index = 0; index < this.toSearch.length; index++) {
                const item = this.toSearch[index];
                if (((item['FULL_NAME'] + "").toUpperCase().search(val.toUpperCase()) > -1) || ((item['TITLE'] + "").toUpperCase().search(val.toUpperCase()) > -1) || (item['DESCRIPTION'].toUpperCase().search(val.toUpperCase()) > -1) || ((item['SHORTENED_NAME'] + "").toUpperCase().search(val.toUpperCase()) > -1)) {
                    this.filteredItems.push(item);
                }
            }
        }
        else {
            this.itemAvailable = false;
        }
    }
    goToItem(item) {
        // this.search = false;
        var loc;
        if (item['MARKER']) {
            //filter item
            loc = item['MARKER'].getPosition();
            item['MARKER'].setVisible(true);
            item['MARKER'].trigger(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MARKER_CLICK, loc);
        }
        else {
            loc = (new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["LatLngBounds"](item['COORS'])).getCenter();
            item['POLYGON'].trigger(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].POLYGON_CLICK, loc);
        }
        this.animateCamera(loc['lat'], loc['lng']);
    }
    aboutData() {
        this.appData.getAboutData().then((val) => {
            this.about = val;
            // console.log(this.about);
            var tempT = [];
            var tempD = [];
            for (let i = 1; i <= this.about["NUM_GOALS"]; i++) {
                tempT.push(this.about["GOAL TITLE " + i]);
                tempD.push(this.about["GOAL DESCRIPTION " + i]);
            }
            var img;
            if (this.about["IMAGE"]) {
                if (this.about["IMAGE"].slice(0, 3) == "data" || this.about["IMAGE"].slice(0, 3) == "http" || this.about["IMAGE"].includes('www') || this.about["IMAGE"].includes('.edu')) {
                    //do nothing base64 data or external link
                }
                else {
                    //image stored in images folder
                    this.about["IMAGE"] = 'assets/images/' + this.about["IMAGE"];
                }
            }
            else {
                //if it does not exist
                this.about["IMAGE"] = "assets/images/campus.jpg";
            }
            this.about["GOAL TITLES"] = tempT;
            this.about["GOAL DESCRIPTIONS"] = tempD;
            // console.log(this.about);
        });
    }
    openAboutModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _about_about_page__WEBPACK_IMPORTED_MODULE_12__["AboutPage"],
                componentProps: {
                    about: this.about
                },
                swipeToClose: true,
                cssClass: 'about-modal' //same css class
            });
            modal.onDidDismiss().then((detail) => { });
            this.closeEverything();
            yield modal.present();
        });
    }
    openBuildingListModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _building_list_modal_building_list_modal_page__WEBPACK_IMPORTED_MODULE_11__["BuildingListModalPage"],
                componentProps: {
                    buildings: this.buildings,
                },
                swipeToClose: true,
                cssClass: 'filter-modal' //same css class
            });
            modal.onDidDismiss().then((detail) => {
                try {
                    // console.log(detail.data);
                    if (!detail.data.redirect) {
                        const loc = (new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["LatLngBounds"](detail.data['building']['COORS'])).getCenter();
                        this.animateCamera(loc['lat'], loc['lng']);
                        detail.data['building']['POLYGON'].trigger(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].POLYGON_CLICK, loc);
                    }
                    else {
                        // console.log("redirect to building page");
                    }
                }
                catch (error) {
                    // console.log("regular close");
                }
            });
            this.closeEverything();
            yield modal.present();
        });
    }
    closeEverything() {
        this.htmlInfoWindow.close();
        this.search = false;
        this.itemAvailable = false;
        this.filteredItems = [];
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _events_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] },
    { type: _services_app_data_service__WEBPACK_IMPORTED_MODULE_6__["AppDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _events_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"],
        _services_app_data_service__WEBPACK_IMPORTED_MODULE_6__["AppDataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], HomePage);



/***/ }),

/***/ "./src/app/home/mapStyle.ts":
/*!**********************************!*\
  !*** ./src/app/home/mapStyle.ts ***!
  \**********************************/
/*! exports provided: mapStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStyle", function() { return mapStyle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const mapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#523735"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#c9b2a6"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#dcd2be"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ae9e90"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#93817c"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a5b076"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#447530"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fdfcf8"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f8c967"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#e9bc62"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e98d58"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#db8555"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#806b63"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8f7d77"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b9d3c2"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#92998d"
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map