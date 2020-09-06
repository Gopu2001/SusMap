import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TosPpPageRoutingModule } from './tos-pp-routing.module';

import { TosPpPage } from './tos-pp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TosPpPageRoutingModule
  ],
  declarations: [TosPpPage]
})
export class TosPpPageModule {}
