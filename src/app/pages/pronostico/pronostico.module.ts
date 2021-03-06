import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PronosticoPageRoutingModule } from './pronostico-routing.module';
import { PronosticoPage } from './pronostico.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PronosticoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PronosticoPage]
})
export class PronosticoPageModule {}
