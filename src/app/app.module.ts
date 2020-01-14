import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleListModule } from './home/article-list/article-list.module';
import { NavigationModule } from './navigation/navigation.module';
import { SharedModule } from './shared/shared.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthenticationService } from './services/authentication.service';
import { ArticlesService } from './services/articles.service';

const firebaseConfig = {
    apiKey: "AIzaSyCmsxB2HizxvBWaai2kS0_hTSBketry0Bk",
    authDomain: "homepage-e5297.firebaseapp.com",
    databaseURL: "https://homepage-e5297.firebaseio.com",
    projectId: "homepage-e5297",
    storageBucket: "homepage-e5297.appspot.com",
    messagingSenderId: "852236681532",
    appId: "1:852236681532:web:e56d6e0f97ca5ed166de39",
    measurementId: "G-SSQYNBTFYJ"
  };

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule, ArticleListModule, NavigationModule, FontAwesomeModule, SharedModule, AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, AngularFireAuthModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthenticationService, ArticlesService]
})
export class AppModule { }
