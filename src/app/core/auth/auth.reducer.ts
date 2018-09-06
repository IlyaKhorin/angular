import { User } from './user';
import { AuthActionsUnion, AuthActionTypes } from './auth.actions';

export interface AuthState {
  loggedIn: boolean;
  user: User | null;
}

export const initialState: AuthState = {
  loggedIn: false,
  user: null,
};

export function authReducer(state = initialState, action: AuthActionsUnion): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
      };
    }

    case AuthActionTypes.Logout: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

