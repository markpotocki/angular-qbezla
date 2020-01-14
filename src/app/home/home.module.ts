import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ArticleListModule } from './article-list/article-list.module';

const routes: Array<Route> = [
  {path: '', component: HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleListModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }