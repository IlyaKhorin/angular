import { Component, OnInit } from '@angular/core';
import { IUser } from '../auth/iuser';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: IUser;
  public isAuth: boolean;

  constructor(private authService:AuthService) {
    authService.onAuthChanged.subscribe(() => {
      this.reloadIsAuth(); 
      this.reloadUser();
    });
    this.reloadIsAuth()
  }

  ngOnInit() {
    this.reloadUser()
  }

  logoff() {
    this.authService.logout();
    this.reloadUser()
  }

  private reloadUser(){
    this.user = this.authService.getUser();
  }

  private reloadIsAuth(){
    this.isAuth = this.authService.isAuthenticated();
  }

}
