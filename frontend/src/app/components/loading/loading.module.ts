import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

import { LoadingComponent } from './loading.component';



@NgModule({
  declarations: [LoadingComponent],
  imports: [
    SharedModule,
    MaterialModule
  ],
  exports: [LoadingComponent]
})
export class LoadingModule { }
