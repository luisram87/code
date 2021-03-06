import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VecinosPageRoutingModule } from './vecinos-routing.module';

import { VecinosPage } from './vecinos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VecinosPageRoutingModule,
    
  ],
  declarations: [VecinosPage]
})
export class VecinosPageModule {}
