import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTreatmentTypeContainerComponent } from './add-edit-treatment-type-container.component';

describe('AddEditTreatmentTypeContainerComponent', () => {
  let component: AddEditTreatmentTypeContainerComponent;
  let fixture: ComponentFixture<AddEditTreatmentTypeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTreatmentTypeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTreatmentTypeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
