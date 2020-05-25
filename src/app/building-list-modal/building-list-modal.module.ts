import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuildingListModalPageRoutingModule } from './building-list-modal-routing.module';

import { BuildingListModalPage } from './building-list-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuildingListModalPageRoutingModule
  ],
  declarations: [BuildingListModalPage]
})
export class BuildingListModalPageModule {}
