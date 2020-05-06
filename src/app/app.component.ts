import { Component, OnInit, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Environment } from '@ionic-native/google-maps';
import { Storage } from '@ionic/storage';
import { EventService } from './events/event.service';
import { AppDataService } from './services/app-data.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  public selectedIndex = -1;
  public buildings = [];
  public filters = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private events: EventService,
    private appData: AppDataService,
    private router: Router,
    private zone: NgZone,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    // get filter and building data
    await this.appData.getBuildingFilterNames(true).then((data) => {
      // console.log(data);
      this.buildings = data[0];
      for (let i = 0; i < this.buildings.length; i++) {
        this.buildings[i]['URL'] = "/folder/" + this.buildings[i]['BUILDING_ID'];
      }
      this.filters = data[1];
    });

    this.platform.ready().then(() => {
      // google maps
      //test api AIzaSyB3DJoHHWjMK4ikT4XDom_sxxX2wzYrsfU
      Environment.setEnv({
        // api key for server
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyB3DJoHHWjMK4ikT4XDom_sxxX2wzYrsfU',

        // api key for local development
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyB3DJoHHWjMK4ikT4XDom_sxxX2wzYrsfU'
      });

      //moved to a new building page
      this.events.subscribe('page', (data: number) => {
        this.selectedIndex = data-1;
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      console.log("inside plaform");
    });
    console.log("after plaform");
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.buildings.findIndex(page => page['BUILDING_ID'] === path);
    }
  }

  publishEvent(eventName: string, data: any) {
    this.events.publish(eventName, data);
    // this.appData.updateFilterData(this.filters);
  }

}
