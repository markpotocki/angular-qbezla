import { Component, OnInit } from '@angular/core';

import { faAtom } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get spinner() {
    return faAtom;
  }

}