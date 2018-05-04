import { Action } from '@ngrx/store';

export enum NotesActionTypes {
  POST_NOTE = '[Notes] Post',
  PUT_NOTE = '[Notes] Edit',
  DELETE_NOTE = '[Notes] Delete',
  GET_NOTES = '[Notes] Get',
  GET_NOTES_LOADED = '[Notes] Get Loaded',
  SELECT_NOTE = '[Notes] Select',
  SELECT_NOTE_LOADED = '[Notes] Select Loaded',
  CLEAR_SELECTED = '[Notes] Clear'
}

export class GetNotes implements Action {
  readonly type = NotesActionTypes.GET_NOTES;

  constructor(public payload: any) {}
}

export class CreateNote implements Action {
  readonly type = NotesActionTypes.POST_NOTE

  constructor(public payload: any) { }
}

export class DeleteNote implements Action {
  readonly type = NotesActionTypes.DELETE_NOTE

  constructor(public payload: any) { }
}

export class PutNote implements Action {
  readonly type = NotesActionTypes.PUT_NOTE

  constructor(public payload: any) { }
}

export class SelectNote implements Action {
  readonly type = NotesActionTypes.SELECT_NOTE

  constructor(public payload: number) {}
}

export class ClearSelected implements Action {
  readonly type = NotesActionTypes.CLEAR_SELECTED
}

export type NotesActions = GetNotes 
  | SelectNote 
  | ClearSelected 
  | CreateNote
  | DeleteNote;
