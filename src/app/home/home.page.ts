import { Component } from '@angular/core';
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
  HtmlInfoWindow } from '@ionic-native/google-maps';
import { mapStyle } from './mapStyle';
import { HTTP } from '@ionic-native/http/ngx';
import { MenuController } from '@ionic/angular';
import { EventService } from './../events/event.service';
import { AppDataService } from './../services/app-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    //data:image/jpg;base64,
    public htmlInfoWindow = new HtmlInfoWindow();
    public buildings = [];
    public filters = [];
    //   {
    //     Name: 'Economic',
    //     active: false
    //   },
    //   {
    //     Name: 'Environmental',
    //     active: false
    //   }
    // ];
    map: GoogleMap;
    filterData = []; //mapped in order in filters array. also contains markers
    environmentalMarkers = [];

    constructor(
      public toastCtrl: ToastController,
      private platform: Platform,
      private http: HTTP,
      private menu: MenuController,
      private events: EventService,
      private appData: AppDataService,
      private router: Router
    ) { }

    async ngOnInit() {
      this.menu.enable(true,'insideMap');

      // getting filter data
      await this.appData.getFilterData(true).then((filt) => {
        if(filt) {
          this.filters = filt;
        }
      });

      // get the specific filter data for each one
      for (let i = 0; i < this.filters.length; i++) {
        this.appData.getSpecificFilterData(this.filters[i]['Name'], true).then((val) => {
          if(val) {
            this.filterData.push(val);
          }
        });
      }

      // get building data
      await this.appData.getBuildingData(true).then((build) => {
        if(build) {
          this.buildings = build;
        }
      });

      // updated event filters active status from menu
      for (let i = 0; i < this.filters.length; i++) {
        await this.events.subscribe(this.filters[i].Name, (data: any) => {
          // update active status
          this.filters[i].active = data.active;
          // update markers
          //....
        });
      }

      // Since ngOnInit() is executed before `deviceready` event,
      // you have to wait the event.
      await this.platform.ready();
      await this.loadMap();
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

      // this.map.animateCamera({
      //   target: {lat: 37.422359, lng: -122.084344},
      //   zoom: 15.5,
      //   tilt: 0,
      //   bearing: 140,
      //   duration: 5000
      // }).then(() => {
      //   //alert("Camera target has been changed");
      // });

      this.addBuildings();
      this.addFilterMarkers();
      // this.addEnvironmentalMarkers();
    }

    addBuildings() {
      for (let i = 0; i < this.buildings.length; i++) {
        const building = this.buildings[i];

        // add the coordinates
        var coords = [];
        for (let coor = 1; coor <= building['NUM_COORDINATES']; coor++) {
          var latC = building['Latitude ' + coor];
          var longC = building['Longitude ' + coor];
          var tempCoorSet = {
            lat: latC,
            lng: longC
          };
          coords.push(tempCoorSet);
        }

        let buildingCoor: ILatLng[] = coords;

        this.buildings[i]['coors'] = buildingCoor;

        // create polygon
        let polygon: Polygon = this.map.addPolygonSync({
          points: buildingCoor,
          strokeColor : '#AA00FF',
          fillColor : '#00FFAA',
          strokeWidth: 10,
          zIndex: 1,
          clickable: true
        });

//data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXMzMzPz8+vr6/Ly8vAwMCRkZHDw8PGxsaWlpaenp6Tk5PCwsK2trahoaG6urqsrKympqZJMGkaAAAFGElEQVR4nO2dbZfbKAyFEWAD5vX//9q9giT2ZLbT9pw2TXfv0zMuiWUfXQsJ/EUxhhBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQ8lsR8OXwi+vks/F3r3s5bRyxeqfD0OPR9/mts2mr/ovLJI94pOKejVs6YnO/1+Wfo8UtqVM6TltMW5ruWR3GLySGeMQUN/tk3CA7xvL7/f5hJB0lhLbVYKRtfQ/9KJhlOdYcylG/OeGkI9rBJ9V1MQ718MEfKbxSw9fkrRv1N+7GJXXMVQTR9W2Hv317eHpLrofikDTW4vE8LsZ4SHg+6/guLGekbFl8HDLFNgk16rBFe/M0WKtis73PvzyNTcDlF2MZh6ZxiN8O/ssJWT2XEXconE9ewxLS8n/9p6QZnPoIjlvXtY/GUuf8dCO+j0Ile3t0B29nrdCw7Ct4F4U+Hk78Nq5VMvgSkb8XY0nTwPXjrRTKdhxpx0ydM8y4zco+yw0ys96N4LR1NfqL54joceCLi7HEfqvEr5XwHVRhtA656NZHi/ozVw+p6REzH1OP48N1CRciZhdjmXXLiN3eakU04kpEHp4xNJ9jqCE+4sdFQKQl5O6/xvC9FGoB3TwkZB1f8tCdeQiw33nOLqwL9mos8f3ysLUZl7Y1lPs521Yt7U+VRpe+I51+5zKv04BfjKXWd6ulWCbWZgvrYZ6ein2sh+ZcD1VATId9XFfWuuEe6+E0njuHuR14H4VlJtH0bG1TTEVddWs3Y7dzY1pibzHt94+37UFbe5q7MYQ30XDbt1GIrEu7oFjo7NItKeaqFswWuyCo8bRLkDHOICKkTTR8/oPxHhP2dynmPyDlG2AHHee7hT50vGbUbRXMsUUM2+NtsW+YwuF4uI7oHakeK1gXY1TcGs8H8Q6EnuDrrDHGw7m6VIUBueVR88Om2qDz3HCWhBelbp6MncVblX2jVwvgQs53j8L+GLpzqJ/8PpeBfHljVGP3yRjD/d0WQ0IIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEELIm5PLefzL8N7/SI85Pxvw+aeeibOnmwu7n3eZN9p3/N3Pu331ggs+u3UKw1/o/I8g0dq+r3byZ9NrWQe5d8IWyXeFcjfRP+vnl83WYb02uDVuJJFHd8zebYeJH310MxsRO7u9uLEkvJFSpNcu0p144zDwtQcjvaTdde1EiKNdCuFqlt0iIKtbqNdumJBts2iT2iAQeyos1kkIJkCls0WqbRL6q9ufLoVwBRJKc9HkLm0YD53JGhnN9KbHOhXmtOcRTPdS7FRYMD2LKvTabLhZN8IZQ7n18fWzmWSVFIaz7dXtwOcsDXV64HrrpXmxw9oIP9fZYfUpPPJQ4+aH6bPlt1qqwVKYDDTKFwoF+syrG7xKyj7AFYEHMuw+MN+szTlrdPHncw5wHbNvKuxLDCbtvBjGM0VvCqVEfyrEtNeWrqgwmP7SOr7WxumvV7jyC/+QecPYirwZfs5S0UzypQnKRVoKYynaEdqvRqj3SvNQKDKPMaO0ShRXC8oQ7jKQnm4+Mnm5QjNXOIRIW5t6b3b1OSCK64xrtqAAFttWT/dWtIvyykIVp0K1/s9Bud0Qk8BiLuNjwIV6BncJ5/k/w8cHe/kpkqffTTCrNfR3bnb5OZRPN/wbyKn9XQ7/PP91fYT8j/gHpIIpSX4o390AAAAASUVORK5CYII=



        let centerMarker = this.map.addMarkerSync({
          position: (new LatLngBounds(buildingCoor)).getCenter(),
          visible: false,
          zIndex: 0
        });

        this.buildings[i]['center'] = centerMarker;

        // when clicked open htmlinfo window.
        polygon.on(GoogleMapsEvent.POLYGON_CLICK).subscribe((data) => {
          console.log("polygon clicked");
          // html info window when polygon is clicked
          let frame: HTMLElement = document.createElement('div');
          frame.innerHTML = `
          <ion-card class="ion-no-padding" no-padding button=true (click)="goToPage(` + building['BUILDING_ID'] + `);">
            <ion-card-header>
              <ion-card-title>` + building['Full_Name'] + `</ion-card-title>
              <ion-card-subtitle>` + building['Shortened_Name'] + `</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <img alt=" " height="100vh" width="110vh" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXMzMzPz8+vr6/Ly8vAwMCRkZHDw8PGxsaWlpaenp6Tk5PCwsK2trahoaG6urqsrKympqZJMGkaAAAFGElEQVR4nO2dbZfbKAyFEWAD5vX//9q9giT2ZLbT9pw2TXfv0zMuiWUfXQsJ/EUxhhBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQ8lsR8OXwi+vks/F3r3s5bRyxeqfD0OPR9/mts2mr/ovLJI94pOKejVs6YnO/1+Wfo8UtqVM6TltMW5ruWR3GLySGeMQUN/tk3CA7xvL7/f5hJB0lhLbVYKRtfQ/9KJhlOdYcylG/OeGkI9rBJ9V1MQ718MEfKbxSw9fkrRv1N+7GJXXMVQTR9W2Hv317eHpLrofikDTW4vE8LsZ4SHg+6/guLGekbFl8HDLFNgk16rBFe/M0WKtis73PvzyNTcDlF2MZh6ZxiN8O/ssJWT2XEXconE9ewxLS8n/9p6QZnPoIjlvXtY/GUuf8dCO+j0Ile3t0B29nrdCw7Ct4F4U+Hk78Nq5VMvgSkb8XY0nTwPXjrRTKdhxpx0ydM8y4zco+yw0ys96N4LR1NfqL54joceCLi7HEfqvEr5XwHVRhtA656NZHi/ozVw+p6REzH1OP48N1CRciZhdjmXXLiN3eakU04kpEHp4xNJ9jqCE+4sdFQKQl5O6/xvC9FGoB3TwkZB1f8tCdeQiw33nOLqwL9mos8f3ysLUZl7Y1lPs521Yt7U+VRpe+I51+5zKv04BfjKXWd6ulWCbWZgvrYZ6ein2sh+ZcD1VATId9XFfWuuEe6+E0njuHuR14H4VlJtH0bG1TTEVddWs3Y7dzY1pibzHt94+37UFbe5q7MYQ30XDbt1GIrEu7oFjo7NItKeaqFswWuyCo8bRLkDHOICKkTTR8/oPxHhP2dynmPyDlG2AHHee7hT50vGbUbRXMsUUM2+NtsW+YwuF4uI7oHakeK1gXY1TcGs8H8Q6EnuDrrDHGw7m6VIUBueVR88Om2qDz3HCWhBelbp6MncVblX2jVwvgQs53j8L+GLpzqJ/8PpeBfHljVGP3yRjD/d0WQ0IIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEELIm5PLefzL8N7/SI85Pxvw+aeeibOnmwu7n3eZN9p3/N3Pu331ggs+u3UKw1/o/I8g0dq+r3byZ9NrWQe5d8IWyXeFcjfRP+vnl83WYb02uDVuJJFHd8zebYeJH310MxsRO7u9uLEkvJFSpNcu0p144zDwtQcjvaTdde1EiKNdCuFqlt0iIKtbqNdumJBts2iT2iAQeyos1kkIJkCls0WqbRL6q9ufLoVwBRJKc9HkLm0YD53JGhnN9KbHOhXmtOcRTPdS7FRYMD2LKvTabLhZN8IZQ7n18fWzmWSVFIaz7dXtwOcsDXV64HrrpXmxw9oIP9fZYfUpPPJQ4+aH6bPlt1qqwVKYDDTKFwoF+syrG7xKyj7AFYEHMuw+MN+szTlrdPHncw5wHbNvKuxLDCbtvBjGM0VvCqVEfyrEtNeWrqgwmP7SOr7WxumvV7jyC/+QecPYirwZfs5S0UzypQnKRVoKYynaEdqvRqj3SvNQKDKPMaO0ShRXC8oQ7jKQnm4+Mnm5QjNXOIRIW5t6b3b1OSCK64xrtqAAFttWT/dWtIvyykIVp0K1/s9Bud0Qk8BiLuNjwIV6BncJ5/k/w8cHe/kpkqffTTCrNfR3bnb5OZRPN/wbyKn9XQ7/PP91fYT8j/gHpIIpSX4o390AAAAASUVORK5CYII="/>
              <br>
              ` + building['Description'] + `
            </ion-card-content>
          </ion-card>`;

          this.htmlInfoWindow.setContent(frame, {
            height: '40vh',
            width: '50vh',
            'border-radius': '25px'
          });

          // add center marker where html info window is going to display from
          let centerMarker = this.map.addMarkerSync({
            position: (new LatLngBounds(this.buildings[i]['coors'])).getCenter(),
            visible: false,
            zIndex: 0
          });
          this.htmlInfoWindow.open(this.buildings[i]['center']);
          // this.buildings[i]['htmlInfoWindow'].open(this.buildings[i]['center']);
        });

        this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((params: any[]) => {
          this.buildings[i]['htmlInfoWindow'].close();
          // if(Poly.containsLocation(params[0], this.buildings[i]['coors'])) {
          //   console.log("polygon clicked");
          //   this.buildings[i]['htmlInfoWindow'].open(this.buildings[i]['center']);
          // }
        });

        // when long clicked, polygon goes straight to its specific page
        // this.map.on(GoogleMapsEvent.MAP_LONG_CLICK).subscribe((params: any[]) => {
        //   console.log("long click");
        //   this.buildings[i]['htmlInfoWindow'].close();
        //   if(Poly.containsLocation(params[0], this.buildings[i]['coors'])) {
        //     this.goToPage(this.buildings[i]['BUILDING_ID']);
        //   }
        // });

        this.buildings[i]['polygon'] = polygon;
      }
      //cob1
      // let cob1: ILatLng[] = [
      //   {lat: 37.366656, lng: -120.423602},
      //   {lat: 37.367002, lng: -120.423993},
      //   {lat: 37.367466, lng: -120.423028},
      //   {lat: 37.367245, lng: -120.422783}
      // ];
      //
      // let polygon: Polygon = this.map.addPolygonSync({
      //   points: cob1,
      //   strokeColor : '#AA00FF',
      //   fillColor : '#00FFAA',
      //   strokeWidth: 10,
      //   zIndex: 1
      // });

    }

    addFilterMarkers() {
      for (let i = 0; i < this.filterData.length; i++) {
        const filt = this.filterData[i];
        for (let j = 0; j < filt.length; j++) {
          const item = filt[j];

          let marker = this.map.addMarkerSync({
            position: {
              lat: item['latitude'],
              lng: item['longitude']
            },
            visible: false,
            zIndex: 2
          });

          this.filterData[i][j]['marker'] = marker;

          marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            // html info window when marker is clicked
            let frame: HTMLElement = document.createElement('div');
            frame.innerHTML = `
            <h1>` + item['title'] + `</h1>
            <p>` + item['description'] + `</p>
            `;

            this.htmlInfoWindow.setContent(frame, {
              'border-radius': '25px',
              'text-align': 'center'
            });

            this.htmlInfoWindow.open(this.filterData[i][j]['marker']);
          });

        }
      }
    }

    // addEnvironmentalMarkers() {
    //   let marker = this.map.addMarkerSync({
    //     title: 'efuwioef',
    //     icon: 'blue',
    //     animation: 'drop',
    //     position: {
    //       lat: 37.36590,
    //       lng: -120.423800 //from 333
    //     },
    //     zIndex: 1
    //   });
    //
    //   this.environmentalMarkers.push(marker);
    //
    //
    //   this.environmentalMarkers[0].addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //     console.log("Marker: " + marker.isVisible());
    //
    //   });
    //
    //   this.map.addEventListener("Environmental").subscribe(() => {
    //     for(var i = 0; i < this.environmentalMarkers.length; i++) {
    //       this.environmentalMarkers[i].setVisible(!marker.isVisible());
    //     }
    //   })
    // }

    changeStatus(cluster) {
      this.map.trigger(cluster);
    }

    goToPage(id) {
      this.router.navigate(['/folder/' + id]);
    }

    printData() {
      for (let i = 0; i < this.filters.length; i++) {
        console.log("Name: " + this.filters[i].Name + ", active: " + this.filters[i].active);
      }
    }


}
