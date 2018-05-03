import { UsersActions, UsersActionTypes } from '../../actions/users.actions'
import { UserModel } from '../../models/user.model'

export interface State {
  selected?: UserModel;
  data_state?: string;
  loaded?: boolean;
  authenticated: boolean;
  data: UserModel[];
}

export const initialState: State = {
  data: [],
  authenticated: false,
  data_state: 'idle',
  loaded: false
};

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UsersActionTypes.GET_USERS: {
      return { ...state, data_state: 'loading' }
    }

    case UsersActionTypes.GET_USERS_LOADED: {
      return { ...state, data_state: 'loaded', loaded: true, data: [...state.data, ...action.payload.data] }
    }

    case UsersActionTypes.USER_AUTH: {
      return { ...state, authenticated: true }
    }

    default:
      return state;
  }
}
