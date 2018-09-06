import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User, Authenticate } from '../auth/user';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { Login } from '../auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public name: string;
  public password: string;
  private subscription: Subscription;

  constructor(private store: Store<AppState>) {
  }

  login() {
    this.store.dispatch(new Login({ username: this.name, password: this.password }))
  }
}
