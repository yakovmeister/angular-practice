import { ActionReducerMap } from '@ngrx/store'

import * as notes from './notes'

export interface State {
  notes: notes.State
}

export const reducers : ActionReducerMap<State> = {
  notes: notes.reducer
}
