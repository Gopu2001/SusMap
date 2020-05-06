import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuildingModalPageRoutingModule } from './building-modal-routing.module';

import { BuildingModalPage } from './building-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuildingModalPageRoutingModule
  ],
  declarations: [BuildingModalPage]
})
export class BuildingModalPageModule {}
