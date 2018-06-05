import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';
import { Movie } from '../models/movie';
import { paramKey } from 'blocking-proxy/built/lib/webdriver_commands';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  movie: Movie[];
  movie_id: number;

  constructor(private _itemsService: ItemsService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // plus sign casts the returned paramater as a number
    this.movie_id = +this._activatedRoute.snapshot.params['movie_id']
    console.log(typeof(this.movie_id))
    this.movie = this._itemsService.getMovie(this.movie_id)
    console.log(this.movie[0]);
  }

}
