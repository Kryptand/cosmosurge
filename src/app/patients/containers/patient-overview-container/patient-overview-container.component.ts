import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-patient-overview-container',
	templateUrl: './patient-overview-container.component.html',
	styleUrls: ['./patient-overview-container.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientOverviewContainerComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
