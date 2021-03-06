import { NgModule } from '@angular/core';

import { UsersPageRoutingModule } from './users-page-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material.module';
import { UsersPageComponent } from './users-page.component';
import { UserDialogModule } from './user-dialog/user-dialog.module';

import { LoadingModule } from '../../../components/loading/loading.module';

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    UsersPageRoutingModule,
    SharedModule,
    MaterialModule,
    UserDialogModule,
    LoadingModule
  ]
})
export class UsersPageModule { }
