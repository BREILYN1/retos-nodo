import { Component } from '@angular/core';
import { MOVIES } from './mock-movies';
import { Movies } from './movies';
import { MoviesServiceService } from './movies-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']

})
export class MoviesComponent  {
  movies: Movies[] = [];
  constructor(private moviesService: MoviesServiceService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    // this.Movies = this.moviesService.getMovies(); no se utiliz a 
    this.moviesService.getMovies()
    .subscribe(movies => this.movies = movies);


  }
  
}



// function subscribe(arg0: (movies: any) => any) {
//   throw new Error('Function not implemented.');
// }

