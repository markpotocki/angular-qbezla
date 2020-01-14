import { NgModule, Input } from '@angular/core';

import { Route, RouterModule } from '@angular/router';


const routes: Array<Route> = [
  {path: 'home', loadChildren: () => import('./home/home.module').then( mod => mod.HomeModule )},
  {path: '', pathMatch: 'full', redirectTo: '/home'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
