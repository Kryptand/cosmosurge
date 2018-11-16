import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTreatmentContainerComponent } from './add-edit-treatment-container.component';

describe('AddEditTreatmentContainerComponent', () => {
	let component: AddEditTreatmentContainerComponent;
	let fixture: ComponentFixture<AddEditTreatmentContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AddEditTreatmentContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddEditTreatmentContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
