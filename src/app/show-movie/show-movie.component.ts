import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  movie: Movie;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    // this.movie = this.itemsService
  }

}
