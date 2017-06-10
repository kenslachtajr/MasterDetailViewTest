import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Artist } from '../common/models/artists.model';
import * as reducers from '../common/reducers';
import * as actions from '../common/actions/artists.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists$: Observable<Artist[]>;
  currentArtist$: Observable<Artist>;

  constructor(private store: Store<reducers.State>) {
    this.artists$ = store.select(reducers.getArtists);
    this.currentArtist$ = store.select(reducers.getSelectedArtist);
  }

  ngOnInit() {
    this.store.dispatch(new actions.LoadAction());
  }

  setCurrentArtist(artist) {
    this.store.dispatch(new actions.SelectAction(artist));
  }

  createArtist(artist) {
    this.store.dispatch(new actions.CreateAction(artist));
  }

  updateArtist(artist) {
    this.store.dispatch(new actions.UpdateAction(artist));
  }

  saveArtist(artist) {
    if (!artist.id) {
      this.createArtist(artist);
    } else {
      this.updateArtist(artist);
    }
  }

  deleteArtist(artistId) {
    this.store.dispatch(new actions.DeleteAction(artistId));
  }
}
