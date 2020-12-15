import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { HomePageComponent } from './home-page.component';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
