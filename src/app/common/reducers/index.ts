import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';

import * as artists from './artists.reducer';

export interface State {
  artists: artists.State;
}

const reducers = {
  artists: artists.reducer,
};

const developmentReducer: ActionReducer<any> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<any> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

// -------------------------------------------------------------------
// Artist Selectors
// -------------------------------------------------------------------
export const getArtistsState = (state: State) => state.artists;
export const getArtistIds = createSelector(getArtistsState, artists.getIds);
export const getArtistEntities = createSelector(getArtistsState, artists.getEntities);
export const getSelectedArtist = createSelector(getArtistsState, artists.getSelected);
export const getArtists = createSelector(getArtistEntities, getArtistIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

