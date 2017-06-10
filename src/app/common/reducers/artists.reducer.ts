import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';
import { Artist } from '../models/artists.model';
import * as actions from '../actions/artists.actions';

export interface State {
  ids: string[];
  entities: { [id: string]: Artist};
  selectedArtistId: string | null;
}

export const initialState: State = {
  ids: [],
  entities: {},
  selectedArtistId: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case actions.ActionTypes.LOAD_SUCCESS:
      const artists = action.payload;
      const ids = artists.map(artist => artist.id);
      const entities = artists.reduce((entities: { [id: string]: Artist }, artist: Artist) => {
        return Object.assign(entities, {
          [artist.id]: artist
        });
      }, {});

      return {
        ids,
        entities,
        selectedArtistId: state.selectedArtistId
      };
    case actions.ActionTypes.SELECT:
      return {
        ids: state.ids,
        entities: state.entities,
        selectedArtistId: action.payload.id
      };
    case actions.ActionTypes.CLEAR:
      return {
        ids: state.ids,
        entities: state.entities,
        selectedArtistId: null
      };
    default: {
      return state;
    }
  }
}

// -------------------------------------------------------------------
// Selectors
// -------------------------------------------------------------------
export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedArtistId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
