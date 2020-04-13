import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
// import { HTTP } from '@ionic-native/http/ngx';

import { IonicStorageModule } from '@ionic/storage';
import { AppDataService } from './services/app-data.service'
import { EventService } from './events/event.service'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios'
    }),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot( {
      name: 'awesome_db',
      driverOrder: ['indexeddb', 'websql', 'sqlite']
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // HTTP,
    AppDataService,
    EventService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
