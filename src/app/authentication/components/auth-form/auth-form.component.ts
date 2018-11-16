import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthCredentialsViewModel } from '../../models/auth-credentials.view-model';

@Component({
	selector: 'bulma-ngx-auth-form',
	templateUrl: './auth-form.component.html',
	styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
	@Output()
	formSubmitted: EventEmitter<AuthCredentialsViewModel> = new EventEmitter();
	public authenticationForm = this.fb.group({
		userName: ['', Validators.required],
		password: ['', Validators.required],
	});
	get formValues() {
		return this.authenticationForm.controls;
	}
	constructor(private fb: FormBuilder) {}
	onSubmit() {
		if (this.authenticationForm.valid) {
			this.formSubmitted.next(this.authenticationForm.value);
		}
	}
	ngOnInit() {}
}
