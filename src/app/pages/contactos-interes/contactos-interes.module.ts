import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ContactosInteresPageRoutingModule } from './contactos-interes-routing.module';
import { ContactosInteresPage } from './contactos-interes.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactosInteresPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContactosInteresPage]
})
export class ContactosInteresPageModule {}
