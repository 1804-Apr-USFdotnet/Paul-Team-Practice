import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { ItemsComponent } from './items/items.component';

const routes : Routes = [
  {path: 'movie/:movie_id', component: ShowMovieComponent},
  {path: 'movies', component: ItemsComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
