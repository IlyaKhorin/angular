import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { LoginRedirect, LoginRestore } from './auth.actions';
import { AppState } from '../../app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(state => state.auth.loggedIn),
      map(authed => {
        if (!authed) {
          this.store.dispatch(new LoginRestore());
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
