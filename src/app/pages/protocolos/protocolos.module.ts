import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtocolosPageRoutingModule } from './protocolos-routing.module';

import { ProtocolosPage } from './protocolos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProtocolosPageRoutingModule
  ],
  declarations: [ProtocolosPage]
})
export class ProtocolosPageModule {}
