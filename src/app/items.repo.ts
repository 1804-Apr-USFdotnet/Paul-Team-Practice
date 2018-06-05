import { Movie } from './models/movie';
import { Genre } from './models/genre';

export const movieList: Movie[] = [
    new Movie(1, "Movie 1", new Genre(1, 'Drama'), 'a really average movie', 1994),
    new Movie(2, "Movie 2", new Genre(1, 'Drama'), 'a really cool movie', 1999),
    new Movie(3, "Movie 3", new Genre(1, 'Comedy'), 'a really funny movie', 1995),
    new Movie(4, "Movie 4", new Genre(1, 'Horror'), 'a really bland movie', 2008),
    new Movie(5, "Movie 5", new Genre(1, 'Adventure'), 'a really awesome movie', 2012),
    new Movie(6, "Movie 6", new Genre(1, 'Action'), 'a really long movie', 2014),
    new Movie(7, "Movie 7", new Genre(1, 'Romance'), 'a really romantic movie', 2018)
];
