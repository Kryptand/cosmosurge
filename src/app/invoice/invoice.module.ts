import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { reducers } from './state/index.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		InvoiceRoutingModule,
		StoreModule.forFeature('invoicesWithPositions', reducers)
	]
})
export class InvoiceModule {}
