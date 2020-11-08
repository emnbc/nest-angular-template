import { NgModule } from '@angular/core';

import { SignInPageRoutingModule } from './sign-in-page-routing.module';
import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';
import { SignInPageComponent } from './sign-in-page.component';

@NgModule({
  declarations: [SignInPageComponent],
  imports: [
    SignInPageRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class SignInPageModule { }
