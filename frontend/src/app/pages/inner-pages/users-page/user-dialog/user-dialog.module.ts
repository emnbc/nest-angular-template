import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../shared/material.module';
import { UserDialogComponent } from './user-dialog.component';
import { UserFormModule } from '../../../../components/user-form/user-form.module';



@NgModule({
  declarations: [UserDialogComponent],
  imports: [
    SharedModule,
    MaterialModule,
    UserFormModule
  ]
})
export class UserDialogModule { }
