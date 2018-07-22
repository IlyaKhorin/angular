import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public isAuth:boolean; 
  public name:string;

  constructor(private authService:AuthService) {
    authService.onAuthChanged.subscribe(() => this.reloadIsAuth());
    this.reloadIsAuth()
  }

  login() {
    this.authService.login(this.name);
  }

  private reloadIsAuth(){
    this.isAuth = this.authService.isAuthenticated();
  }

}
