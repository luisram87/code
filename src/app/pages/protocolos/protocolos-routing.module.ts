import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtocolosPage } from './protocolos.page';

const routes: Routes = [
  {
    path: '',
    component: ProtocolosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtocolosPageRoutingModule {}
