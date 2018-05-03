import { Action } from '@ngrx/store';

export enum PostsActionTypes {
  GET_POST = '[Posts] Get',
  GET_POST_LOADED = '[Posts] Get Loaded',
  SELECT_POST = '[Posts] Select',
  SELECT_POST_LOADED = '[Posts] Select Loaded',
  CLEAR_SELECTED = '[Posts] Clear'
}

export class GetPosts implements Action {
  readonly type = PostsActionTypes.GET_POST;

}

export class SelectPost implements Action {
  readonly type = PostsActionTypes.SELECT_POST

  constructor(public payload: number) {}
}

export class SelectPostLoaded implements Action {
  readonly type = PostsActionTypes.SELECT_POST_LOADED

  constructor(public payload: any) {}
}

export class PostLoaded implements Action {
  readonly type = PostsActionTypes.GET_POST_LOADED

  constructor(public payload: any) {}
}

export class ClearSelected implements Action {
  readonly type = PostsActionTypes.CLEAR_SELECTED
}

export type PostsActions = GetPosts | PostLoaded | SelectPost | SelectPostLoaded | ClearSelected;
