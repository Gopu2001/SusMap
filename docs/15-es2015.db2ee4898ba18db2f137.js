(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{F6Eh:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class i{}var u=t("pMnS"),o=t("MKJQ"),r=t("sZkV");class s{constructor(l,n){this.headerRef=l,this.renderer=n,this.maximumHeight=300}ngAfterViewInit(){setTimeout(()=>{this.initElements(),this.initStyles(),this.initEvents()},100)}initElements(){const l=this.headerRef.nativeElement.parentElement;if(this.header=this.headerRef.nativeElement,this.toolbar=this.header.querySelector("ion-toolbar"),!this.toolbar)throw new Error("Parallax directive requires a toolbar or navbar element on the page to work.");this.ionTitle=this.toolbar.querySelector("ion-title"),this.toolbarBackground=this.toolbar.shadowRoot.querySelector(".toolbar-background"),this.barButtons=this.headerRef.nativeElement.querySelector("ion-buttons");const n=l.querySelector("ion-content");if(this.scrollContent=n.shadowRoot.querySelector(".inner-scroll"),!this.scrollContent)throw new Error("Parallax directive requires an <ion-content> element on the page to work.");this.imageOverlay=this.renderer.createElement("div"),this.renderer.addClass(this.imageOverlay,"image-overlay"),this.colorOverlay=this.renderer.createElement("div"),this.renderer.addClass(this.colorOverlay,"color-overlay"),this.colorOverlay.appendChild(this.imageOverlay),this.header.appendChild(this.colorOverlay),this.overlayTitle=this.ionTitle&&this.ionTitle.cloneNode(!0),this.overlayTitle&&(this.renderer.addClass(this.overlayTitle,"parallax-title"),setTimeout(()=>{const l=this.overlayTitle.shadowRoot.querySelector(".toolbar-title");this.renderer.setStyle(l,"pointer-events","unset")})),this.overlayTitle&&this.imageOverlay.appendChild(this.overlayTitle),this.barButtons&&this.imageOverlay.appendChild(this.barButtons)}initStyles(){this.headerHeight=this.scrollContent.clientHeight,this.ticking=!1,this.scrollContent&&toolbar&&(this.maximumHeight=parseFloat(this.maximumHeight.toString()),this.headerMinHeight=this.toolbar.offsetHeight,this.scrollContentPaddingTop=window.getComputedStyle(this.scrollContent,null).paddingTop.replace("px",""),this.scrollContentPaddingTop=parseFloat(this.scrollContentPaddingTop),this.originalToolbarBgColor=window.getComputedStyle(this.toolbarBackground,null).backgroundColor,this.renderer.setStyle(this.header,"position","relative"),this.overlayTitle&&(this.renderer.setStyle(this.overlayTitle,"color",this.titleColor),this.renderer.setStyle(this.overlayTitle,"position","absolute"),this.renderer.setStyle(this.overlayTitle,"width","100%"),this.renderer.setStyle(this.overlayTitle,"height","100%"),this.renderer.setStyle(this.overlayTitle,"text-align","center")),this.renderer.setStyle(this.colorOverlay,"background-color",this.originalToolbarBgColor),this.renderer.setStyle(this.colorOverlay,"height",`${this.maximumHeight}px`),this.renderer.setStyle(this.colorOverlay,"position","absolute"),this.renderer.setStyle(this.colorOverlay,"top",`${0*-this.headerMinHeight}px`),this.renderer.setStyle(this.colorOverlay,"left","0"),this.renderer.setStyle(this.colorOverlay,"width","100%"),this.renderer.setStyle(this.colorOverlay,"z-index","10"),this.renderer.setStyle(this.colorOverlay,"pointer-events","none"),this.renderer.setStyle(this.imageOverlay,"background-color",this.expandedColor),this.renderer.setStyle(this.imageOverlay,"background-image",`url(${this.imageUrl||""})`),this.renderer.setStyle(this.imageOverlay,"height","100%"),this.renderer.setStyle(this.imageOverlay,"width","100%"),this.renderer.setStyle(this.imageOverlay,"pointer-events","none"),this.renderer.setStyle(this.imageOverlay,"background-size","cover"),this.renderer.setStyle(this.imageOverlay,"background-position","center"),this.renderer.setStyle(this.toolbarBackground,"background-color",this.originalToolbarBgColor),this.barButtons&&(this.renderer.setStyle(this.barButtons,"pointer-events","all"),Array.from(this.barButtons.children).forEach(l=>{this.renderer.setStyle(l,"color",this.titleColor)})),this.scrollContent&&(this.renderer.setAttribute(this.scrollContent,"parallax",""),this.renderer.setStyle(this.scrollContent,"padding-top",`${this.maximumHeight+this.scrollContentPaddingTop-this.headerMinHeight}px`)))}initEvents(){window.addEventListener("resize",()=>{this.headerHeight=this.scrollContent.clientHeight},!1),this.scrollContent&&this.scrollContent.addEventListener("scroll",l=>{this.ticking||window.requestAnimationFrame(()=>{this.updateElasticHeader()}),this.ticking=!0})}updateElasticHeader(){if(!this.scrollContent||!toolbar)return;this.scrollTop=this.scrollContent.scrollTop,this.scrollTop>=0?(this.translateAmt=this.scrollTop/2,this.scaleAmt=1):(this.translateAmt=0,this.scaleAmt=-this.scrollTop/this.headerHeight+1),this.headerMinHeight=this.toolbar.offsetHeight;let l=(this.maximumHeight-this.scrollTop-this.headerMinHeight)/(this.maximumHeight-this.headerMinHeight);l=Math.max(l,0);let n=this.maximumHeight-this.scrollTop;n=Math.max(n,this.headerMinHeight),this.renderer.setStyle(this.imageOverlay,"height",`${n}px`),this.renderer.setStyle(this.imageOverlay,"opacity",`${l}`),this.renderer.setStyle(this.colorOverlay,"height",`${n}px`),this.renderer.setStyle(this.colorOverlay,"opacity",n>this.headerMinHeight?"1":"0"),this.renderer.setStyle(this.toolbarBackground,"background-color",n>this.headerMinHeight?"transparent":this.originalToolbarBgColor),this.barButtons&&(n>this.headerMinHeight?(this.imageOverlay.append(this.barButtons),Array.from(this.barButtons.children).forEach(l=>{this.renderer.setStyle(l,"color",this.titleColor)})):(this.toolbar.append(this.barButtons),Array.from(this.barButtons.children).forEach(l=>{this.renderer.setStyle(l,"color","unset")}))),this.ticking=!1}}class a{}var h=t("SVse"),b=t("mrSG"),c=t("83FV"),d=t("jgPM");class p{constructor(l,n,t,e){this.activatedRoute=l,this.menu=n,this.events=t,this.info=e,this.building={}}ionViewDidEnter(){this.menu.enable(!0,"outsideMap")}ngOnInit(){return b.a(this,void 0,void 0,(function*(){var l;l=this.activatedRoute.snapshot.paramMap.get("id"),this.events.publish("page",Number(l)),this.id=Number(l),yield this.info.getSpecificBuildingData(this.id).then(l=>{l&&(this.building=l)})}))}}var g=t("iInd"),f=e.nb({encapsulation:0,styles:[["ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary);--background:none}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-toolbar[_ngcontent-%COMP%]{--background:#ffffff}.leed[_ngcontent-%COMP%]{--background:none}.leed.platinum[_ngcontent-%COMP%]{--background:linear-gradient(#9f49fe, #ffffff)}.leed.gold[_ngcontent-%COMP%]{--background:linear-gradient(#fff30d, #ffffff)}.leed.silver[_ngcontent-%COMP%]{--background:linear-gradient(#c1c1c1, #ffffff)}ion-item[_ngcontent-%COMP%]{--background:none}"]],data:{}});function m(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,12,"ion-header",[["parallax",""],["titleColor","white"]],null,null,null,o.L,o.n)),e.ob(1,49152,null,0,r.z,[e.h,e.k,e.x],null,null),e.ob(2,4210688,null,0,s,[e.k,e.B],{imageUrl:[0,"imageUrl"],titleColor:[1,"titleColor"]},null),(l()(),e.pb(3,0,null,0,9,"ion-toolbar",[],null,null,null,o.V,o.x)),e.ob(4,49152,null,0,r.xb,[e.h,e.k,e.x],null,null),(l()(),e.pb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.B,o.d)),e.ob(6,49152,null,0,r.j,[e.h,e.k,e.x],null,null),(l()(),e.pb(7,0,null,0,2,"ion-back-button",[["defaultHref","home"]],null,[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==e.Bb(l,9).onClick(t)&&i),i}),o.z,o.b)),e.ob(8,49152,null,0,r.e,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.ob(9,16384,null,0,r.f,[[2,r.db],r.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(10,0,null,0,2,"ion-title",[],null,null,null,o.U,o.w)),e.ob(11,49152,null,0,r.vb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(12,0,["",""]))],(function(l,n){l(n,2,0,e.tb(1,"",n.component.building.PICTURE,""),"white"),l(n,8,0,"home"),l(n,9,0,"home")}),(function(l,n){l(n,12,0,n.component.building.SHORTENED_NAME)}))}function x(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,11,"ion-header",[],null,null,null,o.L,o.n)),e.ob(1,49152,null,0,r.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,o.V,o.x)),e.ob(3,49152,null,0,r.xb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.B,o.d)),e.ob(5,49152,null,0,r.j,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","home"]],null,[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==e.Bb(l,8).onClick(t)&&i),i}),o.z,o.b)),e.ob(7,49152,null,0,r.e,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.ob(8,16384,null,0,r.f,[[2,r.db],r.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,o.U,o.w)),e.ob(10,49152,null,0,r.vb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(11,0,["",""]))],(function(l,n){l(n,7,0,"home"),l(n,8,0,"home")}),(function(l,n){l(n,11,0,n.component.building.SHORTENED_NAME)}))}function y(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,0,"br",[],null,null,null,null,null))],null,null)}function v(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"marquee",[["height","30px"],["hspace","10vw"],["scrollamount","10"],["style","font-style: italic"],["truespeed",""]],null,null,null,null,null)),(l()(),e.Gb(1,null,[" LEED CERTIFICATION: "," "]))],null,(function(l,n){l(n,1,0,n.component.building.LEED_CERTIFICATION)}))}function k(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,6,"ion-item",[["class","ion-text-center"],["color","danger"],["lines","none"]],null,null,null,o.P,o.p)),e.ob(1,49152,null,0,r.F,[e.h,e.k,e.x],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),e.pb(2,0,null,0,1,"ion-icon",[["name","information-circle-outline"],["slot","start"]],null,null,null,o.M,o.o)),e.ob(3,49152,null,0,r.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(4,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.Q,o.s)),e.ob(5,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["NO LEED CERTIFICATION"]))],(function(l,n){l(n,1,0,"danger","none"),l(n,3,0,"information-circle-outline")}),null)}function C(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function O(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,7,"ion-item",[["class","ion-text-wrap"],["lines","none"]],null,null,null,o.P,o.p)),e.ob(1,49152,null,0,r.F,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(2,0,null,0,2,"ion-note",[["color","dark"],["slot","start"]],null,null,null,o.S,o.u)),e.ob(3,49152,null,0,r.T,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Gb(4,0,["","."])),(l()(),e.pb(5,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.Q,o.s)),e.ob(6,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(7,0,["",""]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,"dark")}),(function(l,n){l(n,4,0,n.context.index+1),l(n,7,0,n.context.$implicit)}))}function T(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,8,"ion-item-group",[],null,null,null,o.O,o.r)),e.ob(1,49152,null,0,r.H,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,4,"ion-item-divider",[["sticky","false"]],null,null,null,o.N,o.q)),e.ob(3,49152,null,0,r.G,[e.h,e.k,e.x],{sticky:[0,"sticky"]},null),(l()(),e.pb(4,0,null,0,2,"ion-label",[],null,null,null,o.Q,o.s)),e.ob(5,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["LEED Highlights"])),(l()(),e.eb(16777216,null,0,1,null,O)),e.ob(8,278528,null,0,h.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,3,0,"false"),l(n,8,0,t.building["LEED HIGHLIGHTS"])}),null)}function E(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,29,"ion-item-group",[],null,null,null,o.O,o.r)),e.ob(1,49152,null,0,r.H,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,6,"ion-item-divider",[],null,null,null,o.N,o.q)),e.ob(3,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,1,"ion-icon",[["name","business"],["slot","start"]],null,null,null,o.M,o.o)),e.ob(5,49152,null,0,r.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(6,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.Q,o.s)),e.ob(7,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Building Details"])),(l()(),e.pb(9,0,null,0,6,"ion-item",[["lines","inset"]],null,null,null,o.P,o.p)),e.ob(10,49152,null,0,r.F,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(11,0,null,0,1,"ion-icon",[["name","expand-outline"],["slot","start"]],null,null,null,o.M,o.o)),e.ob(12,49152,null,0,r.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(13,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.Q,o.s)),e.ob(14,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(15,0,["Size: ",""])),(l()(),e.pb(16,0,null,0,6,"ion-item",[["lines","inset"]],null,null,null,o.P,o.p)),e.ob(17,49152,null,0,r.F,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(18,0,null,0,1,"ion-icon",[["name","construct-outline"],["slot","start"]],null,null,null,o.M,o.o)),e.ob(19,49152,null,0,r.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(20,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.Q,o.s)),e.ob(21,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(22,0,["Construction Cost: ",""])),(l()(),e.pb(23,0,null,0,6,"ion-item",[["lines","inset"]],null,null,null,o.P,o.p)),e.ob(24,49152,null,0,r.F,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(25,0,null,0,1,"ion-icon",[["name","construct"],["slot","start"]],null,null,null,o.M,o.o)),e.ob(26,49152,null,0,r.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(27,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.Q,o.s)),e.ob(28,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(29,0,["Completion Date: ",""]))],(function(l,n){l(n,5,0,"business"),l(n,10,0,"inset"),l(n,12,0,"expand-outline"),l(n,17,0,"inset"),l(n,19,0,"construct-outline"),l(n,24,0,"inset"),l(n,26,0,"construct")}),(function(l,n){var t=n.component;l(n,15,0,t.building.SIZE),l(n,22,0,t.building["CONSTRUCTION COST"]),l(n,29,0,t.building["COMPLETION DATE"])}))}function S(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,7,"ion-item",[["lines","inset"]],null,null,null,o.P,o.p)),e.ob(1,49152,null,0,r.F,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(2,0,null,0,2,"ion-note",[["color","dark"],["slot","start"]],null,null,null,o.S,o.u)),e.ob(3,49152,null,0,r.T,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Gb(4,0,["","."])),(l()(),e.pb(5,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.Q,o.s)),e.ob(6,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(7,0,["",""]))],(function(l,n){l(n,1,0,"inset"),l(n,3,0,"dark")}),(function(l,n){l(n,4,0,n.context.index+1),l(n,7,0,n.context.$implicit)}))}function H(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,10,"ion-item-group",[],null,null,null,o.O,o.r)),e.ob(1,49152,null,0,r.H,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,6,"ion-item-divider",[],null,null,null,o.N,o.q)),e.ob(3,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,1,"ion-icon",[["name","trophy-outline"],["slot","start"]],null,null,null,o.M,o.o)),e.ob(5,49152,null,0,r.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(6,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.Q,o.s)),e.ob(7,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Awards"])),(l()(),e.eb(16777216,null,0,1,null,S)),e.ob(10,278528,null,0,h.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,5,0,"trophy-outline"),l(n,10,0,t.building.AWARDS)}),null)}function I(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,7,"ion-item",[["lines","inset"]],null,null,null,o.P,o.p)),e.ob(1,49152,null,0,r.F,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(2,0,null,0,2,"ion-note",[["color","dark"],["slot","start"]],null,null,null,o.S,o.u)),e.ob(3,49152,null,0,r.T,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Gb(4,0,["","."])),(l()(),e.pb(5,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.Q,o.s)),e.ob(6,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(7,0,["",""]))],(function(l,n){l(n,1,0,"inset"),l(n,3,0,"dark")}),(function(l,n){l(n,4,0,n.context.index+1),l(n,7,0,n.context.$implicit)}))}function M(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,10,"ion-item-group",[],null,null,null,o.O,o.r)),e.ob(1,49152,null,0,r.H,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,6,"ion-item-divider",[],null,null,null,o.N,o.q)),e.ob(3,49152,null,0,r.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,1,"ion-icon",[["name","people"],["slot","start"]],null,null,null,o.M,o.o)),e.ob(5,49152,null,0,r.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(6,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.Q,o.s)),e.ob(7,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Project Team"])),(l()(),e.eb(16777216,null,0,1,null,I)),e.ob(10,278528,null,0,h.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,5,0,"people"),l(n,10,0,t.building["PROJECT TEAM"])}),null)}function w(l){return e.Hb(0,[(l()(),e.eb(16777216,null,null,1,null,m)),e.ob(1,16384,null,0,h.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,x)),e.ob(3,16384,null,0,h.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(4,0,null,null,24,"ion-content",[["class","leed"]],[[2,"platinum",null],[2,"gold",null],[2,"silver",null]],null,null,o.H,o.j)),e.ob(5,49152,null,0,r.s,[e.h,e.k,e.x],{fullscreen:[0,"fullscreen"]},null),(l()(),e.eb(16777216,null,0,1,null,y)),e.ob(7,16384,null,0,h.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(8,0,null,0,7,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.pb(9,0,null,null,2,"div",[["class","ion-text-wrap"],["lines","none"]],null,null,null,null,null)),(l()(),e.pb(10,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Gb(11,null,[" "," "])),(l()(),e.eb(16777216,null,null,1,null,v)),e.ob(13,16384,null,0,h.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,k)),e.ob(15,16384,null,0,h.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(16,0,null,0,12,"div",[["class","ion-text-wrap ion-padding"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,C)),e.ob(18,278528,null,0,h.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.eb(16777216,null,null,1,null,T)),e.ob(20,16384,null,0,h.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,E)),e.ob(23,16384,null,0,h.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,H)),e.ob(26,16384,null,0,h.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,M)),e.ob(28,16384,null,0,h.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,1,0,t.building.PICTURE),l(n,3,0,!t.building.PICTURE),l(n,5,0,!0),l(n,7,0,t.building.PICTURE),l(n,13,0,t.building.LEED_CERTIFICATION),l(n,15,0,!t.building.LEED_CERTIFICATION),l(n,18,0,t.building.DESCRIPTION),l(n,20,0,""!=t.building["LEED HIGHLIGHTS"]),l(n,23,0,t.building.SIZE&&t.building["CONSTRUCTION COST"]&&t.building["COMPLETION DATE"]),l(n,26,0,""!=t.building.AWARDS),l(n,28,0,""!=t.building["PROJECT TEAM"])}),(function(l,n){var t=n.component;l(n,4,0,"PLATINUM"==t.building.LEED_CERTIFICATION,"GOLD"==t.building.LEED_CERTIFICATION,"SILVER"==t.building.LEED_CERTIFICATION),l(n,11,0,t.building.FULL_NAME)}))}function P(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-folder",[],null,null,null,w,f)),e.ob(1,114688,null,0,p,[g.a,r.Cb,c.a,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}var A=e.lb("app-folder",p,P,{},{},[]),L=t("s7LF");class F{}t.d(n,"FolderPageModuleNgFactory",(function(){return G}));var G=e.mb(i,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[u.a,A]],[3,e.j],e.v]),e.zb(4608,h.l,h.k,[e.s,[2,h.t]]),e.zb(4608,L.d,L.d,[]),e.zb(4608,r.a,r.a,[e.x,e.g]),e.zb(4608,r.Db,r.Db,[r.a,e.j,e.p]),e.zb(4608,r.Gb,r.Gb,[r.a,e.j,e.p]),e.zb(1073742336,h.b,h.b,[]),e.zb(1073742336,L.c,L.c,[]),e.zb(1073742336,L.a,L.a,[]),e.zb(1073742336,r.zb,r.zb,[]),e.zb(1073742336,g.n,g.n,[[2,g.s],[2,g.m]]),e.zb(1073742336,F,F,[]),e.zb(1073742336,a,a,[]),e.zb(1073742336,i,i,[]),e.zb(1024,g.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);