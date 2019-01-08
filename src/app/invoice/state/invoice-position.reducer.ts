import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { InvoicePosition } from '../model/invoice-position.model';
import {
	InvoicePositionActions,
	InvoicePositionActionTypes
} from './invoice-position.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends EntityState<InvoicePosition> {
	// additional entities state properties
}

export const adapter: EntityAdapter<InvoicePosition> = createEntityAdapter<
	InvoicePosition
>();

export const initialState: State = adapter.getInitialState({
	// additional entity state properties
});

export function reducer(
	state = initialState,
	action: InvoicePositionActions
): State {
	switch (action.type) {
		case InvoicePositionActionTypes.AddInvoicePosition: {
			return adapter.addOne(action.payload.invoicePosition, state);
		}

		case InvoicePositionActionTypes.UpsertInvoicePosition: {
			return adapter.upsertOne(action.payload.invoicePosition, state);
		}

		case InvoicePositionActionTypes.AddInvoicePositions: {
			return adapter.addMany(action.payload.invoicePositions, state);
		}

		case InvoicePositionActionTypes.UpsertInvoicePositions: {
			return adapter.upsertMany(action.payload.invoicePositions, state);
		}

		case InvoicePositionActionTypes.UpdateInvoicePosition: {
			return adapter.updateOne(action.payload.invoicePosition, state);
		}

		case InvoicePositionActionTypes.UpdateInvoicePositions: {
			return adapter.updateMany(action.payload.invoicePositions, state);
		}

		case InvoicePositionActionTypes.DeleteInvoicePosition: {
			return adapter.removeOne(action.payload.id, state);
		}

		case InvoicePositionActionTypes.DeleteInvoicePositions: {
			return adapter.removeMany(action.payload.ids, state);
		}

		case InvoicePositionActionTypes.LoadInvoicePositions: {
			return adapter.addAll(action.payload.invoicePositions, state);
		}

		case InvoicePositionActionTypes.ClearInvoicePositions: {
			return adapter.removeAll(state);
		}

		default: {
			return state;
		}
	}
}

export const selectInvoicePositions = createFeatureSelector<State>(
	'invoicePositions'
);
export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal
} = adapter.getSelectors(selectInvoicePositions);
export const selectInvoicePosition = (id: string) =>
	createSelector(
		selectInvoicePositions,
		state => state[id]
	);
