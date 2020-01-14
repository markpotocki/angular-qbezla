import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskMeterModule } from './task-meter/task-meter.module';
import { SpinnerModule } from './spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    TaskMeterModule,
    SpinnerModule
  ],
  exports: [
    TaskMeterModule,
    SpinnerModule
  ],
  declarations: []
})
export class SharedModule { }