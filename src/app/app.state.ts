import { AuthState } from './core/auth/auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './core/auth/auth.reducer';
import { ProgressState } from './core/loading-block/loading-block.reducer';

export interface AppState {
    auth: AuthState;
    progress: ProgressState;
    // login: LoginPageState;
}
