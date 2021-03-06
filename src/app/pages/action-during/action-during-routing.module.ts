import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionDuringPage } from './action-during.page';

const routes: Routes = [
  {
    path: '',
    component: ActionDuringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionDuringPageRoutingModule {}
