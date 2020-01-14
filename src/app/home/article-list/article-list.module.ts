import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list.component';
import { SpinnerModule } from'../../shared/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule
  ],
  exports: [
    ArticleListComponent
  ],
  declarations: [ArticleListComponent]
})
export class ArticleListModule { }