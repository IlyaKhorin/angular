import { Component, OnInit } from '@angular/core';
import { IUser } from '../auth/iuser';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: IUser;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

}
