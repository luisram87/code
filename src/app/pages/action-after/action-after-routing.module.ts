import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionAfterPage } from './action-after.page';

const routes: Routes = [
  {
    path: '',
    component: ActionAfterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionAfterPageRoutingModule {}
