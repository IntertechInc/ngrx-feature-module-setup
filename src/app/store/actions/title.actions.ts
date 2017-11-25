import { Action } from '@ngrx/store';

export const SET_TITLE = '[Title] Set Title';

export class SetTitleAction implements Action {
  readonly type = SET_TITLE;

  constructor(public payload: string) { }
}

export type TitleActions = SetTitleAction;
