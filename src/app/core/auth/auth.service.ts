import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user:IUser;
  public onAuthChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
  
  public getUser(): IUser {
    return this.user;
  }

  public login(name: string) {
    this.user = new User(1, name, "");
    this.onAuthChanged.emit(this.isAuthenticated());
  }

  public logout() {
    this.user = null;
    this.onAuthChanged.emit(this.isAuthenticated());
  }

  public isAuthenticated(): boolean {
    return Boolean(this.user);
  }
}
