import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildingListModalPage } from './building-list-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BuildingListModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildingListModalPageRoutingModule {}
