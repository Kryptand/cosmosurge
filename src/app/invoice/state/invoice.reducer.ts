import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Invoice } from '../model/invoice.model';
import { InvoiceActions, InvoiceActionTypes } from './invoice.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends EntityState<Invoice> {
	selectedInvoice: string;
}

export const adapter: EntityAdapter<Invoice> = createEntityAdapter<Invoice>();

export const initialState: State = adapter.getInitialState({
	selectedInvoice: undefined
});

export function reducer(state = initialState, action: InvoiceActions): State {
	switch (action.type) {
		case InvoiceActionTypes.AddInvoice: {
			return adapter.addOne(action.payload.invoice, state);
		}
		case InvoiceActionTypes.AddInvoicePosition: {
			return {
				...state,
				...(state.entities[action.payload.invoiceId].positions = [
					...state.entities[action.payload.invoiceId].positions,
					action.payload.invoicePositionId
				])
			};
		}
		case InvoiceActionTypes.DeleteInvoicePosition: {
			return {
				...state,
				...(state.entities[action.payload.invoiceId].positions = state.entities[
					action.payload.invoiceId
				].positions.filter(x => x !== action.payload.invoicePositionId))
			};
		}
		case InvoiceActionTypes.UpsertInvoice: {
			return adapter.upsertOne(action.payload.invoice, state);
		}

		case InvoiceActionTypes.AddInvoices: {
			return adapter.addMany(action.payload.invoices, state);
		}

		case InvoiceActionTypes.UpsertInvoices: {
			return adapter.upsertMany(action.payload.invoices, state);
		}

		case InvoiceActionTypes.UpdateInvoice: {
			return adapter.updateOne(action.payload.invoice, state);
		}

		case InvoiceActionTypes.UpdateInvoices: {
			return adapter.updateMany(action.payload.invoices, state);
		}

		case InvoiceActionTypes.DeleteInvoice: {
			return adapter.removeOne(action.payload.id, state);
		}

		case InvoiceActionTypes.DeleteInvoices: {
			return adapter.removeMany(action.payload.ids, state);
		}

		case InvoiceActionTypes.LoadInvoices: {
			return adapter.addAll(action.payload.invoices, state);
		}

		case InvoiceActionTypes.ClearInvoices: {
			return adapter.removeAll(state);
		}

		default: {
			return state;
		}
	}
}
export const selectInvoices = createFeatureSelector<State>('invoices');
export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal
} = adapter.getSelectors(selectInvoices);
export const selectInvoice = (id: string) =>
	createSelector(
		selectInvoices,
		state => state[id]
	);
