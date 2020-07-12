function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"], {
  /***/
  "./node_modules/ionic-header-parallax/fesm2015/ionic-header-parallax.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/ionic-header-parallax/fesm2015/ionic-header-parallax.js ***!
    \******************************************************************************/

  /*! exports provided: IonicHeaderParallaxModule, ParallaxDirective */

  /***/
  function node_modulesIonicHeaderParallaxFesm2015IonicHeaderParallaxJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IonicHeaderParallaxModule", function () {
      return IonicHeaderParallaxModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParallaxDirective", function () {
      return ParallaxDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ParallaxDirective = /*#__PURE__*/function () {
      /**
       * @param {?} headerRef
       * @param {?} renderer
       */
      function ParallaxDirective(headerRef, renderer) {
        _classCallCheck(this, ParallaxDirective);

        this.headerRef = headerRef;
        this.renderer = renderer;
        this.maximumHeight = 300;
      }
      /**
       * @return {?}
       */


      _createClass(ParallaxDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this.initElements();

            _this.initStyles();

            _this.initEvents();
          }, 100);
        }
        /**
         * @return {?}
         */

      }, {
        key: "initElements",
        value: function initElements() {
          var _this2 = this;

          /** @type {?} */
          var parentElement = this.headerRef.nativeElement.parentElement;
          this.header = this.headerRef.nativeElement;
          this.toolbar = this.header.querySelector('ion-toolbar');

          if (!this.toolbar) {
            throw new Error('Parallax directive requires a toolbar or navbar element on the page to work.');
          }

          this.ionTitle = this.toolbar.querySelector('ion-title');
          this.toolbarBackground = this.toolbar.shadowRoot.querySelector('.toolbar-background');
          this.barButtons = this.headerRef.nativeElement.querySelector('ion-buttons');
          /** @type {?} */

          var ionContent = parentElement.querySelector('ion-content');
          this.scrollContent = ionContent.shadowRoot.querySelector('.inner-scroll');

          if (!this.scrollContent) {
            throw new Error('Parallax directive requires an <ion-content> element on the page to work.');
          } // Create image overlay


          this.imageOverlay = this.renderer.createElement('div');
          this.renderer.addClass(this.imageOverlay, 'image-overlay');
          this.colorOverlay = this.renderer.createElement('div');
          this.renderer.addClass(this.colorOverlay, 'color-overlay');
          this.colorOverlay.appendChild(this.imageOverlay);
          this.header.appendChild(this.colorOverlay); // Copy title and buttons

          this.overlayTitle = this.ionTitle &&
          /** @type {?} */
          this.ionTitle.cloneNode(true);

          if (this.overlayTitle) {
            this.renderer.addClass(this.overlayTitle, 'parallax-title');
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var toolbarTitle = _this2.overlayTitle.shadowRoot.querySelector('.toolbar-title');

              _this2.renderer.setStyle(toolbarTitle, 'pointer-events', 'unset');
            });
          }

          if (this.overlayTitle) {
            this.imageOverlay.appendChild(this.overlayTitle);
          }

          if (this.barButtons) {
            this.imageOverlay.appendChild(this.barButtons);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "initStyles",
        value: function initStyles() {
          var _this3 = this;

          this.headerHeight = this.scrollContent.clientHeight;
          this.ticking = false;

          if (!this.scrollContent || !toolbar) {
            return;
          } // fetch styles


          this.maximumHeight = parseFloat(this.maximumHeight.toString());
          this.headerMinHeight = this.toolbar.offsetHeight;
          this.scrollContentPaddingTop = window.getComputedStyle(this.scrollContent, null).paddingTop.replace('px', '');
          this.scrollContentPaddingTop = parseFloat(this.scrollContentPaddingTop);
          this.originalToolbarBgColor = window.getComputedStyle(this.toolbarBackground, null).backgroundColor; // header and title

          this.renderer.setStyle(this.header, 'position', 'relative');

          if (this.overlayTitle) {
            this.renderer.setStyle(this.overlayTitle, 'color', this.titleColor);
            this.renderer.setStyle(this.overlayTitle, 'position', 'absolute');
            this.renderer.setStyle(this.overlayTitle, 'width', '100%');
            this.renderer.setStyle(this.overlayTitle, 'height', '100%');
            this.renderer.setStyle(this.overlayTitle, 'text-align', 'center');
          } // color overlay


          this.renderer.setStyle(this.colorOverlay, 'background-color', this.originalToolbarBgColor);
          this.renderer.setStyle(this.colorOverlay, 'height', "".concat(this.maximumHeight, "px"));
          this.renderer.setStyle(this.colorOverlay, 'position', 'absolute');
          this.renderer.setStyle(this.colorOverlay, 'top', "".concat(-this.headerMinHeight * 0, "px"));
          this.renderer.setStyle(this.colorOverlay, 'left', '0');
          this.renderer.setStyle(this.colorOverlay, 'width', '100%');
          this.renderer.setStyle(this.colorOverlay, 'z-index', '10');
          this.renderer.setStyle(this.colorOverlay, 'pointer-events', 'none'); // image overlay

          this.renderer.setStyle(this.imageOverlay, 'background-color', this.expandedColor);
          this.renderer.setStyle(this.imageOverlay, 'background-image', "url(".concat(this.imageUrl || '', ")"));
          this.renderer.setStyle(this.imageOverlay, 'height', "100%");
          this.renderer.setStyle(this.imageOverlay, 'width', '100%');
          this.renderer.setStyle(this.imageOverlay, 'pointer-events', 'none');
          this.renderer.setStyle(this.imageOverlay, 'background-size', 'cover');
          this.renderer.setStyle(this.imageOverlay, 'background-position', 'center'); // .toolbar-background

          this.renderer.setStyle(this.toolbarBackground, 'background-color', this.originalToolbarBgColor); // .bar-buttons

          if (this.barButtons) {
            this.renderer.setStyle(this.barButtons, 'pointer-events', 'all');
            Array.from(this.barButtons.children).forEach(
            /**
            * @param {?} btn
            * @return {?}
            */
            function (btn) {
              _this3.renderer.setStyle(btn, 'color', _this3.titleColor);
            });
          } // .scroll-content


          if (this.scrollContent) {
            this.renderer.setAttribute(this.scrollContent, 'parallax', '');
            this.renderer.setStyle(this.scrollContent, 'padding-top', "".concat(this.maximumHeight + this.scrollContentPaddingTop - this.headerMinHeight, "px"));
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "initEvents",
        value: function initEvents() {
          var _this4 = this;

          window.addEventListener('resize',
          /**
          * @return {?}
          */
          function () {
            _this4.headerHeight = _this4.scrollContent.clientHeight;
          }, false);

          if (this.scrollContent) {
            this.scrollContent.addEventListener('scroll',
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              if (!_this4.ticking) {
                window.requestAnimationFrame(
                /**
                * @return {?}
                */
                function () {
                  _this4.updateElasticHeader();
                });
              }

              _this4.ticking = true;
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateElasticHeader",
        value: function updateElasticHeader() {
          var _this5 = this;

          if (!this.scrollContent || !toolbar) {
            return;
          }

          this.scrollTop = this.scrollContent.scrollTop;

          if (this.scrollTop >= 0) {
            this.translateAmt = this.scrollTop / 2;
            this.scaleAmt = 1;
          } else {
            this.translateAmt = 0;
            this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
          } // Parallax total progress


          this.headerMinHeight = this.toolbar.offsetHeight;
          /** @type {?} */

          var progress = (this.maximumHeight - this.scrollTop - this.headerMinHeight) / (this.maximumHeight - this.headerMinHeight);
          progress = Math.max(progress, 0); // ion-header: set height

          /** @type {?} */

          var targetHeight = this.maximumHeight - this.scrollTop;
          targetHeight = Math.max(targetHeight, this.headerMinHeight); // .toolbar-background: change color

          this.renderer.setStyle(this.imageOverlay, 'height', "".concat(targetHeight, "px"));
          this.renderer.setStyle(this.imageOverlay, 'opacity', "".concat(progress));
          this.renderer.setStyle(this.colorOverlay, 'height', "".concat(targetHeight, "px"));
          this.renderer.setStyle(this.colorOverlay, 'opacity', targetHeight > this.headerMinHeight ? '1' : '0');
          this.renderer.setStyle(this.toolbarBackground, 'background-color', targetHeight > this.headerMinHeight ? 'transparent' : this.originalToolbarBgColor); // .bar-buttons

          if (this.barButtons) {
            if (targetHeight > this.headerMinHeight) {
              this.imageOverlay.append(this.barButtons);
              Array.from(this.barButtons.children).forEach(
              /**
              * @param {?} btn
              * @return {?}
              */
              function (btn) {
                _this5.renderer.setStyle(btn, 'color', _this5.titleColor);
              });
            } else {
              this.toolbar.append(this.barButtons);
              Array.from(this.barButtons.children).forEach(
              /**
              * @param {?} btn
              * @return {?}
              */
              function (btn) {
                _this5.renderer.setStyle(btn, 'color', 'unset');
              });
            }
          }

          this.ticking = false;
        }
      }]);

      return ParallaxDirective;
    }();

    ParallaxDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ion-header[parallax]'
      }]
    }];
    /** @nocollapse */

    ParallaxDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    ParallaxDirective.propDecorators = {
      imageUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      expandedColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      titleColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maximumHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var IonicHeaderParallaxModule = function IonicHeaderParallaxModule() {
      _classCallCheck(this, IonicHeaderParallaxModule);
    };

    IonicHeaderParallaxModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [ParallaxDirective],
        imports: [],
        exports: [ParallaxDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ionic-header-parallax.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderFolderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- [translucent]=\"true\" -->\n<ion-header *ngIf=\"building['PICTURE']\" parallax imageUrl=\"{{building['PICTURE']}}\" titleColor=\"white\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ building['SHORTENED_NAME'] }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header *ngIf=\"!building['PICTURE']\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ building['SHORTENED_NAME'] }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"leed\"\n[class.platinum]=\"building['LEED_CERTIFICATION'] == 'PLATINUM'\"\n[class.gold]=\"building['LEED_CERTIFICATION'] == 'GOLD'\"\n[class.silver]=\"building['LEED_CERTIFICATION'] == 'SILVER'\"\n>\n\n  <div *ngIf=\"building['PICTURE']\">\n    <br><br>\n  </div>\n  <div class=\"ion-text-center\">\n    <div class=\"ion-text-wrap\" lines=\"none\">\n      <!-- <ion-label> -->\n        <h1>\n          {{building[\"FULL_NAME\"]}}\n        </h1>\n      <!-- </ion-label> -->\n    </div>\n\n    <marquee style=\"font-style: italic\" height=\"30px\" *ngIf=\"building['LEED_CERTIFICATION']\" hspace=\"10vw\" truespeed scrollamount=\"10\">\n      LEED CERTIFICATION: {{building['LEED_CERTIFICATION']}}\n    </marquee>\n\n    <ion-item color=\"danger\" *ngIf=\"!building['LEED_CERTIFICATION']\" class=\"ion-text-center\" lines=\"none\">\n      <ion-icon slot=\"start\" name=\"information-circle-outline\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">NO LEED CERTIFICATION</ion-label>\n    </ion-item>\n\n  </div>\n\n  <div class=\"ion-text-wrap ion-padding\">\n    <p *ngFor=\"let d of building['DESCRIPTION']\">\n      {{d}}\n    </p>\n\n    <ion-item-group *ngIf=\"building['LEED HIGHLIGHTS'] != '' \" >\n      <ion-item-divider sticky=\"false\">\n        <ion-label>LEED Highlights</ion-label>\n      </ion-item-divider>\n\n      <ion-item class=\"ion-text-wrap\" *ngFor=\"let lh of building['LEED HIGHLIGHTS']; let i = index\" lines=\"none\">\n        <ion-note color=\"dark\" slot=\"start\">{{i+1}}.</ion-note>\n        <ion-label class=\"ion-text-wrap\">{{lh}}</ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <br>\n\n    <ion-item-group *ngIf=\"building['SIZE'] && building['CONSTRUCTION COST'] && building['COMPLETION DATE']\">\n      <ion-item-divider>\n        <ion-icon slot=\"start\" name=\"business\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">Building Details</ion-label>\n      </ion-item-divider>\n\n      <ion-item lines=\"inset\">\n        <ion-icon slot=\"start\" name=\"expand-outline\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">Size: {{building[\"SIZE\"]}}</ion-label>\n      </ion-item>\n\n      <ion-item lines=\"inset\">\n        <ion-icon slot=\"start\" name=\"construct-outline\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">Construction Cost: {{building[\"CONSTRUCTION COST\"]}}</ion-label>\n      </ion-item>\n\n      <ion-item lines=\"inset\">\n        <ion-icon slot=\"start\" name=\"construct\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">Completion Date: {{building[\"COMPLETION DATE\"]}}</ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <br>\n\n    <ion-item-group *ngIf=\"building['AWARDS'] != ''\">\n      <ion-item-divider>\n        <ion-icon slot=\"start\" name=\"trophy-outline\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">Awards</ion-label>\n      </ion-item-divider>\n\n      <ion-item lines=\"inset\" *ngFor=\"let award of building['AWARDS']; let i = index\">\n        <ion-note color=\"dark\" slot=\"start\">{{i+1}}.</ion-note>\n        <ion-label class=\"ion-text-wrap\">{{award}}</ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group *ngIf=\"building['PROJECT TEAM'] != ''\">\n      <ion-item-divider>\n        <ion-icon slot=\"start\" name=\"people\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">Project Team</ion-label>\n      </ion-item-divider>\n\n      <ion-item lines=\"inset\" *ngFor=\"let team of building['PROJECT TEAM']; let i = index\">\n        <ion-note color=\"dark\" slot=\"start\">{{i+1}}.</ion-note>\n        <ion-label class=\"ion-text-wrap\">{{team}}</ion-label>\n      </ion-item>\n\n    </ion-item-group>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/folder/folder-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/folder/folder-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: FolderPageRoutingModule */

  /***/
  function srcAppFolderFolderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function () {
      return FolderPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/folder/folder.page.ts");

    var routes = [{
      path: '',
      component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }];

    var FolderPageRoutingModule = function FolderPageRoutingModule() {
      _classCallCheck(this, FolderPageRoutingModule);
    };

    FolderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FolderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/folder/folder.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/folder/folder.module.ts ***!
    \*****************************************/

  /*! exports provided: FolderPageModule */

  /***/
  function srcAppFolderFolderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageModule", function () {
      return FolderPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./folder-routing.module */
    "./src/app/folder/folder-routing.module.ts");
    /* harmony import */


    var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/folder/folder.page.ts");
    /* harmony import */


    var ionic_header_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic-header-parallax */
    "./node_modules/ionic-header-parallax/fesm2015/ionic-header-parallax.js");

    var FolderPageModule = function FolderPageModule() {
      _classCallCheck(this, FolderPageModule);
    };

    FolderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"], ionic_header_parallax__WEBPACK_IMPORTED_MODULE_7__["IonicHeaderParallaxModule"]],
      declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })], FolderPageModule);
    /***/
  },

  /***/
  "./src/app/folder/folder.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/folder/folder.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderFolderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n  --background: none;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-toolbar {\n  --background: #ffffff;\n}\n\n.leed {\n  --background: none;\n}\n\n.leed.platinum {\n  --background: linear-gradient(#9f49fe, #ffffff);\n}\n\n.leed.gold {\n  --background: linear-gradient(#fff30d, #ffffff);\n}\n\n.leed.silver {\n  --background: linear-gradient(#c1c1c1, #ffffff);\n}\n\nion-item {\n  --background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9hcm1hYS9EZXNrdG9wL2NvZGluZy9zdXNXb3JrL3N1c01hcHYxL3NyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNQRjs7QURVQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDUEY7O0FEVUE7RUFDRSxxQkFBQTtBQ1BGOztBRFVBO0VBQ0UscUJBQUE7QUNQRjs7QURVQTtFQUNFLGtCQUFBO0FDUEY7O0FEVUE7RUFDRSwrQ0FBQTtBQ1BGOztBRFdBO0VBQ0UsK0NBQUE7QUNSRjs7QURZQTtFQUNFLCtDQUFBO0FDVEY7O0FEWUE7RUFDRSxrQkFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZnVuY3Rpb24gaW52ZXJ0LWxpbmVhcigkY29sb3IpIHtcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDUwKSB7XG4gICAgQHJldHVybiAjMDAwMDAwO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuICNmZmZmZmY7XG4gIH1cbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5sZWVkIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4ubGVlZC5wbGF0aW51bSB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM5ZjQ5ZmUsICNmZmZmZmYpO1xuICAvLyBjb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYsICM3OTAyZmQpO1xufVxuXG4ubGVlZC5nb2xkIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZjMwZCwgI2ZmZmZmZik7XG4gIC8vIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgI2ZmZjMwZCk7XG59XG5cbi5sZWVkLnNpbHZlciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNjMWMxYzEsICNmZmZmZmYpO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cbiIsImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4ubGVlZCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmxlZWQucGxhdGludW0ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjOWY0OWZlLCAjZmZmZmZmKTtcbn1cblxuLmxlZWQuZ29sZCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmYzMGQsICNmZmZmZmYpO1xufVxuXG4ubGVlZC5zaWx2ZXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYzFjMWMxLCAjZmZmZmZmKTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/folder/folder.page.ts":
  /*!***************************************!*\
    !*** ./src/app/folder/folder.page.ts ***!
    \***************************************/

  /*! exports provided: FolderPage */

  /***/
  function srcAppFolderFolderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPage", function () {
      return FolderPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _events_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../events/event.service */
    "./src/app/events/event.service.ts");
    /* harmony import */


    var _services_app_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../services/app-data.service */
    "./src/app/services/app-data.service.ts");

    var FolderPage = /*#__PURE__*/function () {
      function FolderPage(activatedRoute, menu, events, info) {
        _classCallCheck(this, FolderPage);

        this.activatedRoute = activatedRoute;
        this.menu = menu;
        this.events = events;
        this.info = info;
        this.building = {};
      }

      _createClass(FolderPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menu.enable(true, 'outsideMap');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this6 = this;

            var folder;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    folder = this.activatedRoute.snapshot.paramMap.get('id');
                    this.events.publish('page', Number(folder));
                    this.id = Number(folder);
                    _context.next = 5;
                    return this.info.getSpecificBuildingData(this.id).then(function (data) {
                      if (data) {
                        _this6.building = data;
                      }
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return FolderPage;
    }();

    FolderPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _events_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]
      }, {
        type: _services_app_data_service__WEBPACK_IMPORTED_MODULE_5__["AppDataService"]
      }];
    };

    FolderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-folder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./folder.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./folder.page.scss */
      "./src/app/folder/folder.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _events_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"], _services_app_data_service__WEBPACK_IMPORTED_MODULE_5__["AppDataService"]])], FolderPage);
    /***/
  }
}]);
//# sourceMappingURL=folder-folder-module-es5.js.map