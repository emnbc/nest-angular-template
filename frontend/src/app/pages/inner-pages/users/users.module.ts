import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material.module';
import { UsersComponent } from './users.component';
import { UserDialogModule } from './user-dialog/user-dialog.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    UsersRoutingModule,
    SharedModule,
    MaterialModule,
    UserDialogModule
  ]
})
export class UsersModule { }
