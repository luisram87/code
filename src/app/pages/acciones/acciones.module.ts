import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccionesPageRoutingModule } from './acciones-routing.module';

import { AccionesPage } from './acciones.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AccionesPageRoutingModule
  ],
  declarations: [AccionesPage]
})
export class AccionesPageModule {}
