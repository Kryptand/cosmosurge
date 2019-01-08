import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { TreatmentType } from '../../model/treatment-type.model';
import * as fromTreatmentType from '../../state/treatment-type.reducer';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Guid } from '../../../utils/guid';
import {
	AddTreatmentType,
	UpdateTreatmentType
} from '../../state/treatment-type.actions';
@Component({
	selector: 'app-add-edit-treatment-type-container',
	templateUrl: './add-edit-treatment-type-container.component.html',
	styleUrls: ['./add-edit-treatment-type-container.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEditTreatmentTypeContainerComponent implements OnInit {
	treatmentType$: Observable<TreatmentType>;
	constructor(
		private store: Store<fromTreatmentType.State>,
		private route: ActivatedRoute
	) {}

	saveTreatmentType(treatmentType: TreatmentType) {
    console.debug(treatmentType);
		if (treatmentType.id == null) {
			treatmentType.id = new Guid().toString();
			this.store.dispatch(
				new AddTreatmentType({ treatmentType: treatmentType })
			);
		} else {
			this.store.dispatch(
				new UpdateTreatmentType({
					treatmentType: { id: treatmentType.id, changes: treatmentType }
				})
			);
		}
	}

	ngOnInit() {
		const idParam = this.route.snapshot.paramMap.get('id');
		if (idParam !== null) {
			this.treatmentType$ = this.store.pipe(
				select(fromTreatmentType.selectTreatmentType(idParam))
			);
		}
	}
}
