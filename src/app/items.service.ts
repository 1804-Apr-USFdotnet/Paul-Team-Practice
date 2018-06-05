import { Movie } from './models/movie';
import { Injectable } from '@angular/core';

import { movieList } from './items.repo';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  movies: Movie[] = movieList;

  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id: number): Movie[] {
    return this.movies.filter(m => {
      return m.Id === id;
    });
  }

  createMovie(movie: Movie) {
    this.movies.push(movie);
  }

  deleteMovie(id: number) {
    this.movies = this.movies.filter(m => {
      return m.Id !== id;
    });
  }
}
