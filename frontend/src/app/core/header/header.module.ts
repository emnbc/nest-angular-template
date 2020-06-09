import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    SharedModule,
    MaterialModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
