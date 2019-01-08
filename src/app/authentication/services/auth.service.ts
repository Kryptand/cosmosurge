import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthCredentialsViewModel } from '../models/auth-credentials.view-model';
import { User } from '../models/user';
@Injectable()
export class AuthService {
	public isAuthenticated: boolean;
	constructor(private http: HttpClient) {}
	getToken(): string {
		return localStorage.getItem('token');
	}

	logIn(
		credentials: AuthCredentialsViewModel
	): any{
		if (credentials == null) {
			return throwError('null passed to authentication');
		}
		if (credentials.userName == null || credentials.password == null) {
			return throwError(
				'either the username or the password is not instantiated'
			);
		}
		if (credentials.userName === 'admin' && credentials.password === 'test') {
			const user: User = {
				token:
					// tslint:disable-next-line:max-line-length
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjZiYjdhZDhhLTlmNmUtNDcwMi05MjI5LWU0N2VmNTQxMjJkNyIsImlhdCI6MTUzOTI4Njc1NiwiZXhwIjoxNTM5MjkwMzU2fQ.e22VPHJb6crb2xlLXoa9jtPKENArZsNN1wxDRtfnkD0',
				displayName: 'Dr. Dannöhl',
				id: '123445566',
			};
			return of(user).pipe(
				tap(() => {
					this.isAuthenticated = true;
				})
			);
		} else {
			return throwError('the credentials do not match');
		}
	}
	signUp(credentials: AuthCredentialsViewModel): Observable<User> {
		const url = `/register`;
		return this.http.post<User>(url, credentials);
	}
}
