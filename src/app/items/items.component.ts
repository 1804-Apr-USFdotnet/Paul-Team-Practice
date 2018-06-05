import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { movieList, Libary } from '../items.repo';
import { ItemsService } from '../items.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  movies: Movie[];

  constructor(private itemsService: ItemsService) { }

  onClick(){
    console.log(this.movies[0].Title);
  }
  
  ngOnInit() {
    // this.movies = this.itemsService.getMovies();
    this.movies = Libary.getMovies();
    this.movies.forEach(m => {
      console.log(m.Title);
    });
  }

}
