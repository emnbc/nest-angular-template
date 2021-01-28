import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

import { UserRegistrationComponent } from './user-registration.component';



@NgModule({
  declarations: [UserRegistrationComponent],
  imports: [
    SharedModule,
    MaterialModule
  ],
  exports: [UserRegistrationComponent]
})
export class UserRegistrationModule { }
