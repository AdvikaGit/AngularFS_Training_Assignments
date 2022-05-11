import { TestBed } from '@angular/core/testing';

import { DeptServiceService } from './dept-service.service';

describe('DeptServiceService', () => {
 
  let service: DeptServiceService;
  let addobj= {deptno : 70,  dname : "Marketing", loc : "Hyd"};
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // a.  Test default items
  it('Test default items', () => {

    expect(service.depts.length).toBe(5);
   });

   //b.  Test addDept
  it('Test addDept', () => {

    service.addDept(addobj)

    expect(service.depts.length).toBe(6);
   });

   it('Test Remove Dept -- for valid number', () => {

    service.removeDept(1)

    expect(service.depts.length).toBe(4);
   });

   it('Test Remove Dept -- for invalid number', () => {

    let result  = service.removeDept(76)
 
    expect(service.depts.length).toEqual(4);
    });
});
