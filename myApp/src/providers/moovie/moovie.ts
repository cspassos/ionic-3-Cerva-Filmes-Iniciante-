import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//significa que vai ser feito via injeção de dependencia
@Injectable()
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3"

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesMovies(page=1){
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=4f17179341128df25403098c4680cbc0`);
  }

  getMoviesDatails(filmeId){
    return this.http.get(this.baseApiPath + `/movie/${filmeId}?api_key=4f17179341128df25403098c4680cbc0`);
  }

}
