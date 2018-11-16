import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { Store, StoreModule } from '@ngrx/store';

describe('AuthComponent', () => {
	let component: AuthComponent;
	let fixture: ComponentFixture<AuthComponent>;
	let store: Store<any>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			imports: [StoreModule.forRoot({})],
			declarations: [AuthComponent],
		});

		await TestBed.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AuthComponent);
		component = fixture.componentInstance;
		store = TestBed.get(Store);

		spyOn(store, 'dispatch').and.callThrough();
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
