import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeyesRNPage } from './leyes-rn.page';

const routes: Routes = [
  {
    path: '',
    component: LeyesRNPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeyesRNPageRoutingModule {}
