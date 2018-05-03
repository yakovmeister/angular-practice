import { PostsActions, PostsActionTypes } from '../../actions/posts.actions'
import { PostModel } from '../../models/posts.model'

export interface State {
  selected?: PostModel;
  data_state?: string;
  loaded?: boolean;
  data: PostModel[];
}

export const initialState: State = {
  data: []
};

export function reducer(state = initialState, action: PostsActions): State {
  switch (action.type) {
    case PostsActionTypes.GET_POST: {
      return { ...state, data_state: 'loading' }
    }

    case PostsActionTypes.GET_POST_LOADED: {
      return { ...state, data_state: 'loaded', loaded: true, data: [...state.data, ...action.payload] }
    }

    case PostsActionTypes.SELECT_POST: {
      return { ...state, data_state: 'loading' }
    }

    case PostsActionTypes.SELECT_POST_LOADED: {
      return { ...state, data_state: 'loaded', loaded: true, selected: { ...action.payload } }
    }

    case PostsActionTypes.CLEAR_SELECTED: {
      return { 
        ...state, 
        data_state: 'idle',
        selected: {
          id: 0,
          userId: 0,
          title: '',
          body: ''
        }
      }
    }

    default:
      return state;
  }
}
