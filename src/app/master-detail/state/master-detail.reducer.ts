import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
	MasterDetailActions,
	MasterDetailActionTypes,
} from './master-detail.actions';
import { ComposedIdUtility } from '../helper/composed-id-utility';
export interface State {
	idIdentifier: string | string[];
	selectedIds: string[];
	selectedEntities: { [key: string]: any };
}
export const initialState: State = {
	idIdentifier: 'id',
	selectedIds: new Array(),
	selectedEntities: {},
};

export function reducer(
	state: State = initialState,
	action: MasterDetailActions
): State {
	switch (action.type) {
		case MasterDetailActionTypes.ConfigureIdentifier:
			return {
				...state,
				idIdentifier: action.payload.identifier,
			};
		case MasterDetailActionTypes.SelectEntities:
			let selectedIdsFromPayload = [];
			action.payload.entities.forEach(
				entity =>
					(selectedIdsFromPayload = [
						...selectedIdsFromPayload,
						ComposedIdUtility.getComposedIdString(state.idIdentifier, entity),
					])
			);
			const selectedEntitiesFromPayload = normalizeArray<any>(
				action.payload.entities,
				state.idIdentifier
			);

			return {
				...state,
				selectedIds: selectedIdsFromPayload,
				selectedEntities: selectedEntitiesFromPayload,
			};

		case MasterDetailActionTypes.ClearEntities:
			return initialState;

		default:
			return state;
	}
}
export const getMasterDetailState = createFeatureSelector<State>(
	'masterDetail'
);
export const getIdentifier = createSelector(
	getMasterDetailState,
	(state: State) => state.idIdentifier
);
export const getSelectedIds = createSelector(
	getMasterDetailState,
	(state: State) => {
		const composedId = [];
		state.selectedIds.forEach(id =>
			composedId.push(ComposedIdUtility.transformStringToComposedId(id))
		);
		return composedId;
	}
);
export const getSelectedElementCount = createSelector(
	getMasterDetailState,
	(state: State) => {
		return state.selectedIds.length;
	}
);
function normalizeArray<T>(array: Array<T>, index: string | string[]): object {
	const normalizedObject: any = {};
	if (Array.isArray(index)) {
		for (let i = 0; i < array.length; i++) {
			const composedKey = ComposedIdUtility.getComposedIdString(
				index,
				array[i]
			);
			normalizedObject[composedKey] = array[i];
		}
	} else {
		for (let i = 0; i < array.length; i++) {
			const key = array[i][index];
			normalizedObject[key] = array[i];
		}
	}
	return normalizedObject as { [key: string]: T };
}
