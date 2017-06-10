import { Action } from '@ngrx/store';
import { Artist } from '../models/artists.model';
import { type } from '../util';

export const ActionTypes = {
  LOAD: type('[Artist] Load'),
  LOAD_SUCCESS: type('[Artist] Load Success'),
  CREATE: type('[Artist] Create'),
  UPDATE: type('[Artist] Update'),
  DELETE: type('[Artist] Delete'),
  SELECT: type('[Artist] Select'),
  CLEAR: type('[Artist] Clear'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadActionSuccess implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Artist[]) { }
}

export class CreateAction implements Action {
  type = ActionTypes.CREATE;

  constructor(public payload: Artist) { }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: Artist) { }
}

export class DeleteAction implements Action {
  type = ActionTypes.DELETE;

  constructor(public payload: string) { }
}

export class SelectAction implements Action {
  type = ActionTypes.SELECT;

  constructor(public payload: Artist) { }
}

export class ClearAction implements Action {
  type = ActionTypes.CLEAR;

  constructor() { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadAction
  | LoadActionSuccess
  | CreateAction
  | UpdateAction
  | DeleteAction
  | SelectAction
  | ClearAction;
