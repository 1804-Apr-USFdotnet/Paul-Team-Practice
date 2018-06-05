import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { movieList } from '../items.repo';
import { ItemsService } from '../items.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  movies: Movie[];
  constructor(private itemsService: ItemsService) { 
    this.movies = itemsService.getMovies();
  }

  onClick(){
    console.log("derp");
  }
  
  ngOnInit() {
  }

}
