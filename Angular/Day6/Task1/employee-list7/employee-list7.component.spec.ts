import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeList7Component } from './employee-list7.component';

describe('EmployeeList7Component', () => {
  let component: EmployeeList7Component;
  let fixture: ComponentFixture<EmployeeList7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeList7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeList7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
