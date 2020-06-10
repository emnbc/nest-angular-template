import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    SharedModule,
    MaterialModule,
    MainRoutingModule
  ]
})
export class MainModule { }
