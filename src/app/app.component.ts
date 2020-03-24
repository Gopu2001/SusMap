import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Environment } from '@ionic-native/google-maps';
import { Storage } from '@ionic/storage';
import { EventService } from './events/event.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  public selectedIndex = 3;
  public buildings = [
    {
      title: 'Cob1',
      url: '/folder/Cob1',
      active: false
    },
    {
      title: 'KL',
      url: '/folder/KL',
      active: false
    }
  ];
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private events: EventService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      Environment.setEnv({
        // api key for server
        //test is AIzaSyB3DJoHHWjMK4ikT4XDom_sxxX2wzYrsfU
        //actual is
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyB3DJoHHWjMK4ikT4XDom_sxxX2wzYrsfU',

        // api key for local development
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyB3DJoHHWjMK4ikT4XDom_sxxX2wzYrsfU'
      });

      this.events.subscribe('clear', (data: any) => {
        for (let index = 0; index < this.filters.length; index++) {
          this.filters[index].active = false;
        }
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.buildings.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  publishEvent(eventName: string, data: any) {
    this.events.publish(eventName, data);
  }

  // test() {
  //   console.log("app");
  // }
}
