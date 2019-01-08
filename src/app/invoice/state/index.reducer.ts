import * as fromInvoice from './invoice.reducer';
import * as fromInvoicePositions from './invoice-position.reducer';
import { createFeatureSelector } from '@ngrx/store';

export interface InvoiceState {
	invoices: fromInvoice.State;
	invoicePositions: fromInvoicePositions.State;
}
export const reducers = {
	invoices: fromInvoice.reducer,
	invoicePositions: fromInvoicePositions.reducer
};
export const invoiceState = createFeatureSelector<InvoiceState>(
	'invoicesWithPositions'
);
