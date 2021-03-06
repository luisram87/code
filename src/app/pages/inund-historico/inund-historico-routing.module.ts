import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InundHistoricoPage } from './inund-historico.page';

const routes: Routes = [
  {
    path: '',
    component: InundHistoricoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InundHistoricoPageRoutingModule {}
