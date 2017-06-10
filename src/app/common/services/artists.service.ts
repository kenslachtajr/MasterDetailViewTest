import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ENDPOINT_URI } from '../constants';
import { Observable } from 'rxjs/Observable';
import { Artist } from '../models/artists.model';

@Injectable()
export class ArtistsService {
  model = '/artists';

  constructor(private http: Http) {}

  get url() {
    return `${ENDPOINT_URI}${this.model}`;
  }

  all(): Observable<Array<Artist>> {
    return this.http.get(this.url)
      .map(res => res.json());
  };

  create(artist) {
    return this.http.post(this.url, artist);
  };

  update(artist) {
    return this.http.put(`${this.url}/${artist.id}`, artist);
  };

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  };
}
