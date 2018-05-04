/**
 * currently not used.
 */
import { Action } from '@ngrx/store';

export enum UsersActionTypes {
  GET_USERS = '[Users] Get',
  GET_USERS_LOADED = '[Users] Get Loaded',
  USER_AUTH = '[Users] Auth',
  SELECT_USER = '[Users] Select'
}

export class GetUsers implements Action {
  readonly type = UsersActionTypes.GET_USERS;

}

export class UsersLoaded implements Action {
  readonly type = UsersActionTypes.GET_USERS_LOADED

  constructor(public payload: any) {}
}

export class Authenticate implements Action {
  readonly type = UsersActionTypes.USER_AUTH
}

export type UsersActions = GetUsers | Authenticate | UsersLoaded;
