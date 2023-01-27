import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { ReadPostComponent } from './read-post/read-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BlogMainComponent },
  { path: 'blog/posts', component: PostsComponent },
  { path: 'blog/posts/:id', component: ReadPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
