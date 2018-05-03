import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { exhaustMap, takeUntil, tap, switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { UsersActionTypes, UsersLoaded } from '../actions/users.actions';


@Injectable()
export class UserEffects {
  constructor(private http: HttpClient, private actions$: Actions, @Inject('users') private usersProvider) {}

  @Effect()
  getUsers$: Observable<Action> = this.actions$
    .pipe(
      ofType(UsersActionTypes.GET_USERS),
      switchMap(() =>
        this.usersProvider
          .getUsers()
          .pipe(
            map((e) => new UsersLoaded(e))
          )
      )
    )
    
}
