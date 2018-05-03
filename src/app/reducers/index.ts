import { ActionReducerMap } from '@ngrx/store'

import * as users from './users'
import * as posts from './posts'

export interface State {
  users: users.State,
  posts: posts.State
}

export const reducers : ActionReducerMap<State> = {
  users: users.reducer,
  posts: posts.reducer
}
