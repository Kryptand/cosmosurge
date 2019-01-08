import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TreatmentType } from '../model/treatment-type.model';
import {
	TreatmentTypeActions,
	TreatmentTypeActionTypes
} from './treatment-type.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BotoxTreatmentType } from '../model/botox-treatment-type.model';
import { Guid } from '../../utils/guid';

const botoxTreatment = new BotoxTreatmentType();
export interface State extends EntityState<TreatmentType> {}

export const adapter: EntityAdapter<TreatmentType> = createEntityAdapter<
	TreatmentType
>();

export const initialState: State = adapter.getInitialState<State>({
	ids: [botoxTreatment.id],
	entities: { [botoxTreatment.id]: botoxTreatment }
});

export function reducer(
	state = initialState,
	action: TreatmentTypeActions
): State {
	switch (action.type) {
		case TreatmentTypeActionTypes.AddTreatmentType: {
			return adapter.addOne(action.payload.treatmentType, state);
		}

		case TreatmentTypeActionTypes.UpsertTreatmentType: {
			return adapter.upsertOne(action.payload.treatmentType, state);
		}

		case TreatmentTypeActionTypes.AddTreatmentTypes: {
			return adapter.addMany(action.payload.treatmentTypes, state);
		}

		case TreatmentTypeActionTypes.UpsertTreatmentTypes: {
			return adapter.upsertMany(action.payload.treatmentTypes, state);
		}

		case TreatmentTypeActionTypes.UpdateTreatmentType: {
			return adapter.updateOne(action.payload.treatmentType, state);
		}

		case TreatmentTypeActionTypes.UpdateTreatmentTypes: {
			return adapter.updateMany(action.payload.treatmentTypes, state);
		}

		case TreatmentTypeActionTypes.DeleteTreatmentType: {
			return adapter.removeOne(action.payload.id, state);
		}

		case TreatmentTypeActionTypes.DeleteTreatmentTypes: {
			return adapter.removeMany(action.payload.ids, state);
		}

		case TreatmentTypeActionTypes.LoadTreatmentTypes: {
			return adapter.addAll(action.payload.treatmentTypes, state);
		}

		case TreatmentTypeActionTypes.ClearTreatmentTypes: {
			return adapter.removeAll(state);
		}

		default: {
			return state;
		}
	}
}
export const selectTreatmentTypes = createFeatureSelector<State>(
	'treatmentTypes'
);
export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal
} = adapter.getSelectors(selectTreatmentTypes);
export const selectTreatmentType = (id: string) =>
	createSelector(
		selectTreatmentTypes,
		state => state[id]
	);
