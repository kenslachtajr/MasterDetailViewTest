import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import * as artist from '../actions/artists.actions';
import { ArtistsService } from '../services/artists.service';

@Injectable()
export class ArtistsEffects {
  @Effect() load$ = this.actions$
    .ofType(artist.ActionTypes.LOAD)
    .switchMap(() => this.artistsService.all())
    .map(artists => new artist.LoadActionSuccess(artists))
  ;

  @Effect() create$ = this.actions$
    .ofType(artist.ActionTypes.CREATE)
    .map(action => action.payload)
    .switchMap(artist => this.artistsService.create(artist))
    .map(result => new artist.LoadAction())
  ;

  @Effect() update$ = this.actions$
    .ofType(artist.ActionTypes.UPDATE)
    .map(action => action.payload)
    .switchMap(artist => this.artistsService.update(artist))
    .map(result => new artist.LoadAction())
  ;

  @Effect() delete$ = this.actions$
    .ofType(artist.ActionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(artistId => this.artistsService.delete(artistId))
    .map(result => new artist.LoadAction())
  ;

  constructor(
    private artistsService: ArtistsService,
    private actions$: Actions
  ) { }
}
