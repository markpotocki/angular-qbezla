import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCircleNotch, faBorderStyle, faFeatherAlt } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
    animations: [
    trigger('ShowHideSideNav', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('600ms 0.2ms ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('600ms 0.2ms ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('ShowHideOverlay', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('600ms 0.2ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms 0.2ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SideNavComponent implements OnInit {

// buttons
  private homeButton = faHome;
  logoBorder = faCircleNotch;
  logo = faFeatherAlt;

// items to show on navigation menu
  @Input('navItems') navItems = [{
    name: 'Home',
    faIcon: this.homeButton,
    goto: '/'
  }]

// funcitonality
  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth >= 1024) {
      this.isOpen = true;
    }
  }

  toggle(open?: boolean) {
    if (open == null) {
      this.isOpen = !this.isOpen;
    } else {
      this.isOpen = open;
    }
  }

}