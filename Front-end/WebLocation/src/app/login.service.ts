import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Form } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url = 'https://localhost:5001/api/users/login';
  constructor(private _http: HttpClient) { }

  login(user): Observable<string> {

    return this._http.post(this._url, user, {headers:
      new HttpHeaders({'content-type': 'application/json'}), responseType: 'text'});
   }
}
