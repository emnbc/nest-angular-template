import { NgModule } from '@angular/core';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    AboutPageRoutingModule,
    SharedModule
  ]
})
export class AboutPageModule { }
