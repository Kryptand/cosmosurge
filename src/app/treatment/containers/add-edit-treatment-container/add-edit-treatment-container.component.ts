import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Treatment } from '../../model/treatment.model';

import * as fromTreatments from '../../state/index.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Guid } from '../../../utils/guid';
import { UpdateTreatment, AddTreatment } from '../../state/treatment.actions';
import { TreatmentType } from '../../model/treatment-type.model';
import { selectTreatment } from '../../state/treatment.reducer';
import { selectEntities, selectAll } from '../../state/treatment-type.reducer';
import { tap } from 'rxjs/operators';
@Component({
	selector: 'app-add-edit-treatment-container',
	templateUrl: './add-edit-treatment-container.component.html',
	styleUrls: ['./add-edit-treatment-container.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditTreatmentContainerComponent implements OnInit {
	treatment$: Observable<Treatment>;
	treatmentTypes$:Observable<TreatmentType[]>;
	constructor(
		private store: Store<fromTreatments.TreatmentState>,
		private route: ActivatedRoute
	) {}

	saveTreatment(treatment: Treatment) {
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
		this.treatmentTypes$=this.store.pipe(select(fromTreatments.selectAllTreatmentTypes)).pipe(tap(val=>console.debug(val)));
		const idParam = this.route.snapshot.paramMap.get('id');
		if (idParam !== null) {
			this.treatment$ = this.store.pipe(
				select(fromTreatments.selectTreatmentTypeId(idParam))
			);
		}
	
	}
}
