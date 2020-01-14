import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskMeterComponent } from './task-meter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TaskMeterComponent
  ],
  declarations: [TaskMeterComponent]
})
export class TaskMeterModule { }