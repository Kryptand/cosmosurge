import { Action } from '@ngrx/store';
import { AuthCredentialsViewModel } from '../models/auth-credentials.view-model';
import { User } from '../models/user';
export enum AuthActionTypes {
	LoginWithCredentials = '[Auth] Login',
	LoginSuccess = '[Auth] Login Success',
	LoginError = '[Auth] Login Error',
	Logout = '[Auth] Logout',
}

export class LoginWithCredentialsAction implements Action {
	readonly type = AuthActionTypes.LoginWithCredentials;
	constructor(public payload: AuthCredentialsViewModel) {}
}
export class LoginSuccessAction implements Action {
	readonly type = AuthActionTypes.LoginSuccess;
	constructor(public payload: { user: User }) {}
}
export class LoginErrorAction implements Action {
	readonly type = AuthActionTypes.LoginError;
	constructor(public payload: { error: string }) {}
}
export class LogoutAction implements Action {
	readonly type = AuthActionTypes.Logout;
}

export type AuthActions =
	| LoginWithCredentialsAction
	| LoginSuccessAction
	| LogoutAction
	| LoginErrorAction;
