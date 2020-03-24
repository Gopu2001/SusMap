import { Component } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, ILatLng, PolygonOptions, Polygon } from '@ionic-native/google-maps';
import { mapStyle } from './mapStyle';
import { HTTP } from '@ionic-native/http/ngx';
import { MenuController } from '@ionic/angular';
import { EventService } from './../events/event.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    public filters = [
      {
        title: 'Economical',
        active: false
      },
      {
        title: 'Environmental',
        active: false
      }
    ];
    map: GoogleMap;
    environmentalMarkers = [];

    constructor(
      public toastCtrl: ToastController,
      private platform: Platform,
      private http: HTTP,
      private menu: MenuController,
      private events: EventService
      ) { }

    ngOnInit() {
      this.menu.enable(true,'insideMap');
      for (let i = 0; i < this.filters.length; i++) {
        this.events.subscribe(this.filters[i].title, (data: any) => {
          //update active status
          this.filters[i].active = !data.active;
        });
      }
      // Since ngOnInit() is executed before `deviceready` event,
      // you have to wait the event.
      this.platform.ready();
      this.loadMap();
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
          zoom: 15.5,
          tilt: 0,
        },
        'gestures': {
          'scroll': true, 'tilt': false, 'rotate': false, 'zoom': true
        },
        styles: style,
        preferences: {
          zoom: {
            minZoom: 14.5,
            maxZoom: 18
          },
        }

      });

      // this.goToMyLocation();
      this.getData();
      this.addBuildings();
      this.addEnvironmentalMarkers();
    }

    getData() {
      // this.http
    }

    addBuildings() {
      //cob1
      let cob1: ILatLng[] = [
        {lat: 37.366656, lng: -120.423602},
        {lat: 37.367002, lng: -120.423993},
        {lat: 37.367466, lng: -120.423028},
        {lat: 37.367245, lng: -120.422783}
      ];

      let polygon: Polygon = this.map.addPolygonSync({
        points: cob1,
        strokeColor : '#AA00FF',
        fillColor : '#00FFAA',
        strokeWidth: 10,
        zIndex: 1
      });

    }

    addEnvironmentalMarkers() {
      let marker = this.map.addMarkerSync({
        title: 'efuwioef',
        icon: 'blue',
        animation: 'drop',
        position: {
          lat: 37.36590,
          lng: -120.423800 //from 333
        },
        zIndex: 1
      });

      this.environmentalMarkers.push(marker);

      // buildings[0].addEventListener("buildings").subscribe(() => {
      //   console.log("trigger");
      //   marker.setVisible(false);
      //   // marker.setVisible(!marker.isVisible());
      // });

      this.environmentalMarkers[0].addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        console.log("Marker: " + marker.isVisible());

      });

      this.map.addEventListener("environmental").subscribe(() => {
        for(var i = 0; i < this.environmentalMarkers.length; i++) {
          this.environmentalMarkers[0].setVisible(!marker.isVisible());
        }
      })
    }

    changeStatus(cluster) {
      this.map.trigger(cluster);
    }

    printData() {
      for (let i = 0; i < this.filters.length; i++) {
        console.log("title: " + this.filters[i].title + ", active: " + this.filters[i].active);
      }
    }


}
