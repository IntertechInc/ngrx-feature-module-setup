import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { MovieListComponent } from './movie-list/movie-list.component';

export const movieRoutes: Routes = [
    { path: '', component: MovieListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(movieRoutes)],
  exports: [RouterModule]
})
export class MovieListRoutingModule { }

export const movieListComponents = [
    MovieListComponent
];
