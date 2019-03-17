import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationProcessComponent } from './registration-process.component';

describe('RegistrationProcessComponent', () => {
  let component: RegistrationProcessComponent;
  let fixture: ComponentFixture<RegistrationProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
