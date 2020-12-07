import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { ProfilePageRoutingModule } from './profile-page-routing.module'
import { ProfilePageComponent } from './profile-page.component';



@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    SharedModule,
    MaterialModule,
    ProfilePageRoutingModule
  ]
})
export class ProfilePageModule { }
