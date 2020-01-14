import { Component, OnInit, ViewChild } from '@angular/core';

import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {

  private homeButton = faHome;
  private userButton = faUsers;

  @ViewChild('sidenav', {static: false}) sidenav;

  sideNavIsVisible = false;

  constructor() { }

  navItems = [{
    name: 'Home',
    faIcon: this.homeButton,
    goto: '/'
  },
  {
    name: 'Users',
    faIcon: this.userButton,
    goto: '/users'
  }
  
  ]

  ngOnInit() {
  }

  toggleSideNav(show: boolean) {
    console.log('changing side nav to ' + !this.sideNavIsVisible);
    this.sidenav.toggle();
  }

}

export class NavItems {
  name: string;
}