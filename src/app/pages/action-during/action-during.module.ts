import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionDuringPageRoutingModule } from './action-during-routing.module';

import { ActionDuringPage } from './action-during.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ActionDuringPageRoutingModule
  ],
  declarations: [ActionDuringPage]
})
export class ActionDuringPageModule {}
