import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
	AddAppointment,
	UpdateAppointment,
} from '../../state/appointment.actions';
import * as fromAppointment from '../../state/appointment.reducer';
import { Observable } from 'rxjs';
import { Appointment } from '../../model/appointment.model';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Guid } from '../../../utils/guid';
@Component({
	selector: 'app-add-edit-appointment-container',
	templateUrl: './add-edit-appointment-container.component.html',
	styleUrls: ['./add-edit-appointment-container.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditAppointmentContainerComponent implements OnInit {
	appointment$: Observable<Appointment>;
	constructor(
		private store: Store<fromAppointment.State>,
		private route: ActivatedRoute
	) {}

	saveAppointment(appointment: Appointment) {
		if (appointment.id == null) {
			appointment.id = new Guid().toString();
			this.store.dispatch(new AddAppointment({ appointment: appointment }));
		} else {
			this.store.dispatch(
				new UpdateAppointment({
					appointment: { id: appointment.id, changes: appointment },
				})
			);
		}
	}

	ngOnInit() {
		const idParam = this.route.snapshot.paramMap.get('id');
		if (idParam !== null) {
			// this.appointment$ = this.store.pipe(
			// 	select(fromAppointment.selectAppointment(idParam))
			// );
		}
	}
}
