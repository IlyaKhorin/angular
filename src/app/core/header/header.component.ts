import { Component, OnInit } from '@angular/core';
import { IUser } from '../auth/iuser';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  logoff() {
    this.authService.logout();
    this.router.navigate(['login']);  
  }

}
