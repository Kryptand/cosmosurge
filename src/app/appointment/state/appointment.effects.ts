import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { DeleteAppointment } from './appointment.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppointmentEffects {
	constructor(private actions$: Actions) {}
}
