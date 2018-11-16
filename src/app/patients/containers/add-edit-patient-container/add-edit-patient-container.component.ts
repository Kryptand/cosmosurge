import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromPatient from '../../state/patient.reducer';
import { Store, select } from '@ngrx/store';
import { Patient } from '../../model/patient.model';
import { Observable } from 'rxjs';
import { Guid } from '../../../utils/guid';
import { AddPatient, UpdatePatient } from '../../state/patient.actions';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-add-edit-patient-container',
	templateUrl: './add-edit-patient-container.component.html',
	styleUrls: ['./add-edit-patient-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditPatientContainerComponent implements OnInit {
	patient$: Observable<Patient>;
	constructor(
		private store: Store<fromPatient.State>,
		private route: ActivatedRoute
	) {}

	savePatient(patient: Patient) {
		if (patient.id == null) {
			patient.id = new Guid().toString();
			this.store.dispatch(new AddPatient({ patient: patient }));
		} else {
			this.store.dispatch(
				new UpdatePatient({ patient: { id: patient.id, changes: patient } })
			);
		}
	}

	ngOnInit() {
		const idParam = this.route.snapshot.paramMap.get('id');
		if (idParam !== null) {
			this.patient$ = this.store.pipe(
				select(fromPatient.selectPatient(idParam))
			);
		}
	}
}
