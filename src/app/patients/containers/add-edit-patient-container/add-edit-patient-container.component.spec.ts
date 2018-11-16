import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPatientContainerComponent } from './add-edit-patient-container.component';

describe('AddEditPatientContainerComponent', () => {
	let component: AddEditPatientContainerComponent;
	let fixture: ComponentFixture<AddEditPatientContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AddEditPatientContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddEditPatientContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
