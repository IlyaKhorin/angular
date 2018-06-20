import { Injectable } from '@angular/core';
import { User } from './user';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getUser(): IUser {
    return new User(1,"Mike","Smith");
  }
}
