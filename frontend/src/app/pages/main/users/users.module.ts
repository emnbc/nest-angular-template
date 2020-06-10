import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
