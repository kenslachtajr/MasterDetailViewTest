import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Artist } from '../../common/models/artists.model';

import * as reducers from '../../common/reducers';
import * as artistActions from '../../common/actions/artists.actions';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  @Input() set artist(artist) {
    this.currentArtist = Object.assign({}, artist);
    if (artist) {
      this.originalName = artist.name;
    }
  }
  @Output() save: EventEmitter<any> = new EventEmitter();
  currentArtist: Artist;
  originalName: string;

  constructor(
    private store: Store<reducers.State>
  ) {

  }

  ngOnInit() {
    this.store.dispatch(new artistActions.LoadAction());
  }

  cancel() {
    this.store.dispatch(new artistActions.ClearAction());
    this.currentArtist = {
      id: null,
      name: "",
      genre: "",
      description: ""
    }
  }

  saveArtist(event) {
    event.preventDefault();
    this.save.emit(this.currentArtist);
    this.cancel();
  };
}
