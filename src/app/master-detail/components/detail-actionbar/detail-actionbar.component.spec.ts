/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailActionbarComponent } from './detail-actionbar.component';

describe('DetailActionbarComponent', () => {
	let component: DetailActionbarComponent;
	let fixture: ComponentFixture<DetailActionbarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DetailActionbarComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DetailActionbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
