import { Component, NgZone, OnInit } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
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
import { MenuController } from '@ionic/angular';
import { EventService } from './../events/event.service';
import { AppDataService } from './../services/app-data.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { forkJoin } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { BuildingModalPage } from './../building-modal/building-modal.page';
import { OverlayEventDetail } from '@ionic/core';

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
    //   {
    //     Name: 'Environmental',
    //     active: false
    //   }
    // ];
    public map: GoogleMap;
    private dataFlag = false;
    public loading;

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
      await this.appData.getBuildingFilterNames(true).then((data) => {
        this.buildings = data[0];
        this.filters = data[1];
      });

      this.loading = this.loadingController.create({
        spinner: "bubbles",
        duration: 500*this.filters.length,
        message: "Fetching Data...",
        translucent: true,
        backdropDismiss: false
      });


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
      // Since ngOnInit() is executed before `deviceready` event,
      // you have to wait the event.
      await this.platform.ready();
      await this.loadMap();
      await this.addBuildings();

      // setTimeout(() => {
      //   console.log("animating camera");
      //   this.map.animateCamera({
      //     target: {lat: 37.363595, lng: -120.425361},
      //     zoom: 16.5,
      //     tilt: 0,
      //     // bearing: 140,
      //     duration: 15000
      //   }).then(() => {
      //     alert("Camera target has been changed");
      //   });
      // }, 8000);

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
          'scroll': true, 'tilt': false, 'rotate': false, 'zoom': true
        },
        styles: style,
        preferences: {
          zoom: {
            minZoom: 15,
            maxZoom: 17.5
          },
        }
      });

    }

    addBuildings() {
      // console.log(this.buildings);
      for (let i = 0; i < this.buildings.length; i++) {
        const building = this.buildings[i];

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
          // html info window when polygon is clicked
          let frame: HTMLElement = document.createElement('div');
          //animate later class="animated infinite pulse"
          frame.innerHTML = `
          <div class="infoWindow ion-text-nowrap">
            <p>`+ building['SHORTENED_NAME'] +`</p>
          </div>`;

          frame.getElementsByClassName("infoWindow")[0].addEventListener("click", () => {
            //open modal instead
            this.goToPage(building);
            this.htmlInfoWindow.close();
          });

          this.htmlInfoWindow.setContent(frame, {
            //css here
          });


          let centerMarker = this.map.addMarkerSync({
            position: (new LatLngBounds(this.buildings[i]['COORS'])).getCenter(),
            visible: false,
            zIndex: 0
          });

          // this.buildings[i]['CENTER'] = centerMarker;

          this.htmlInfoWindow.open(centerMarker);
        });


        // this.buildings[i]['polygon'] = polygon;
      }

    }

    //array of data of json objects to create the markers for
    async createFilterMarkers(arr): Promise<any> {
      return await new Promise<any>((resolve, reject) => {
        for (let j = 0; j < arr.length; j++) {
          var icon;
          var iconURL;
          if(arr[j]['ICON'].slice(0,3) == "data") {
            iconURL = arr[j]['ICON']; //base64 data
          } else {
            iconURL = 'assets/icon/'+arr[j]['ICON']+'.png';
          }
          if(arr[j]['ICON']) {
            icon = {
              url: iconURL,
              size: {
                width: 35,
                height: 35
              }
            }
          } else {
            icon = "red";
          }

          var marker = this.map.addMarkerSync({
            position: {
              lat: arr[j]['LATITUDE'],
              lng: arr[j]['LONGITUDE']
            },
            icon: icon,
            visible: false,
            zIndex: 2
          });

          arr[j]['MARKER'] = marker;

          marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            // html info window when marker is clicked
            let frame: HTMLElement = document.createElement('div');
            frame.innerHTML = `
            <div class="markerInfoWindow">
              <h5>` + arr[j]['TITLE'] + `</h5>
              <p><small>` + arr[j]['DESCRIPTION'] + `<small></p>
            </div>
            `;

            this.htmlInfoWindow.setContent(frame, {
              //css here
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
          console.log("no redirect")
        }
      });

      await modal.present();
    }

    printData() {
      for (let i = 0; i < this.filters.length; i++) {
        console.log("Name: " + this.filters[i]["FILTER_NAME"] + ", active: " + this.filters[i]['ACTIVE']);
      }
      console.log(this.filters);
    }


}
