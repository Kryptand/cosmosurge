import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { User } from '../models/user';

export interface State {
	isAuthenticated: boolean;
	user: User | null;
	token: string | null;
	error: string | null;
}

export const initialState: State = {
	isAuthenticated: false,
	user: null,
	token: null,
	error: null,
};

export function reducers(state = initialState, action: AuthActions): State {
	switch (action.type) {
		case AuthActionTypes.LoginSuccess:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user,
				token: action.payload.user.token,
			};

		case AuthActionTypes.LoginError:
			return {
				...state,
				error: action.payload.error,
			};
		case AuthActionTypes.Logout:
			return initialState;
		default:
			return state;
	}
}
export const getAuthState = createFeatureSelector<State>('auth');
export const getAuthenticationStatus = (state: State) => state.isAuthenticated;
export const getUser = (state: State) => state.user;
export const getToken = (state: State) => state.token;
export const getError = createSelector(
	getAuthState,
	(state: State) => state.error
);
