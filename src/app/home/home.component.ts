import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as reducers from '../common/reducers';
import { Artist } from '../common/models/artists.model';

import * as artistsActions from '../common/actions/artists.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  artists$: Observable<Artist[]>;

  constructor(
    private store: Store<reducers.State>
  ) {
    this.artists$ = store.select(reducers.getArtists);
  }

  ngOnInit() {
    this.store.dispatch(new artistsActions.LoadAction());
  }
}
