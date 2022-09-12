import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaPage } from './nova.page';

const routes: Routes = [
  {
    path: '',
    component: NovaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaPageRoutingModule {}
