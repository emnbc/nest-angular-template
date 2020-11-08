import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { InnerPagesRoutingModule } from './inner-pages-routing.module';
import { InnerPagesComponent } from './inner-pages.component';

@NgModule({
  declarations: [InnerPagesComponent],
  imports: [
    SharedModule,
    MaterialModule,
    InnerPagesRoutingModule
  ]
})
export class InnerPagesModule { }
