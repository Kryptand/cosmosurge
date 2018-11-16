import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Treatment } from '../model/treatment.model';

export enum TreatmentActionTypes {
	LoadTreatments = '[Treatment] Load Treatments',
	AddTreatment = '[Treatment] Add Treatment',
	UpsertTreatment = '[Treatment] Upsert Treatment',
	AddTreatments = '[Treatment] Add Treatments',
	UpsertTreatments = '[Treatment] Upsert Treatments',
	UpdateTreatment = '[Treatment] Update Treatment',
	UpdateTreatments = '[Treatment] Update Treatments',
	DeleteTreatment = '[Treatment] Delete Treatment',
	DeleteTreatments = '[Treatment] Delete Treatments',
	ClearTreatments = '[Treatment] Clear Treatments',
}

export class LoadTreatments implements Action {
	readonly type = TreatmentActionTypes.LoadTreatments;

	constructor(public payload: { treatments: Treatment[] }) {}
}

export class AddTreatment implements Action {
	readonly type = TreatmentActionTypes.AddTreatment;

	constructor(public payload: { treatment: Treatment }) {}
}

export class UpsertTreatment implements Action {
	readonly type = TreatmentActionTypes.UpsertTreatment;

	constructor(public payload: { treatment: Treatment }) {}
}

export class AddTreatments implements Action {
	readonly type = TreatmentActionTypes.AddTreatments;

	constructor(public payload: { treatments: Treatment[] }) {}
}

export class UpsertTreatments implements Action {
	readonly type = TreatmentActionTypes.UpsertTreatments;

	constructor(public payload: { treatments: Treatment[] }) {}
}

export class UpdateTreatment implements Action {
	readonly type = TreatmentActionTypes.UpdateTreatment;

	constructor(public payload: { treatment: Update<Treatment> }) {}
}

export class UpdateTreatments implements Action {
	readonly type = TreatmentActionTypes.UpdateTreatments;

	constructor(public payload: { treatments: Update<Treatment>[] }) {}
}

export class DeleteTreatment implements Action {
	readonly type = TreatmentActionTypes.DeleteTreatment;

	constructor(public payload: { id: string }) {}
}

export class DeleteTreatments implements Action {
	readonly type = TreatmentActionTypes.DeleteTreatments;

	constructor(public payload: { ids: string[] }) {}
}

export class ClearTreatments implements Action {
	readonly type = TreatmentActionTypes.ClearTreatments;
}

export type TreatmentActions =
	| LoadTreatments
	| AddTreatment
	| UpsertTreatment
	| AddTreatments
	| UpsertTreatments
	| UpdateTreatment
	| UpdateTreatments
	| DeleteTreatment
	| DeleteTreatments
	| ClearTreatments;
