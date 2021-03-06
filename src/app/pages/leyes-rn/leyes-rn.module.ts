import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeyesRNPageRoutingModule } from './leyes-rn-routing.module';

import { LeyesRNPage } from './leyes-rn.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    ComponentsModule,
    LeyesRNPageRoutingModule
  ],
  declarations: [LeyesRNPage]
})
export class LeyesRNPageModule {}
