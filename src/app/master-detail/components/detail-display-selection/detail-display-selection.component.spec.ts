/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailDisplaySelectionComponent } from './detail-display-selection.component';

describe('DetailDisplaySelectionComponent', () => {
	let component: DetailDisplaySelectionComponent;
	let fixture: ComponentFixture<DetailDisplaySelectionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DetailDisplaySelectionComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DetailDisplaySelectionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
