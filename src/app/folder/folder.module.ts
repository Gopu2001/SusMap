import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
import { IonMarqueeModule } from 'ionic-marquee';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    IonicHeaderParallaxModule,
    IonMarqueeModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
