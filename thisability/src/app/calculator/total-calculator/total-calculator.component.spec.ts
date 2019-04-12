import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCalculatorComponent } from './total-calculator.component';

describe('TotalCalculatorComponent', () => {
  let component: TotalCalculatorComponent;
  let fixture: ComponentFixture<TotalCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
