import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../shared/material.module';
import { UserDialogComponent } from './user-dialog.component';
import { UserRegistrationModule } from '../../../../components/user-registration/user-registration.module';



@NgModule({
  declarations: [UserDialogComponent],
  imports: [
    SharedModule,
    MaterialModule,
    UserRegistrationModule
  ]
})
export class UserDialogModule { }
