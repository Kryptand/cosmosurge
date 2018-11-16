import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Patient } from '../model/patient.model';
export enum PatientActionTypes {
	LoadPatients = '[Patient] Load Patients',
	AddPatient = '[Patient] Add Patient',
	AddAppointment = '[Patient] Add Appointment',
	DeleteAppointment = '[Patient] Delete Appointment',
	UpsertPatient = '[Patient] Upsert Patient',
	AddPatients = '[Patient] Add Patients',
	UpsertPatients = '[Patient] Upsert Patients',
	UpdatePatient = '[Patient] Update Patient',
	UpdatePatients = '[Patient] Update Patients',
	DeletePatient = '[Patient] Delete Patient',
	DeletePatients = '[Patient] Delete Patients',
	ClearPatients = '[Patient] Clear Patients',
}

export class LoadPatients implements Action {
	readonly type = PatientActionTypes.LoadPatients;

	constructor(public payload: { patients: Patient[] }) {}
}

export class AddPatient implements Action {
	readonly type = PatientActionTypes.AddPatient;

	constructor(public payload: { patient: Patient }) {}
}
export class AddAppointment implements Action {
	readonly type = PatientActionTypes.AddAppointment;

	constructor(public payload: { patientId: string; appointmentId: string }) {}
}

export class DeleteAppointment implements Action {
	readonly type = PatientActionTypes.DeleteAppointment;

	constructor(public payload: { patientId: string; appointmentId: string }) {}
}

export class UpsertPatient implements Action {
	readonly type = PatientActionTypes.UpsertPatient;

	constructor(public payload: { patient: Patient }) {}
}

export class AddPatients implements Action {
	readonly type = PatientActionTypes.AddPatients;

	constructor(public payload: { patients: Patient[] }) {}
}

export class UpsertPatients implements Action {
	readonly type = PatientActionTypes.UpsertPatients;

	constructor(public payload: { patients: Patient[] }) {}
}

export class UpdatePatient implements Action {
	readonly type = PatientActionTypes.UpdatePatient;

	constructor(public payload: { patient: Update<Patient> }) {}
}

export class UpdatePatients implements Action {
	readonly type = PatientActionTypes.UpdatePatients;

	constructor(public payload: { patients: Update<Patient>[] }) {}
}

export class DeletePatient implements Action {
	readonly type = PatientActionTypes.DeletePatient;

	constructor(public payload: { id: string }) {}
}

export class DeletePatients implements Action {
	readonly type = PatientActionTypes.DeletePatients;

	constructor(public payload: { ids: string[] }) {}
}

export class ClearPatients implements Action {
	readonly type = PatientActionTypes.ClearPatients;
}

export type PatientActions =
	| LoadPatients
	| AddPatient
	| AddAppointment
	| DeleteAppointment
	| UpsertPatient
	| AddPatients
	| UpsertPatients
	| UpdatePatient
	| UpdatePatients
	| DeletePatient
	| DeletePatients
	| ClearPatients;
