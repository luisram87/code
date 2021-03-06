import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionAfterPageRoutingModule } from './action-after-routing.module';

import { ActionAfterPage } from './action-after.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ActionAfterPageRoutingModule
  ],
  declarations: [ActionAfterPage]
})
export class ActionAfterPageModule {}
