import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  public isAuth:boolean; 
  constructor(private authService:AuthService) {
    authService.onAuthChanged.subscribe(() => this.reloadIsAuth());
    this.reloadIsAuth()
  }

  private reloadIsAuth(){
    this.isAuth = this.authService.isAuthenticated();
  }

}
