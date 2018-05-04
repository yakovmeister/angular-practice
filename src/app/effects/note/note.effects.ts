import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
// import { NotesActionTypes, NotesLoaded, GetNotes, SelectNote, SelectNoteLoaded } from '../../actions/notes.actions';


@Injectable()
export class NoteEffects {
  constructor(private http: HttpClient, private actions$: Actions, @Inject('notes') private noteProvider) {}

  // @Effect()
  // getNotes$: Observable<GetNotes> = this.actions$
  //   .pipe(
  //     ofType(NotesActionTypes.GET_NOTES),
  //     switchMap(() =>
  //       this.noteProvider
  //         .getNotes()
  //         .pipe(
  //           map((e) => new NotesLoaded(e))
  //         )
  //     )
  //   )

  // @Effect()
  // selectNote$: Observable<SelectNote> = this.actions$
  //   .pipe(
  //     ofType(NotesActionTypes.SELECT_NOTE),
  //     switchMap((action: SelectNote) => 
  //       this.noteProvider
  //         .getPost(action.payload)
  //         .pipe(
  //           map((e) => new SelectNoteLoaded(e))
  //         )
  //     )
  //   )
}
