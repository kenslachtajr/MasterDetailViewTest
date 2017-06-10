// import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
// import { TestBed } from '@angular/core/testing';
// import { ArtistsEffects } from './artists.effects';
// import { Observable } from 'rxjs/Observable';
// import { ArtistsService } from '../services/artists.service';
// import * as actions from '../actions/artists.actions';
//
// describe('artist Effects', () => {
//   let runner: EffectsRunner;
//   let artistEffects: ArtistsEffects;
//   let service: any;
//
//   beforeEach(() => TestBed.configureTestingModule({
//     imports: [
//       EffectsTestingModule
//     ],
//     providers: [
//       {provide: ArtistsService, useValue: jasmine.createSpyObj('artistsService', ['all', 'create', 'update', 'delete'])},
//       ArtistsEffects
//     ]
//   }));
//
//   beforeEach(() => {
//     runner = TestBed.get(EffectsRunner);
//     artistEffects = TestBed.get(ArtistsEffects);
//     service = TestBed.get(ArtistsService);
//   });
//
//   it('$load should return an actions.LoadActionSuccess, with artists', () => {
//     const artists = [{id: 'string', name: 'string', symbol: 'string', risk: 1, active: true}];
//     const expected = new actions.LoadActionSuccess(artists);
//     service.all.and.returnValue(Observable.of(artists));
//     runner.queue(new actions.LoadAction());
//
//     artistEffects.load$.subscribe(result => {
//       expect(result).toEqual(expected);
//     });
//   });
//
//   it('$create should return an actions.LoadAction', () => {
//     const artist = {id: 'string', name: 'string', symbol: 'string', risk: 1, active: true};
//     const expected = new actions.LoadAction();
//     service.create.and.returnValue(Observable.of(artist));
//     runner.queue(new actions.CreateAction(artist));
//
//     artistEffects.create$.subscribe(result => {
//       expect(result).toEqual(expected);
//       expect(service.create).toHaveBeenCalledWith(artist);
//     });
//   });
//
//   it('$update should return an actions.LoadAction', () => {
//     const artist = {id: 'string', name: 'string', symbol: 'string', risk: 1, active: true};
//     const expected = new actions.LoadAction();
//     service.update.and.returnValue(Observable.of(artist));
//     runner.queue(new actions.UpdateAction(artist));
//
//     artistEffects.update$.subscribe(result => {
//       expect(result).toEqual(expected);
//       expect(service.update).toHaveBeenCalledWith(artist);
//     });
//   });
//
//   it('$delete should return an actions.LoadAction', () => {
//     const artistId = 'string';
//     const expected = new actions.LoadAction();
//     service.delete.and.returnValue(Observable.of({}));
//     runner.queue(new actions.DeleteAction(artistId));
//
//     artistEffects.delete$.subscribe(result => {
//       expect(result).toEqual(expected);
//       expect(service.delete).toHaveBeenCalledWith(artistId);
//     });
//   });
// });
