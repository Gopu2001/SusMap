import { Component } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, ILatLng, PolygonOptions, Polygon } from '@ionic-native/google-maps';
import { mapStyle } from './mapStyle';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    map: GoogleMap;
    environmentalMarkers = [];

    constructor(
      public toastCtrl: ToastController,
      private platform: Platform,
      private http: HTTP
      ) { }

    ngOnInit() {
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


    // goToMyLocation(){
    //   this.map.clear();
    //
    //   // Get the location of you
    //   this.map.getMyLocation().then((location: MyLocation) => {
    //     console.log(JSON.stringify(location, null ,2));
    //
    //     // Move the map camera to the location with animation
    //     this.map.animateCamera({
    //       target: location.latLng,
    //       zoom: 17,
    //       duration: 5000
    //     });
    //
    //     //add a marker
    //     let marker: Marker = this.map.addMarkerSync({
    //       title: '@ionic-native/google-maps plugin!',
    //       snippet: 'This plugin is awesome!',
    //       position: location.latLng,
    //       animation: GoogleMapsAnimation.BOUNCE
    //     });
    //
    //     //show the infoWindow
    //     marker.showInfoWindow();
    //
    //     //If clicked it, display the alert
    //     marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //       this.showToast('clicked!');
    //     });
    //
    //     this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
    //       (data) => {
    //           console.log("Click MAP",data);
    //       }
    //     );
    //   })
    //   .catch(err => {
    //     //this.loading.dismiss();
    //     this.showToast(err.error_message);
    //   });
    // }

    // async showToast(message: string) {
    //   let toast = await this.toastCtrl.create({
    //     message: message,
    //     duration: 2000,
    //     position: 'middle'
    //   });
    //   toast.present();
    // }

}
