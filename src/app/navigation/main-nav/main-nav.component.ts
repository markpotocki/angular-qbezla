import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { faCircleNotch, faBars, faFeatherAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @ViewChild('navbar', {static: false}) navbar;

  @Input('color') color: string = 'purple';
  @Input('static') static: boolean = true;
  @Output('sideNavBtn') sideNavBtn: EventEmitter<boolean> = new EventEmitter<boolean>();

  menuButton = faBars;
  logo = faFeatherAlt;
  logoBorder = faCircleNotch;
  userButton = faUserSecret;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.navbar.nativeElement.style['background-color'] = this.color;

    if (this.static) {
      this.navbar.nativeElement.style['position'] = 'fixed';
    }
  }

  openSideNav() {
    this.sideNavBtn.emit(true);
  }

}