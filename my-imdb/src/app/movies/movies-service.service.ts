import { Injectable } from '@angular/core';
import { MOVIES } from './mock-movies';
import { Movies } from './movies';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  getMovies(): Observable<Movies[]> {
    const movies = of( MOVIES );
    return movies;

  }

  constructor() { 

  }
}
