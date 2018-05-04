import { NotesActions, NotesActionTypes } from '../../actions/notes.actions'

export interface State {
  selected?: any;
  loaded?: boolean;
  data: any[];
}

export const initialState: State = {
  data: []
};

export function reducer(state = initialState, action: NotesActions): State {
  switch (action.type) {
    case NotesActionTypes.GET_NOTES: {
      return { ...state, data: [ ...action.payload ] }
    }

    case NotesActionTypes.POST_NOTE: {
      console.log(action)
      return { ...state, data: [ ...action.payload ] }
    }

    case NotesActionTypes.SELECT_NOTE: {
      return { ...state, selected: action.payload }
    }

    case NotesActionTypes.CLEAR_SELECTED: {
      return { 
        ...state, 
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
