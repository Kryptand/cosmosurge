import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Appointment } from '../model/appointment.model';

export enum AppointmentActionTypes {
	LoadAppointments = '[Appointment] Load Appointments',
	AddAppointment = '[Appointment] Add Appointment',
	AddTreatment = '[Appointment] Add Treatment',
	DeleteTreatment = '[Appointment] Delete Treatment',
	UpsertAppointment = '[Appointment] Upsert Appointment',
	AddAppointments = '[Appointment] Add Appointments',
	UpsertAppointments = '[Appointment] Upsert Appointments',
	UpdateAppointment = '[Appointment] Update Appointment',
	UpdateAppointments = '[Appointment] Update Appointments',
	DeleteAppointment = '[Appointment] Delete Appointment',
	DeleteAppointments = '[Appointment] Delete Appointments',
	ClearAppointments = '[Appointment] Clear Appointments',
}

export class LoadAppointments implements Action {
	readonly type = AppointmentActionTypes.LoadAppointments;

	constructor(public payload: { appointments: Appointment[] }) {}
}

export class AddAppointment implements Action {
	readonly type = AppointmentActionTypes.AddAppointment;

	constructor(public payload: { appointment: Appointment }) {}
}
export class AddTreatment implements Action {
	readonly type = AppointmentActionTypes.AddTreatment;

	constructor(public payload: { appointmentId: string; treatmentId: string }) {}
}

export class DeleteTreatment implements Action {
	readonly type = AppointmentActionTypes.DeleteTreatment;

	constructor(public payload: { appointmentId: string; treatmentId: string }) {}
}
export class UpsertAppointment implements Action {
	readonly type = AppointmentActionTypes.UpsertAppointment;

	constructor(public payload: { appointment: Appointment }) {}
}

export class AddAppointments implements Action {
	readonly type = AppointmentActionTypes.AddAppointments;

	constructor(public payload: { appointments: Appointment[] }) {}
}

export class UpsertAppointments implements Action {
	readonly type = AppointmentActionTypes.UpsertAppointments;

	constructor(public payload: { appointments: Appointment[] }) {}
}

export class UpdateAppointment implements Action {
	readonly type = AppointmentActionTypes.UpdateAppointment;

	constructor(public payload: { appointment: Update<Appointment> }) {}
}

export class UpdateAppointments implements Action {
	readonly type = AppointmentActionTypes.UpdateAppointments;

	constructor(public payload: { appointments: Update<Appointment>[] }) {}
}

export class DeleteAppointment implements Action {
	readonly type = AppointmentActionTypes.DeleteAppointment;

	constructor(public payload: { id: string }) {}
}

export class DeleteAppointments implements Action {
	readonly type = AppointmentActionTypes.DeleteAppointments;

	constructor(public payload: { ids: string[] }) {}
}

export class ClearAppointments implements Action {
	readonly type = AppointmentActionTypes.ClearAppointments;
}

export type AppointmentActions =
	| LoadAppointments
	| AddAppointment
	| AddTreatment
	| DeleteTreatment
	| UpsertAppointment
	| AddAppointments
	| UpsertAppointments
	| UpdateAppointment
	| UpdateAppointments
	| DeleteAppointment
	| DeleteAppointments
	| ClearAppointments;
