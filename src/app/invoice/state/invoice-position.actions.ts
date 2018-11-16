import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { InvoicePosition } from '../model/invoice-position.model';

export enum InvoicePositionActionTypes {
	LoadInvoicePositions = '[InvoicePosition] Load InvoicePositions',
	AddInvoicePosition = '[InvoicePosition] Add InvoicePosition',
	UpsertInvoicePosition = '[InvoicePosition] Upsert InvoicePosition',
	AddInvoicePositions = '[InvoicePosition] Add InvoicePositions',
	UpsertInvoicePositions = '[InvoicePosition] Upsert InvoicePositions',
	UpdateInvoicePosition = '[InvoicePosition] Update InvoicePosition',
	UpdateInvoicePositions = '[InvoicePosition] Update InvoicePositions',
	DeleteInvoicePosition = '[InvoicePosition] Delete InvoicePosition',
	DeleteInvoicePositions = '[InvoicePosition] Delete InvoicePositions',
	ClearInvoicePositions = '[InvoicePosition] Clear InvoicePositions',
}

export class LoadInvoicePositions implements Action {
	readonly type = InvoicePositionActionTypes.LoadInvoicePositions;

	constructor(public payload: { invoicePositions: InvoicePosition[] }) {}
}

export class AddInvoicePosition implements Action {
	readonly type = InvoicePositionActionTypes.AddInvoicePosition;

	constructor(public payload: { invoicePosition: InvoicePosition }) {}
}

export class UpsertInvoicePosition implements Action {
	readonly type = InvoicePositionActionTypes.UpsertInvoicePosition;

	constructor(public payload: { invoicePosition: InvoicePosition }) {}
}

export class AddInvoicePositions implements Action {
	readonly type = InvoicePositionActionTypes.AddInvoicePositions;

	constructor(public payload: { invoicePositions: InvoicePosition[] }) {}
}

export class UpsertInvoicePositions implements Action {
	readonly type = InvoicePositionActionTypes.UpsertInvoicePositions;

	constructor(public payload: { invoicePositions: InvoicePosition[] }) {}
}

export class UpdateInvoicePosition implements Action {
	readonly type = InvoicePositionActionTypes.UpdateInvoicePosition;

	constructor(public payload: { invoicePosition: Update<InvoicePosition> }) {}
}

export class UpdateInvoicePositions implements Action {
	readonly type = InvoicePositionActionTypes.UpdateInvoicePositions;

	constructor(
		public payload: { invoicePositions: Update<InvoicePosition>[] }
	) {}
}

export class DeleteInvoicePosition implements Action {
	readonly type = InvoicePositionActionTypes.DeleteInvoicePosition;

	constructor(public payload: { id: string }) {}
}

export class DeleteInvoicePositions implements Action {
	readonly type = InvoicePositionActionTypes.DeleteInvoicePositions;

	constructor(public payload: { ids: string[] }) {}
}

export class ClearInvoicePositions implements Action {
	readonly type = InvoicePositionActionTypes.ClearInvoicePositions;
}

export type InvoicePositionActions =
	| LoadInvoicePositions
	| AddInvoicePosition
	| UpsertInvoicePosition
	| AddInvoicePositions
	| UpsertInvoicePositions
	| UpdateInvoicePosition
	| UpdateInvoicePositions
	| DeleteInvoicePosition
	| DeleteInvoicePositions
	| ClearInvoicePositions;
