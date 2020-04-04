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
  //   {
  //     title: 'Cob1',
  //     url: '/folder/Cob1'
  //   },
  //   {
  //     title: 'KL',
  //     url: '/folder/KL'
  //   }
  // ];
  public filters = [];
  //   {
  //     title: 'Economical',
  //     active: false
  //   },
  //   {
  //     title: 'Environmental',
  //     active: false
  //   }
  // ];

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
    await this.appData.getBuildingData(true).then((build) => {
      if(build) {
        this.buildings = build;
      }

      this.appData.getFilterData(true).then((filt) => {
        if(filt) {
          this.filters = filt;
        }
      });
    });

    this.platform.ready().then(() => {
      // google maps
      Environment.setEnv({
        // api key for server
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyB3DJoHHWjMK4ikT4XDom_sxxX2wzYrsfU',

        // api key for local development
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyB3DJoHHWjMK4ikT4XDom_sxxX2wzYrsfU'
      });



      this.events.subscribe('clear', (data: any) => {
        for (let index = 0; index < this.filters.length; index++) {
          this.filters[index].active = false;
        }
        this.appData.updateFilterData(this.filters);
      });

      this.events.subscribe('page', (data: number) => {
        this.selectedIndex = data-1;
        // this.selectedIndex = data;
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.buildings.findIndex(page => page['BUILDING_ID'] === path);
    }
  }

  publishEvent(eventName: string, data: any) {
    this.events.publish(eventName, data);
    this.appData.updateFilterData(this.filters);
  }

  // goToPage(id) {
  //   // console.log(id);
  //   this.selectedIndex = id;
  //   if(id == -1) {
  //     this.zone.run(async () => {
  //       await this.router.navigate(['/']);
  //       this.menu.enable(true,'insideMap');
  //     });
  //   } else {
  //     this.zone.run(async () => {
  //       await this.router.navigate(['/folder/' + id]);
  //     });
  //   }
  // }

  // test() {
  //   console.log("app");
  // }
}
