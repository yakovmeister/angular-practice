import { ActionReducerMap } from '@ngrx/store'

import * as users from './users'

export interface State {
  users: users.State
}

export const reducers : ActionReducerMap<State> = {
  users: users.reducer
}
