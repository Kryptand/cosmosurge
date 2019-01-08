import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleSearchbarComponent } from './collapsible-searchbar.component';

describe('CollapsibleSearchbarComponent', () => {
  let component: CollapsibleSearchbarComponent;
  let fixture: ComponentFixture<CollapsibleSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
