import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
  {path: 'movie/:movie_id', component: ShowMovieComponent},
  {path: 'movies', component: ItemsComponent},
  {path: 'home', component: HomeComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
