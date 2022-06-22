import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../interfaces/auth.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  get user() {
    return {...this._user};
  }

  constructor(
    private http: HttpClient
  ) { }

  create(name: string, email: string, password: string) {
    const url = `${this.baseUrl}/auth/new`;
    const body = { name, email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if(resp.ok) {
            localStorage.setItem('token', resp.token!);
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      )
  }

  login(email:string, password: string) {
    const url = `${this.baseUrl}/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if(resp.ok) {
            localStorage.setItem('token', resp.token!);
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      )
  }

  validToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => {
          localStorage.setItem('token', resp.newToken!);
          this._user = {
            uid: resp.uid!,
            name: resp.name!,
            email: resp.email!
          }
          return resp.ok;
        }),
        catchError(err => of(false))
      );
  }

  logout() {
    localStorage.clear();
  }
}
