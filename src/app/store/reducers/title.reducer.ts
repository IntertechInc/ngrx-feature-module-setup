import { SetTitleAction, TitleActions } from './../actions/title.actions';
import * as actions from '../actions/title.actions';

export interface State {
  title: string;
}

const initialState: State = {
  title: 'My Title'
};

export function reducer(state = initialState, action: actions.TitleActions): State {
  switch (action.type) {
    case actions.SET_TITLE:
      return handleSetTitle(state, action);

    default:
      return state;
  }
}

function handleSetTitle(state: State, action: actions.TitleActions): State {
    return {
        title: action.payload
    }
}

export const getTitle = (state: State) => state.title;
