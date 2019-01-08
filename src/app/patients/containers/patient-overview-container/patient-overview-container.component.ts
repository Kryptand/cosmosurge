import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as fromPatient from '../../state/patient.reducer';
import { Store, select } from '@ngrx/store';
import { Patient } from '../../model/patient.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-patient-overview-container',
	templateUrl: './patient-overview-container.component.html',
	styleUrls: ['./patient-overview-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientOverviewContainerComponent implements OnInit {
	constructor(
		private store: Store<fromPatient.State>,
		private router: Router,
		private route: ActivatedRoute
	) {}
	patients$: Observable<Patient[]>;
	test$: Observable<any>;
	selectedPatients: Patient[] = [];
	logAction(event: any) {
		console.log(event);
	}

	termChanged(term: string) {
		if (term.length > 0) {
			this.patients$ = this.store.pipe(select(fromPatient.filterPatient(term)));
			return;
		}
		this.patients$ = this.store.pipe(select(fromPatient.selectAll));
	}
	ngOnInit() {
		this.patients$ = this.store.pipe(select(fromPatient.selectAll));
	}
	addEditFinished():void{
		this.revertChildRoutingState();
	}
	selectionChange(elements: any[]) {
		this.selectedPatients = elements;
		if (this.selectedPatients.length===1) {
			this.router.navigate([this.selectedPatients[0].id], {
				skipLocationChange: false,
				relativeTo: this.route
			});
		}
		if(this.selectedPatients.length===0){
			this.revertChildRoutingState();
		}
	}

	private revertChildRoutingState() {
		this.router.navigate(['./'], {
			skipLocationChange: false,
			relativeTo: this.route
		});
	}
}
