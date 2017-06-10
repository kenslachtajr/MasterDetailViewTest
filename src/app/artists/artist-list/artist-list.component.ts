import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Artist } from '../../common/models/artists.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {
  @Input() artists: Array<Artist>;
  @Input() readOnly: Boolean = false;
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
}
