import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { ReadPostComponent } from './read-post/read-post.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { PostSearchComponent } from './post-search/post-search.component';

import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ReadPostComponent,
    BlogMainComponent,
    PostSearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
