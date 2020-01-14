import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { ArticlesService } from '../services/articles.service';
import { Article } from '../services/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private articles: Array<Article>;
  private articlesSub: Subscription;

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    console.log('init');
    this.articlesSub = this.articleService.findAll().subscribe(
      val => {
        console.log(val);
        this.articles = val;
      },
      err => console.log('article load err: ' + err),
      () => console.log('completed article sub')
    )
  }

  ngOnDestroy() {
    this.articlesSub.unsubscribe();
  }

}