import { Action } from '@ngrx/store';

export enum MasterDetailActionTypes {
	ConfigureIdentifier = '[MasterDetail] Configure Identifier',
	SelectEntities = '[MasterDetail] Select Entities',
	ClearEntities = '[MasterDetail] Clear Entities',
}
export class ConfigureIdentifier implements Action {
	public readonly type = MasterDetailActionTypes.ConfigureIdentifier;
	constructor(public payload: { identifier: string | string[] }) {}
}

export class SelectEntities implements Action {
	public readonly type = MasterDetailActionTypes.SelectEntities;
	constructor(public payload: { entities: any[] }) {}
}

export class ClearEntities implements Action {
	public readonly type = MasterDetailActionTypes.ClearEntities;
}

export type MasterDetailActions =
	| SelectEntities
	| ConfigureIdentifier
	| ClearEntities;
