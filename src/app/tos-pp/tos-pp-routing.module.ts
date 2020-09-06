import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TosPpPage } from './tos-pp.page';

const routes: Routes = [
  {
    path: '',
    component: TosPpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TosPpPageRoutingModule {}
