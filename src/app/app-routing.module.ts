import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ShowMovieComponent } from './show-movie/show-movie.component';

const routes : Routes = [
  {path: 'movie/:movie_id', component: ShowMovieComponent}
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
