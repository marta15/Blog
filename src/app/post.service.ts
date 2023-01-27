import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Observable<Post[]> {
    const posts = of(POSTS).pipe(catchError(this.handleError<Post[]>('getPosts', [])));
    return posts;
  }

  getPost(id: number): Observable<Post> {
    const post = POSTS.find(p => p.id === id)!;
    return of(post).pipe(catchError(this.handleError<Post>('getPost', undefined)));
  }

  searchPosts(term: string): Observable<Post[]> {
    if (!term.trim()) {
      // if no search term, return empty array.
      return of([]);
    }
    return of(POSTS.filter(p => p.title.includes(term) || p.content.includes(term))).pipe(
      tap(x => x.length ?
        console.log(`found posts matching "${term}"`) :
        console.log(`no posts matching "${term}"`)),
      catchError(this.handleError<Post[]>('searchPosts', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
