import * as fromTreatment from './treatment.reducer';
import * as fromTreatmentType from './treatment-type.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface TreatmentState {
	treatments: fromTreatment.State;
	treatmentTypes: fromTreatmentType.State;
}
export const reducers = {
	treatments: fromTreatment.reducer,
	treatmentTypes: fromTreatmentType.reducer
};
export const treatmentState = createFeatureSelector<TreatmentState>(
	'treatmentWithTypes'
);
export const selectAllTreatments = createSelector(
	treatmentState,
	fromTreatment.selectAll
);
export const selectTreatmentId = (id: string) =>
	createSelector(
		treatmentState,
		fromTreatment.selectTreatment(id)
	);

export const selectAllTreatmentTypes = createSelector(
	treatmentState,
	fromTreatmentType.selectAll
);
export const selectTreatmentTypeId = (id: string) =>
	createSelector(
		treatmentState,
		fromTreatmentType.selectTreatmentType(id)
	);
