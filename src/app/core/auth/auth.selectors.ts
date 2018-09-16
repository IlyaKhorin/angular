// import {
//     createSelector,
//     createFeatureSelector,
//     ActionReducerMap,
// } from '@ngrx/store';
// import { AuthState } from './auth.reducer';

// export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

// export const getLoggedIn = createSelector(
//     selectAuthState,
//     fromAuth.getLoggedIn
// );
// export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);

// export const selectLoginPageState = createSelector(
//     selectAuthState,
//     (state: AuthState) => state.loginPage
// );
// export const getLoginPageError = createSelector(
//     selectLoginPageState,
//     fromLoginPage.getError
// );
// export const getLoginPagePending = createSelector(
//     selectLoginPageState,
//     fromLoginPage.getPending
// );
