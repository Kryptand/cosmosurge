import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Treatment } from '../../model/treatment.model';

import * as fromTreatment from '../../state/treatment.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Guid } from '../../../utils/guid';
import { UpdateTreatment, AddTreatment } from '../../state/treatment.actions';
@Component({
	selector: 'app-add-edit-treatment-container',
	templateUrl: './add-edit-treatment-container.component.html',
	styleUrls: ['./add-edit-treatment-container.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditTreatmentContainerComponent implements OnInit {
	treatment$: Observable<Treatment>;
	constructor(
		private store: Store<fromTreatment.State>,
		private route: ActivatedRoute
	) {}

	savetreatment(treatment: Treatment) {
		if (treatment.id == null) {
			treatment.id = new Guid().toString();
			this.store.dispatch(new AddTreatment({ treatment: treatment }));
		} else {
			this.store.dispatch(
				new UpdateTreatment({
					treatment: { id: treatment.id, changes: treatment },
				})
			);
		}
	}

	ngOnInit() {
		const idParam = this.route.snapshot.paramMap.get('id');
		if (idParam !== null) {
			this.treatment$ = this.store.pipe(
				select(fromTreatment.selectTreatment(idParam))
			);
		}
	}
}
