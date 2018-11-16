import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAppointmentContainerComponent } from './add-edit-appointment-container.component';

describe('AddEditAppointmentContainerComponent', () => {
	let component: AddEditAppointmentContainerComponent;
	let fixture: ComponentFixture<AddEditAppointmentContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AddEditAppointmentContainerComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddEditAppointmentContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
