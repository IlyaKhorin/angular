import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { User } from './user';
import { IUser } from './iuser';
import { HttpClient } from '@angular/common/http';
import { tap, flatMap, mapTo, map, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { ProgressTypes, Start, Finish } from '../loading-block/loading-block.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'http://localhost:3004';
  private user: IUser = null;
  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  public getUser(): IUser {
    return this.user;
  }

  public login(login: string, password: string): Observable<User> {
    return this.http.post<Token>(`${this.BASE_URL}/auth/login`,
      {
        login,
        password
      }).pipe(
        tap(s => window.localStorage.setItem('token', s.token)),
        flatMap(s => this.loadUser())
      );
  }

  public logout() {
    this.user = null;
    window.localStorage.removeItem('token');
  }

  public isAuthenticated(): Observable<boolean> {
    return this.loadUser()
      .pipe(
        map(u => true),
        catchError(e => of(false))
      );
  }

  public loadUser(): Observable<User> {
    if (window.localStorage.getItem('token')) {
    // this.store.dispatch(new Start());
    return this.http.post<User>(`${this.BASE_URL}/auth/userInfo`, null)
        .pipe(tap(u => this.user = u))
    } else {
      return throwError(null);
    }
  }
}

interface Token {
  token: string;
}
