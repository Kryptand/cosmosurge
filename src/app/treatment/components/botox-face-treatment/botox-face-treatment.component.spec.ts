import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoxFaceTreatmentComponent } from './botox-face-treatment.component';

describe('BotoxFaceTreatmentComponent', () => {
  let component: BotoxFaceTreatmentComponent;
  let fixture: ComponentFixture<BotoxFaceTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoxFaceTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoxFaceTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
