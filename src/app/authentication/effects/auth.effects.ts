import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
	AuthActionTypes,
	LoginErrorAction,
	LoginSuccessAction,
	LoginWithCredentialsAction,
} from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Injectable()
export class AuthEffects {
	constructor(
		private actions: Actions,
		private authService: AuthService,
		private router: Router
	) {}

	@Effect()
	login$: any = this.actions.ofType(AuthActionTypes.LoginWithCredentials).pipe(
		map((action: LoginWithCredentialsAction) => action.payload),
		switchMap(payload => {
			return this.authService.logIn(payload).pipe(
				map((user: User) => {
					return new LoginSuccessAction({ user: user });
				}),
				catchError(error => {
					return of(new LoginErrorAction({ error: error }));
				})
			);
		})
	);

	@Effect({ dispatch: false })
	loginSuccess$ = this.actions.ofType(AuthActionTypes.LoginSuccess).pipe(
		map((action: LoginSuccessAction) => action.payload),
		tap(payload => {
			localStorage.setItem('token', payload.user.token);
			this.router.navigateByUrl('/');
		})
	);
	@Effect({ dispatch: false })
	logout$ = this.actions.pipe(
		ofType(AuthActionTypes.Logout),
		tap(() => localStorage.removeItem('token'))
	);
}
