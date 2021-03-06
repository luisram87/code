import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InundHistoricoPageRoutingModule } from './inund-historico-routing.module';

import { InundHistoricoPage } from './inund-historico.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InundHistoricoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InundHistoricoPage]
})
export class InundHistoricoPageModule {}
