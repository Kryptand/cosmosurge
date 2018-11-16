import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTreatmentFormComponent } from './add-treatment-form.component';

describe('AddTreatmentFormComponent', () => {
	let component: AddTreatmentFormComponent;
	let fixture: ComponentFixture<AddTreatmentFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AddTreatmentFormComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddTreatmentFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
