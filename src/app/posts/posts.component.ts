import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
