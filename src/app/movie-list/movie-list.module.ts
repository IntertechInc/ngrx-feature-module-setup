import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule, movieListComponents } from "./movie-list-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MovieListRoutingModule
  ],
  declarations: [movieListComponents]
})
export class MovieListModule { }
