import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthCredentialsViewModel } from '../../models/auth-credentials.view-model';
import { State, getError } from '../../reducers/auth.reducer';
import { LoginWithCredentialsAction } from '../../actions/auth.actions';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'bulma-ngx-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
	public error$: Observable<string> | Observable<null>;
	constructor(private store: Store<State>) {}
	formSubmitted(credentials: AuthCredentialsViewModel) {
		this.store.dispatch(new LoginWithCredentialsAction(credentials));
	}
	ngOnInit() {
		this.error$ = this.store.select(getError);
	}
}
