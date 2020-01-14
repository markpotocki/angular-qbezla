import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../services/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input("data") articles: Array<Article>;

  constructor() { }

  ngOnInit() {
    console.log('list init')
  }

  isEmpty(): boolean {
    console.log('DEBUG ARTICLELISTCOMP 24 isEmpty check');
    if (this.articles == null) {
      return true;
    }
    return this.articles.length < 1;
  }

}