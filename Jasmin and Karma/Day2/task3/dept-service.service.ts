import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeptServiceService {

  constructor() { }
  public depts:any =  [
    {deptno : 30,  dname : "Marketing", loc : "Hyd"},
    {deptno : 40,  dname : "Testing", loc : "Pune"},
    {deptno : 50,  dname : "Sales", loc : "Hyd"},
    {deptno : 60,  dname : "Accounts", loc : "Pune"},
    {deptno : 70,  dname : "Marketing", loc : "Hyd"},
  
   ];
   addDept(deptObj:any)
  {
   
    this.depts.push(deptObj);
    
  }
    public  removeDept(dno: number)
    {
       var index =  this.depts.findIndex((x:any) => x.deptno == dno);
       this.depts.splice(index, 1);
    }

}
