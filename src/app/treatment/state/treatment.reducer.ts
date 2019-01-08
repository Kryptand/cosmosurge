import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Treatment } from '../model/treatment.model';
import { TreatmentActions, TreatmentActionTypes } from './treatment.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Treatment> {
	// additional entities state properties
}

export const adapter: EntityAdapter<Treatment> = createEntityAdapter<
	Treatment
>();

export const initialState: State = adapter.getInitialState({
	// additional entity state properties
});

export function reducer(state = initialState, action: TreatmentActions): State {
	switch (action.type) {
		case TreatmentActionTypes.AddTreatment: {
			return adapter.addOne(action.payload.treatment, state);
		}
		case TreatmentActionTypes.AddTreatmentType: {
			return {
				...state,
				entities:{
					...state.entities,
					[action.payload.treatmentId]:{
						...state.entities[action.payload.treatmentId],
						treatmentType:action.payload.treatmentTypeId
					}
				}
			};
		}
		case TreatmentActionTypes.DeleteTreatmentType: {
			return {
				...state,
				entities:{
					...state.entities,
					[action.payload.treatmentId]:{
						...state.entities[action.payload.treatmentId],
						treatmentType:null
					}
				}
			};
		}
		case TreatmentActionTypes.UpsertTreatment: {
			return adapter.upsertOne(action.payload.treatment, state);
		}

		case TreatmentActionTypes.AddTreatments: {
			return adapter.addMany(action.payload.treatments, state);
		}

		case TreatmentActionTypes.UpsertTreatments: {
			return adapter.upsertMany(action.payload.treatments, state);
		}

		case TreatmentActionTypes.UpdateTreatment: {
			return adapter.updateOne(action.payload.treatment, state);
		}

		case TreatmentActionTypes.UpdateTreatments: {
			return adapter.updateMany(action.payload.treatments, state);
		}

		case TreatmentActionTypes.DeleteTreatment: {
			return adapter.removeOne(action.payload.id, state);
		}

		case TreatmentActionTypes.DeleteTreatments: {
			return adapter.removeMany(action.payload.ids, state);
		}

		case TreatmentActionTypes.LoadTreatments: {
			return adapter.addAll(action.payload.treatments, state);
		}

		case TreatmentActionTypes.ClearTreatments: {
			return adapter.removeAll(state);
		}

		default: {
			return state;
		}
	}
}

export const selectTreatments = createFeatureSelector<State>('treatment');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal
} = adapter.getSelectors(selectTreatments);
export const selectTreatment = (id: string) =>
	createSelector(
		selectTreatments,
		state => state[id]
	);
