import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactosInteresPage } from './contactos-interes.page';

const routes: Routes = [
  {
    path: '',
    component: ContactosInteresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactosInteresPageRoutingModule {}
