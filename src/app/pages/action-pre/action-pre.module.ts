import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionPrePageRoutingModule } from './action-pre-routing.module';

import { ActionPrePage } from './action-pre.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionPrePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ActionPrePage]
})
export class ActionPrePageModule {}
