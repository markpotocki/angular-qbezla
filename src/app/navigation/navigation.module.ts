import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    NavigationComponent
  ],
  declarations: [MainNavComponent, SideNavComponent, NavigationComponent]
})
export class NavigationModule { }