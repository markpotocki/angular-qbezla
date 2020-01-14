import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Article } from './article';

@Injectable()
export class ArticlesService {
  private articlesCollection: AngularFirestoreCollection<Article>;

  constructor(private afs: AngularFirestore) { 
    this.articlesCollection = afs.collection<Article>('articles');
  }

/**
 * findAll retrieves all Articles from the underlying datasrc (firebase).
 * 
 * returns: Observable of all articles in the database
 */
  findAll(): Observable<Array<Article>> {
    console.log('DEBUG ARTICLES.SERVICE 22 findall');
    return this.articlesCollection.valueChanges();
  }

/**
 * findById retrieves the Article whose uid matches the input uid
 * 
 * Inputs
 *  uid: unique id of the article
 * 
 * returns Observable of article matching uid or null
 */
  findById(uid: string): Observable<Article> {
    return null;
  }

  create(article: Article): Observable<boolean> {
    return null;
  }

  update(article: Article): Observable<Article> {
    return null;
  }

}