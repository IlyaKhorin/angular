import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public name:string;

  constructor(private authService:AuthService) {
  }

  login() {
    this.authService.login(this.name);
  }


}
