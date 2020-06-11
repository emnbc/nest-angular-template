import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
