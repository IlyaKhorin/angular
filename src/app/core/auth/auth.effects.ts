import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import {
  AuthActionTypes,
  Login,
  LoginFailure,
  LoginSuccess,
  LoginRestore,
  LoginRedirect,
} from './auth.actions';
import { AuthService } from './auth.service';
import { Authenticate } from './user';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Finish, Start } from '../loading-block/loading-block.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    tap(s => this.store.dispatch(new Start())),
    exhaustMap((auth: Authenticate) =>
      this.authService.login(auth.username, auth.password).pipe(
        map(user => new LoginSuccess({ user })),
        catchError(error => of(new LoginFailure(error)))
      )
    )
  );

  @Effect()
  loginRestore$ = this.actions$.pipe(
    ofType<LoginRestore>(AuthActionTypes.LoginRestore),
    tap(s => this.store.dispatch(new Start())),
    exhaustMap(() =>
      this.authService.loadUser().pipe(
        map(user => new LoginSuccess({ user })),
        catchError(error => of(new LoginRedirect()))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/'])),
    tap(s => this.store.dispatch(new Finish()))
  );

  @Effect({ dispatch: false })
  loginFailure$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginFailure),
    tap(s => this.store.dispatch(new Finish()))
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
    tap(authed => {
      this.router.navigate(['/login']);
    }),
    tap(s => this.store.dispatch(new Finish()))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}
}
