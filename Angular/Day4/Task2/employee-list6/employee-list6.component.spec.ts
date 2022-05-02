import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeList6Component } from './employee-list6.component';

describe('EmployeeList6Component', () => {
  let component: EmployeeList6Component;
  let fixture: ComponentFixture<EmployeeList6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeList6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeList6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
