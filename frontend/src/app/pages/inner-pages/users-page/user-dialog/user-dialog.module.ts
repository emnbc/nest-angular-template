import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../shared/material.module';
import { UserDialogComponent } from './user-dialog.component';



@NgModule({
  declarations: [UserDialogComponent],
  imports: [
    SharedModule,
    MaterialModule
  ]
})
export class UserDialogModule { }
