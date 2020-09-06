import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { BuildingModalPageModule } from './../building-modal/building-modal.module';
import { FilterModalPageModule } from './../filter-modal/filter-modal.module';
import { AboutPageModule } from './../about/about.module';
import { TosPpPageModule } from './../tos-pp/tos-pp.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BuildingModalPageModule,
    FilterModalPageModule,
    AboutPageModule,
    TosPpPageModule
  ],
  declarations: [HomePage],
  entryComponents: []
})
export class HomePageModule {}
