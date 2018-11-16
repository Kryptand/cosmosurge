/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MasterActionbarComponent } from './master-actionbar.component';

describe('MasterActionbarComponent', () => {
	let component: MasterActionbarComponent;
	let fixture: ComponentFixture<MasterActionbarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MasterActionbarComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MasterActionbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
