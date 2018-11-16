import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOverviewContainerComponent } from './patient-overview-container.component';

describe('PatientOverviewContainerComponent', () => {
	let component: PatientOverviewContainerComponent;
	let fixture: ComponentFixture<PatientOverviewContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PatientOverviewContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PatientOverviewContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
