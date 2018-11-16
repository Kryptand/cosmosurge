/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MasterSearchComponent } from './master-search.component';

describe('MasterSearchComponent', () => {
	let component: MasterSearchComponent;
	let fixture: ComponentFixture<MasterSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MasterSearchComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MasterSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
