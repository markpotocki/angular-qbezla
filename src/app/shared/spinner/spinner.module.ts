import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SpinnerComponent } from './spinner.component';



@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SpinnerComponent
  ],
  declarations: [SpinnerComponent]
})
export class SpinnerModule { }