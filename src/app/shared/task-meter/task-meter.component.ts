import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-task-meter',
  templateUrl: './task-meter.component.html',
  styleUrls: ['./task-meter.component.css']
})
export class TaskMeterComponent implements OnInit, AfterViewInit {

  @Input('totalTasks') totalTasks: number = 0;
  @Input('currentTask') currentTask: number = 0;
  @Input('currentTaskProgress') currentTaskProgress: number = 50;

  @ViewChild('fill', {static: false}) fillBar;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.fillBar.nativeElement.style = {width: this.currentTaskProgress / 100};
  }

}