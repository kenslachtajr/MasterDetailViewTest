import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/artists', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
