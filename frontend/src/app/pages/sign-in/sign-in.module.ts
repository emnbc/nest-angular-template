import { NgModule } from '@angular/core';

import { SignInRoutingModule } from './sign-in-routing.module';
import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';
import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    SignInRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class SignInModule { }
