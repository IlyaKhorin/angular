import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user:IUser = null;
  constructor() { }
  
  public getUser(): IUser {
    return this.user;
  }

  public login(name: string) {
    this.user = new User(1, name, "");
    window.localStorage.setItem("login",name);
    window.localStorage.setItem("token","adsHFPAfroiFF{312.412");
  }

  public logout() {
    this.user = null;
    window.localStorage.removeItem("login");
    window.localStorage.removeItem("token");
  }

  public isAuthenticated(): boolean {
    return Boolean(this.user);
  }
}
