import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';

import * as fromTitle from './title.reducer';

export interface AppState {
    title: fromTitle.State
}

export const reducers: ActionReducerMap<any> = {
    title: fromTitle.reducer
};
