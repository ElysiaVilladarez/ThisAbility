import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorRowComponent } from './calculator-row.component';

describe('CalculatorRowComponent', () => {
  let component: CalculatorRowComponent;
  let fixture: ComponentFixture<CalculatorRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
