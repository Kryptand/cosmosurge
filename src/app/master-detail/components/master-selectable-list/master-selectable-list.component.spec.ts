/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MasterSelectableListComponent } from './master-selectable-list.component';

describe('MasterSelectableListComponent', () => {
	let component: MasterSelectableListComponent;
	let fixture: ComponentFixture<MasterSelectableListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MasterSelectableListComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MasterSelectableListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
