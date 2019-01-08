import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTreatmentTypeFormComponent } from './add-treatment-type-form.component';

describe('AddTreatmentTypeFormComponent', () => {
  let component: AddTreatmentTypeFormComponent;
  let fixture: ComponentFixture<AddTreatmentTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTreatmentTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTreatmentTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
