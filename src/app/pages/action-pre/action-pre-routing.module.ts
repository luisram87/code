import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionPrePage } from './action-pre.page';

const routes: Routes = [
  {
    path: '',
    component: ActionPrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionPrePageRoutingModule {}
