import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {News} from '../../models/news';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs/internal/observable/of';
import {tap} from 'rxjs/internal/operators/tap';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  baseUrl: string;
  static apiKey: string = "b07f98f6575d47d99fd6057668f21cb2";

  constructor(private _http: HttpClient) {
    this.baseUrl = 'https://newsapi.org/v1/articles';
  }

  public fetchNewsFeed(source: string): Observable<News> {
    return this
      ._http
      .get(`${this.baseUrl}/?source=${source}&sortBy=top&apiKey=${NewsApiService.apiKey}`)
      .pipe(
        tap(x => console.log("11")),
        tap(x => console.log(x)),
        catchError(this.handleError<any>('fetchNewsFeed', []))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
