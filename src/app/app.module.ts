import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ArtistsEffects } from './common/effects/artists.effects';

import { reducer } from './common/reducers';

import { ArtistsService } from './common/services';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { ArtistDetailComponent } from './artists/artist-detail/artist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsComponent,
    ArtistListComponent,
    ArtistDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    // must come AFTER `provideStore` call
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(ArtistsEffects),
    // EffectsModule.run(RiskEffects),
    // EffectsModule.run(StockEffects),
    // EffectsModule.run(SymbolEffects),
  ],
  providers: [ ArtistsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
