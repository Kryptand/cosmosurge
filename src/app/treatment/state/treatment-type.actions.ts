import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { TreatmentType } from '../model/treatment-type.model';

export enum TreatmentTypeActionTypes {
	LoadTreatmentTypes = '[TreatmentType] Load TreatmentTypes',
	AddTreatmentType = '[TreatmentType] Add TreatmentType',
	UpsertTreatmentType = '[TreatmentType] Upsert TreatmentType',
	AddTreatmentTypes = '[TreatmentType] Add TreatmentTypes',
	UpsertTreatmentTypes = '[TreatmentType] Upsert TreatmentTypes',
	UpdateTreatmentType = '[TreatmentType] Update TreatmentType',
	UpdateTreatmentTypes = '[TreatmentType] Update TreatmentTypes',
	DeleteTreatmentType = '[TreatmentType] Delete TreatmentType',
	DeleteTreatmentTypes = '[TreatmentType] Delete TreatmentTypes',
	ClearTreatmentTypes = '[TreatmentType] Clear TreatmentTypes'
}

export class LoadTreatmentTypes implements Action {
	readonly type = TreatmentTypeActionTypes.LoadTreatmentTypes;

	constructor(public payload: { treatmentTypes: TreatmentType[] }) {}
}

export class AddTreatmentType implements Action {
	readonly type = TreatmentTypeActionTypes.AddTreatmentType;

	constructor(public payload: { treatmentType: TreatmentType }) {}
}

export class UpsertTreatmentType implements Action {
	readonly type = TreatmentTypeActionTypes.UpsertTreatmentType;

	constructor(public payload: { treatmentType: TreatmentType }) {}
}

export class AddTreatmentTypes implements Action {
	readonly type = TreatmentTypeActionTypes.AddTreatmentTypes;

	constructor(public payload: { treatmentTypes: TreatmentType[] }) {}
}

export class UpsertTreatmentTypes implements Action {
	readonly type = TreatmentTypeActionTypes.UpsertTreatmentTypes;

	constructor(public payload: { treatmentTypes: TreatmentType[] }) {}
}

export class UpdateTreatmentType implements Action {
	readonly type = TreatmentTypeActionTypes.UpdateTreatmentType;

	constructor(public payload: { treatmentType: Update<TreatmentType> }) {}
}

export class UpdateTreatmentTypes implements Action {
	readonly type = TreatmentTypeActionTypes.UpdateTreatmentTypes;

	constructor(public payload: { treatmentTypes: Update<TreatmentType>[] }) {}
}

export class DeleteTreatmentType implements Action {
	readonly type = TreatmentTypeActionTypes.DeleteTreatmentType;

	constructor(public payload: { id: string }) {}
}

export class DeleteTreatmentTypes implements Action {
	readonly type = TreatmentTypeActionTypes.DeleteTreatmentTypes;

	constructor(public payload: { ids: string[] }) {}
}

export class ClearTreatmentTypes implements Action {
	readonly type = TreatmentTypeActionTypes.ClearTreatmentTypes;
}

export type TreatmentTypeActions =
	| LoadTreatmentTypes
	| AddTreatmentType
	| UpsertTreatmentType
	| AddTreatmentTypes
	| UpsertTreatmentTypes
	| UpdateTreatmentType
	| UpdateTreatmentTypes
	| DeleteTreatmentType
	| DeleteTreatmentTypes
	| ClearTreatmentTypes;
