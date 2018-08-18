import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from '../auth/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  public name: string;
  public password: string;
  private subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    this.subscription = this.authService.login(this.name, this.password)
      .subscribe(s => this.router.navigate(['courses']));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
