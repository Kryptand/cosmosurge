import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
	AppointmentActions,
	AppointmentActionTypes
} from './appointment.actions';
import { Appointment } from '../model/appointment.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Appointment> {
	// additional entities state properties
}

export const adapter: EntityAdapter<Appointment> = createEntityAdapter<
	Appointment
>();

export const initialState: State = adapter.getInitialState({
	// additional entity state properties
});

export function reducer(
	state = initialState,
	action: AppointmentActions
): State {
	switch (action.type) {
		case AppointmentActionTypes.AddAppointment: {
			return adapter.addOne(action.payload.appointment, state);
		}
		case AppointmentActionTypes.AddTreatment: {
			return {
				...state,
				...(state.entities[action.payload.appointmentId].treatments = [
					...state.entities[action.payload.appointmentId].treatments,
					action.payload.treatmentId
				])
			};
		}
		case AppointmentActionTypes.DeleteTreatment: {
			return {
				...state,
				...(state.entities[
					action.payload.appointmentId
				].treatments = state.entities[
					action.payload.appointmentId
				].treatments.filter(x => x !== action.payload.treatmentId))
			};
		}
		case AppointmentActionTypes.UpsertAppointment: {
			return adapter.upsertOne(action.payload.appointment, state);
		}

		case AppointmentActionTypes.AddAppointments: {
			return adapter.addMany(action.payload.appointments, state);
		}

		case AppointmentActionTypes.UpsertAppointments: {
			return adapter.upsertMany(action.payload.appointments, state);
		}

		case AppointmentActionTypes.UpdateAppointment: {
			return adapter.updateOne(action.payload.appointment, state);
		}

		case AppointmentActionTypes.UpdateAppointments: {
			return adapter.updateMany(action.payload.appointments, state);
		}

		case AppointmentActionTypes.DeleteAppointment: {
			return adapter.removeOne(action.payload.id, state);
		}

		case AppointmentActionTypes.DeleteAppointments: {
			return adapter.removeMany(action.payload.ids, state);
		}

		case AppointmentActionTypes.LoadAppointments: {
			return adapter.addAll(action.payload.appointments, state);
		}

		case AppointmentActionTypes.ClearAppointments: {
			return adapter.removeAll(state);
		}

		default: {
			return state;
		}
	}
}

export const selectAppointments = createFeatureSelector<State>('appointment');
export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal
} = adapter.getSelectors(selectAppointments);
export const selectAppointment = (id: string) =>
	createSelector(
		selectAppointments,
		state => state[id]
	);
