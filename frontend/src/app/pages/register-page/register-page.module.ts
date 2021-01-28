import { NgModule } from '@angular/core';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';
import { RegisterPageComponent } from './register-page.component';
import { UserRegistrationModule } from '../../components/user-registration/user-registration.module';


@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    SharedModule,
    MaterialModule,
    RegisterPageRoutingModule,
    UserRegistrationModule
  ]
})
export class RegisterPageModule { }
