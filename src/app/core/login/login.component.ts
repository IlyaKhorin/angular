import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../auth/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public name: string;
  public password: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.loadUser().subscribe(s => this.router.navigate(['courses']));
  }

  login() {
    this.authService.login(this.name, this.password)
      .subscribe(s => this.router.navigate(['courses']));
  }

  ngOnDestroy(): void {
  }
}
