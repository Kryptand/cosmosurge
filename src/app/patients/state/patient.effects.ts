import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { PatientActionTypes, AddPatient, UpdatePatient } from './patient.actions';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class PatientEffects {
	@Effect({ dispatch: false })
	addPatient$ = this.actions$.ofType(PatientActionTypes.AddPatient).pipe(
		map((action: AddPatient) => action.payload),
		tap(() => {
			this.router.navigateByUrl('/patients');
		})
	);
	@Effect({ dispatch: false })
	editPatient$ = this.actions$.ofType(PatientActionTypes.UpdatePatient).pipe(
		map((action: UpdatePatient) => action.payload),
		tap(() => {
			this.router.navigateByUrl('/patients');
		})
	);
	constructor(
		private actions$: Actions,
		private router:Router
	) {}
}