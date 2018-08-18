import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { User } from './user';
import { IUser } from './iuser';
import { HttpClient } from '@angular/common/http';
import { tap, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'http://localhost:3004';
  private user: IUser = null;
  constructor(private http: HttpClient) {
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

  public isAuthenticated(): boolean {
    return Boolean(this.user);
  }

  public loadUser(): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/auth/userInfo`, null)
    .pipe(tap(u => this.user = u));
  }

}

interface Token {
  token: string;
}
