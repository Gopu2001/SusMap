import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { ToastController, Platform, MenuController, LoadingController, ModalController, IonFab } from '@ionic/angular';
import { GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  ILatLng,
  LatLngBounds,
  PolygonOptions,
  Polygon,
  Poly,
  HtmlInfoWindow,
  MarkerIcon } from '@ionic-native/google-maps';
import { mapStyle } from './mapStyle';
import { EventService } from './../events/event.service';
import { AppDataService } from './../services/app-data.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { OverlayEventDetail } from '@ionic/core';
import { BuildingModalPage } from './../building-modal/building-modal.page';
import { FilterModalPage } from './../filter-modal/filter-modal.page';
import { BuildingListModalPage } from './../building-list-modal/building-list-modal.page';
import { AboutPage } from './../about/about.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    public htmlInfoWindow = new HtmlInfoWindow();
    public buildings = [];
    public filters = [];
    //   {
    //     Name: 'Economic',
    //     active: false
    //     data: { all the filter data }
    //   },
    // ];
    public map: GoogleMap;
    private dataFlag = false; //used in couplation of loading controller
    public loading; //loading controller
    // @ViewChild('filter_fab', {static: false}) filterFab: IonFab;
    private pressFlag = false; //press and hold for filter items
    public search = false; //for search functionality
    public itemAvailable = false; //for search functionality
    public filteredItems = []; //for search functionality
    private toSearch = []; //for search functionality
    private about = {};

    constructor(
      public toastCtrl: ToastController,
      private platform: Platform,
      private menu: MenuController,
      private events: EventService,
      private appData: AppDataService,
      private router: Router,
      private zone: NgZone,
      public loadingController: LoadingController,
      private modalController: ModalController
    ) {
    }

    async ionViewWillEnter() {
      try {
        this.htmlInfoWindow.close();
      } catch (error) {
      }
    }

    ionViewDidEnter() {
      this.menu.enable(true,'insideMap');
    }

    async ngOnInit() {

      //get building data and filter names
      await this.events.subscribe("Building and Filter Names", async (data :any) => {
        this.buildings = data[0];
        this.filters = data[1];
        console.log("got it");

        //load the map
        await this.loadMap();

        //close the fab when map is clicked
        this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((params: any[]) => {
          console.log("map click");
          this.closeEverything();
        });

        //below is only possible with the data recieved

        // add the buildings
        this.addBuildings();

        //get the filter data whenever
        this.appData.getAllFilterData(true).then((data: []) => {
          this.filters = data;

          var promArr = []
          for (let i = 0; i < this.filters.length; i++) {
            promArr.push(this.createFilterMarkers(this.filters[i]["DATA"]));
          }

          forkJoin(promArr).subscribe((data: []) => {
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
            } catch (error) {
              console.log("not needed: " + error);
            }
            console.log("added all markers and listeners");
          });

        });

        // updated event filters active status from menu
        for (let i = 0; i < this.filters.length; i++) {

          //make filter active/not active
          await this.events.subscribe(this.filters[i]['FILTER_NAME'], (data: any) => {
            // update active status
            this.filters[i]['ACTIVE'] = data['ACTIVE'];

            //first check if data has come in
            if(!this.dataFlag) {
              console.log("U GOTTA WAIT");
              this.loading.present().then(() => {
                this.loading.onWillDismiss.then(() => {

                  this.changeStatus(this.filters[i]['FILTER_NAME']);

                });
              });
            } else {
              if(!this.filters[i]['DATA'][0]['MARKER']) {
                console.log("NO MARKER....AHH SHIT");
              }
              //if it has then update the visible status
              this.changeStatus(this.filters[i]['FILTER_NAME']);
            }

          });
        }


      });

      // await this.appData.getBuildingFilterNames(true, "home").then((data) => {
      //   this.buildings = data[0];
      //   this.filters = data[1];
      // });

      this.loading = await this.loadingController.create({
        spinner: "bubbles",
        duration: 500*this.filters.length,
        message: "Fetching Data...",
        translucent: true,
        backdropDismiss: false
      });




      // Since ngOnInit() is executed before `deviceready` event,
      // you have to wait the event.
      await this.platform.ready();

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
    }

    loadMap() {
      let style = [];
      style = mapStyle;

      this.map = GoogleMaps.create('map_canvas', {
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
        target: {lat: lat, lng: long},
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

        let buildingCoor: ILatLng[] = coords;

        this.buildings[i]['COORS'] = buildingCoor;

        // create polygon
        let polygon: Polygon = this.map.addPolygonSync({
          points: buildingCoor,
          strokeColor : '#537ed0',
          fillColor : '#eaf0ff',
          strokeWidth: 5,
          zIndex: 1,
          clickable: true
        });

        // when clicked open htmlinfo window.
        polygon.on(GoogleMapsEvent.POLYGON_CLICK).subscribe((data) => {
          console.log("polygon clicked");
          // this.filterFab.close(); //close the fab
          // html info window when polygon is clicked
          let frame: HTMLElement = document.createElement('div');
          //animate later class="animated infinite pulse"
          frame.innerHTML = `
          <div class="infoWindow ion-text-nowrap">
            `+ building['SHORTENED_NAME'] +`
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
            "margin": "-5px", //offset
            "margin-top" : "1vh"
          });


          let centerMarker = this.map.addMarkerSync({
            position: (new LatLngBounds(this.buildings[i]['COORS'])).getCenter(),
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

    async addIconToBuilding(iconUrl:string, buildingID) {
      const ind = this.buildings.findIndex(building => building['BUILDING_ID'] === buildingID);
      this.buildings[ind]["ICONS"].push(iconUrl);
    }

    //array of data of json objects to create the markers for
    async createFilterMarkers(arr): Promise<any> {
      return await new Promise<any>((resolve, reject) => {
        for (let j = 0; j < arr.length; j++) {
          var icon;
          if(arr[j]['ICON'].slice(0,3) == "data") {
            arr[j]['ICON'] = arr[j]['ICON']; //base64 data
          } else if(arr[j]['ICON']) {
            arr[j]['ICON'] = 'assets/icon/'+arr[j]['ICON']+'.png';
          } else {
            arr[j]['ICON'] = "assets/icon/favicon.png";
          }

          icon = {
            url: arr[j]['ICON'],
            size: {
              width: 35,
              height: 35
            }
          }

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

          marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            // this.filterFab.close(); //close the fab
            // html info window when marker is clicked
            let frame: HTMLElement = document.createElement('div');
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
              "margin": "-1vw", //offset
            });

            this.htmlInfoWindow.open(arr[j]['MARKER']);
          });


          if(j == arr.length - 1) {
            resolve(j);
          }
        }
      });
    }

    changeStatus(cluster) {
      this.map.trigger(cluster);
    }

    async goToPage(buildingData) { //open modal
      // console.log(buildingData);
      const modal = await this.modalController.create({
        component: BuildingModalPage,
        componentProps: {
          building: buildingData
        },
        swipeToClose: true,
        cssClass: 'my-modal'
      });

      modal.onDidDismiss().then((detail: OverlayEventDetail) => {
        try {
          if(detail.data.redirect) {
          }
        } catch (error) {
          // console.log("no redirect");
        }
      });
      this.closeEverything();
      await modal.present();
    }

    stop_close(event: any) {
      event.stopPropagation();
    }

    publishEvent(eventName: string, data: any) {
      this.events.publish(eventName, data);
    }

    onPress(filterData) {
      console.log("press");
      this.pressFlag = true;
      setTimeout(() => {
        if(this.pressFlag) {
          this.openFilterModal(filterData);
        } else {
          // console.log("did not hold");
        }
      }, 500); //hold for 500 ms
    }

    onPressUp() {
      // console.log("press up");
      this.pressFlag = false;
    }

    async openFilterModal(filterData) {
      console.log("filter modal");
      const modal = await this.modalController.create({
        component: FilterModalPage,
        componentProps: {
          filter: filterData
        },
        swipeToClose: true,
        cssClass: 'filter-modal'
      });

      modal.onDidDismiss().then((detail: OverlayEventDetail) => {
        try {
          // console.log(detail.data);
          if(detail.data.redirect) {
            const loc: ILatLng = detail.data['marker'].getPosition();
            this.animateCamera(loc['lat'], loc['lng']);
            detail.data['marker'].setVisible(true);
            detail.data['marker'].trigger(GoogleMapsEvent.MARKER_CLICK, loc);
          }
        } catch (error) {
          // console.log("no redirect");
        }
      });

      this.closeEverything();
      await modal.present();
    }

    getItems(ev: any) { //for search functionality
      this.filteredItems = []; //reset filteredItems

      const val = ev.target.value;

      if(val && val.trim() != "") {
        this.itemAvailable = true;

        //adding dynamically the fitlered items
        for (let index = 0; index < this.toSearch.length; index++) {
          const item = this.toSearch[index];
          if(((item['FULL_NAME']+"").toUpperCase().search(val.toUpperCase()) > -1) || ((item['TITLE']+"").toUpperCase().search(val.toUpperCase()) > -1) || (item['DESCRIPTION'].toUpperCase().search(val.toUpperCase()) > -1) || ((item['SHORTENED_NAME']+"").toUpperCase().search(val.toUpperCase()) > -1)) {
            this.filteredItems.push(item);
          }
        }
      } else {
        this.itemAvailable = false;
      }
    }

    goToItem(item) {
      // this.search = false;
      var loc: ILatLng;
      if(item['MARKER']) {
        //filter item
        loc = item['MARKER'].getPosition();
        item['MARKER'].setVisible(true);
        item['MARKER'].trigger(GoogleMapsEvent.MARKER_CLICK, loc);
      } else {
        loc = (new LatLngBounds(item['COORS'])).getCenter();
        item['POLYGON'].trigger(GoogleMapsEvent.POLYGON_CLICK, loc);
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
        if(this.about["IMAGE"]) {
          if(this.about["IMAGE"].slice(0,3) == "data" || this.about["IMAGE"].slice(0,3) == "http" || this.about["IMAGE"].includes('www') || this.about["IMAGE"].includes('.edu')) {
            //do nothing base64 data or external link
          } else {
            //image stored in images folder
            this.about["IMAGE"] = 'assets/images/' + this.about["IMAGE"];
          }
        } else {
          //if it does not exist
          this.about["IMAGE"] = "assets/images/campus.jpg";
        }

        this.about["GOAL TITLES"] = tempT;
        this.about["GOAL DESCRIPTIONS"] = tempD
        // console.log(this.about);
      });

    }

    async openAboutModal() {
      const modal = await this.modalController.create({
        component: AboutPage,
        componentProps: {
          about: this.about
        },
        swipeToClose: true,
        cssClass: 'about-modal' //same css class
      });

      modal.onDidDismiss().then((detail: OverlayEventDetail) => {});

      this.closeEverything();
      await modal.present();
    }

    async openBuildingListModal() {
      const modal = await this.modalController.create({
        component: BuildingListModalPage,
        componentProps: {
          buildings: this.buildings,
        },
        swipeToClose: true,
        cssClass: 'filter-modal' //same css class
      });

      modal.onDidDismiss().then((detail: OverlayEventDetail) => {
        try {
          // console.log(detail.data);
          if(!detail.data.redirect) {
            const loc: ILatLng = (new LatLngBounds(detail.data['building']['COORS'])).getCenter();
            this.animateCamera(loc['lat'], loc['lng']);
            detail.data['building']['POLYGON'].trigger(GoogleMapsEvent.POLYGON_CLICK, loc);
          } else {
            // console.log("redirect to building page");
          }
        } catch (error) {
          // console.log("regular close");
        }
      });

      this.closeEverything();
      await modal.present();
    }

    closeEverything() {
      this.htmlInfoWindow.close();
      this.search = false;
      this.itemAvailable = false;
      this.filteredItems = [];
    }

}
