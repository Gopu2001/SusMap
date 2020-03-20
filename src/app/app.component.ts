import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Environment } from '@ionic-native/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
// AIzaSyB3DJoHHWjMK4ikT4XDom_sxxX2wzYrsfU
  initializeApp() {
    this.platform.ready().then(() => {

      Environment.setEnv({
        // api key for server
        //test is AIzaSyB3DJoHHWjMK4ikT4XDom_sxxX2wzYrsfU
        //actual is AIzaSyBo3q4Fnbrw7j2NVkNKD763cInmIPaHh8M
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyB3DJoHHWjMK4ikT4XDom_sxxX2wzYrsfU',

        // api key for local development
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyB3DJoHHWjMK4ikT4XDom_sxxX2wzYrsfU'
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
