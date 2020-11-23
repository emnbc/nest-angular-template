import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

import { UserFormComponent } from './user-form.component';



@NgModule({
  declarations: [UserFormComponent],
  imports: [
    SharedModule,
    MaterialModule
  ],
  exports: [UserFormComponent]
})
export class UserFormModule { }
