import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { City } from './City';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitylistService {

  apiurl = "https://localhost:5001/api/cities";

  constructor(private http: HttpClient) { }
  retrievedObject = localStorage.getItem("token");
     
  private headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.retrievedObject);
  httpOptions = {
    headers: this.headers_object
    };


    getCities(){
      return this.http.get<City[]>(this.apiurl, this.httpOptions)
      .pipe(
      catchError(this.handleError)
      );
    }

    getCity(id_City: number): Observable<void> {
      return this.http.get<void>(this.apiurl+"/"+id_City, this.httpOptions)
      .pipe(catchError(this.handleError));
    }
      private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
        } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
        }

}
