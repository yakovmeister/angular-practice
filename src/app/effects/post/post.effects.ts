import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { PostsActionTypes, PostLoaded, GetPosts, SelectPost, SelectPostLoaded } from '../../actions/posts.actions';


@Injectable()
export class PostEffects {
  constructor(private http: HttpClient, private actions$: Actions, @Inject('posts') private postsProvider) {}

  @Effect()
  getPosts$: Observable<GetPosts> = this.actions$
    .pipe(
      ofType(PostsActionTypes.GET_POST),
      switchMap(() =>
        this.postsProvider
          .getPosts()
          .pipe(
            map((e) => new PostLoaded(e))
          )
      )
    )

  @Effect()
  selectPost$: Observable<SelectPost> = this.actions$
    .pipe(
      ofType(PostsActionTypes.SELECT_POST),
      switchMap((action: SelectPost) => 
        this.postsProvider
          .getPost(action.payload)
          .pipe(
            map((e) => new SelectPostLoaded(e))
          )
      )
    )
    
}
